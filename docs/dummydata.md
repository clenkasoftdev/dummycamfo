-- ══════════════════════════════════════════════════════════════════════════════
-- CAMFOMEDICS EVENTS — TEST DATA
-- ══════════════════════════════════════════════════════════════════════════════
-- THIS IS TEST DATA ONLY. Delete before production.
-- Includes: 1 event, 3 admin users, 8 speakers, schedule, tickets, 15 registrations,
--           3 sponsors, 12 gallery photos, 3 YouTube videos, sample audit logs

SET FOREIGN_KEY_CHECKS=0;


-- ──────────────────────────────────────────────────────────────────────────────
-- 1. ADMIN USERS (Test accounts)
-- ──────────────────────────────────────────────────────────────────────────────

INSERT INTO admin_users (username, email, password_hash, role, assigned_years, is_active, last_login) VALUES
-- Password hashes are PHP password_hash() with cost 12
-- All passwords are: "password123" (DO NOT USE IN PRODUCTION)
('superadmin', 'superadmin@camfomedics.local', '$2y$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5YmMxSUNMKBWC', 'superadmin', NULL, TRUE, NOW()),
('editor_2024', 'editor@camfomedics.local', '$2y$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5YmMxSUNMKBWC', 'editor', '[2024]', TRUE, NOW()),
('viewer_test', 'viewer@camfomedics.local', '$2y$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewY5YmMxSUNMKBWC', 'viewer', '[2024]', TRUE, NULL);


-- ──────────────────────────────────────────────────────────────────────────────
-- 2. MASTER EVENT (2024)
-- ──────────────────────────────────────────────────────────────────────────────

INSERT INTO events (
    event_year, title, slug, edition, event_type, excerpt, description,
    location_city, location_venue, location_address, date_start, date_end,
    thumbnail_image, hero_image, is_upcoming, menu_name
) VALUES (
    2024,
    '30. Deutsch-kamerunisches Ärztetreffen',
    '30-deutsch-kamerunisches-arztetreffen',
    30,
    'jahrestagung',
    'Das 30. Camfomedics Annual Meeting vereint Ärzte und Mediziner aus Deutschland und Afrika zu medizinischen Fachvorträgen und Networking.',
    'Hiermit laden wir Sie herzlich zu unserem 30. Camfomedics Annual Meeting (CAM) am 05.10.2024 in Hannover ein. Die Veranstaltung wird ein breites Spektrum an medizinischen Themen abdecken, die für die afrikanische Diaspora von großem Interesse sind. Das Ziel dieser Konferenz ist es, afrikanische Ärzte/innen aus Deutschland und Europa zusammenzubringen; Deutschland und Afrika zu vernetzen; eine Kommunikationsplattform für Studierende und Forscher/innen bereitzustellen und zur Verbesserung der Gesundheitsversorgung in unserem Heimatland beizutragen.',
    'Hannover',
    'Stadthaus Laatzen',
    'Marktpl. 2, 30880 Laatzen',
    '2024-10-04',
    '2024-10-05',
    'https://cloud-1de12d.becdn.net/media/iW=300&iH=400/thumbnail-2024.jpg',
    'https://cloud-1de12d.becdn.net/media/iW=1200&iH=600/hero-2024.jpg',
    FALSE,
    '30. Jahrestagung'
);


-- ──────────────────────────────────────────────────────────────────────────────
-- 3. PROGRAM BLOCKS (Thematic groupings)
-- ──────────────────────────────────────────────────────────────────────────────

INSERT INTO program_blocks (event_year, label, title, description, sort_order) VALUES
(2024, 'BLOCK I', 'Präventionsmedizin', 'Risikofaktoren, Ursachen und aktuelle Empfehlungen zur Gesundheitsprävention', 1),
(2024, 'BLOCK II', 'Infektiologie', 'Diagnostik und Therapie von Infektionskrankheiten', 2),
(2024, 'BLOCK III', 'Tropenmedizin', 'Systématische Therapie und chirurgische Ansätze', 3);


-- ──────────────────────────────────────────────────────────────────────────────
-- 4. SPEAKERS (Global, reusable across years)
-- ──────────────────────────────────────────────────────────────────────────────

