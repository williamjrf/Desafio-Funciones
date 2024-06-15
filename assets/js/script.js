
//se agrega parametro 'element' para recibir el objeto a pintar
//se agrega parametro 'color' para recibir el color a pintar, por defecto pintamos verde
function pintar(element, color = 'green') {
    element.style.backgroundColor = color;

    if (color === 'yellow') {
        element.style.cursor = 'default';
    } else {
        element.style.cursor = 'pointer';
    }
}

//declaramamos la constante 'ele' para obtener el elemento con id 'ele1'
const ele = document.getElementById("ele1");

//pintamos de verde el div por defecto
ele.style.backgroundColor = 'green';
ele.style.cursor = 'pointer';

//agregamos el evento 'click' al elemento 'ele' 
//llamamos a la funcion 'pintar' 
//pasamos los parametros 'ele' y 'yellow'
ele.addEventListener("click", () => pintar(ele, 'yellow'));
