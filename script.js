var vidas=4;
let secreto = Math.floor(Math.random() * 11);

while(vidas){

    alert("Tienes " + vidas + " vidas");
    let numero=prompt('Prueba tu suerte y escribe un numero entre 0 y 10');
    
    if(numero != secreto){
        vidas--;
        alert("INCORRECTO");
    }else{
        alert("ACERTASTE EL NUMERO ERA " + secreto);
        break
    }

}

if(vidas==0){
    alert("mala suerte el numero era " + secreto)
}