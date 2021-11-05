
//Pasar de botón Start a botón Click
var startGame1 = document.getElementById("starButton");
var clickGame1= document.getElementById("botonClick");
        startGame1.onclick=function(){
            startGame1.classList.add("hidden");
            clickGame1.classList.remove("hidden");
        }

//boton que cuenta los clicks
var botonElement = document.getElementById("botonClick");
            var pElement = document.getElementById("areaContador");
            var count = 0;
            botonElement.onclick = function () {
                count++;
                pElement.textContent = count;
            }