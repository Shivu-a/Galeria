//creacion de fondo negro
const fondoNegro = document.createElement("div")
fondoNegro.id = "fondoNegro"
fondoNegro.style.position = "fixed"
fondoNegro.style.backgroundColor = "rgba(0,0,0,0.9)"
fondoNegro.style.width = "100vw"
fondoNegro.style.height = "100vh"
fondoNegro.style.display = "flex"
fondoNegro.style.top = window.pageYOffset+"px"
fondoNegro.style.left = window.pageXOffset+"px"
fondoNegro.style.justifyContent = "space-evenly"
fondoNegro.style.alignItems = "center"

//creacion de "X"
const x = document.createElement("i")
x.id = "cerrar"
x.className = "fa-solid fa-xmark"
x.style.fontSize = "80px"
x.style.fontFamily = "initial !important"
x.style.color = "white"
x.style.position = "absolute"
x.style.top = "10px"
x.style.right = "30px"


//creacion de las flechas izquierda y derecha
const flechaIzquierda = document.createElement("i")
flechaIzquierda.id = "flechaIzquierda"
flechaIzquierda.className = "fa-solid fa-arrow-left"
flechaIzquierda.style.fontSize = "80px"
flechaIzquierda.style.fontFamily = "initial !important"
flechaIzquierda.style.color = "white"

const flechaDerecha = document.createElement("i")
flechaDerecha.id = "flechaDerecha"
flechaDerecha.className = "fa-solid fa-arrow-right"
flechaDerecha.style.fontSize = "80px"
flechaDerecha.style.fontFamily = "initial !important"
flechaDerecha.style.color = "white"


//funcion para bloquear el scroll
function functionDisable() {
    maxScrollVertical = window.pageYOffset || document.documentElement.scrollTop;
    maxScrollHorizontal = window.pageXOffset || document.documentElement.scrollLeft,
    
    window.onscroll = function() {
        window.scrollTo(maxScrollHorizontal, maxScrollVertical);
    };
}

//funcion para desbloquear el scroll    
function functionEnable() {window.onscroll = function() {};}

// window onload
window.onload = function () {
    //seleccion del body
    const body = document.querySelector("body")

    // Seleccion de todas las fotos
    const fotos = document.querySelectorAll("[data-imagen]")

    // event listener para las fotos
    fotos.forEach((item)=>{
        item.addEventListener("click", (item)=>{
            clickOnPhoto(item.target)
        })
    })

    //get dataAtribute
    function getDataImagen(foto) {
        return foto.getAttribute("data-imagen")
    }

    //funcion de click en foto
    function clickOnPhoto(foto) {
        let fotoSeleccionada = document.createElement("img")

        var dataImagen = Number(getDataImagen(foto))

        fotoSeleccionada.src = foto.src
        fotoSeleccionada.style.maxWidth = "80vw"
        fotoSeleccionada.style.maxHeight = "80vh"
        fotoSeleccionada.style.border = "1px solid white"
        body.appendChild(fondoNegro)
        fondoNegro.appendChild(flechaIzquierda)
        fondoNegro.appendChild(fotoSeleccionada)
        fondoNegro.appendChild(flechaDerecha)
        fondoNegro.appendChild(x)
        functionDisable()

        flechaDerecha.addEventListener("click", ()=>{
            fondoNegro.removeChild(fotoSeleccionada)

            if (dataImagen < 16) {
                dataImagen+=1
            }
            else{
                dataImagen = 1
            }

            fotoSeleccionada.src = `http://127.0.0.1:5500/media/Imagenes/${Number(dataImagen)}.jpg`

            fondoNegro.removeChild(flechaDerecha)
            fondoNegro.appendChild(fotoSeleccionada)
            fondoNegro.appendChild(flechaDerecha)
        })

        flechaIzquierda.addEventListener("click", ()=>{
            fondoNegro.removeChild(fotoSeleccionada)

            if (dataImagen > 1) {
                dataImagen-=1
            }
            else{
                dataImagen = 16
            }

            fotoSeleccionada.src = `http://127.0.0.1:5500/media/Imagenes/${Number(dataImagen)}.jpg`

            fondoNegro.removeChild(flechaDerecha)
            fondoNegro.appendChild(fotoSeleccionada)
            fondoNegro.appendChild(flechaDerecha)
        })

        x.addEventListener("click", ()=>{
            fondoNegro.removeChild(fotoSeleccionada)
            fondoNegro.parentElement.removeChild(fondoNegro)
           functionEnable()
        })
    }
}