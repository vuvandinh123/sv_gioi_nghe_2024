<?php
require_once("../includes/database.php");

// connect to database
$db = new Database();

$jsonData = json_decode($_GET['listId'] ?? [], true);
if (count($jsonData) > 0) {
    $listCate = implode(',', $jsonData);
    $sql = "SELECT p.*
        FROM posts p
        JOIN category_post cp ON p.id = cp.post_id  
        WHERE cp.category_id IN ($listCate) 
        GROUP BY p.id
        ORDER BY p.id DESC";
} else {
    $sql = "SELECT p.*
    FROM posts p
    JOIN category_post cp ON p.id = cp.post_id  
    GROUP BY p.id
    ORDER BY p.id DESC LIMIT 6";
}

$result =  $db->query($sql);
$db->getData($result);

// close connection
$db->close();
