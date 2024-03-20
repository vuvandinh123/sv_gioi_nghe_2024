<?php
class Untils
{

    public static function pagination($page = 1, $limit = 6)
    {
        $rows_per_page = $limit ?? 6;
        $current_page = $page ? $page : 1;
        $start_limit = ($current_page - 1) * $rows_per_page;
        return ["rows_per_page" => $rows_per_page, "current_page" => $current_page, "start_limit" => $start_limit];
    }
}
