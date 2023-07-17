class Test {
   perfecto() {
      let num = parseInt(document.getElementById("num").value);
      let res = document.getElementById("resp");

      let suma = 0;

      for (let i = 1; i < num; i++) {
         if (num % i == 0) {
            suma += i; // suma = suma + i
         }
      }

      if (suma == num) {
         res.textContent = `${num} Es perfecto`;
      } else {
         res.textContent = `${num} No Es perfecto`;
      }
   }

   fibonacci() {
      /* 
      0  1  1  2  3  5   8  13
      a  b  c
         a  b  c

      */
      let num = parseInt(document.getElementById("num").value);
      let resp = document.getElementById("resp");

      let serie = "";

      let a = 0;
      let b = 1;
      let c = 1;

      for (let i = 0; i < num; i++) {
         if (i == num - 1) {
            serie += a;
         } else {
            serie += `${a}, `;
         }

         c = a + b;

         a = b;
         b = c;
      }

      resp.textContent = serie;
   }
}

const test = new Test();
