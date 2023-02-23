const Key = "key1nLuwu3ULNJGnA"
const deleteProduct = (id) => {
    
        fetch(`https://api.airtable.com/v0/appHPGSjJLGYA9Di1/Produits?&api_key=${Key}&records[]=${id}`,{
            method : "DELETE",
            headers : {"Content-Type" : "application/json"},
        })
        .then((res) => {
            console.log(res);
        }) .catch((err) => {
            console.log("Error", err);
        })
    location.reload()
}

const pathProduct = (id) => {

    const name = document.getElementById(`name${id}`)
    const prix = document.getElementById(`prix${id}`)
    const description = document.getElementById(`description${id}`)
    const saveur = document.getElementById(`saveur${id}`)

    const values = {
        records: [
            {
              id: id,
              fields: {
                Name: name.value,
                Description: description.value,
                Prix: parseInt(prix.value),
                Saveur: saveur.value,
              }
            }]
    }

    fetch(`https://api.airtable.com/v0/appHPGSjJLGYA9Di1/Produits?&api_key=${Key}`, {
        method : "PATCH",
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(values)
    }) 
    .then((res) => {
        // res.json().then(data => {
        //     console.log(data)
        // })
        console.log(res);
    })
    .catch((err) => {
        console.log("Error", err.message);
    })
    location.reload()
}