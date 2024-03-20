<?php

class Database
{
    private $host = "localhost";
    private $dbname = 'sv_gioinghe2';
    private $username = 'root';
    private $password = '06012003asVN@';
    private $conn;
    public function __construct()
    {
        $this->conn = new mysqli($this->host, $this->username, $this->password, $this->dbname);
        if ($this->conn->connect_error) {
            die("kết nối không thành công! ") . $this->conn->connect_error . "\n";
        }
    }
    public function query($sql)
    {
        return $this->conn->query($sql);
    }
    public function getData($result)
    {
        if ($result->num_rows > 0) {
            $data = [];
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
            header("Content-Type: application/json");
            echo json_encode($data);
        } else {
            header("Content-Type: application/json");
            echo json_encode([]);
        }
    }
    public function close()
    {
        $this->conn->close();
    }
}
