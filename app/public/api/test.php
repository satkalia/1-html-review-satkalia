<?php 

$num = 2;
$foo = $num . " be";
$bar = "or not" .$num. "be";

echo $foo . '' . $bar . "\n";

echo $num * $num * $num;

$arr = [
    "first" => "Tom",
    "second" => "Bipin",
    "best" => "DS"
];

$arr2 = [1,1,2,3,5,8];

if (true) {
    echo "\nTRUE\n";
}

while (true) {
    //This way it doesn't actually do anything
    break;
    // Put the break in otherwise you will have an infinite loop
}

echo "<ul>";
foreach($arr as $key=>$val) {

    echo "<li>".$key ." is ".$val."</li>";
// It is executing individual statements inside the if or while loops
;
;
;}
echo "</ul>";
// Doing a 'for loop' over a while loop, we want to go over an array

echo json_encode($arr, JSON_PRETTY_PRINT|JSON_THROW_ON_ERROR);

function printAndEncode( $val ) {
    echo json_encode(
        $val,
        JSON_PRETTY_PRINT|JSON_THROW_ON_ERROR
    );
}

//===
// Naming conventions

//JS & PHP: camelCase (every new word is capitalized and it makes the code easier to read)

//PascalCase
//snake_case (commonly used in Python)
//kebab-case (commonly used in CSS)