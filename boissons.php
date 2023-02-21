<?php 
    require 'header.php';
?>
    
<div id="AllItems">
    <div class="allProducts" id="section-boisson">
        <h2>Nos Boissons</h2>
        <div class="products">
            <?php
                require './api/produits-boisson.php'
            ?>
        </div>
    </div>
</div>