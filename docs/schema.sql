-- ══════════════════════════════════════════════════════════════════════════════
-- CAMFOMEDICS EVENTS DATABASE SCHEMA
-- Single shared database for all years (2024, 2025, 2026, ...)
-- All tables share event_year for complete isolation
-- ══════════════════════════════════════════════════════════════════════════════

-- ──────────────────────────────────────────────────────────────────────────────
-- 0. ADMIN & AUDIT TABLES (foundation for all operations)
-- ──────────────────────────────────────────────────────────────────────────────

CREATE TABLE users (
    id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email       VARCHAR(255) NOT NULL UNIQUE,
    password    VARCHAR(255) NOT NULL,
    first_name  VARCHAR(100) NOT NULL,
    last_name   VARCHAR(100) NOT NULL,
    role        ENUM('superadmin', 'editor', 'viewer', 'user') NOT NULL DEFAULT 'user',
    is_active   TINYINT(1) NOT NULL DEFAULT 1,
    last_login  DATETIME NULL,
    created_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE audit_log (
    id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id     INT UNSIGNED NULL,
    table_name  VARCHAR(50) NOT NULL,
    record_id   INT UNSIGNED NULL,
    action      ENUM('CREATE', 'UPDATE', 'DELETE') NOT NULL,
    old_values  JSON NULL,
    new_values  JSON NULL,
    ip_address  VARCHAR(45) NULL,
    user_agent  VARCHAR(500) NULL,
    created_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- ──────────────────────────────────────────────────────────────────────────────
-- 1. MASTER EVENTS TABLE
-- ──────────────────────────────────────────────────────────────────────────────

CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_year INT NOT NULL UNIQUE,
    -- Event metadata
    title VARCHAR(255) NOT NULL,                       -- e.g. "30. Deutsch-kamerunisches Ärztetreffen"
    slug VARCHAR(100) NOT NULL UNIQUE,                 -- URL-safe identifier
    edition INT,                                       -- e.g. 30 (for "30. Jahrestagung")
    event_type ENUM('jahrestagung', 'meet-the-experts', 'webinar', 'workshop', 'seminar') DEFAULT 'jahrestagung',
    excerpt TEXT,                                      -- Short description for event card
    description LONGTEXT,                              -- Full event description (hero section)
    -- Location & timing
    location_city VARCHAR(100),                        -- e.g. "Hannover"
    location_venue VARCHAR(255),                       -- e.g. "Stadthaus Laatzen"
    location_address VARCHAR(255),                     -- e.g. "Marktpl. 2, 30880 Laatzen"
    date_start DATE NOT NULL,
    date_end DATE NOT NULL,
    -- Display
    thumbnail_image VARCHAR(500),                      -- Event card background image URL
    hero_image VARCHAR(500),                           -- Full hero section image
    is_upcoming BOOLEAN DEFAULT FALSE,
    -- Admin
    menu_name VARCHAR(100),                            -- Navigation label
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_event_year (event_year),
    INDEX idx_slug (slug),
    INDEX idx_date_start (date_start)
) CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- ──────────────────────────────────────────────────────────────────────────────
-- 2. PROGRAM BLOCKS
-- ──────────────────────────────────────────────────────────────────────────────
-- Thematic blocks within an event (e.g., "BLOCK I: Präventionsmedizin")

CREATE TABLE program_blocks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_year INT NOT NULL,
    label VARCHAR(50),                                 -- e.g. "BLOCK I"
    title VARCHAR(255) NOT NULL,                       -- e.g. "Präventionsmedizin"
    description TEXT,                                  -- What this block covers
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_year) REFERENCES events(event_year),
    INDEX idx_event_year (event_year),
    INDEX idx_sort_order (sort_order)
) CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- ──────────────────────────────────────────────────────────────────────────────
-- 3. SPEAKERS (Global, reusable across years)
-- ──────────────────────────────────────────────────────────────────────────────
-- Single source of truth for speakers. Can appear in multiple events.

