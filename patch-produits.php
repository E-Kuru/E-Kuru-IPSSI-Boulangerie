<?php 
    require 'header.php';
?>
<section id="AllItems" class="modify-section">
    <div class="modify-elements">
        <h2>Modifier un produit</h2>
            <div>
                <?php
                    require './api/api-produits.php'
                ?>
            </div>
    </div>
</section>