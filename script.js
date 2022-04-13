window.onload = function () {
    
    //seleccion del body
    const body = document.querySelector("#bodies")

    //seleccion de titulo y el div "imagenes"
    const titulo = document.querySelector("#titulo")
    const imagenes = document.querySelector(".imagenes")

    //seleccion de cada foto de rimuru
    const fotoRimuru1 = document.querySelector("#rimuru1")
    const fotoRimuru2 = document.querySelector("#rimuru2")
    const fotoRimuru3 = document.querySelector("#rimuru3")
    const fotoRimuru4 = document.querySelector("#rimuru4")
    const fotoRimuru5 = document.querySelector("#rimuru5")
    const fotoRimuru6 = document.querySelector("#rimuru6")
    const fotoRimuru7 = document.querySelector("#rimuru7")
    const fotoRimuru8 = document.querySelector("#rimuru8")
    const fotoRimuru9 = document.querySelector("#rimuru9")
    const fotoRimuru10 = document.querySelector("#rimuru10")
    const fotoRimuru11 = document.querySelector("#rimuru11")
    const fotoRimuru12 = document.querySelector("#rimuru12")
    const fotoRimuru13 = document.querySelector("#rimuru13")
    console.log(window.innerHeight)
    
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

    //funcion para bloquear el scroll
    function functiondisable() {
        TopScroll = window.pageYOffset || document.documentElement.scrollTop;
        LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
        
        window.onscroll = function() {
        window.scrollTo(LeftScroll, TopScroll);
                };
        }
    //funcion para desbloquear el scroll    
    function functionenable() {window.onscroll = function() {};}

    //funcion de click en foto
    function clickOnPhoto(foto) {
        console.log(foto.src)
        let fotoSeleccionada = document.createElement("img")
        fotoSeleccionada.src = foto.src
        fotoSeleccionada.style.maxWidth = "80vw"
        fotoSeleccionada.style.maxHeight = "80vh"
        body.appendChild(fondoNegro)
        fondoNegro.appendChild(fotoSeleccionada)
        functiondisable()
        fondoNegro.addEventListener("click", ()=>{
            fondoNegro.removeChild(fotoSeleccionada)
            fondoNegro.parentElement.removeChild(fondoNegro)
           functionenable()
        })
    }
    
    //event listeners para cada foto de rimuru
    fotoRimuru1.addEventListener("click", ()=>{clickOnPhoto(fotoRimuru1)})
    fotoRimuru2.addEventListener("click", ()=>{clickOnPhoto(fotoRimuru2)})
    fotoRimuru3.addEventListener("click", ()=>{clickOnPhoto(fotoRimuru3)})
    fotoRimuru4.addEventListener("click", ()=>{clickOnPhoto(fotoRimuru4)})
    fotoRimuru5.addEventListener("click", ()=>{clickOnPhoto(fotoRimuru5)})
    fotoRimuru6.addEventListener("click", ()=>{clickOnPhoto(fotoRimuru6)})
    fotoRimuru7.addEventListener("click", ()=>{clickOnPhoto(fotoRimuru7)})
    fotoRimuru8.addEventListener("click", ()=>{clickOnPhoto(fotoRimuru8)})
    fotoRimuru9.addEventListener("click", ()=>{clickOnPhoto(fotoRimuru9)})
    fotoRimuru10.addEventListener("click", ()=>{clickOnPhoto(fotoRimuru10)})
    fotoRimuru11.addEventListener("click", ()=>{clickOnPhoto(fotoRimuru11)})
    fotoRimuru12.addEventListener("click", ()=>{clickOnPhoto(fotoRimuru12)})
    fotoRimuru13.addEventListener("click", ()=>{clickOnPhoto(fotoRimuru13)})

    
}