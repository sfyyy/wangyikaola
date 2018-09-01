<?php 
	header("content-type:text/html;charset=utf-8");
	$db = mysql_connect("localhost","root",'123456');
	mysql_select_db("qd1803",$db);
	mysql_query("set names utf-8");
	$uname = $_POST['username'];
	$upwd = $_POST['password'];
	$sql = "SELECT * FROM `用户名` WHERE username='$uname'";
	$set = mysql_query($sql); 
	$arr = mysql_fetch_array($set);
	if($arr['username'] == $uname){
		if($arr['password'] == $upwd){
			echo "<script>alert('登录成功！');location.href='http://www.baidu.com';</script>";
		}else{
			echo "<script>alert('密码错误！');location.href='login.html';</script>";
		}
	}else{
		echo "<script>alert('用户名不存在！');location.href='login.html';</script>";
	}

 ?>