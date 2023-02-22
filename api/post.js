const api_key = "key1nLuwu3ULNJGnA";
const url = `https://api.airtable.com/v0/appHPGSjJLGYA9Di1/Produits&api_key=${api_key}`;


const productName = document.querySelector('.add-product-input');
const productPrice = document.querySelector('.add-product-price');
const productDescription = document.querySelector('.add-product-description');
const productSaveur = document.querySelector('.add-product-saveur');
const productAllergen = document.querySelector('.add-product-allergen');
const productcategory = document.querySelector('.select-category');
const productQuantity = document.querySelector('add-product-quantity');
const addButton = document.querySelector('.add-product-button');

addButton.addEventListener('onclick', addProduct);


//State
const data = {
    records: [
        {
            "fields": {
                "Name": "",
                "Description": "",
                "Prix": "",
                "Saveur": "",
                "Allergen": "",
                "Quantite": "",
                "Categorie": [],
            }
        }
    ]
};


// function addProduct(e) {
//     e.preventDefault();
//     const newProduct = { name: todoInput.value, done: false, createdAt: new Date() };
//     state.data.push(newProduct);
//     productName.value = "";
//     renderProductsList();
// }

//Comportement
// Communication avec l'API
fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data), // converti l'objet en JSON
})
    //Dès qu'on obtient une réponse
    .then((response) => {
        console.log(response);
        // Si 'ok' est à true (tout s'est bien passé)
        if (response.ok) {
            // On décode la réponse et on stock le résultat dans 'data'
            response.json().then((data) => {
                console.log(data);
            });
        }
        //Il y a un soucis mais l'API à répondu (bonne url)
        else {
            console.log("Erreur ${response.status}");
        }
    })

    // On a pas obtenu de réponse (mauvaise url en général)
    .catch((e) => {
        console.log(e);
    });

const GetInput = document.getElementById("");
