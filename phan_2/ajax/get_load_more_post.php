<?php
require_once("../includes/database.php");

// connect to database
$db = new Database();
$categoryId = $_GET["category_id"] ?? "";
$jsonData = $_GET['listId'] ?? null;
if (isset($_GET['listId'])) {
    $dataArray = json_decode($jsonData, true);
    $notInClause = implode(',', $dataArray);
}
$sql2 = "SELECT COUNT(p.id) AS total_products
        FROM categories c
        LEFT JOIN category_post cp ON c.id = cp.category_id
        LEFT JOIN posts p ON cp.post_id = p.id
        WHERE cp.category_id = $categoryId
        GROUP BY c.id";

$sql = "SELECT p.* FROM posts p JOIN category_post cp ON p.id = cp.post_id JOIN categories c ON cp.category_id = c.id WHERE cp.category_id = $categoryId AND cp.post_id NOT IN ($notInClause) GROUP BY p.id ORDER BY RAND() DESC LIMIT 3";
$data = array();

if (!empty($categoryId)) {
    $result =  $db->query($sql);
    $result2  =  $db->query($sql2);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }
    $newData = array(
        "total_products" => $result2->fetch_all(MYSQLI_ASSOC)[0]["total_products"],
        "data" => $data,
    );
    header("Content-Type: application/json");
    echo json_encode($newData);
}

// $db->getData($result);

// close connection
$db->close();
