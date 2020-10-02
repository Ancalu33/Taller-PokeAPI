//  URL  de la APi

const API = "https://pokeapi.co/api/v2/pokemon/1"

//  Obtener resultado de API

const getData = (api) => {
    return fetch(api)
        .then((response) => response.json())
        .then((json) => {
            llenarDatos(json);
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

const llenarDatos = (data) => {
    console.log(data)
    let html = "";
    let type=data.types.forEach(element => {
        
    });
    html += '<div class="col-2 mx-2 my-3">';
    html += '<div class="card myCard p-2" style="width: 12rem;">';
    html += `<img src="${data.sprites.front_default}" class="card-img-top img-thumbnail">`
    html += `<h5 class="card-title">Nombre: ${data.name}</h5>`
     html += `<p class="card-text">Id: ${data.id}  </p>`;
    html += `<p class="card-text">Especie: ${data.}  </p>`;
    html += `<p class="card-text">Genero: ${pj.gender}  </p>`;
     html += '</div>';
    html += '</div>';
    html += '</div>';
    
    document.getElementById('tarjetaPokemon').innerHTML = html;
}


/* 

const llenarDatos = (data) => {
    let html = "";
    data.results.forEach((pj) => {
        html += '<div class="col-2 mx-2 my-3">';
        html += '<div class="card myCard p-2" style="width: 12rem;">';
        html += `<img src="${pj.image}" class="card-img-top img-thumbnail">`
        html += `<h5 class="card-title">Nombre: ${pj.name}</h5>`
        html += `<p class="card-text">Estado: ${pj.status}  </p>`;
        html += `<p class="card-text">Especie: ${pj.species}  </p>`;
        html += `<p class="card-text">Genero: ${pj.gender}  </p>`;
      
        html += '</div>';
        html += '</div>';
        html += '</div>';

    });
    document.getElementById('datosPersonajes').innerHTML = html;
} */

//    paginacion

const paginacion = (info) => {

    let prevDisabled = "";
    let nextDisabled = "";

    if (info.prev == null) {
        prevDisabled = "disabled";
    } else {
        prevDisabled = "";
    }

    if (info.next == null) {
        nextDisabled = "disabled";
    } else {
        nextDisabled = "";
    }


    let html = "";
    html += `<li class="page-item ${prevDisabled}"><a class="page-link" onclick="getData('${info.prev}')">Previous</a></li>`
    html += `<li class="page-item ${nextDisabled}"><a class="page-link" onclick="getData('${info.next}')">Next</a></li>`
    document.getElementById('paginacion').innerHTML = html;


}

getData(API);