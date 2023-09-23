
    // Config do layout do site inteiro
    
    function mudouTamanho(){
    if(window.innerWidth >= 768){
      itens.style.display = 'block'
    }
    else{
      itens.style.display = 'none'
    }
  }

  // Menu de botão
  
  function clicaMenu(){
    if(itens.style.display == 'block'){
      itens.style.display = 'none';
      
    }
    else{
      itens.style.display = 'block'
    }
  }

  // Trocas das páginas da listagem^

  function alterPag(){
    if( pagina2.style.display = 'block'){
        pagina1.style.display ='none';
     
    }
    
}
function alterPag2(){
    if( pagina1.style.display = 'block'){
        pagina2.style.display ='none';
    }
    
}

// As alertas das modals

  function clicktab(){
    if( mudarsenha.style.display = 'block'){
        info.style.display ='none';
        contacto.style.display ='none';
        
    }
}
function clicktaba(){
    if( info.style.display = 'block'){
        mudarsenha.style.display ='none';
        contacto.style.display ='none';
    }
}
function clicktabe(){
    if( contacto.style.display = 'block'){
        mudarsenha.style.display ='none';
        info.style.display ='none';
    }
}



document.querySelector(".cancel-btn").addEventListener("click", function() {
  document.getElementById("myModal").style.display = "none";
});

// Validação de palavrapass
function mostrarsenha(){
 var inputPass= document.getElementById('senha')
 var btnhowPass = document.getElementById('btn-senha')

 if(inputPass.type==='password'){
 inputPass.setAttribute('type','text')

}else
 inputPass.setAttribute('type','password')

}

// Pesquisa
var pesquisar= document.getElementById('pesquisar')
function pesquisa(){
 window.location
}