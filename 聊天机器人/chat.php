<?php
   
   $message=$_POST['message'];
   

   switch ($message) {
   	case '你好':
   		$helloArr=array(
   			'你也好，亲'
   		);

   		$randomKey=array_rand($helloArr,1);
   		echo $helloArr[$randomKey];
   		break;

   	case 'qq':
   	
   	 $qqArr=array(
   	 	'3315521773'
   	 );
   	 $randomKey=array_rand($qqArr,1);
   		echo $qqArr[$randomKey];
   		break;

   		case '游戏':
   		$gameArr=array(
   			'www.4399.com',
   			'www.7k7k.com'
   		);
   			 $randomKey=array_rand($gameArr,1);
   		echo $gameArr[$randomKey];
   		break;

   	
   	default:
   		$freeArr=array(
   			'亲，木有这些东西',
   			'sorry,这些不存在的',
   			'不要为难我赵日天'
   		);
   		$randomKey=array_rand($freeArr,1);
   		echo $freeArr[$randomKey];
   		break;
   }



?>