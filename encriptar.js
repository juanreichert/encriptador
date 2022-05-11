var entrada = document.querySelector(".entrada");
var salida = document.querySelector(".salida");
var elementos = document.querySelector(".elementosA");

var botonEncriptar = document.querySelector(".encriptar");

var botonCopiar = document.querySelector(".copiar");

botonEncriptar.addEventListener("click",function(event){
	event.preventDefault();
	const textoEncriptado = encriptar(entrada.value);
	salida.value = textoEncriptado;
	elementos.style.opacity = 0;

});
function encriptar(cadenaTexto){
	let arr = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
	cadenaTexto = cadenaTexto.toLowerCase()
	  for(let i = 0; i < arr.length; i++){
		if(cadenaTexto.includes(arr[i][0])){
			cadenaTexto = cadenaTexto.replaceAll(arr[i][0],arr[i][1])
		}
	  }
	return cadenaTexto
  }
// 	var arr = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
// 	cadenaTexto = cadenaTexto.toLowerCase();
// 	for(let i = 0; i < arr.length; i++){
// 		if(cadenaTexto.includes(arr[i][0])){
// 			cadenaTexto = cadenaTexto.replaceAll(arr[i][0]),(arr[i][1]);
// 		}	
// 	}
// 	return cadenaTexto;
// }



	