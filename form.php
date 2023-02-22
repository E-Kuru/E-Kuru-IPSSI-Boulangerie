<?php
require 'header.php';
?>

<div class="container-form">
  <h1>Ajouter un produits</h1>

  <form>
    <div class="form-group">
      <div class=" add-product-name">
        <label for="name" class="form-label">Nom du produit</label>
        <input class="add-product-input" type="text" placeholder="">
      </div>

      <div class="add-product-price">
        <label for="currency" class="form-label">Prix</label>
        <input class="add-product-price" type="text" placeholder="">
      </div>

      <div class="add-product-description">
        <label for="description" class="form-label">Description</label>
        <input class="add-product-description" type="text" placeholder="">
      </div>

      <div class="add-product-saveur">
        <label for="saveur" class="form-label">Quel saveur ?</label>
        <input class="add-product-saveur" type="text" placeholder="">
      </div>

      <div class="add-product-allergen">
        <label for="allergen" class="form-label">Quels sont les allergens ?</label>
        <input class="add-product-allergen" type="text" placeholder="">
      </div>

      <div class="add-product-quantity">
        <label for="quantity" class="form-label">Stock</label>
        <input class="add-product-quantity" type="text" placeholder="">
      </div>

      <div class="add-category">
        <label for="categories" class="form-label">Categorie</label>
        <select class="select-category" id="categories" name="categories" data-form-type="categories">
          <option>Choisir</option>
          <option>Pâtisseries</option>
          <option>Viennoiseries</option>
          <option>Boissons</option>
        </select>
      </div>

      <button class="add-product-button" type="submit" onclick>
        <i class="add">AJOUTER</i>
      </button>

    </div>
  </form>

</div>