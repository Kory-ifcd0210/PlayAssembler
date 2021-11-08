
//Pasar de botón Start a botón Click
var startGame1 = document.getElementById("starButton");
var clickGame1 = document.getElementById("botonClick");
startGame1.onclick = function () {
    startGame1.classList.add("hidden");
    clickGame1.classList.remove("hidden");
};

//boton que cuenta los clicks
var clickNum = document.getElementById("areaContador");
var count = 0;
var time;
clickGame1.addEventListener("click", game1);
function game1() {
    count++;
    clickNum.textContent = count;
    time = setTimeout(gameOver, 3000); //Temporizador juego
};

// función fin juego
var score= count;
var sectionGame= document.getElementById("game1");
var content=document.createTextNode("Game Over");
function gameOver(){
    clickGame1.removeEventListener("click", game1);
    sectionGame.appendChild(content);
    console.log(score + "gameOver");
}

/*cambio paginas*/

const sectionPages = document.querySelector(".pages");

const circulos = document.querySelectorAll(".circulo");
const tabsy = document.querySelector(".tabsy");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");
const tabby = document.querySelectorAll(".tabby");

siguiente.addEventListener("click", () => {
    for (let i = 0; i < tabsy.childElementCount - 1; i++) {
        if (tabsy.children[i].classList.contains("active")) {
            addRemoveClass(tabsy.children, i, "active", true);
            addRemoveClass(tabby, i, "is-active", true);
            anterior.disabled = false;
            if (i + 1 == tabsy.childElementCount - 1) siguiente.disabled = true;
            return;
        }
    }
});

anterior.addEventListener("click", () => {
    for (let i = 0; i < tabsy.childElementCount; i++) {
        if (tabsy.children[i].classList.contains("active")) {
            addRemoveClass(tabsy.children, i, "active", false);
            addRemoveClass(tabby, i, "is-active", false);
            if (i <= 1) anterior.disabled = true;
            if (i - 1 <= tabsy.childElementCount) siguiente.disabled = false;
            return;
        }
    }
});

function addRemoveClass(element, i, classToChange, isNext) {
    if (isNext) {
        element[i].classList.remove(classToChange);
        element[i + 1].classList.add(classToChange);
    } else {
        element[i].classList.remove(classToChange);
        element[i - 1].classList.add(classToChange);
    }
}