INSERT INTO speakers (name, initials, role, bio, specialization, photo_url, colour) VALUES
('PD Dr. med. Stephen Fung', 'PD Dr. med.', 'Facharzt für Viszeral- und spezielle Viszeralchirurgie', 'Mit über 15 Jahren Erfahrung in der Viszeralchirurgie und Thoraxchirurgie. Leitet die Abteilung für Allgemein-, Viszeral- und Kinderchirurgie am Universitätsklinikum Düsseldorf.', 'Thoraxchirurgie', 'https://cloud-1de12d.becdn.net/media/iW=300&iH=300/stephen-fung.jpg', '#0c1a3c'),
('Dr. med. Stephanie Keymel', 'Dr. med.', 'Leitende Ärztin für Pneumologie', 'Spezialisiert auf Lungenerkrankungen und interventionelle Pneumologie. Leitet die Abteilung für Pneumologie am Universitätsklinikum Düsseldorf.', 'Pneumologie', 'https://cloud-1de12d.becdn.net/media/iW=300&iH=300/stephanie-keymel.jpg', '#0c1a3c'),
('Prof. Dr. med. Christian Karagiannidis', 'Prof. Dr. med.', 'Geschäftsführender Oberarzt', 'Experte für ECMO und intensive Lungenbetreuung. Leiter des ECMO Zentrums an den Kliniken Stadt Köln.', 'Intensivmedizin', 'https://cloud-1de12d.becdn.net/media/iW=300&iH=300/karagiannidis.jpg', '#0c1a3c'),
('Dr. med. Ivo Azeh', 'Dr. med.', 'Facharzt für Innere Medizin und Hämatoonkologie', 'Erfahrener Facharzt mit Schwerpunkt auf Krebstherapie und palliative Medizin. Tätig in der Onkologischen Tagesklinik Gelsenkirchen.', 'Onkologie', 'https://cloud-1de12d.becdn.net/media/iW=300&iH=300/ivo-azeh.jpg', '#0c1a3c'),
('Dr. med. Freddy-Joel Djiepmo Njanang', 'Dr. med.', 'Facharzt für Strahlentherapie', 'Spezialist für strahlentherapeutische Ansätze in der Lungenkrebstherapie. Leitet die Praxis für Strahlentherapie MVZ CDT in Köln.', 'Strahlentherapie', 'https://cloud-1de12d.becdn.net/media/iW=300&iH=300/freddy-djiepmo.jpg', '#0c1a3c'),
('Prof. Dr. med. Stepháne Collaud', 'Prof. Dr. med.', 'Chefarzt Thoraxchirurgie', 'Führender Thoraxchirurg mit Spezialgebiet Lungenchirurgie. Chefarzt der Klinik für Thoraxchirurgie am Klinikum Merheim Köln.', 'Thoraxchirurgie', 'https://cloud-1de12d.becdn.net/media/iW=300&iH=300/stephane-collaud.jpg', '#0c1a3c'),
('Dr. med. Sadrack Oumbe Tiam', 'Dr. med.', 'Facharzt für Innere Medizin und Kardiologie', 'Kardiologe mit umfassender Erfahrung in Herzinsuffizienz und Prävention. Betreibt Privatpraxis in Datteln.', 'Kardiologie', 'https://cloud-1de12d.becdn.net/media/iW=300&iH=300/sadrack-oumbe.jpg', '#0c1a3c'),
('Dr. med. Yvette Kibuh', 'Dr. med.', 'Fachärztin für Gynäkologie und Geburtshilfe', 'Expertin für Krebsprävention und Früherkennung, besonders HPV-Impfung. Leitet Frauenarztpraxis in Hamburg.', 'Gynäkologie', 'https://cloud-1de12d.becdn.net/media/iW=300&iH=300/yvette-kibuh.jpg', '#0c1a3c');


-- ──────────────────────────────────────────────────────────────────────────────
-- 5. EVENT_SPEAKERS (Link speakers to 2024 event)
-- ──────────────────────────────────────────────────────────────────────────────

