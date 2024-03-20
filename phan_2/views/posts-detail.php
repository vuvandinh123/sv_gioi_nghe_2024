<?php require_once("components/header.php"); ?>
<?php
require_once("includes/database.php");
$db = new Database();
$id = $_GET['id'];
$sql = "SELECT * FROM posts WHERE id = $id";
$data = $db->query($sql)->fetch_assoc();
$countView = $data['views'] + rand(1,10);

$db->query("UPDATE posts SET views = $countView  WHERE id = $id");



$user_ip = $_SERVER['REMOTE_ADDR'];
$result2 = $db->query("SELECT * FROM address_ip WHERE ip = '$user_ip' AND post_id = $id");
$isLike = true;
if ($result2->num_rows == 0) {
    $isLike = false;
}
?>
<section style="padding-top: 100px;">
    <div class="container">
        <div class="row">
            <h3 class="text-center h1 py-3"><?= $data['title'] ?></h3>
            <div class="text-center d-flex justify-content-center align-items-center" style="color: gray;gap: 20px">
                <p><i class="fa-solid fa-calendar-days me-2"></i><?= date('d/m/Y H:i:s', strtotime($data['created_at'])); ?></p>
                <p><i class="fa-solid fa-eye me-2"></i> <?= $countView ?></p>
                <p id="like" class="py-2 " style="cursor: pointer"><i class="fa-solid fa-thumbs-up like-icon <?php if ($isLike) echo 'text-danger';?> me-2"></i> <span id="like-count"><?= $data['likes'] ?></span> <span><?php if ($isLike) echo "Đã thích"; ?></span></p>
            </div>
            <div class="col-md-12">
                <img style="width: 100%;" src="http://localhost/sv_gioi_nghe/phan_2/public/images/post/<?= $data['thumbnail'] ?>" alt="">
            </div>
            <div class="mt-3">
                <p class="text-justify lh-lg"><?= $data['content'] ?></p>
            </div>
        </div>
    </div>
</section>
<?php $js_files = ['postDetal.js'];  ?>
<?php require_once("components/footer.php"); ?>