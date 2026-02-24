function toggleTexto(zona) {

    const texto = zona.querySelector(".texto");
    const estaVisible = texto.style.display === "block";

   
    document.querySelectorAll(".texto").forEach(t => {
        t.style.display = "none";
    });

    if (!estaVisible) {
        texto.style.display = "block";
    }
}

/*javascript escena 2-3*/

const btnMotor = document.getElementById('btnMotor');
const ledMotor = document.getElementById('ledMotor');
const btnTren = document.getElementById('btnTren');
const ledTren = document.getElementById('ledTren');
const btnFlaps = document.getElementById('btnFlaps');
const ledFlaps = document.getElementById('ledFlaps');

btnMotor.addEventListener('click', () => {
    if (btnMotor.classList.contains('on')) {
        // Encender
        btnMotor.classList.remove('on');
        btnMotor.classList.add('off');
        btnMotor.textContent = "OFF";
        ledMotor.classList.remove('off');
        ledMotor.classList.add('on');
    } else {
        // Apagar
        btnMotor.classList.remove('off');
        btnMotor.classList.add('on');
        btnMotor.textContent = "ON";
        ledMotor.classList.remove('on');
        ledMotor.classList.add('off');
    }
});
btnTren.addEventListener('click', () => {
    if (btnTren.classList.contains('off')) {
        // Encender
        btnTren.classList.remove('off');
        btnTren.classList.add('on');
        btnTren.textContent = "DOWN";
        ledTren.classList.remove('off');
        ledTren.classList.add('on');
    } else {
        // Apagar
        btnTren.classList.remove('on');
        btnTren.classList.add('off');
        btnTren.textContent = "UP";
        ledTren.classList.remove('off');
        ledTren.classList.add('on');
    }
});
btnFlaps.addEventListener('click', () => {
    if (btnFlaps.classList.contains('off')) {
        // Encender
        btnFlaps.classList.remove('off');
        btnFlaps.classList.add('on');
        btnFlaps.textContent = "ON";
        ledFlaps.classList.remove('off');
        ledFlaps.classList.add('on');
    } else {
        // Apagar
        btnFlaps.classList.remove('on');
        btnFlaps.classList.add('off');
        btnFlaps.textContent = "OFF";
        ledFlaps.classList.remove('on');
        ledFlaps.classList.add('off');
    }
});
document.getElementById("btnAterrizar").onclick = function () {
    if (btnMotor.classList.contains('off') && btnTren.classList.contains('on') && btnFlaps.classList.contains('on')) {
        window.location.href = "../HTML/Escena3.html";
    }
};

let tiempoActual = new Date().getTime();

let tiempoObjetivo = tiempoActual + 30000;

let reloj = setInterval(function () {

    tiempoActual = new Date().getTime();
    
    let distancia = tiempoObjetivo - tiempoActual;

    let minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((distancia % (1000 * 60)) / 1000);

 
    

    if (distancia < 0) {
        clearInterval(reloj);
        window.location.href = "../HTML/Escena4.html";
    } else {
        document.getElementById("contador").innerHTML = minutos + "m " + segundos + "s ";
    }
}, 1000);