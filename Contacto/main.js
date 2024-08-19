document.addEventListener("DOMContentLoaded", function() {
    let intervalID; // Variable para almacenar el ID del intervalo.

    function startAutoSlide() {
        if (intervalID) {
            clearInterval(intervalID); // Limpia el intervalo anterior si existe
        }
        intervalID = setInterval(() => {
            fntExecuteSlide('next');
        }, 7000);
    }

    // Iniciar automáticamente cuando se carga la página
    startAutoSlide();

    // Agregar eventos a las flechas para mover manualmente
    document.querySelector('.arrowPrev').addEventListener('click', () => {
        fntExecuteSlide('prev');
        startAutoSlide(); // Reiniciar la animación automática
    });

    document.querySelector('.arrowNext').addEventListener('click', () => {
        fntExecuteSlide('next');
        startAutoSlide(); // Reiniciar la animación automática
    });

    function fntExecuteSlide(side) {
        let parentTarget = document.getElementById('slider');
        let elements = parentTarget.getElementsByTagName('li');
        let curElement, nextElement;

        for (var i = 0; i < elements.length; i++) {
            if (elements[i].style.opacity == 1) {
                curElement = i;
                break;
            }
        }

        if (side == 'prev' || side == 'next') {
            if (side == "prev") {
                nextElement = (curElement == 0) ? elements.length - 1 : curElement - 1;
            } else {
                nextElement = (curElement == elements.length - 1) ? 0 : curElement + 1;
            }
        } else {
            nextElement = side;
            side = (curElement > nextElement) ? 'prev' : 'next';
        }

        // RESALTA LOS PUNTOS
        let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
        elementSel[curElement].classList.remove("item-select-slid");
        elementSel[nextElement].classList.add("item-select-slid");
        elements[curElement].style.opacity = 0;
        elements[curElement].style.zIndex = 0;
        elements[nextElement].style.opacity = 1;
        elements[nextElement].style.zIndex = 1;

        let imageUrl = `../imagenes/image${nextElement + 1}.jpg`;
        elements[nextElement].style.backgroundImage = `url(${imageUrl})`;
    }
});
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


