<footer>
    footer
</footer>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="./public/bootstrap/js/bootstrap.bundle.min.js"></script>
<script>
    // create a header fixed element when scroll to top 50px
    document.getElementById("header").style.backgroundColor = "#119C7C"
    // window.onscroll = function() {
    //     if (window.pageYOffset > 100) {
    //         document.getElementById("header").style.backgroundColor = "#119C7C"
    //     } else {
    //         document.getElementById("header").style.backgroundColor = "transparent"
    //     }
    // }
</script>
<?php
if (isset($js_files) && is_array($js_files)) {
    foreach ($js_files as $file) {
        echo '<script type="module" src="public/js/' . $file . '" type="text/javascript"></script>';
    }
}
?>