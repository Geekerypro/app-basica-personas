class Persona {
    constructor(nombre) {
        this.nombre = nombre
    }

    agregar(dato) {
        const conter = document.getElementById("respuesta")
        const item = document.createElement("tr")
        item.innerHTML = `<td>${dato}</td><td><a class="btn btn-danger" id="borrar">Borrar</a></td>`
        conter.appendChild(item)
    }
    eliminar(elemento) {
        if (elemento.id === "borrar") {
            elemento.parentElement.parentElement.remove()
        }
    }
    limpiar() {
        document.getElementById("formulario").reset()
    }
}

document.getElementById("formulario").addEventListener("submit", (e) => {
    const nombre = document.getElementById("nombre").value
    const persona = new Persona()
    if (nombre) {
        swal("Agregado con exito", { icon: "success" })
            .then(() => {
                persona.agregar(nombre)
                persona.limpiar()
            })
    } else {
        swal("El campo no puede estar vacio", { icon: "error" })
    }
    e.preventDefault()
})
document.getElementById("respuesta").addEventListener("click", (e) => {
    const persona = new Persona()
    swal({
        title: "Eliminar Item",
        text: "Esta seguro",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                swal("Item Eliminado", {
                    icon: "success",
                })
                .then(() => {
                    persona.eliminar(e.target)
                });
            } else {
                swal("No se elimino el item");
            }
        });
})