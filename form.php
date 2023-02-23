<?php
require 'header.php';
?>

<div class="container-form">
  <h2>Ajouter un produits</h1>
    <form class="form-add">
    <div class="form-group">
      <div class=" add-product-name">
        <label for="name" class="form-label">Nom du produit</label>
        <input class="add-product-input" type="text" placeholder="" id="name">
      </div>

      <div class="add-product-price">
        <label for="currency" class="form-label">Prix</label>
        <input class="add-product-price" type="text" placeholder="" id="price">
      </div>

      <div class="add-product-description">
        <label for="description" class="form-label">Description</label>
        <input class="add-product-description" type="text" placeholder="" id="description">
      </div>

      <div class="add-product-saveur">
        <label for="saveur" class="form-label">Quel saveur ?</label>
        <input class="add-product-saveur" type="text" placeholder="" id="saveur">
      </div>

      <div class="add-product-allergen">
        <label for="allergen" class="form-label">Quels sont les allergens ?</label>
        <input class="add-product-allergen" type="text" placeholder="" id="allergen">
      </div>

      <div class="add-product-quantity">
        <label for="quantity" class="form-label">Stock</label>
        <input class="add-product-quantity" type="text" placeholder="" id="quantity">
      </div>

      <div class="add-category">
        <label for="categories" class="form-label">Categorie</label>
        <select class="select-category" id="categories" name="categories" data-form-type="categories" id="category">
          <option value="recmhCaeXEzRJsf5w">Choisir</option>
          <option value="recmhCaeXEzRJsf5w">Pâtisseries</option>
          <option value="recmhCaeXEzRJsf5w">Viennoiseries</option>
          <option value="recmhCaeXEzRJsf5w">Boissons</option>
        </select>
      </div>

      <button class="add-product-button">
        <i class="add">AJOUTER</i>
      </button>
      </form>

    </div>
</div>