INSERT INTO event_speakers (event_year, speaker_id, sort_order) VALUES
(2024, 1, 1),  -- Stephen Fung
(2024, 2, 2),  -- Stephanie Keymel
(2024, 3, 3),  -- Karagiannidis
(2024, 4, 4),  -- Ivo Azeh
(2024, 5, 5),  -- Freddy-Joel Djiepmo
(2024, 6, 6),  -- Stepháne Collaud
(2024, 7, 7),  -- Sadrack Oumbe
(2024, 8, 8);  -- Yvette Kibuh


-- ──────────────────────────────────────────────────────────────────────────────
-- 6. SCHEDULE STRUCTURE (Days → Blocks → Items)
-- ──────────────────────────────────────────────────────────────────────────────

-- Freitag, 04.10.2024 (Meet the Experts)
INSERT INTO schedule_days (event_year, day_date, day_label, sort_order) VALUES
(2024, '2024-10-04', 'Freitag, 04.10.2024', 1);

INSERT INTO schedule_blocks (day_id, block_label, sort_order) VALUES
(1, 'Meet The Experts', 1);

INSERT INTO schedule_items (block_id, time_start, time_end, title, speaker_id, is_break, sort_order) VALUES
(1, '14:00', '17:00', 'Offene Diskussion mit führenden Experten', NULL, FALSE, 1),
(1, '17:00', '18:00', 'Netzwerk und Austausch', NULL, TRUE, 2);

-- Samstag, 05.10.2024 (Main symposium)
INSERT INTO schedule_days (event_year, day_date, day_label, sort_order) VALUES
(2024, '2024-10-05', 'Samstag, 05.10.2024', 2);

INSERT INTO schedule_blocks (day_id, block_label, sort_order) VALUES
(2, 'BLOCK I: Präventionsmedizin', 1),
(2, 'BLOCK II: Infektiologie', 2),
(2, 'BLOCK III: Tropenmedizin', 3);

-- BLOCK I sessions
INSERT INTO schedule_items (block_id, time_start, time_end, title, speaker_id, is_break, sort_order) VALUES
(2, '08:45', '09:00', 'Begrüßung und Einführung', NULL, FALSE, 1),
(2, '09:00', '09:25', 'Kardio-Update - Endstation Herzinsuffizienz', 7, FALSE, 2),
(2, '09:25', '09:50', 'Zervixkarzinomprävention durch HPV-Impfung', 8, FALSE, 3),
(2, '09:50', '10:15', 'Prävention und Früherkennung von Krebs', 4, FALSE, 4),
(2, '10:15', '10:40', 'Impfung gegen Malaria', NULL, FALSE, 5),
(2, '10:40', '11:10', 'Kaffeepause', NULL, TRUE, 6);

-- BLOCK II sessions
INSERT INTO schedule_items (block_id, time_start, time_end, title, speaker_id, is_break, sort_order) VALUES
(3, '11:10', '11:35', 'Diagnostik und Therapie von Immundefekten', 4, FALSE, 1),
(3, '11:35', '12:00', 'Fetale und konnatale Infektionen', NULL, FALSE, 2),
(3, '12:00', '12:25', 'Postoperative Infektionen', 1, FALSE, 3),
(3, '12:25', '12:50', 'Infektionskrankheiten in der Pädiatrie', NULL, FALSE, 4),
(3, '12:50', '13:15', 'Zahnfleischinfektionen - Wurzelkanalbehandlung', NULL, FALSE, 5),
(3, '13:15', '14:15', 'Mittagspause', NULL, TRUE, 6);

-- BLOCK III sessions
INSERT INTO schedule_items (block_id, time_start, time_end, title, speaker_id, is_break, sort_order) VALUES
(4, '14:15', '14:40', 'PET-CT vs. Ganzkörper MRT im Staging des Lungenkarzinoms', 3, FALSE, 1),
(4, '14:40', '15:00', 'Systemische Therapie des Lungenkarzinoms', 4, FALSE, 2),
(4, '15:00', '15:30', 'Strahlentherapeutische Ansätze in der Lungenkrebstherapie', 5, FALSE, 3),
(4, '15:30', '16:00', 'Chirurgische Therapie des Early Stage Lung Cancer', 6, FALSE, 4),
(4, '16:00', '16:30', 'Kaffeepause', NULL, TRUE, 5),
(4, '16:30', '17:30', 'Camfomedics e.V. Mitgliederversammlung', NULL, FALSE, 6);