CREATE TABLE speakers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    initials VARCHAR(10),                              -- e.g. "PD Dr. med." (for display)
    role VARCHAR(255),                                 -- e.g. "Facharzt für Viszeral- und spezielle Viszeralchirurgie"
    bio LONGTEXT,                                      -- Full biography
    specialization VARCHAR(100),                       -- e.g. "Thoraxchirurgie" (for filtering/comparison)
    photo_url VARCHAR(500),
    colour VARCHAR(7),                                 -- Hex colour for card design (if needed)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_name (name)
) CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- ──────────────────────────────────────────────────────────────────────────────
-- 4. EVENT_SPEAKERS (Junction: links speakers to events)
-- ──────────────────────────────────────────────────────────────────────────────
-- Allows speaker X to appear in multiple years with different sort_order

CREATE TABLE event_speakers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_year INT NOT NULL,
    speaker_id INT NOT NULL,
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_year) REFERENCES events(event_year),
    FOREIGN KEY (speaker_id) REFERENCES speakers(id),
    UNIQUE KEY unique_event_speaker (event_year, speaker_id),
    INDEX idx_event_year (event_year),
    INDEX idx_speaker_id (speaker_id),
    INDEX idx_sort_order (sort_order)
) CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- ──────────────────────────────────────────────────────────────────────────────
-- 5. SCHEDULE (Hierarchical: Days → Blocks → Items)
-- ──────────────────────────────────────────────────────────────────────────────

CREATE TABLE schedule_days (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_year INT NOT NULL,
    day_date DATE NOT NULL,                            -- e.g. 2024-10-04 (Freitag)
    day_label VARCHAR(50),                             -- e.g. "Freitag, 04.10.2024"
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_year) REFERENCES events(event_year),
    INDEX idx_event_year (event_year),
    INDEX idx_sort_order (sort_order)
) CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE schedule_blocks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    day_id INT NOT NULL,
    block_label VARCHAR(50),                           -- e.g. "BLOCK I: Präventionsmedizin"
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (day_id) REFERENCES schedule_days(id),
    INDEX idx_day_id (day_id),
    INDEX idx_sort_order (sort_order)
) CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE schedule_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    block_id INT NOT NULL,
    time_start TIME,                                   -- e.g. 09:00
    time_end TIME,                                     -- e.g. 09:25 (optional)
    title VARCHAR(255) NOT NULL,                       -- e.g. "Kardio-Update - Endstation Herzinsuffizienz"
    speaker_id INT,                                    -- Foreign key to speakers (if speaker is in system)
    speaker_name VARCHAR(255),                         -- Fallback: plain text name (for external speakers not in DB)
    is_break BOOLEAN DEFAULT FALSE,                    -- TRUE for coffee breaks, lunch, etc.
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (block_id) REFERENCES schedule_blocks(id),
    FOREIGN KEY (speaker_id) REFERENCES speakers(id),
    INDEX idx_block_id (block_id),
    INDEX idx_speaker_id (speaker_id),
    INDEX idx_sort_order (sort_order)
) CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- ──────────────────────────────────────────────────────────────────────────────
-- 6. TICKETS (Pricing tiers)
-- ──────────────────────────────────────────────────────────────────────────────

CREATE TABLE tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_year INT NOT NULL,
    label VARCHAR(100),                                -- e.g. "Professional"
    audience VARCHAR(100),                             -- e.g. "Berufstätige" (German display)
    sub_label VARCHAR(100),                            -- e.g. "Conference only"
    price_eur DECIMAL(10, 2),                          -- e.g. 100.00
    currency VARCHAR(3) DEFAULT 'EUR',
    description TEXT,
    features JSON,                                     -- e.g. ["Conference access", "Lunch included"]
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_year) REFERENCES events(event_year),
    INDEX idx_event_year (event_year),
    INDEX idx_sort_order (sort_order)
) CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- ──────────────────────────────────────────────────────────────────────────────
-- 7. REGISTRATIONS (Attendee tracking, no payment data)
-- ──────────────────────────────────────────────────────────────────────────────
-- Track who registered; PayPal redirect handles payment.
-- Used for billing: COUNT(*) WHERE event_year = 2026 AND ticket_type = 'professional'

