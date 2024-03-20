<?php 
require_once('includes/router.php');

Route::route_site($_GET['option'] ?? "", $_GET['id'] ?? "");