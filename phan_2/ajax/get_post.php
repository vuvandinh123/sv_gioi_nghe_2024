<?php
require_once("../includes/database.php");

// connect to database
$db = new Database();

$sql = "SELECT p.*,  c.name as category, c.id as category_id FROM posts p JOIN category_post cp ON p.id = cp.post_id JOIN categories c ON cp.category_id = c.id  GROUP BY p.id, c.name ,category_id ORDER BY RAND() DESC";

$result =  $db->query($sql);
$data = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $category_name = $row["category"];
        $category_id = $row["category_id"];
        $product = array(
            "id" => $row["id"],
            "title" => $row["title"],
            "content" => $row["content"],
            "thumbnail" => $row["thumbnail"],
            "category" => $row["category"],
        );

        // Kiểm tra xem danh mục đã tồn tại trong mảng $data hay chưa
        $category_exists = false;
        foreach ($data as &$category) {
            if ($category["category_id"] == $category_id) {
                $category_exists = true;
                // Kiểm tra số lượng sản phẩm trong mỗi danh mục
                if (count($category["data"]) >= 3) {
                    break; // Đã đủ 3 sản phẩm, thoát khỏi vòng lặp
                }
                $category["data"][] = $product;
                break;
            }
        }

        // Nếu danh mục chưa tồn tại, thêm mới vào mảng $data
        if (!$category_exists) {
            $data[] = array(
                "category" => $category_name,
                "category_id" => $category_id,
                "data" => array($product)
            );
        }
    }
    header("Content-Type: application/json");
    echo json_encode($data);
}

// $db->getData($result);

// close connection
$db->close();
