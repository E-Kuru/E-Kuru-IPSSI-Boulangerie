const api_key = "keyecDvsUvMX4MNZZ";
const url = `https://api.airtable.com/v0/appHPGSjJLGYA9Di1/Produits?&view=Grid%20view&api_key=${api_key}`;

// const productName = document.querySelector(".add-product-input");
// const productPrice = document.querySelector(".add-product-price");
// const productDescription = document.querySelector(".add-product-description");
// const productSaveur = document.querySelector(".add-product-saveur");
// const productAllergen = document.querySelector(".add-product-allergen");
// const productcategory = document.querySelector(".select-category");
// const productQuantity = document.querySelector("add-product-quantity");
// const addButton = document.querySelector(".add-product-button");

//State
const data = {
    records: [
        {
            id: "recZLFn0R26Z8bkC5",
            createdTime: "2023-02-20T10:52:07.000Z",
            fields: {
                Name: "Tartelette au citron",
                Prix: 5,
                Quantite: 5,
                Menu: ["recg9wYFqSkWfyRR7"],
                Allergene: "Lait, œufs, gluten, traces de fruits à coques",
                Saveur: "Citron",
                Categorie: ["recmhCaeXEzRJsf5w"],
                Description:
                    "La tartelette au citron est une tarte sucrée garnie de crème à base de citron. Elle ne comprend aucun fruit. La crème est un mélange d'œufs, de sucre,...",
            },
        },
    ],
};

// const data = {
//     records: [
//         {
//             "fields": {
//                 "Name": productName.value,
//                 "Description": productDescription.value,
//                 "Prix": productPrice.value,
//                 "Saveur": productSaveur.value,
//                 "Allergen": productAllergen.value,
//                 "Quantité": productQuantity.value,
//                 "Categorie": [],
//             }
//         }
//     ]
// };

console.log(data);

const getValue = () => {
    // Sélectionner l'élément input et récupérer sa valeur
    let inputName = document.getElementById("name").value;
    let inputPrice = document.getElementById("price").value;
    let inputDescription = document.getElementById("description").value;
    let inputSaveur = document.getElementById("saveur").value;
    let inputAllergen = document.getElementById("allergen").value;
    let inputQuantity = document.getElementById("quantity").value;
    let inputCategory = document.getElementById("category").value;
    // Afficher la valeur
    console.log(inputName);
}

// const addProduct = () => {
//     console.log(data);
// };
// function addProduct(e) {
//     e.preventDefault();
//     const newProduct = { name: todoInput.value, done: false, createdAt: new Date() };
//     state.data.push(newProduct);
//     productName.value = "";
//     renderProductsList();
// }

//Comportement
// Communication avec l'API
const post = () => {
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
};
