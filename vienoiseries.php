<?php 
    require 'header.php';
?>
    
<div id="AllItems">
    <div class="allProducts">
        <h2>Nos Vienoiseries</h2>
        <div class="products">
            <?php
                require './api/produits-vienoiserie.php'
            ?>
        </div>
    </div>
</div>