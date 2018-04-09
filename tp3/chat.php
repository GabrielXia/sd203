<?php
// création de la chaine à ajouter dans le fichier
$chaine = gethostbyname($_SERVER['REMOTE_ADDR']) ;
$chaine .=  " - " . $_GET['phrase'] . "\n";
$fp = fopen("texte.txt","a");
if ($fp == false) {
  echo "Probleme de permission: creez le fichier texte.txt et faites 'chmod a+w texte.txt'";
} else {
  fwrite($fp, $chaine);
  fclose($fp);
  echo "Ecriture reussie";
}
?>
