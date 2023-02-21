<?php 
    require 'header.php';
?>
    
<div id="AllItems">
    <div class="allProducts" id="section-boisson">
        <h2>Nos Boissons</h2>
        <div class="products">
            <div class="product-text">
                <?php
                    require './api/produits-boisson.php'
                ?>
            </div>
            <img src="./asset/soda.png" alt="logo-boisson">
        </div>
    </div>
</div>