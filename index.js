const clock = document.querySelector(".clock");
const dateTime = document.querySelector(".date-time");
/* Selecciono los elementos que voy a usar */

function currentTime() {
    /* declaro la funcion */
    let date = new Date();
    /* esta variable usa el new Date para tener la hora exacta de ese momento pero es estatica! osea no se actualiza */
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    /* todas estas agarran el valor del momento que date fue tomado por horas, minutos y segundos (todo sigue estatico) */
    let session = "AM";
    /* declaro la session para saber si es pm o am */

    if(hh > 12){
        session = "PM";
    }
    /* si la hora es mayor a 12 la session cambia a pm */
  
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    /*aca se busca solucionar el problema de que si es menor que 10 en todo, se muestra solo un numero ej: 9:4:6 en vez de 09:04:06 por eso se le agrega un 0 delante del numero*/
    let time = hh + ":" + mm + ":" + ss + " " + session;
    /* aca declaro el tiempo con su respectiva forma */
    clock.innerText = time;
    /*y lo imprimo en el elemento que tiene que estar*/
    const options = {
        weekday: "long",
        day:"numeric",
        month:"long",
        year:"numeric"
    }
    /* las opciones funcionan para el metodo de abajo, el date.toLocaleString imprime la fecha en numeros 04.06.2020, lo cual quiero que imprima en un string con su respectiva forma dentro del objecto options se declara como quiero que se imprima y lo paso como argumento en el date.toLocaleString */
    let timeofyear = date.toLocaleString("es-AR", options)
    dateTime.innerText = timeofyear;
    /* lo imprimo en el elemento que va */

    let t = setTimeout(function(){ currentTime() }, 1000);
    /* el setTimeout funciona para que se actualice la funcion declarada en este caso currentTime y fuera va un valor en milisegundos, por eso 1000 ya que es la cantidad necesaria para que se actualice cada 1 segundo! */
}

currentTime();
/* llamamos a la funcion */