-- ──────────────────────────────────────────────────────────────────────────────
-- 7. TICKETS (Pricing tiers)
-- ──────────────────────────────────────────────────────────────────────────────

INSERT INTO tickets (event_year, label, audience, sub_label, price_eur, description, features, sort_order) VALUES
(2024, 'Professional', 'Berufstätige', 'Konferenz', 100.00, 'Zugang zu allen Vorträgen und Diskussionen', '["Konferenzzugang", "Mittagessen", "Kaffeepausen", "Unterlagen"]', 1),
(2024, 'Student', 'Studierende', 'Konferenz', 25.00, 'Vergünstigter Eintritt für Medizinstudenten', '["Konferenzzugang", "Mittagessen", "Kaffeepausen"]', 2),
(2024, 'Gala Dinner', 'Alle', 'Add-on', 50.00, 'Traditionelles Abendessen und Networking', '["Gala-Dinner", "Getränke", "Netzwerking"]', 3);


-- ──────────────────────────────────────────────────────────────────────────────
-- 8. REGISTRATIONS (Test data: various attendees)
-- ──────────────────────────────────────────────────────────────────────────────

INSERT INTO registrations (event_year, name, email, ticket_type, includes_gala, payment_method, status, notes) VALUES
(2024, 'Dr. med. Michael Schmidt', 'mschmidt@example.com', 'professional', TRUE, 'paypal', 'confirmed', 'VIP registration'),
(2024, 'Anna Müller', 'anna.mueller@example.com', 'professional', FALSE, 'paypal', 'confirmed', NULL),
(2024, 'Prof. Dr. Klaus Weber', 'kweber@uni-heidelberg.de', 'professional', TRUE, 'paypal', 'confirmed', NULL),
(2024, 'Lisa Hoffmann', 'lisa.hoffmann@example.com', 'student', TRUE, 'paypal', 'confirmed', NULL),
(2024, 'Thomas Bergmann', 'tbergmann@example.com', 'student', FALSE, 'paypal', 'pending', NULL),
(2024, 'Dr. med. Fatima Hassan', 'fhassan@example.com', 'professional', FALSE, 'paypal', 'confirmed', NULL),
(2024, 'Jörg Lange', 'joerg.lange@example.com', 'professional', TRUE, 'paypal', 'confirmed', NULL),
(2024, 'Maria Garcia', 'mgarcia@example.com', 'student', FALSE, 'paypal', 'interested', NULL),
(2024, 'Dr. med. Peter Müller', 'pmueller@example.com', 'professional', TRUE, 'paypal', 'confirmed', NULL),
(2024, 'Sandra Klein', 'sandra.klein@example.com', 'student', TRUE, 'paypal', 'confirmed', NULL),
(2024, 'Prof. Dr. Hans Neumann', 'hneumann@example.com', 'professional', TRUE, 'paypal', 'confirmed', NULL),
(2024, 'Petra Schmidt', 'petra.schmidt@example.com', 'professional', FALSE, 'paypal', 'confirmed', NULL),
(2024, 'David Johnson', 'djohnson@example.com', 'professional', FALSE, 'paypal', 'interested', NULL),
(2024, 'Eva Keller', 'eva.keller@example.com', 'student', FALSE, 'paypal', 'pending', NULL),
(2024, 'Robert Wagner', 'rwagner@example.com', 'professional', TRUE, 'paypal', 'confirmed', NULL);


-- ──────────────────────────────────────────────────────────────────────────────
-- 9. SPONSORS (Per-event, independent)
-- ──────────────────────────────────────────────────────────────────────────────

INSERT INTO sponsors (event_year, sponsor_name, logo_url, website_url, sponsor_type, sort_order) VALUES
(2024, 'Merck Sharp & Dohme', 'https://cloud-1de12d.becdn.net/media/logo/merck.png', 'https://www.msd.de', 'main', 1),
(2024, 'Gilead Sciences', 'https://cloud-1de12d.becdn.net/media/logo/gilead.png', 'https://www.gilead.com', 'gold', 2),
(2024, 'Roche Pharma', 'https://cloud-1de12d.becdn.net/media/logo/roche.png', 'https://www.roche.de', 'silver', 3);


