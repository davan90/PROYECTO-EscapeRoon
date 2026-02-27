function mostrarPersonaje(personaje) {


    document.getElementById('escena1').style.display = 'none';

   
    document.querySelectorAll('.personaje').forEach(p => {
        p.style.display = 'none';
    });

    
    document.getElementById(personaje).style.display = 'flex';
}

function volver() {

    
    document.querySelectorAll('.personaje').forEach(p => {
        p.style.display = 'none';
    });

    
    document.getElementById('escena1').style.display = 'flex';
}