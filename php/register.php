<?php 
	header("content-type:text/html;charset=utf-8");
	$db = mysql_connect("localhost","root",'123456');
	mysql_select_db("qd1803",$db);
	mysql_set_charset('utf8');
	$uname = $_POST['username'];
	$upwd = $_POST['password'];
	$sql = "INSERT INTO `用户名`( `username`, `password`) VALUES ('$uname','$upwd')";
		$row = mysql_query($sql); 
	if($row){
		echo "<script>location.href='login.html';</script>";
	}else{
		echo "<script>location.href='register.html';</script>"; 
	}
 ?>