-- ──────────────────────────────────────────────────────────────────────────────
-- 10. GALLERIES (Photos organized by album)
-- ──────────────────────────────────────────────────────────────────────────────

-- Symposium photos
INSERT INTO galleries (event_year, album, image_url, caption, sort_order) VALUES
(2024, 'Symposium', 'https://cloud-1de12d.becdn.net/media/gallery/2024/symposium-01.jpg', 'Eröffnungsveranstaltung mit Prof. Karagiannidis', 1),
(2024, 'Symposium', 'https://cloud-1de12d.becdn.net/media/gallery/2024/symposium-02.jpg', 'Vortrag zu Lungenkrebsprävention', 2),
(2024, 'Symposium', 'https://cloud-1de12d.becdn.net/media/gallery/2024/symposium-03.jpg', 'Publikum während Block II', 3),
(2024, 'Symposium', 'https://cloud-1de12d.becdn.net/media/gallery/2024/symposium-04.jpg', 'Panel Diskussion', 4);

-- Abendveranstaltung (Gala) photos
INSERT INTO galleries (event_year, album, image_url, caption, sort_order) VALUES
(2024, 'Abendveranstaltung', 'https://cloud-1de12d.becdn.net/media/gallery/2024/gala-01.jpg', 'Gala Dinner Empfang', 1),
(2024, 'Abendveranstaltung', 'https://cloud-1de12d.becdn.net/media/gallery/2024/gala-02.jpg', 'Networking und Tänze', 2),
(2024, 'Abendveranstaltung', 'https://cloud-1de12d.becdn.net/media/gallery/2024/gala-03.jpg', 'Gruppenfoto mit Organisatoren', 3),
(2024, 'Abendveranstaltung', 'https://cloud-1de12d.becdn.net/media/gallery/2024/gala-04.jpg', 'Tanzaufführung', 4);

-- Meet the Experts
INSERT INTO galleries (event_year, album, image_url, caption, sort_order) VALUES
(2024, 'Meet The Experts', 'https://cloud-1de12d.becdn.net/media/gallery/2024/experts-01.jpg', 'Experten-Panel in lockerer Atmosphäre', 1),
(2024, 'Meet The Experts', 'https://cloud-1de12d.becdn.net/media/gallery/2024/experts-02.jpg', 'Studierende stellen Fragen', 2),
(2024, 'Meet The Experts', 'https://cloud-1de12d.becdn.net/media/gallery/2024/experts-03.jpg', 'Networking mit Fachleuten', 3),
(2024, 'Meet The Experts', 'https://cloud-1de12d.becdn.net/media/gallery/2024/experts-04.jpg', 'Informeller Austausch', 4);


-- ──────────────────────────────────────────────────────────────────────────────
-- 11. VIDEOS (YouTube embeds)
-- ──────────────────────────────────────────────────────────────────────────────

INSERT INTO videos (event_year, youtube_video_id, title, description, thumbnail_url, sort_order) VALUES
(2024, 'p5SLWnQL7DU', 'Highlight Reel 2024', 'Zusammenfassung der besten Momente des 30. Camfomedics Annual Meeting', 'https://img.youtube.com/vi/p5SLWnQL7DU/maxresdefault.jpg', 1),
(2024, 'DpEuRh--ISg', 'Keynote Vortrag', 'Keynote-Adresse von Prof. Dr. Christian Karagiannidis', 'https://img.youtube.com/vi/DpEuRh--ISg/maxresdefault.jpg', 2),
(2024, 'dDvrMsYlSBI', 'Interview mit Organisatoren', 'Hinter den Kulissen: Interview mit den Veranstaltern', 'https://img.youtube.com/vi/dDvrMsYlSBI/maxresdefault.jpg', 3);


-- ──────────────────────────────────────────────────────────────────────────────
-- 12. AUDIT LOG (Sample entries showing activity)
-- ──────────────────────────────────────────────────────────────────────────────

