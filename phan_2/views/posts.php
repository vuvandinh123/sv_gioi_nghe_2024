<?php require_once("components/header.php"); ?>

<section style="padding-top: 100px;">
    <div class=" container bg-white p-3">
        <h1 class="text-center mb-5">Tất cả bài viết</h1>
        <div class="row">
            <div class="col-md-3">
                <div style="position: sticky;top: 100px;">
                    <?php require_once("components/sidebar.php"); ?>
                </div>
            </div>
            <div class="col-md-9">
                <div class="row" id="list_post">
                    <!-- CONTENT -->
                    <!-- ...... -->
                </div>
                <div class="d-flex justify-content-center mt-3">
                    <nav aria-label="Page navigation example">
                        <ul id="pagination" class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</section>
<?php $js_files = ['post.js'];  ?>
<?php require_once("components/footer.php"); ?>