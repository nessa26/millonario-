
 let posiblesRespuestas = [];
 let respuesta, respuestas, pregunta;
 let probabilidad = 100;
 let probabilidadParcial = 0;
 let porcentajespublico = [0,0,0,0];
 let respuestasCincuenta;
 let c = 0;
 let respuestaTrue;

 let objeto = [{
    "pregunta": "La palabra Adviento significa: ",
    "respuesta": "La palabra viene del latín adventus",
    "opciones":[
       {
          "texto": "Llegada",
          "correcta": true
       },
       {
         "texto": "Gastar",
         "correcta": false
      },
      {
         "texto": "Preparar",
         "correcta": false
      },
      {
         "texto": "Nacimiento",
         "correcta": false
      }
      ]
 }];





 pregunta = objeto[0].pregunta;
 respuestas = objeto[0].opciones;
 document.getElementById("question").innerHTML = pregunta;
 document.getElementById("answerA").innerText = "A" + " " +respuestas[0].texto;
 document.getElementById("answerB").innerHTML = "B" + " " +respuestas[1].texto;;
 document.getElementById("answerC").innerHTML = "C" + " " +respuestas[2].texto;;
 document.getElementById("answerD").innerHTML = "D" + " " +respuestas[3].texto;;


/**
 * inicio respuesta correcta
 */

 function respuestaCorrecta(element, index, array) {  
    if (respuestas[index].correcta) {
        respuestaTrue = respuestas[index].texto;
        console.log(respuestaTrue);
    }  
 }

 function verificar() {
        
 }


 respuestas.forEach(respuestaCorrecta);




/**
 * fin respuesta correcta
 */


  /**
  * inicio ayuda público
  */

 function ayudaPublico(element, index, array) {
   let c = 0;
    if (respuestas[index].correcta) {
        
        respuesta = element;
        if (probabilidadParcial<20) {
           c = Math.round((probabilidad)*((Math.random() * (80 - 60 + 1))+60)/100);
        }else if (probabilidadParcial<30) {
           c = Math.round((probabilidad)*((Math.random() * (70 - 50 + 1))+50)/100); 
        }else{
           c = Math.round((probabilidad)*((Math.random() * (60 - 45 + 1))+45)/100);
        }
        probabilidad = probabilidad - probabilidadParcial;
        porcentajespublico[index] = c;
        

    }else if(index == 3 ){
        c = 100 - probabilidadParcial;
        porcentajespublico[index] = c;

    }else{
        if (probabilidadParcial <80) {
           c = Math.round(probabilidad*((Math.random() * (20)))/100);
        }else if (probabilidadParcial <90) {
           c = Math.round(probabilidad*((Math.random() * (10)))/100);
            
        }else if (probabilidadParcial <95){
           c = Math.round(probabilidad*((Math.random() * (5)))/100);

        }else{
            c = 1;
        }
        porcentajespublico[index] = c;
        
    }
    probabilidadParcial = probabilidadParcial + c;
    
}

respuestas.forEach(ayudaPublico);
console.log(porcentajespublico);
//alert(["A "+":"+porcentajespublico[0],"B "+":"+porcentajespublico[1],
//"C "+":"+porcentajespublico[2],"D "+":"+porcentajespublico[3]]);
// let porcentajeGlobal = localStorage.setItem(porcentajes);


 /**
  * fin ayuda público
  */

  /**
  * inicio ayuda cincuenta cincuenta
  */


function cincuentaCincuenta(element, index, array) {
   let incorrectas = [];
   
   if (!respuestas[index].correcta && c<2) {
      c++;
      respuestas[index].texto = "";
   }  
}

respuestas.forEach(cincuentaCincuenta);
console.log(respuestas);

 /**
  * fin ayuda cincuenta cincuenta
  */


 /**
  * Graficas
  */






  /**
  * Graficas
  */

