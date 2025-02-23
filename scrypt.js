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
    //alert(JSON.stringify(Personas));
    llenarTabla();
});

//Imagen pequeña de la foto
document.getElementById('imagen').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('imagenSubida');
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
});

document.getElementById("FormPersona").addEventListener("reset", function() {
    const preview = document.getElementById('imagenSubida');
    preview.src = '#';
    preview.style.display = 'none';
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