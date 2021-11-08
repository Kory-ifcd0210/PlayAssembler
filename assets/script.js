/*contador boton*/

var botonElement = document.getElementById("botonClick");
            var pElement = document.getElementById("areaContador");
            var count = 0;
            botonElement.onclick = function () {
                contador++;
                pElement.textContent = contador;
            }


/*cambio paginas*/


const sectionPages = document.querySelector(".pages");

const circulos = document.querySelectorAll('.circulo');
const tabsy = document.querySelector(".tabsy");
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');
const tabby = document.querySelectorAll(".tabby");

siguiente.addEventListener('click', () => {
    for(let i = 0; i < tabsy.childElementCount - 1; i++){
        if(tabsy.children[i].classList.contains("active")){
            addRemoveClass(tabsy.children, i, "active", true)
            addRemoveClass(tabby, i, "is-active", true)
            anterior.disabled = false;
            if(i+1 == tabsy.childElementCount-1) siguiente.disabled = true;
            return;
        }
    }
});

anterior.addEventListener('click', () => {
    for(let i = 0; i < tabsy.childElementCount; i++){
        if(tabsy.children[i].classList.contains("active")){
            addRemoveClass(tabsy.children, i, "active", false)
            addRemoveClass(tabby, i, "is-active", false)
            if(i <= 1) anterior.disabled = true;
            if(i-1 <= tabsy.childElementCount) siguiente.disabled = false;
            return;
        }
    }
});

function addRemoveClass(element, i, classToChange, isNext){
  if(isNext){
      element[i].classList.remove(classToChange);
      element[i+1].classList.add(classToChange);
  } else {
      element[i].classList.remove(classToChange);
      element[i-1].classList.add(classToChange);
  }
}
