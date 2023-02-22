<?php 
    require 'header.php';
?>
    
<div id="AllItems">
    <div class="allProducts" id="section-viennoiserie">
        <h2>Nos Viennoiseries</h2>
        <div class="products">
            <div class="product-text">
                <?php
                    require './api/produits-vienoiserie.php'
                ?>
            </div>
            <img src="./asset/croissant.png" alt="image croissant">
        </div>
        <a href="patch-produits.php"><button class="editButton">Modifier un produit </button></a>
    </div>
</div>