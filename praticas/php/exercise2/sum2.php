<?php

if (empty($_GET["num1"]) || empty($_GET["num2"]))
die('Numbers cannot be empty');

$result = $_GET["num1"] + $_GET["num2"];
echo "Result: " . $result;

echo "<a href=\"javascript:history.go(-1)\">Back to HTML</a>";

?>