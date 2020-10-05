//  URL  de la APi

let API = ""
let pkmNumber = ""

const btnBuscar = document.getElementById('btnBuscar')


//  Obtener resultado de API


btnBuscar.addEventListener('click', () => {
    let pkmNumber = document.getElementById('inputPkmn').value
    pkmNumber = pkmNumber.split(" ")


    if (pkmNumber != "") {
        pkmNumber.forEach((pk) => {
            console.log(pk);
            API += "https://pokeapi.co/api/v2/pokemon/" + pk;
            getData(API);
            console.log(API)
            API = "";
        })
    }
})


const getData = (api) => {
    let html = "";

    document.getElementById("tarjetaPokemon").innerHTML = "";
    return fetch(api)
        .then((response) => response.json())
        .then((json) => {
            llenarDatos(json, html);
        })
        .catch((error) => {
            console.log("Error :", error)
        })
}

/* const getData = (api) => {
    return fetch(api)
        .then((response) => response.json())
        .then((json) => {
            llenarDatos(json), paginacion(json.info);
        })
        .catch((error) => {
            console.log("Error :", error)
        })
} */

const llenarDatos = (data,html) => {
    console.log(data)

    let typeP = ""
    data.types.forEach(tPkm => {
        typeP += tPkm.type.name + " ";
        console.log(tPkm);

    });
    console.log(typeP)

    html += '<div class="col-2 mx-2 my-3 ">';
    html += '<div class="card myCard p-2 shadow" style="width: 12rem; ">';
    html += `<img src="${data.sprites.other.dream_world.front_default}" class="card-img-top img-thumbnail">`
    html += `<h5 class="card-title font-weight-bold">Nombre: <span class="font-weight-light text-uppercase"> ${data.name} </span></h5>`
    html += `<span class="card-text font-weight-bold">Id: </span><span class="font-weight-light ">${data.id}</span> `;
    html += `<span class="card-text font-weight-bold">Especie: </span><span class="font-weight-light text-capitalize"> ${typeP}</span>  `;
    html += `<span class="card-text font-weight-bold">Peso: </span><span class="font-weight-light"> ${data.weight} Kg </span>`;
    html += '</div>';
    html += '</div>';
    html += '</div>';

    document.getElementById('tarjetaPokemon').innerHTML += html;
}