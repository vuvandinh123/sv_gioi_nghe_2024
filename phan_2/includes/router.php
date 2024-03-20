<?php
class Route
{
    public static function route_site($option = '', $id = '')
    {
        $path_view = "views/";
        if (!empty($option)) {
            $path_view .= $option;
            if (!empty($id)) {
                $path_view .= '-detail.php';
            } else {
                $path_view .= '.php';
            }
        } else {
            $path_view .= 'home.php';
        }
        if (file_exists($path_view)) {
            require_once($path_view);
        } else {
            require_once('views/site/404.php');
        }
    }
}
