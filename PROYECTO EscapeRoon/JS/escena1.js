
window.onload = function() {
    crearZonasClic();
};

function crearZonasClic() {
    const escena = document.getElementById('escena1');
    
    const zonas = [
        { 
            id: 'zona-isma', 
            personaje: 'Isma', 
            top: '200px', 
            left: '150px', 
            width: '80px', 
            height: '180px' 
        },
        { 
            id: 'zona-raul', 
            personaje: 'Raul', 
            top: '200px', 
            left: '350px', 
            width: '80px', 
            height: '180px' 
        },
        { 
            id: 'zona-marta', 
            personaje: 'Marta', 
            top: '200px', 
            left: '550px', 
            width: '80px', 
            height: '180px' 
        }
    ];
    
   
    zonas.forEach(zona => {
        const div = document.createElement('div');
        div.id = zona.id;
        div.className = 'zona-clic'; 
        div.setAttribute('onclick', `mostrarPersonaje('${zona.personaje}')`);
        
       
        div.style.top = zona.top;
        div.style.left = zona.left;
        div.style.width = zona.width;
        div.style.height = zona.height;
        
        escena.appendChild(div);
    });
}

function mostrarPersonaje(personaje) {

    document.getElementById('escena1').style.display = 'none';
    
    
    document.querySelectorAll('.personaje').forEach(p => {
        p.style.display = 'none';
    });
    
    
    document.getElementById(personaje).style.display = 'block';
}

function volver() {
   
    document.querySelectorAll('.personaje').forEach(p => {
        p.style.display = 'none';
    });
    

    document.getElementById('escena1').style.display = 'block';
}
