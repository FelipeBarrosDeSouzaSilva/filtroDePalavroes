// Created Using Easy HTML v1.4.5
// https://play.google.com/store/apps/details?id=ak.andro.easyhtml

function rastrear(){
  var frase = document.getElementById('resp').value;
  
  var palavras_feias = Array('palavrao1','palavrao2', 'palavrao3 ', ' palavrao4', ' palavrao5);
  
  palavras_feias.forEach((key)=>{
    var detectar = frase.indexOf(key);
    if(detectar != -1){
      var quantidade_caracteres_palavrao = key.length;
      var i = 0;
      var asterisk = "";
      while(i < quantidade_caracteres_palavrao){
        asterisk += "*";
        i++;
      }
      var frase_modificada = frase.replace(frase.substring(detectar, detectar + quantidade_caracteres_palavrao), asterisk);
      frase = frase_modificada;
    }
    
  });
  
    alert(frase);
    document.getElementById('resp').value = "";
   
  
}
