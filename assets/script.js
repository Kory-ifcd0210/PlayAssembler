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


window.onload =chargeData;

function chargeData(){
    let objStorage = window.localStorage;
    var data=objStorage.getItem('objectinArray');
    if (data==null){
        return;
    }
    var dataFormated=JSON.parse(data);
    var gamers = document.getElementById("ulScore");
    gamers.innerHTML = "";
    dataFormated.sort(function(a,b){
        return b.score-a.score;
    });

    lengthy();

    for(var i in dataFormated)
    {
        gamers.innerHTML =
        gamers.innerHTML + "<li>" +dataFormated[i].name   +" - "+dataFormated[i].score+ "</li>";
        if(displayScore.filter(x=> x.name==dataFormated[i].name && x.score==dataFormated[i].score).length==0){
            displayScore.push(dataFormated[i]);
        }
    }
}

function lengthy (){
    if(displayScore.length>15){
        displayScore.pop();
    }
}


//localStorage
let displayScore = [];

let objStorage = window.localStorage;

function againagain() {
    if(displayScore.filter(x=> x.name ==User.name && x.score == User.score).length <1)
    {
        displayScore.push(User);
        displayScore.sort(function(a,b){
            return b.score-a.score;
        });
        lengthy();
    }
    let objectInArray = JSON.stringify(displayScore);
    objStorage.setItem("objectinArray", objectInArray);
    console.log(User);
    chargeData();
}


//Introducir nuevo usuario
var goButton = document
    .getElementById("Go")
    .addEventListener("click", setObject);

var userName = document.getElementById("userName");
var divScore= document.getElementById("currentPlayer");

var divScore= document.getElementById("currentPlayer");



function setObject() {
    if (userName.value == "") {
        let errorMesage= document.getElementById("errorMesage");
        errorMesage.innerHTML="Name must be filled out";
    } else {
        User.name = userName.value;
        goscore();
        afterPag();
        divScore.innerHTML="<p>" + "Current Player : "+ User.name + "<p>";
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
    time = setTimeout(() => gameOver(page), 10000);
}

//Pasar de bot??n Start a bot??n Click game1
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
// funci??n fin juego
function gameOver(page) {
    User.score = count; //guarda la variable de score del objeto
    page.scoreResult.value = User.score + " points";
        againagain();
    afterPag();
}

var scoreResult2 = document.getElementById("scoreResult2");

/*Funcion Play Again*/
// var playAgain = document
//     .getElementById("again")
//     .addEventListener("click", () => again(pages.page1));

// function again(page) {
//     count = 0;
//     page.clickNum.textContent = count;
//     page.startGame.classList.remove("hidden");
//     page.clickGame.classList.add("hidden");
//     beforePag();
// }

/*cambio paginas*/

const sectionPages = document.querySelector(".pages");
const circulos = document.querySelectorAll(".circulo");
const tabsy = document.querySelector(".tabsy");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");

    siguiente.addEventListener("click", afterPag);
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
    var z = Math.floor(Math.random() * 100) + 1;
    var k = Math.floor(Math.random() * 100) + 1;
    b.style.height = z + "px";
    b.style.width = k + "%";
}

var startGame2 = document.getElementById("starButton2");
var clickGame2 = document.getElementById("btntest");

startGame2.onclick = function () {
    handleStartGame(pages.page2);
};

//boton que cuenta los clicks Game2
var clickNum2 = document.getElementById("areaContador2");
clickGame2.addEventListener("click", () => contador(pages.page2));


//boton exit
var Exit= document.getElementById("exit").addEventListener("click", exit);
var Exit= document.getElementById("againexit").addEventListener("click", exit);

function exit(){
    window.location.reload();
}
