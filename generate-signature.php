<?php
// Set content type and attachment filename
header('Content-Type: text/plain');
header('Content-Disposition: attachment; filename="signature.txt"');

// Get form data
$name = $_POST['name'];
$jobTitle = $_POST['job-title'];
$phoneNumber = $_POST['phone-number'];
$emailAddress = $_POST['email-address'];
$address = $_POST['address'];

// Create signature text
$signature = "$name\n$jobTitle\n\nM: $phoneNumber | E: $emailAddress\n\nRoyal Wolf Australia, a United Rentals Company\n$address";

// Output signature text
echo $signature;
?> 