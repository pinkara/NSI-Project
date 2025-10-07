<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
?><!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Formulaire</title>
</head>
<body>
  <div class="card" role="main">
    <h1>Vos informations</h1>
    <form>
       <fieldset>
          <p>
            <input type="text" name="Votre sexe" id="size_1" value="small" />
            <label for="size_1">Petite</label>
          </p>
          <p>
            <input type="date" name="Votre date de naissance" id="size_1" value="small" />
          </p>
          <p>
            <input type="text" name="Votre département" id="size_1" value="small" />
          </p>
        </fieldset>


    
    <button id="acceptBtn">Envoyer</button>
    <div id="status" class="small"></div>
    <pre id="preview" style="display:none"></pre>
  </div>
