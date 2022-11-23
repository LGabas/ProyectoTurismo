const formularioReserva = document.querySelector("#formReserva")
/* crear el evento */
formularioReserva.addEventListener("submit", validarFormularioReserva)

//funciones
function validarFormularioReserva(e){
    e.preventDefault();
    const nombre = document.querySelector("#name").value
    const mail = document.querySelector("#email").value
    const celular = document.querySelector("#celular").value
    const fecha = document.querySelector("#date").value
    const contador = Number(document.querySelector("#numero").value)
    const vueloPrivado = document.querySelector("#inlineCheckbox1").checked
    const vueloEspecial = document.querySelector("#inlineCheckbox2").checked
    const vueloBautismo = document.querySelector("#inlineCheckbox3").checked
    const vueloEvento = document.querySelector("#inlineCheckbox4").checked

    let precio = 0;

    if (vueloPrivado == true){ 
        precio = precio + (20000 * contador)
     } 
    
    if (vueloEspecial == true){
        precio =precio +(30000 * contador)
         }
    if (vueloBautismo == true){
        precio = precio +(25000 * contador)
         }
    
    if (vueloEvento == true){
        precio = precio +(10000 * contador)
        }     
    
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `${nombre} reservaste el dia ${fecha},un vuelo para ${contador} personas, 
    Precio final: $ ${precio}.`
}
