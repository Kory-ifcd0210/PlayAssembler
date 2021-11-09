//Objeto Gamer
const User = {
    name: "",
    score: 0,
}

//Introducir nuevo usuario
var goButton = document.getElementById("Go").addEventListener("click", setObject);

var userName = document.getElementById("userName");

function setObject() {
    if (userName.value == "") {
        alert("Name must be filled out");
        return false;
    } else {
        User.name = userName.value;
        afterPag();
    }
}

//Pasar de botón Start a botón Click game1
var startGame1 = document.getElementById("starButton");
var clickGame1 = document.getElementById("botonClick");
startGame1.onclick = function () {
    startGame1.classList.add("hidden");
    clickGame1.classList.remove("hidden");
    time = setTimeout(gameOver, 2000); //Temporizador juego
};

//boton que cuenta los clicks
var clickNum = document.getElementById("areaContador");
var count = 0;
var time;
clickGame1.addEventListener("click", contador);

function contador() {
    count++;
    clickNum.textContent = count;
};

var scoreResult = document.querySelector(".scoreResult");
// función fin juego
function gameOver() {
    var score = count; //guarda la variable de score
    User.score = score; // añade el valor de score al parámetro del objeto
    scoreResult.value = User.score + " points";
    var gamers = document.getElementById("ulScore");
    gamers.innerHTML = gamers.innerHTML + "<li>" + User.name + " => " + User.score + "</li>";
    afterPag();
}

/*Funcion Play Again*/
var playAgain = document.getElementById("again").addEventListener("click", again);

function again() {
    count = 0;
    startGame1.classList.remove("hidden");
    clickGame1.classList.add("hidden");
    beforePag();
}

/*cambio paginas*/

const sectionPages = document.querySelector(".pages");
const circulos = document.querySelectorAll(".circulo");
const tabsy = document.querySelector(".tabsy");
const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente").addEventListener("click", afterPag);
const tabby = document.querySelectorAll(".tabby");

var nextLevel = document.getElementById("nextLevel").addEventListener("click", afterPag);



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
};

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
};

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
    startGame2.classList.add("hidden");
    clickGame2.classList.remove("hidden");
    time = setTimeout(gameOver, 10000); //Temporizador juego
};

//boton que cuenta los clicks Game2
var clickNum = document.getElementById("areaContador2");
clickGame2.addEventListener("click", contador);

/* game 3
function moveElmRand(elm){
    elm.style.position ='absolute';
    elm.style.top = Math.floor(Math.random()*90+5)+'%';
    elm.style.left = Math.floor(Math.random()*90+5)+'%';
}

   //get the #btn_test
   var btn_test = document.querySelector('#btn_test');

   //register to call moveElmRand() on mouseenter event to #btn_test
   btn_test.addEventListener('mouseenter', function(e){ moveElmRand(e.target);});

   //register click to #btn_test
   btn_test.addEventListener('click', function(e){ alert('You are Good.');});


   var startGame1 = document.getElementById("starButton");
   var clickGame1 = document.getElementById("botonClick");
   startGame1.onclick = function () {
       startGame1.classList.add("hidden");
       clickGame1.classList.remove("hidden");
       time = setTimeout(gameOver, 10000); //Temporizador juego
   };

 */