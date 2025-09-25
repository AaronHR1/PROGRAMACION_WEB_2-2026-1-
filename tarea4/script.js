var carrito=[]

while(confirm("Deseas agregar algun producto?")){
    let producto= prompt("Que producto quieres agregar");
    let precio= Number(prompt("Cual es el precio del producto?"));

    carrito.push([producto,precio]);
    alert(`${producto} anadido correctamente`);
    
}
let mensaje = ""
carrito.forEach((elemento) => mensaje+= `nombre: ${elemento[0]} , precio: ${elemento[1]}\n`); 

alert(mensaje)