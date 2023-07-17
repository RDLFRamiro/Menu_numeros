class Calculadora {
    limpiar() {
        let d = document
        d.getElementById("result").value = ""
    }
    divisores() {
        let num = document.getElementById("num").value;
        num = parseInt(num);
        let resp = document.getElementById("resp");
        let divisores = [];
        for (let i = 1; i < num; i++) {
           if (num % i == 0) {
              divisores.push(i);
           }
        }
  
        resp.textContent = `Los divisores de ${num} son: ${divisores.join(", ")}`;
     }
      
    multiplo(){
        let num = document.getElementById("num").value
        num = parseInt(num)
        let multi = document.getElementById("multi").value
        multi = parseInt(multi)
        let resp = document.getElementById("resp")
        //console.log(resp.textContent)
        console.log(num,multi)
        if (num % multi == 0){
            resp.textContent=`${multi} Es multiplo de ${num}`
            //console.log(multi, " Es multiplo de ",num)
        }else{
            resp.textContent=`${multi} No es multiplo de ${num}`
        }

    }
    sumaDivisores() {
        let num = document.getElementById("num").value;
        num = parseInt(num);
        let resp = document.getElementById("resp");
        let divisores = [];
        let suma = 0;
  
        for (let i = 1; i < num; i++) {
           if (num % i == 0) {
              divisores.push(i);
              // Guardo los divisores en un arreglo
              suma += i;
           }
        }
        resp.textContent = `La suma de los divisores de ${num} es: ${suma}`;
     }
     cantidadDivisores() {
        let num = document.getElementById("num").value;
        num = parseInt(num);
        let resp = document.getElementById("resp");
        let divisores = [];
        for (let i = 1; i < num; i++) {
           if (num % i == 0) {
              divisores.push(i);
              // Guardo los divisores en un arreglo
           }
        }
        resp.textContent = `La cantidad de divisores de ${num} es: ${divisores.length}`;
        // La longitud del arreglo es la cantidad de divisores
     }
     perfecto() {
       
  
        let num = document.getElementById("num").value;
        num = parseInt(num);
        let resp = document.getElementById("resp");
        let suma = 0;
  
        for (let i = 1; i < num; i++) {
           if (num % i == 0) {
              suma += i;
           }
        }
        if (suma == num) {
           resp.textContent = `${num} es un numero perfecto`;
        } else {
           resp.textContent = `${num} no es un numero perfecto`;
        }
     }
     amigos() {
       
  
        let num1 = document.getElementById("amigo1").value;
        num1 = parseInt(num1);
        let num2 = document.getElementById("amigo2").value;
        num2 = parseInt(num2);
        let resp = document.getElementById("resp");
        let suma1 = 0;
        let suma2 = 0;
  
        for (let i = 1; i < num1; i++) {
           if (num1 % i == 0) {
              suma1 += i;
           }
        }
        for (let i = 1; i < num2; i++) {
           if (num2 % i == 0) {
              suma2 += i;
           }
        }
  
        if (suma1 == num2 && suma2 == num1) {
           resp.textContent = `${num1} y ${num2} son numeros amigos`;
        } else {
           resp.textContent = `${num1} y ${num2} no son numeros amigos`;
        }
     }
     primo() {

  
        let num = document.getElementById("num").value;
        num = parseInt(num);
        let resp = document.getElementById("resp");
        let i = 2;
        let mod = 1;
  
        while (i < num && mod != 0) {
           mod = num % i;
           if (mod != 0) {
              i++;
           }
        }
  
        if (mod != 0) {
           resp.textContent = `${num} es primo`;
        } else {
           resp.textContent = `${num} no es primo`;
        }
     }
     primosGemelos() {
       
  
        let num1 = document.getElementById("num1").value;
        num1 = parseInt(num1);
        let num2 = document.getElementById("num2").value;
        num2 = parseInt(num2);
        let resp = document.getElementById("resp");
  
        let i1,
           i2 = 2;
        let mod1,
           mod2 = 1;
  
        while (i1 < num1 && mod1 != 0) {
           mod1 = num1 % i1;
           if (mod1 != 0) {
              i1++;
           }
        }
  
        while (i2 < num2 && mod2 != 0) {
           mod2 = num2 % i2;
           if (mod2 != 0) {
              i2++;
           }
        }
  
        // Math.abs() saca el valor absoluto de un numero
        // Dado que la diferencia entre los numeros primos gemelos es de 2, se puede sacar el valor absoluto de la resta de los numeros
  
        if (mod1 != 0 && mod2 != 0 && Math.abs(num1 - num2) == 2) {
           resp.textContent = `${num1} y ${num2} son primos gemelos`;
        } else {
           resp.textContent = `${num1} y ${num2} no son primos gemelos`;
        }
     }
     numeroInvertido() {
        let num = document.getElementById("num").value;
        num = parseInt(num);
        let resp = document.getElementById("resp");
        let invertido = "";
  
        while (num > 0) {
           let mod = num % 10;
           num = Math.floor(num / 10);
           invertido = invertido + mod.toString();
        }
  
        resp.textContent = `El numero invertido es: ${invertido}`;
     }
     cantidadDigito() {
       
  
        let num = document.getElementById("num").value;
        num = parseInt(num);
        let resp = document.getElementById("resp");
        let cantidad = 0;
  
        while (num > 0) {
           num = Math.floor(num / 10);
           cantidad++;
        }
        resp.textContent = `La cantidad de digitos es: ${cantidad}`;
     }
     factorial() {
  
        let num = document.getElementById("num").value;
        num = parseInt(num);
        let resp = document.getElementById("resp");
        let factorial = 1;
  
        for (let i = 1; i <= num; i++) {
           factorial *= i;
        }
        resp.textContent = `El factorial de ${num} es: ${factorial}`;
     }
     exponente() {
        let base = document.getElementById("base").value;
        base = parseInt(base);
        let exponente = document.getElementById("exponente").value;
        exponente = parseInt(exponente);
        let resp = document.getElementById("resp");
        let resultado = 1;
        for (let i = 1; i <= exponente; i++) {
           resultado *= base;
        }
        resp.textContent = `${base} elevado a la ${exponente} es: ${resultado}`;
     }
     tablaDeMultiplicar() {
        let num = document.getElementById("num").value;
        num = parseInt(num);
        let resp = document.getElementById("tabla");
        let tabla = "";
        for (let i = 1; i <= 12; i++) {
           tabla += `${num} x ${i} = ${num * i}<br>`;
        }
        resp.innerHTML = tabla;
     }
     fibonacci() {
   
  
        let num = document.getElementById("num").value;
        num = parseInt(num);
        let resp = document.getElementById("resp");
        let serie = "";
        let a = 0;
        let b = 1;
        let c = 0;
  
        for (let i = 0; i < num; i++) {
           if (i === num - 1) {
              serie += a; // serie = serie + a
           } else {
              serie += `${a}, `;
              // Hago esto para que el numero final de la serie no tenga una coma al final
              // Para que no salga asi: 0, 1, 1, 2, 3, 5, 8, 13,
           }
           c = a + b;
           a = b;
           b = c;
        }
        resp.textContent = serie;
     }
     vuelto() {
        let cantidad = document.getElementById("cantidad").value;
        cantidad = parseInt(cantidad);
  
        let precio = document.getElementById("precio").value;
        precio = parseFloat(precio);
  
        let pago = document.getElementById("pago").value;
  
        let incluirIVA = document.getElementById("casillaVerificacion").checked;
  
        let costo = cantidad * precio;
        let vuelto;
  
        if (incluirIVA) {
           let iva = costo * 0.12;
           costo += iva;
        }
  
        vuelto = pago - costo;
  
        let resp = document.getElementById("resp");
        resp.textContent = `El vuelto es: $${vuelto.toFixed(2)}`;
     }
    }

let cal = new Calculadora()