CREATE TABLE registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_year INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    ticket_type ENUM('professional', 'student', 'gala', 'other') DEFAULT 'professional',
    includes_gala BOOLEAN DEFAULT FALSE,                           -- Separate flag for gala add-on
    payment_method ENUM('paypal', 'sepa', 'bank_transfer', 'other') DEFAULT 'paypal',  -- Future-proof for multiple payment types
    payment_txn_id VARCHAR(20),                                    -- Transaction reference (PayPal/SEPA/etc)
    status ENUM('pending', 'interested', 'confirmed') DEFAULT 'pending',  -- No payment confirmation stored
    notes TEXT,                                        -- Internal notes from admin
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (event_year) REFERENCES events(event_year),
    INDEX idx_event_year (event_year),
    INDEX idx_email (email),
    INDEX idx_ticket_type (ticket_type),
    INDEX idx_payment_method (payment_method),
    INDEX idx_payment_txn_id (payment_txn_id),
    INDEX idx_created_at (created_at)
) CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- ──────────────────────────────────────────────────────────────────────────────
-- 8. SPONSORS (Independent per event)
-- ──────────────────────────────────────────────────────────────────────────────
-- Each event has its own sponsors. Name can repeat across years for tracking.

CREATE TABLE sponsors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_year INT NOT NULL,
    sponsor_name VARCHAR(255) NOT NULL,                -- Track repeats: GROUP BY sponsor_name
    logo_url VARCHAR(500),
    website_url VARCHAR(500),
    sponsor_type ENUM('main', 'gold', 'silver', 'bronze', 'partner') DEFAULT 'partner',
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_year) REFERENCES events(event_year),
    INDEX idx_event_year (event_year),
    INDEX idx_sponsor_name (sponsor_name),
    INDEX idx_sort_order (sort_order)
) CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- ──────────────────────────────────────────────────────────────────────────────
-- 9. GALLERIES (Photo albums per event)
-- ──────────────────────────────────────────────────────────────────────────────

CREATE TABLE galleries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_year INT NOT NULL,
    album VARCHAR(100) NOT NULL,                       -- e.g. "Symposium", "Abendveranstaltung", "Meet the Experts"
    image_url VARCHAR(500) NOT NULL,
    caption VARCHAR(255),
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_year) REFERENCES events(event_year),
    INDEX idx_event_year (event_year),
    INDEX idx_album (album),
    INDEX idx_sort_order (sort_order)
) CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- ──────────────────────────────────────────────────────────────────────────────
-- 10. VIDEOS (YouTube embeds per event)
-- ──────────────────────────────────────────────────────────────────────────────

CREATE TABLE videos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    event_year INT NOT NULL,
    youtube_video_id VARCHAR(11) NOT NULL,             -- e.g. "p5SLWnQL7DU" (from https://youtube.com/watch?v=...)
    title VARCHAR(255),
    description TEXT,
    thumbnail_url VARCHAR(500),                        -- https://img.youtube.com/vi/{id}/maxresdefault.jpg
    sort_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (event_year) REFERENCES events(event_year),
    INDEX idx_event_year (event_year),
    INDEX idx_sort_order (sort_order)
) CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- ══════════════════════════════════════════════════════════════════════════════
-- IMPLEMENTATION NOTES
-- ══════════════════════════════════════════════════════════════════════════════

-- ──────────────────────────────────────────────────────────────────────────────
-- SLUG GENERATION (PHP)
-- ──────────────────────────────────────────────────────────────────────────────
-- Auto-generate from title when inserting events. Example PHP:
--
--   function generateSlug($title) {
--       $slug = mb_strtolower(trim($title));
--       $slug = preg_replace('/[^\p{L}\p{N}\-]/u', '-', $slug);
--       $slug = preg_replace('/-+/', '-', $slug);
--       return trim($slug, '-');
--   }
--
--   $slug = generateSlug($title); // e.g. "30. Deutsch-kamerunisches Ärztetreffen" → "30-deutsch-kamerunisches-arztetreffen"
--
-- Store in events.slug and use for URL routing: /2026.camfomedics.com/veranstaltungen/{slug}/


