const pages = {
    page1: {
        startGame: document.getElementById("starButton"),
        clickGame: document.getElementById("botonClick"),
        clickNum: document.getElementById("areaContador"),
        scoreResult: document.getElementById("scoreResult"),
    },
    page2: {
        startGame: document.getElementById("starButton2"),
        clickGame: document.getElementById("btntest"),
        clickNum: document.getElementById("areaContador2"),
        scoreResult: document.getElementById("scoreResult2"),
    },
};

//Objeto Gamer
const User = {
    name: "",
    score: 0,
};

//Introducir nuevo usuario
var goButton = document
    .getElementById("Go")
    .addEventListener("click", setObject);

var userName = document.getElementById("userName");

function setObject() {
    if (userName.value == "") {
        alert("Name must be filled out");
        return false;
    } else {
        User.name = userName.value;
        goscore();
        afterPag();
    }
}

function goscore() {
    if (JSON.parse(localStorage.getItem("objectInArray"))) {
        displayScore = JSON.parse(localStorage.getItem("objectInArray"));
    }
}

function handleStartGame(page) {
    page.startGame.classList.add("hidden");
    page.clickGame.classList.remove("hidden");
    //time = setTimeout(gameOver2, 3000); //Temporizador juego
    time = setTimeout(() => gameOver(page), 5000);
}

//Pasar de botón Start a botón Click game1
var startGame1 = document.getElementById("starButton");
var clickGame1 = document.getElementById("botonClick");

startGame1.onclick = function () {
    handleStartGame(pages.page1);
};

//boton que cuenta los clicks
var clickNum = document.getElementById("areaContador");
var count = 0;
var time;
clickGame1.addEventListener("click", () => contador(pages.page1));

function contador(page) {
    count++;
    page.clickNum.textContent = count;
}

var scoreResult = document.getElementById("scoreResult");
// función fin juego
function gameOver(page) {
    User.score = count; //guarda la variable de score del objeto
    page.scoreResult.value = User.score + " points";
    var gamers = document.getElementById("ulScore");
    gamers.innerHTML =
        gamers.innerHTML + "<li>" +    User.name+User.score+ "</li>";
        againagain();
    afterPag();
}

var scoreResult2 = document.getElementById("scoreResult2");

/*Funcion Play Again*/
var playAgain = document
    .getElementById("again")
    .addEventListener("click", () => again(pages.page1));

function again(page) {
    count = 0;
    page.clickNum.textContent = count;
    page.startGame.classList.remove("hidden");
    page.clickGame.classList.add("hidden");
    beforePag();
}

/*cambio paginas*/

const sectionPages = document.querySelector(".pages");
const circulos = document.querySelectorAll(".circulo");
const tabsy = document.querySelector(".tabsy");
const anterior = document.getElementById("anterior");
const siguiente = document
    .getElementById("siguiente")
    .addEventListener("click", afterPag);
const tabby = document.querySelectorAll(".tabby");

var nextLevel = document
    .getElementById("nextLevel")
    .addEventListener("click", afterPag);

function afterPag() {
    for (let i = 0; i < tabsy.childElementCount - 1; i++) {
        if (tabsy.children[i].classList.contains("active")) {
            addRemoveClass(tabsy.children, i, "active", true);
            addRemoveClass(tabby, i, "is-active", true);
            anterior.disabled = false;
            if (i + 1 == tabsy.childElementCount - 1) siguiente.disabled = true;
            return;
        }
    }
}

anterior.addEventListener("click", beforePag);

function beforePag() {
    for (let i = 0; i < tabsy.childElementCount; i++) {
        if (tabsy.children[i].classList.contains("active")) {
            addRemoveClass(tabsy.children, i, "active", false);
            addRemoveClass(tabby, i, "is-active", false);
            if (i <= 1) anterior.disabled = true;
            if (i - 1 <= tabsy.childElementCount) siguiente.disabled = false;
            return;
        }
    }
}

function addRemoveClass(element, i, classToChange, isNext) {
    if (isNext) {
        element[i].classList.remove(classToChange);
        element[i + 1].classList.add(classToChange);
    } else {
        element[i].classList.remove(classToChange);
        element[i - 1].classList.add(classToChange);
    }
}

/*game 2*/
var b = document.getElementById("btntest");

b.addEventListener("click", change);

function change() {
    var i = Math.floor(Math.random() * 500) + 1;
    var j = Math.floor(Math.random() * 500) + 1;
    b.style.left = i + "px";
    b.style.top = j + "px";
}

var startGame2 = document.getElementById("starButton2");
var clickGame2 = document.getElementById("btntest");

startGame2.onclick = function () {
    handleStartGame(pages.page2);
};

//boton que cuenta los clicks Game2
var clickNum2 = document.getElementById("areaContador2");
clickGame2.addEventListener("click", () => contador(pages.page2));

/*Funcion Play Again2*/
var playAgain2 = document
    .getElementById("again2")
    .addEventListener("click", () => again(pages.page2));

//localStorage
let displayScore = [];

let objStorage = window.localStorage;
function againagain() {
    displayScore.push(User);
    let objectInArray = JSON.stringify(displayScore);
    objStorage.setItem("objectinArray", objectInArray);
    console.log(User);
}