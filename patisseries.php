<?php 
    require 'header.php';
?>
    
<div id="AllItems">
    <div class="allProducts" id="section-patisserie">
        <h2>Nos Pâtisseries</h2>
        <div class="products" >
            <?php
                require './api/produits-patisserie.php'
            ?>
        </div>
    </div>
</div>