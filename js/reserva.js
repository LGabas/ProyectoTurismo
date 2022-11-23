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
    const paquete1 = document.querySelector("#inlineCheckbox1").checked
    const paquete2 = document.querySelector("#inlineCheckbox2").checked
    const paquete3 = document.querySelector("#inlineCheckbox3").checked
    const paquete4 = document.querySelector("#inlineCheckbox4").checked

    let precio = 0;

    if (paquete1 == true){ 
        precio = precio + (20000 * contador)
     } 
    
    if (paquete2 == true){
        precio =precio +(30000*contador)
         }
    if (paquete3 == true){
        precio = precio +(25000*contador)
         }
    
    if (paquete4 == true){
        precio = precio +(10000*contador)
        }     
    
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `${nombre} reservaste el dia ${fecha},un vuelo para ${contador} personas, 
    Precio final: $ ${precio}.`
}
