function adicionarBorda_Prato(selecionado){

    console.log(selecionado);
    
    const selecionadoAnteriormente = document.querySelector(".prato .borda-selecao");
    
    
    if (selecionadoAnteriormente !== null){
    console.log(selecionadoAnteriormente);
     selecionadoAnteriormente.classList.remove("borda-selecao");
    /*document.getElementById("iconeSelecao").style.opacity="";*/
    }
   
	selecionado.classList.add("borda-selecao");
   /*document.getElementById("iconeSelecao").style.opacity="";*/
}

function adicionarBorda_Bebida(selecionado){

    console.log(selecionado);
    
    const selecionadoAnteriormente = document.querySelector(".bebida .borda-selecao");
    console.log(selecionadoAnteriormente);
    
    if (selecionadoAnteriormente !== null){
     selecionadoAnteriormente.classList.remove("borda-selecao");
   /* document.getElementById("iconeSelecao").style.opacity="0";*/
    }
   
	selecionado.classList.add("borda-selecao");
   /* document.getElementById("iconeSelecao").style.opacity="1";*/
}

function adicionarBorda_Sobremesa(selecionado){

    console.log(selecionado);
    
    const selecionadoAnteriormente = document.querySelector(".sobremesa .borda-selecao");
    console.log(selecionadoAnteriormente);
    
    if (selecionadoAnteriormente !== null){
     selecionadoAnteriormente.classList.remove("borda-selecao");
   /* document.getElementById("iconeSelecao").style.opacity="0";*/
    }
   
	selecionado.classList.add("borda-selecao");
   /* document.getElementById("iconeSelecao").style.opacity="1";*/
}

function relizarPedido(apertado){
const verificarPrato = document.querySelector('.prato .borda-selecao');
const verificarBebida = document.querySelector('.bebida .borda-selecao');
const verificarSobremesa = document.querySelector('.sobremesa .borda-selecao');
let selecaoCompleta=1;

if (verificarPrato === null || verificarBebida=== null || verificarSobremesa=== null ){
   /* alert("Selecione o prato!");*/
selecaoCompleta = 0;
} 

if (selecaoCompleta==0){
    alert("Vc deve escolher pelo menos um item de cada categoria! Vai ter venda casada sim!!!");
} else {
    alert("Vc selecionou tudin! Parabéns!!");
}

}


