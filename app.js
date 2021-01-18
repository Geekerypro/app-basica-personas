class Persona{
    constructor(nombre){
        this.nombre = nombre
    }
    agregar(data) {
        const tabla = document.querySelector("#resultado")
        const item = document.createElement("tr")
        item.innerHTML = `<td>${data}</td><td><a class="btn btn-danger" id="borrar">Borrar</a></td>`
        tabla.appendChild(item)
    }
    eliminar(elemento) {
        if (elemento.id === "borrar") {
            elemento.parentElement.parentElement.remove()
        }
    }
    limpiar() {
        document.querySelector("#formulario").reset()
    }
    mensaje(msg, css) {
        const conter = document.querySelector(".container")
        const app = document.querySelector("#app")
        const alerta = document.createElement("div")
        alerta.className = `alert alert-${css}`
        alerta.appendChild(document.createTextNode(msg))
        conter.insertBefore(alerta, app)

        setTimeout(() => {
            document.querySelector(".alert").remove()
        }, 2000);
    }
}

document.getElementById("formulario").addEventListener("submit", (e)=>{
    const nombre = document.getElementById("nombre").value
    const persona = new Persona()
    persona.limpiar()
    //persona.mensaje("agregado", "success")
    //swal("Good job!", "You clicked the button!", "success");
    if (nombre === "") {
        swal("EL campo debe tener algun valor.", { icon: "error" })
    } else {
        swal("Click on either the button or outside the modal.", { icon: "success" })
            .then(() => {
                persona.agregar(nombre)
            });
    }

    e.preventDefault();
})

document.getElementById("resultado").addEventListener("click", (e)=>{
    const persona = new Persona()
    swal({
        title: "Elimianr Item?",
        text: "Esta seguro que desea eliminar este item",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Item eliminado satisfactoriamente!", {
                    icon: "success",
                }).then(()=>{
                    persona.eliminar(e.target)
                });
            } else {
                swal("Eliminacion abortada", {icon: "error"});
            }
        });
    //persona.mensaje("borrado", "danger")
    console.log(e.target)
})
