const api_key = "keyecDvsUvMX4MNZZ";
const urlProduct = `https://api.airtable.com/v0/appHPGSjJLGYA9Di1/Produits?&view=Grid%20view&api_key=${api_key}`;
const urlCategory = `https://api.airtable.com/v0/appHPGSjJLGYA9Di1/Categories?&view=Grid%20view&api_key=${api_key}`;

const init = () => {
    const dataProduct = {
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

    const dataCategory = {
        records: [
            {
                fields: {
                    Name: "Patisserie",
                    Description: [
                        "rec8116cdd76088af",
                        "rec245db9343f55e8",
                        "rec4f3bade67ff565",
                    ],
                    Menus: ["recg9wYFqSkWfyRR7"],
                },
            },
        ],
    };

    const getCategory = () => {
        const idCategory = ocument.querySelector("form").elements;

        let dataCategory = {
            records: [
                {
                    fields: {
                        Name: idCategory.value,
                        Description: [idCategory.value],
                    },
                },
            ],
        };

        get(dataCategory);


    };

    console.log(getCategory);

    const getValue = (e) => {
        e.preventDefault();
        const inputs = document.querySelector("form").elements;

        let dataProduct = {
            records: [
                {
                    fields: {
                        Name: inputs[0].value,
                        Prix: parseFloat(inputs[1].value),
                        Description: inputs[2].value,
                        Saveur: inputs[3].value,
                        Allergene: inputs[4].value,
                        Quantite: parseInt(inputs[5].value),
                        Categorie: [inputs[6].value],
                    },
                },
            ],
        };
        post(dataProduct);
    };

    const button = document.querySelector(".add-product-button");

    button.addEventListener("click", (e) => getValue(e));

};

init();

const get = (dataCategory) => {
    fetch(urlCategory, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataCategory),
    })
        .then((response) => {
            console.log(response);

            response.json().then((dataCategory) => {
                console.log(dataCategory);
            });

            if (response.ok) {
                response.json().then((dataCategory) => {
                    console.log(dataCategory);
                });
            } else {
                console.log("Erreur ${response.status}");
            }
        })

        .catch((e) => {
            console.log(e);
        });
};

const post = (dataProduct) => {
    fetch(urlProduct, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataProduct),
    })
        .then((response) => {
            console.log(response);

            response.json().then((dataProduct) => {
                console.log(dataProduct);
                location.reload()
            });

            if (response.ok) {
                response.json().then((dataProduct) => {
                    console.log(dataProduct);
                });
            } else {
                console.log("Erreur ${response.status}");
            }
        })

        .catch((e) => {
            console.log(e);
        });

};