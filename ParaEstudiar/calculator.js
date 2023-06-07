document
.querySelector(".calc")
.addEventListener("click", function(event){
const numeroInicial = "0";
if(event.target.innerText === "C"){
let salida = 
document
.querySelector(".screen");
salida.innerText = numeroInicial;
}
else if(event.target.innerText === "7" || "6" || "5" || "4" || "3" || "2" || "1" || "8" || "9"){
let verEnPantalla = 
document
.querySelector(".screen");

if(verEnPantalla.innerText === "0"){
    console.log(verEnPantalla.innerText);
    verEnPantalla.innerText = "";
    verEnPantalla.innerText += event.target.innerText;
  
}
else{
    verEnPantalla.innerText += event.target.innerText;
}
}
while(event.target.innerText === "+"){
    let verEnPantalla = 
    document
    .querySelector(".screen") + verEnPantalla.innerText;
}
});
//Que funcione la suma y que funcionen todos los numeros