<?php 
    require 'header.php';
?>
    
<div id="AllItems">
    <div class="allProducts">
        <h2>Nos Boissons</h2>
        <div class="products">
            <?php
                require './api/produits-boisson.php'
            ?>
        </div>
    </div>
</div>