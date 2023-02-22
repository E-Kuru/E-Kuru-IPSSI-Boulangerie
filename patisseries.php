<?php 
    require 'header.php';
?>
    
<div id="AllItems">
    <div class="allProducts" id="section-patisserie">
        <h2>Nos Pâtisseries</h2>
        <div class="products" >
            <div class="product-text">
                <?php
                    require './api/produits-patisserie.php'
                ?>
            </div>
            <img src="./asset/cheesecake.png" alt="cheesecake image">
        </div>
        <a href="patch-produits.php"><button class="editButton">Modifier un produit </button></a>
    </div>
</div>