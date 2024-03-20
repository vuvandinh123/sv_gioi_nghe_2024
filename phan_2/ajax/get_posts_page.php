<?php
require_once("../includes/database.php");
require_once("../includes/untils.php");
$db = new Database();

$page =  isset($_GET['page']) ? $_GET['page'] : 1;
$limit = isset($_GET['limit']) ? $_GET['limit'] : 6;
$pagination = Untils::pagination($page, $limit);

$count = $db->query("SELECT COUNT(id) as count FROM posts")->fetch_assoc();

$pagination['total_page'] = ceil($count['count'] / $pagination['rows_per_page']);

if (isset($_GET['listId'])) {
    $jsonData = json_decode($_GET['listId'], true);
} else {
    $jsonData = [];
}
$sql = "";
if (count($jsonData) == 0) {
    $sql .= "SELECT * FROM posts ORDER BY id DESC LIMIT $pagination[start_limit], $pagination[rows_per_page]";
} else {
    $impData = implode(',', $jsonData);
    $sql .= "SELECT p.* FROM posts p JOIN category_post cp ON p.id = cp.post_id WHERE cp.category_id IN ($impData) ORDER BY id DESC LIMIT $pagination[start_limit], $pagination[rows_per_page]";
}
$result = $db->query($sql);
$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}
$datanew = array(
    'data' => $data,
    'pagination' => $pagination
);
header("Content-Type: application/json");
echo json_encode($datanew);
$db->close();
