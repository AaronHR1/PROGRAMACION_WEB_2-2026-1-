let resultado=""

let numero1=prompt("ingresa el primer numero");

while(numero1 == null || numero1.trim() == "" || !Number.isInteger(Number(numero1))){
    numero1=prompt("Caracter no valido ingresa el primer numero");
}

let numero2=prompt("ingresa el segundo numero");

while(numero2 == null || numero2.trim() == "" || !Number.isInteger(Number(numero2))){
    numero2=prompt("Caracter no valido ingresa el segundo numero");
}

let numero3=prompt("ingresa el tercer numero");

while(numero3 == null || numero3.trim() == "" || !Number.isInteger(Number(numero3))){
    numero3=prompt("Caracter no valido ingresa el tercer numero");
}


if(numero1==numero2 && numero2==numero3){
    resultado+= "los tres numeros son iguales";
}else if(numero1==numero2){
    resultado+= "el primer numero es igual al segundo";
    
}else if(numero2==numero3){
    resultado+="el segundo numero es igual al tercero";
}else if(numero1==numero3){
    resultado+="el primer numero es igual al tercero";
}else{
    resultado+="los tres numeros son diferentes ";
}

if(numero1 > numero2 && numero1 > numero3){
    resultado+="\n El primer numero es el mayor";
} else if(numero2 > numero1 && numero2 > numero3){
    resultado+="\n El segundo numero es el mayor";
} else{
    resultado+="\n El tercer numero es el mayor";
}

alert(resultado);