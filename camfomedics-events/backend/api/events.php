<?php
require_once 'db.php';

header('Content-Type: application/json');
// with this:
$allowedOrigins = [
    'http://localhost:3000',
    'https://camfomedics.org',
    'https://www.camfomedics.org',
    'https://www.clenkasoft.com',
    'https://camfomedics.clenkasoft.com',
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins)) {
    header("Access-Control-Allow-Origin: $origin");
}

$db = getDB();

if (isset($_GET['slug'])) {
    $stmt = $db->prepare('SELECT * FROM events WHERE slug = ?');
    $stmt->execute([$_GET['slug']]);
    $event = $stmt->fetch();

    if (!$event) {
        http_response_code(404);
        echo json_encode(['error' => 'Event not found']);
        exit;
    }

    $event = toCamel($event);
    $event['programBlocks'] = camelAll(getProgramBlocks($db, $event['id']));
    $event['speakers']      = camelAll(getSpeakers($db, $event['id']));
    $event['schedule']      = getSchedule($db, $event['id']);
    $event['tickets']       = camelAll(getTickets($db, $event['id']));
    $event['sponsors']      = camelAll(getSponsors($db, $event['id']));
    $event['gallery']       = camelAll(getGallery($db, $event['id']));

    echo json_encode($event);

} else {
   $stmt = $db->query('SELECT id, slug, type, upcoming, title, date, year, location, thumbnail_image, excerpt, edition, menu_name, description FROM events ORDER BY date DESC');    echo json_encode(camelAll($stmt->fetchAll()));
}

// ── relations ─────────────────────────────────────────────────────────────

function getProgramBlocks(PDO $db, int $eventId): array {
    $stmt = $db->prepare('SELECT label, title, description FROM event_program_blocks WHERE event_id = ? ORDER BY sort_order');
    $stmt->execute([$eventId]);
    return $stmt->fetchAll();
}

function getSpeakers(PDO $db, int $eventId): array {
    $stmt = $db->prepare('SELECT name, initials, role, photo_url, colour FROM event_speakers WHERE event_id = ? ORDER BY sort_order');
    $stmt->execute([$eventId]);
    return $stmt->fetchAll();
}

function getSchedule(PDO $db, int $eventId): array {
    $days = $db->prepare('SELECT * FROM event_schedule_days WHERE event_id = ? ORDER BY sort_order');
    $days->execute([$eventId]);

    $result = [];
    foreach ($days->fetchAll() as $day) {
        $day = toCamel($day);

        $blocks = $db->prepare('SELECT * FROM event_schedule_blocks WHERE day_id = ? ORDER BY sort_order');
        $blocks->execute([$day['id']]);

        $dayBlocks = [];
        foreach ($blocks->fetchAll() as $block) {
            $block = toCamel($block);

            $items = $db->prepare('SELECT time, title, speaker, is_break FROM event_schedule_items WHERE block_id = ? ORDER BY sort_order');
            $items->execute([$block['id']]);

            $dayBlocks[] = [
                'blockLabel' => $block['blockLabel'],
                'items'      => camelAll($items->fetchAll()),
            ];
        }

        $result[] = [
            'date'   => $day['date'],
            'label'  => $day['label'],
            'blocks' => $dayBlocks,
        ];
    }
    return $result;
}

function getTickets(PDO $db, int $eventId): array {
    $stmt = $db->prepare('SELECT label, audience, sub_label, price, description, features, dim_feature FROM event_tickets WHERE event_id = ? ORDER BY sort_order');
    $stmt->execute([$eventId]);
    $rows = $stmt->fetchAll();
    foreach ($rows as &$row) {
        $row['features'] = json_decode($row['features'] ?? '[]', true);
    }
    return $rows;
}

function getSponsors(PDO $db, int $eventId): array {
    $stmt = $db->prepare('SELECT name, logo_url, url FROM event_sponsors WHERE event_id = ? ORDER BY sort_order');
    $stmt->execute([$eventId]);
    return $stmt->fetchAll();
}

function getGallery(PDO $db, int $eventId): array {
    $stmt = $db->prepare('SELECT image_url, caption, album FROM event_gallery WHERE event_id = ? ORDER BY album, sort_order');
    $stmt->execute([$eventId]);
    return $stmt->fetchAll();
}

// ── camelCase helpers ──────────────────────────────────────────────────────

function toCamel(array $row): array {
    $result = [];
    foreach ($row as $key => $value) {
        $camel = lcfirst(str_replace('_', '', ucwords($key, '_')));
        $result[$camel] = $value;
    }
    return $result;
}

function camelAll(array $rows): array {
    return array_map('toCamel', $rows);
}