<?php

$filename = "./data.txt"; // File that we retrieve data from
$file = fopen($filename, "r"); // Open the file in read mode
$classes = array(); // Create an array to store the classes
$matchingClass = null; // Initialize a variable to store the matching class data

// Get the user input from the POST request
$input = "ACCT 100";
$searchText = strtolower(str_replace(' ', '', $input));
// Loop through each line in the file
while (!feof($file)) {
    $line = fgets($file); // Get the next line
    $data = explode("\t", $line); // Split the line by tab characters
    if (count($data) >= 4) {
        // Create an array for the class data
        $codecheck = preg_replace('/[\x00-\x1F\x7F-\xFF]/', '', $data[0]);
        $codecheck = strtolower(str_replace(' ', '', $codecheck));
        echo ("$codecheck \n");
        // Check if the class code matches the user input
        if ($codecheck === $searchText) {
            $matchingClass = $data; // Store the matching class data in a variable
            break; // Stop looping after finding the first match
        } // Add the class to the array
    }
}

fclose($file);

// Encode the matching class data as a JSON object and return it
if ($matchingClass !== null) {
    echo json_encode($matchingClass);
}

?>