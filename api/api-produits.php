<?php

// Initialisation de curl 
$curl = curl_init();

// URL à cibler
curl_setopt($curl, CURLOPT_URL, 'https://api.airtable.com/v0/appHPGSjJLGYA9Di1/Produits?Records&view=Grid%20view');

// Création du Bearer 
$auth = 'Authorization: Bearer key1nLuwu3ULNJGnA';

curl_setopt($curl, CURLOPT_HTTPHEADER, ['Content-Type : application/json', $auth]);

// Evite d'afficher les données dans la page 
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// Récupère les données dans $result
$result = curl_exec($curl);

// Ferme la session cURL
curl_close($curl);

// Transforme la données reçue en format JSON 
$result = json_decode($result);

// Boucle pour récupérer une donnée ciblée

foreach ($result->records as $record) {
    echo "<form class='modify-form' onsubmit = 'return false' id='$record->id'>
    <input id='name$record->id' type='text' value="
        . $record->fields->Name .
        "><input id='prix$record->id' value="
        . $record->fields->Prix . '€' .
        "><input id='description$record->id' type='text-area' value=" . $record->fields->Description . ">
    <input id='saveur$record->id' type='text' value=" . $record->fields->Saveur . ">" .
        "<button class=editButtons onclick=pathProduct('$record->id') >Save</button>
    " . "<button class=editButtons onclick=deleteProduct('$record->id') >X</button>" .
        "</form>";
};
?>
<script src="./modify.js"></script>