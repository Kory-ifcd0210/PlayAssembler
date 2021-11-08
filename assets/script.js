
//Pasar de botón Start a botón Click
var startGame1 = document.getElementById("starButton");
var clickGame1 = document.getElementById("botonClick");
startGame1.onclick = function () {
    startGame1.classList.add("hidden");
    clickGame1.classList.remove("hidden");
    time = setTimeout(gameOver, 3000); //Temporizador juego
};

//boton que cuenta los clicks
var clickNum = document.getElementById("areaContador");
var count = 0;
var time;
clickGame1.addEventListener("click", game1);

function game1() {
    count++;
    clickNum.textContent = count;
    console.log(count);
};

// función fin juego
var containerLeft= document.getElementById("containerLeft");
var sectionGame= document.getElementById("game1");
function gameOver(){
    var score= count; //guarda la variable de score
    clickGame1.removeEventListener("click", game1); //el boton click deja de funcionar

    //creación de nuevos elementos HTML para pantalla de Game Over
    containerLeft.remove();
    var newContainerLeft= document.createElement("div");
    var newP=document.createElement("p");
    var newP2=document.createElement("p");
    var content=document.createTextNode("Game Over");
    var contentScore= document.createTextNode("Your Score: " + score + " clicks");
    sectionGame.prepend(newContainerLeft);
    newContainerLeft.setAttribute("id","areaContador");
    newContainerLeft.classList.add("col-left");
    newContainerLeft.appendChild(newP);
    newContainerLeft.appendChild(newP2);
    newP.appendChild(content, contentScore);
    newP2.appendChild(contentScore);
    console.log(contentScore);
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

/*game 2*/ 


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