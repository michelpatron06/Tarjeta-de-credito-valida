function cipher (string){
    // if(typeof(string)=== "number" && string.length === 0){
    //   return "Porfavor Ingresa un valor valido";
    // }
    var str = '';
    for(var i=0;i<string.length;i++){
    var position = string.charCodeAt(i);
    var caesarCipher =(position-65+33)%26+65;
    var newLetter= String.fromCharCode(caesarCipher);
      str = str + newLetter;
    }return str;
}

// console.log(cipher(window.prompt("cifrado").toUpperCase()));

function decipher (string){
  // if(typeof(string)=== "number" && string.length === 0){
  //     return "Porfavor Ingresa un valor valido";
  //   }
    var str = '';
        for(var i=0;i<string.length;i++){
    var position = string.charCodeAt(i);
  var caesarDecipher =(position+65-33)%26 +65;
  var newLetter= String.fromCharCode(caesarDecipher);
  str = str + newLetter;
        }return str;
}

// console.log(decipher(window.prompt("decifrando").toUpperCase()));

function decide (answer){
  if (answer === "CIFRAR"){
  return console.log(cipher(window.prompt("Cifrando algoritmo de Cifrado César").toUpperCase()));
  }
  if (answer === "DECIFRAR"){
  return console.log(decipher(window.prompt("Decifrando algoritmo de Cifrado César").toUpperCase()));
  }
}


decide ((window.prompt("CIFRAR O DECIFRAR")).toUpperCase());

