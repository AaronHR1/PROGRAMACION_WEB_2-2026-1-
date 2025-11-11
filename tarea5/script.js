document.getElementById('numeros').addEventListener('submit', function(event) {
        event.preventDefault();
        let num1 = parseFloat(document.getElementById('numero1').value);
        let num2 = parseFloat(document.getElementById('numero2').value); 
        let result;

        if (isNaN(num1) || isNaN(num2)) {
            result = 'Caracteres no validos';
        }
        if (num1 == num2) {
            result = num1 + ' es igual a ' + num2; 
        }else{
            if (num1 < num2) {
                result = num1 + ' es menor a ' + num2; 
            
            } else {
                result = num2 + ' es menor a ' + num1;
            
            }
        }
        
        console.log('El resultado es: ' + result)

        document.getElementById('resultado').innerText = 'el numero: ' + result;
    }
);