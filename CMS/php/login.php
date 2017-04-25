<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: X-Requested-With,X_Requested_With');
class Goods{
    public $uid;
    public $username;
    public $password;
    public $name;

}
require 'index.php';

$con->query("set names utf8");

$sql = "select * from admin";
$result = $con->query($sql);
if($result->num_rows > 0){

    $arr = array();
    while($row = $result->fetch_assoc()){
        $goods = new Goods();
        $goods->uid = $row["uid"];
        $goods->username = $row["username"];
        $goods->password = $row["password"];
        $goods->name = $row["name"];


        array_push($arr, $goods);
    }


    echo json_encode($arr);
}
else {
    echo "没有数据";
}

$con->close();

 ?>