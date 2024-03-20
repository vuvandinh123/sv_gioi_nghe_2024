<?php
require_once("../includes/database.php");
$db = new Database();
$id = $_GET['id'] ?? "";
$user_ip = $_SERVER['REMOTE_ADDR'];
$result2 = $db->query("SELECT * FROM address_ip WHERE ip = '$user_ip' AND post_id = $id");
if ($result2->num_rows == 0) {
    $sqlinsert = "INSERT INTO address_ip (ip, post_id) VALUES ('$user_ip', $id)";
    $db->query($sqlinsert);
    // caapj nhat luot thich
    $sql = "UPDATE posts SET likes = likes + 1 WHERE id = $id";
    $result = $db->query($sql);
    $resultLike =  $db->query("SELECT likes FROM posts WHERE id = $id");
    $resultLikeNew = $resultLike->fetch_assoc();
    header("Content-Type: application/json");
    echo json_encode($resultLikeNew['likes']);
}else{
    header("Content-Type: application/json");
    echo json_encode(false);
}
