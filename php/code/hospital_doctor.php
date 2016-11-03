<?php

   $ID = $_GET['id'];

   $mysql = new mysqli("localhost","root","","ym");
   if ($mysql->connect_errno) {
      die($mysql->connect_errno);
   };
   $mysql->query("set names utf8");
   $sqlstr = "select * from doctor where hospital_id='$ID'";
   $result = $mysql->query($sqlstr);
   $myarr = array();
   while ($record = $result->fetch_assoc()) {
      array_push($myarr,$record);
   };
   $a = json_encode($myarr);
   echo $a;
 ?>
