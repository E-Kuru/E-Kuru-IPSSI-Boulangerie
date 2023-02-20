<?php

// Initialisation de curl 
$curl = curl_init();

// URL à cibler
curl_setopt($curl, CURLOPT_URL, 'https://api.airtable.com/v0/appHPGSjJLGYA9Di1/Produits?filterByFormula=SEARCH(%22Patisserie%22%2C+%7BCategorie%7D)');

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
foreach($result->records as $record){
    echo '<p>Nom: '. $record->fields->Name." Prix : ".$record->fields->Prix.' €</p>';
};

// var_dump($result)
?>