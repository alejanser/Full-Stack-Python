document.getElementById("mostrar").addEventListener("click", mostrarDatosAPI, true)
let contenido = document.querySelector("#contenido");
function mostrarDatosAPI() {
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => {
        console.log(data.results[0]);
        contenido.innerHTML = `
        <img src="${data.results[0].picture.large}" width="200px"/>
        <p>Nombre: ${data.results[0].name.last}</p>
        `;
    })
}