INSERT INTO audit_log (admin_user_id, table_name, record_id, action, event_year, old_values, new_values, ip_address, user_agent) VALUES
(1, 'events', 1, 'CREATE', 2024, NULL, '{"title":"30. Deutsch-kamerunisches Ärztetreffen","slug":"30-deutsch-kamerunisches-arztetreffen"}', '192.168.1.100', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'),
(2, 'registrations', 1, 'CREATE', 2024, NULL, '{"name":"Dr. med. Michael Schmidt","email":"mschmidt@example.com","ticket_type":"professional"}', '192.168.1.101', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'),
(1, 'registrations', 3, 'UPDATE', 2024, '{"status":"pending"}', '{"status":"confirmed"}', '192.168.1.100', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'),
(1, 'speakers', 1, 'UPDATE', 2024, '{"bio":"Senior specialist"}', '{"bio":"Mit über 15 Jahren Erfahrung in der Viszeralchirurgie und Thoraxchirurgie..."}', '192.168.1.100', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'),
(2, 'sponsors', 1, 'CREATE', 2024, NULL, '{"sponsor_name":"Merck Sharp & Dohme","sponsor_type":"main"}', '192.168.1.101', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)');


-- ══════════════════════════════════════════════════════════════════════════════
-- RESTORE FOREIGN KEY CHECKS
SET FOREIGN_KEY_CHECKS=1;


-- ══════════════════════════════════════════════════════════════════════════════
-- VERIFICATION QUERIES (Run to test data integrity)
-- ══════════════════════════════════════════════════════════════════════════════

-- Verify event exists
-- SELECT * FROM events WHERE event_year = 2024;

-- Verify speakers linked to event
-- SELECT es.event_year, s.name, s.role 
-- FROM event_speakers es 
-- JOIN speakers s ON es.speaker_id = s.id 
-- WHERE es.event_year = 2024 
-- ORDER BY es.sort_order;

-- Verify schedule structure
-- SELECT 
--   sd.day_label,
--   sb.block_label,
--   si.time_start,
--   si.title,
--   s.name as speaker_name
-- FROM schedule_days sd
-- JOIN schedule_blocks sb ON sd.id = sb.day_id
-- JOIN schedule_items si ON sb.id = si.block_id
-- LEFT JOIN speakers s ON si.speaker_id = s.id
-- WHERE sd.event_year = 2024
-- ORDER BY sd.sort_order, sb.sort_order, si.sort_order;

-- Verify registrations count by type
-- SELECT ticket_type, COUNT(*) as count 
-- FROM registrations 
-- WHERE event_year = 2024 
-- GROUP BY ticket_type;

-- Verify gallery albums
-- SELECT DISTINCT album, COUNT(*) as photo_count 
-- FROM galleries 
-- WHERE event_year = 2024 
-- GROUP BY album;

-- Verify videos
-- SELECT youtube_video_id, title FROM videos WHERE event_year = 2024 ORDER BY sort_order;

-- ══════════════════════════════════════════════════════════════════════════════
-- TEST DATA INSERTION COMPLETE
-- ══════════════════════════════════════════════════════════════════════════════
-- 
-- Test Credentials:
-- ─────────────────
-- Admin accounts (password: password123 — DO NOT USE IN PRODUCTION):
--   superadmin / superadmin@camfomedics.local → Can access all years
--   editor_2024 / editor@camfomedics.local → Can only edit 2024
--   viewer_test / viewer@camfomedics.local → Read-only access
--
-- Test Event:
--   2024 Annual Meeting (30. Deutsch-kamerunisches Ärztetreffen)
--   Date: Oct 4-5, 2024 in Hannover
--   Location: Stadthaus Laatzen
--
-- Test Data Summary:
--   ✓ 1 event (2024)
--   ✓ 8 speakers (global, linked to event)
--   ✓ 2 days of schedule with 3 program blocks
--   ✓ 18 schedule items (talks + breaks)
--   ✓ 3 ticket types (Professional €100, Student €25, Gala +€50)
--   ✓ 15 test registrations (mixed statuses)
--   ✓ 3 sponsors (Merck, Gilead, Roche)
--   ✓ 12 gallery photos (4 albums: Symposium, Gala, Experts)
--   ✓ 3 YouTube videos
--   ✓ 5 audit log entries
--
-- ══════════════════════════════════════════════════════════════════════════════
