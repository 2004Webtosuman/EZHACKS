<?php
try{
    $server="localhost";
$username="root";
$password="";
$database="contactdb";


$conn=mysqli_connect($server,$username,$password,$database);
if(!$conn){
    die("connection fail".mysqli_connect_error());
}
else{
    echo "<div class='message'>connection sucessfull</div>";
}

    $uname=$_POST['username'];
    $phone=$_POST['phone'];
    $email=$_POST['email'];
    $review=$_POST['review'];

if(empty($uname)||empty($phone)||empty($email)||empty($review)){
   throw new Exception("invalid input");
}

$sql="INSERT INTO `contacts`(`username`, `phone`,`email`, `review`)
 VALUES ('$uname','$phone','$email','$review')";
 $result=mysqli_query($conn,$sql);
 if($result){
     echo "<br>"."<div class='message'>Data inserted sucessfully</>";
    }
}
catch(Exception $e){
    echo "Error:".$e->getMessage();
}
?>