<?php 
    require 'header.php';
?>
    
<div id="AllItems">
    <div class="allProducts" id="section-viennoiserie">
        <h2>Nos Vienoiseries</h2>
        <div class="products">
            <?php
                require './api/produits-vienoiserie.php'
            ?>
        </div>
    </div>
</div>