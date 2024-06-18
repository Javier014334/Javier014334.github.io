
function addEventListeners() {
    const overlay = document.getElementById('overlay');
    var botonMenuAbrir = document.getElementById("boton-menu-abrir");
    var botonMenuCerrar = document.getElementById("boton-menu-cerrar");
    var menu = document.getElementById("menu");

    botonMenuAbrir.addEventListener("click", function () {
        menu.classList.add("abierto");
        botonMenuAbrir.style.display = "none";
        botonMenuCerrar.style.display = "block";
        overlay.style.background = 'rgba(0, 0, 0, 0.5)'; // Cambia la opacidad
    });

    botonMenuCerrar.addEventListener("click", function () {
        menu.classList.remove("abierto");
        botonMenuCerrar.style.display = "none";
        botonMenuAbrir.style.display = "block";
        overlay.style.background = 'rgba(0, 0, 0, 0)'; // Restaura la opacidad
    });
}

window.addEventListener("load", function() {
    addEventListeners();
});


