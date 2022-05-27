window.onload = function () {

    //seleccion del body
    const body = document.querySelector("#bodies")

    // Seleccion de todas las fotos
    const fotosRimuru = document.querySelectorAll(".imagen")
    
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
    fondoNegro.style.textAlign = "center"
    fondoNegro.style.justifyContent = "center"
    fondoNegro.style.alignContent = "center"
    fondoNegro.style.alignItems = "center"

    //creacion de "X"
    const x = document.createElement("img")
    x.id = "cerrar"
    x.src = "media/x-solid.png"
    x.style.height = "40px"
    x.style.width = "auto"
    x.style.position = "absolute"
    x.style.top = "10px"
    x.style.right = "30px"

    //funcion para bloquear el scroll
    function functionDisable() {
        TopScroll = window.pageYOffset || document.documentElement.scrollTop;
        LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
        
        window.onscroll = function() {
        window.scrollTo(LeftScroll, TopScroll);
                };
    }

    //funcion para desbloquear el scroll    
    function functionEnable() {window.onscroll = function() {};}

    //funcion de click en foto
    function clickOnPhoto(foto) {
        let fotoSeleccionada = document.createElement("img")
        fotoSeleccionada.src = foto.src
        fotoSeleccionada.style.maxWidth = "80vw"
        fotoSeleccionada.style.maxHeight = "80vh"
        body.appendChild(fondoNegro)
        fondoNegro.appendChild(fotoSeleccionada)
        fondoNegro.appendChild(x)
        functionDisable()
        x.addEventListener("click", ()=>{
            fondoNegro.removeChild(fotoSeleccionada)
            fondoNegro.parentElement.removeChild(fondoNegro)
           functionEnable()
        })
    }

    // event listener para las fotos de rimuru
    fotosRimuru.forEach((item)=>{
        item.addEventListener("click", (item)=>{
            clickOnPhoto(item.target)
        })
    })
    
}