-- ──────────────────────────────────────────────────────────────────────────────
-- REGISTRATION CONFIRMATION (Simple Version)
-- ──────────────────────────────────────────────────────────────────────────────
-- Current flow: No email stored before PayPal redirect (SIMPLE).
--
-- Workflow:
--   1. User fills form: name, email, ticket_type
--   2. Click "Pay via PayPal"
--   3. Redirect to PayPal with IPN callback
--   4. PayPal confirms payment → IPN calls your webhook
--   5. Webhook inserts into registrations table (status='confirmed')
--
-- Future enhancement (if needed):
--   - Add registrations.transaction_id to track PayPal confirmation
--   - Add registrations.paypal_email to verify payer
--   - Set up IPN endpoint to listen for payment confirmations


-- ──────────────────────────────────────────────────────────────────────────────
-- AUDIT LOGGING (PHP Pattern)
-- ──────────────────────────────────────────────────────────────────────────────
-- Log every CREATE/UPDATE/DELETE in the admin dashboard. Example:
--
--   function logAudit($db, $adminUserId, $tableName, $recordId, $action, $oldValues, $newValues, $eventYear) {
--       $stmt = $db->prepare('
--           INSERT INTO audit_log (admin_user_id, table_name, record_id, action, event_year, old_values, new_values, ip_address, user_agent)
--           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
--       ');
--       $stmt->execute([
--           $adminUserId,
--           $tableName,
--           $recordId,
--           $action,
--           $eventYear,
--           json_encode($oldValues),
--           json_encode($newValues),
--           $_SERVER['REMOTE_ADDR'],
--           $_SERVER['HTTP_USER_AGENT'] ?? ''
--       ]);
--   }
--
-- Usage:
--   // Before updating speaker
--   $oldSpeaker = $db->query("SELECT * FROM speakers WHERE id = $speakerId")->fetch();
--   
--   // Update
--   $db->prepare("UPDATE speakers SET name=?, bio=? WHERE id=?")->execute([$name, $bio, $speakerId]);
--   
--   // Log
--   logAudit($db, $adminId, 'speakers', $speakerId, 'UPDATE', $oldSpeaker, ['name' => $name, 'bio' => $bio], null);


-- ──────────────────────────────────────────────────────────────────────────────
-- ADMIN ROLES & PERMISSIONS (PHP Pattern)
-- ──────────────────────────────────────────────────────────────────────────────
-- superadmin: Can access/edit ALL years, manage users, view all audit logs
-- editor:     Can edit ONLY assigned years (stored in assigned_years JSON)
-- viewer:     Read-only access to assigned years
--
-- Middleware check (before every admin operation):
--
--   function checkPermission($admin, $eventYear) {
--       if ($admin['role'] === 'superadmin') return true;
--       if ($admin['role'] === 'viewer') return false; // No writes
--       if ($admin['role'] === 'editor') {
--           $assignedYears = json_decode($admin['assigned_years'], true) ?? [];
--           return in_array($eventYear, $assignedYears);
--       }
--       return false;
--   }


-- ══════════════════════════════════════════════════════════════════════════════
-- BILLING QUERIES (Examples)
-- ══════════════════════════════════════════════════════════════════════════════

-- Invoice for 2026 (count tickets sold):
-- SELECT 
--   COUNT(CASE WHEN ticket_type = 'professional' THEN 1 END) as professional_count,
--   COUNT(CASE WHEN ticket_type = 'student' THEN 1 END) as student_count,
--   COUNT(CASE WHEN includes_gala = TRUE THEN 1 END) as gala_addons
-- FROM registrations
-- WHERE event_year = 2026 AND status != 'cancelled';

-- Recurring sponsors (sponsors who return):
-- SELECT sponsor_name, COUNT(DISTINCT event_year) as times_participated
-- FROM sponsors
-- GROUP BY sponsor_name
-- HAVING times_participated > 1
-- ORDER BY times_participated DESC;

-- Speakers who speak multiple years (for comparison):
-- SELECT 
--   s.id, s.name, COUNT(DISTINCT es.event_year) as event_count, GROUP_CONCAT(es.event_year) as years
-- FROM speakers s
-- JOIN event_speakers es ON s.id = es.speaker_id
-- GROUP BY s.id
-- HAVING event_count > 1
-- ORDER BY event_count DESC;

-- ══════════════════════════════════════════════════════════════════════════════
-- END SCHEMA
-- ══════════════════════════════════════════════════════════════════════════════
