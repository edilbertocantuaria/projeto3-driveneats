let habilitarBotao = document.querySelectorAll('.borda-selecao').length;
let verificarPrato = document.querySelector('.prato .borda-selecao');
let verificarBebida = document.querySelector('.bebida .borda-selecao');
let verificarSobremesa = document.querySelector('.sobremesa .borda-selecao');
let selecaoCompleta=0;

function adicionarBorda_Prato(selecionado){

    console.log(selecionado);
    
    const selecionadoAnteriormente = document.querySelector(".prato .borda-selecao");
    
    if (selecionadoAnteriormente !== null){
    console.log(selecionadoAnteriormente);
     selecionadoAnteriormente.classList.remove("borda-selecao");
    /*document.getElementById("iconeSelecao").style.opacity="";*/
    }
   
	selecionado.classList.add("borda-selecao");
    verificarPrato = document.querySelector('.prato .borda-selecao');
    habilitarBotao = document.querySelectorAll('.borda-selecao').length;
   /*document.getElementById("iconeSelecao").style.opacity="";*/
}

function adicionarBorda_Bebida(selecionado){
    console.log(selecionado);
    
    const selecionadoAnteriormente = document.querySelector(".bebida .borda-selecao");
    console.log(selecionadoAnteriormente);

    if (selecionadoAnteriormente !== null){
     selecionadoAnteriormente.classList.remove("borda-selecao");
      }
   
    selecionado.classList.add("borda-selecao");
   verificarBebida = document.querySelector('.bebida .borda-selecao');
   habilitarBotao = document.querySelectorAll('.borda-selecao').length;
}

function adicionarBorda_Sobremesa(selecionado){

    console.log(selecionado);
    
    const selecionadoAnteriormente = document.querySelector(".sobremesa .borda-selecao");
    console.log(selecionadoAnteriormente);
    
    if (selecionadoAnteriormente !== null){
     selecionadoAnteriormente.classList.remove("borda-selecao");
   
    }
  
	selecionado.classList.add("borda-selecao");
    verificarSobremesa = document.querySelector('.sobremesa .borda-selecao');
    habilitarBotao = document.querySelectorAll('.borda-selecao').length;
  
}

/*Altera o layout do botão para continuar fazendo o pedido*/ 
function realizarPedido(apertado){
    if (habilitarBotao==3){
        document.getElementById("botao").disabled =false;
        const pedido = document.querySelector('.botaoPedido');
        pedido.classList.add('botaoDisponivel');
        pedido.innerHTML="Fechar pedido";
    }
}

/*Ao clicar no botão, ele irá verificar se todos os itens foram marcados. Se há algum item faltando, nada acontece. Caso contrário, segue para a próxima página*/ 
function disponibilizarBotao(disponivel){
    if (verificarPrato === null || verificarBebida=== null || verificarSobremesa=== null ){
       /* alert("Vc deve escolher pelo menos um item de cada categoria! Vai ter venda casada sim!!! Quem mandou não aprender cozinhar?! Se não gostou:  \n @drfran  \n @seusdireitos \n Procon: 151");*/
       document.getElementById("botao").disabled =true;
    } else {
        const teste = document.querySelector('.botaoPedido');
        teste.innerHTML="teste"; 
       
        const embacar = document.querySelector('.revisarPedido');
        embacar.classList.remove('escondido');

        /*const sumir = document.querySelector('.main');
        sumir.classList.add('escondido');*/

        }
} 



