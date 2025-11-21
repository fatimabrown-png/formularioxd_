document.getElementById("formProducto").addEventListener("submit", function(event) {
    //protección de datos
    event.preventDefault();


    //variables relacionadas al formulario
    const nombre = document.getElementById("nombre").value;
    const descripcion = document.getElementById("descripcion").value;
    const precio = document.getElementById("precio").value;
    const imagen = document.getElementById("imagen").file[0];


    //Leer imagen 
    
    //guardar datos
    function guardarDatos(nombre, descripcion, precio, imgBase64){
        const data = {
            nombre,
            descripcion,
            precio,
            imagen: imgBase64
        };
        localStorage.setItem("producto", JSON.stringify(data));
        window.location.href = "reporte.html";
    }


})