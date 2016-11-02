<?php

$mysql = new mysqli("localhost","root","","ym");
if ($mysql->connect_errno) {
   die($mysql->connect_errno);
};
$mysql->query("set names utf8");
$sqlstr = "select * from hospital";
$result = $mysql->query($sqlstr);
$myarr = array();
while ($record = $result->fetch_assoc()) {
   array_push($myarr,$record);
};
$a = json_encode($myarr);
echo $a;

 ?>
