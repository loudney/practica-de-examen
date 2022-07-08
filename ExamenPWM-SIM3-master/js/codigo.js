let lista=[];
let listaNum=[];
let listaLet=[];
let listaMas=[];
let listaEdad=[];
let listajunto=[];
let ordenado=[];

let ordenadolet=[];


 function agregar(){

   var entrada1 = document.getElementById('entrada1').value;
    lista.push(entrada1);

    document.getElementById("resultado1").innerHTML=lista;  
 }


 function mostrar(){

    document.getElementById("resultado2").innerHTML=lista;
 }


 
 function eliminar(){

    lista.pop();
    document.getElementById("resultado2").innerHTML=lista;
 }



 function agregar2(){

    
   listaNum.push( document.getElementById("entrada2").value);
   document.getElementById("resultado4").innerHTML=listaNum;

   console.log(listaNum);
     
  }

  function ordenar(){
    listaNum.sort(function(a, b){return a-b});

    document.getElementById("resultado4").innerHTML=listaNum;
    console.log(listaNum);

  }


 function agregar3(){

   listaLet.push( document.getElementById("entrada3").value);
   document.getElementById("resultado5").innerHTML=listaLet;

   console.log(listaLet);
  
 }

 function ordenar2(){
   listaLet.sort();

   document.getElementById("resultado5").innerHTML=listaLet;
   console.log(listaLet);

 }


 function agregar11(){

   listaMas.push( document.getElementById("entrada11").value);
   document.getElementById("resultado11").innerHTML=listaMas;
    console.log(listaMas);
  
 }

 function agregar111(){

   listaEdad.push( document.getElementById("entrada111").value);
   document.getElementById("resultado111").innerHTML=listaEdad;

   console.log(listaEdad);
  
 }

 function mostrar101(){

   listajunto= listaMas.concat(listaEdad);
   document.getElementById("resultado114").innerHTML=listajunto;
 }
 


 function ordenar22(){

   ordenado=listajunto.sort(function(a, b){return a-b});
   document.getElementById("resultado22").innerHTML=ordenado;
   console.log(ordenado);

   }

   


   function ordenar33(){

      ordenadolet=listajunto.sort();
      document.getElementById("resultado33").innerHTML=ordenadolet;
      console.log(ordenadolet);
   
      }