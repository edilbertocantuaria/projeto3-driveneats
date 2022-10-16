function adicionarBorda_Prato(selecionado){

    console.log(selecionado);
    
    const selecionadoAnteriormente = document.querySelector(".borda-selecao-prato");
    
    
    if (selecionadoAnteriormente !== null){
    console.log(selecionadoAnteriormente);
     selecionadoAnteriormente.classList.remove("borda-selecao-prato");
    /*document.getElementById("iconeSelecao").style.opacity="";*/
    }
   
	selecionado.classList.add("borda-selecao-prato");
   /*document.getElementById("iconeSelecao").style.opacity="";*/
}

function adicionarBorda_Bebida(selecionado){

    console.log(selecionado);
    
    const selecionadoAnteriormente = document.querySelector(".borda-selecao-bebida");
    console.log(selecionadoAnteriormente);
    
    if (selecionadoAnteriormente !== null){
     selecionadoAnteriormente.classList.remove("borda-selecao-bebida");
   /* document.getElementById("iconeSelecao").style.opacity="0";*/
    }
   
	selecionado.classList.add("borda-selecao-bebida");
   /* document.getElementById("iconeSelecao").style.opacity="1";*/
}

function adicionarBorda_Sobremesa(selecionado){

    console.log(selecionado);
    
    const selecionadoAnteriormente = document.querySelector(".borda-selecao-sobremesa");
    console.log(selecionadoAnteriormente);
    
    if (selecionadoAnteriormente !== null){
     selecionadoAnteriormente.classList.remove("borda-selecao-sobremesa");
   /* document.getElementById("iconeSelecao").style.opacity="0";*/
    }
   
	selecionado.classList.add("borda-selecao-sobremesa");
   /* document.getElementById("iconeSelecao").style.opacity="1";*/
}





