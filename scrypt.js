const Personas = [];
document.getElementById("FormPersona").addEventListener("submit",function(event){
    event.preventDefault(); 

    const Persona = {
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        edad: document.getElementById("edad").value,
        genero: document.getElementById("genero").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("Contacto").value,
        direccion: document.getElementById("direccion").value,
        fecha: document.getElementById("fecha").value
    }; 

    Personas.push(Persona);
    alert(JSON.stringify(Personas));
    llenarTabla();
});

//Imagen pequeña de la foto
document.getElementById('imagen').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const foto = document.getElementById('imagenSubida');
            foto.src = e.target.result;
            foto.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

//Para que la foto de la visualizacion se elimine cuando se limpian los datos
document.getElementById("FormPersona").addEventListener("reset", function() {
    const foto = document.getElementById('imagenSubida');
    foto.src = '#';
    foto.style.display = 'none';
});

//Llenar la tabla
function llenarTabla() {
    const tabla = document.getElementById("tablaPersonas");
    // Limpio la tabla antes de llenarla
    tabla.innerHTML = `
        <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Edad</th>
                <th scope="col">Genero</th>
                <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    const cuerpo = tabla.querySelector('tbody');

    Personas.forEach(persona => {
        const fila = cuerpo.insertRow(0);
        fila.insertCell(0).innerHTML = persona.nombre;
        fila.insertCell(1).innerHTML = persona.apellido;
        fila.insertCell(2).innerHTML = persona.edad;
        fila.insertCell(3).innerHTML = persona.genero;
        fila.insertCell(4).innerHTML = persona.email;
    });
}

//Guardar los datos de personas en un achivo txt
/*
function GuardarDatos(){
    const fs = require('fs');
    const Datos = JSON.stringify(Personas, null, 2);
    fs.writeFileSync('Personas.txt', Datos, (error) => {
        if (error) throw error;
        alert('Datos guardados');
    }); 
}

document.getElementById("guardarDatos").addEventListener("click",function(){
    GuardarDatos();
});
*/

function GuardarDatos() {
    const Datos = JSON.stringify(Personas, null, 2);
    const blob = new Blob([Datos], { type: "text/plain" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "Personas.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.getElementById("guardarDatos").addEventListener("click", function () {
    GuardarDatos();
});