<?php
require_once("includes/database.php");
$db = new Database();

$sql = "SELECT * FROM categories";
$result = $db->query($sql);
$categories = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $categories[] = $row;
    }
}
$cateId = $_REQUEST['category'] ?? "";

?>

<aside class="border p-3">
    <div>
        <h4>Lọc</h4>
        <ul class="list-group">
            <?php foreach ($categories as $category) : ?>
                <li onclick="hello()" class="list-group-item">
                    <label style="cursor: pointer;" class="d-flex justify-content-between align-items-center" for="<?= "item" . $category['id']; ?>"><?= $category['name']; ?> <input  <?php if ($cateId == $category['id']) echo "checked"; ?> type="checkbox" value="<?= $category['id']; ?>" name="category[]" class="form-check-input" id="<?= "item" . $category['id']; ?>"></label>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</aside>
<script>
    const hello = () => {
        
    }
</script>