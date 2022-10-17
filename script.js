let habilitarBotao = document.querySelectorAll('.borda-selecao').length;
let verificarPrato = document.querySelector('.prato .borda-selecao');
let verificarBebida = document.querySelector('.bebida .borda-selecao');
let verificarSobremesa = document.querySelector('.sobremesa .borda-selecao');
let selecaoCompleta=0;
let titulos = [],precos = [];

/*const precoTotal = */

function adicionarIcone(check){
    console.log(check);
    const selecionado= document.querySelector(".prato .borda-selecao .icone");
    if (selecionado !== null){
  console.log(selecionado);
  /*alert("entrou no if")*/
     /*selecionado.classList.add("escondido");*/
     selecionado.classList.remove("icone");
}
selecionado.classList.remove("escondido");
selecionado.classList.add("icone");
   /*selecionado.classList.remove("escondido")*/;
}

function adicionarBorda_Prato(selecionado, check){

    console.log(selecionado);
    
    const selecionadoAnteriormente = document.querySelector(".prato .borda-selecao");
     
    if (selecionadoAnteriormente !== null){
    console.log(selecionadoAnteriormente);
     selecionadoAnteriormente.classList.remove("borda-selecao");
    }
   
	selecionado.classList.add("borda-selecao");
    verificarPrato = document.querySelector('.prato .borda-selecao');
    habilitarBotao = document.querySelectorAll('.borda-selecao').length;

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

function cancelar(){
    const embacar = document.querySelector('.revisarPedido');
    embacar.classList.add('escondido');   
     /*Vai selecionar todos os itens com a borda e excluir da lista o nome e o preço*/  
    const selecoes = document.querySelectorAll(".borda-selecao");
        for(let i = 0; i < selecoes.length; i++){
            const titulo = selecoes[i].querySelector(".nomePBS").innerText;
            const precoNF = selecoes[i].querySelector(".precoPBS").innerText;
            titulos.pop(titulo);
            precos.pop(precoNF.slice(3));
}
}

/*Ao clicar no botão, ele irá verificar se todos os itens foram marcados. Se há algum item faltando, nada acontece. Caso contrário, segue para a próxima página*/ 
function disponibilizarBotao(disponivel){
    if (verificarPrato === null || verificarBebida=== null || verificarSobremesa=== null ){
       /* alert("Vc deve escolher pelo menos um item de cada categoria! Vai ter venda casada sim!!! Quem mandou não aprender cozinhar?! Se não gostou:  \n @drfran  \n @seusdireitos \n Procon: 151");*/
       document.getElementById("botao").disabled =true;
    } 
    
    else {
        const embacar = document.querySelector('.revisarPedido');
        embacar.classList.remove('escondido');

        /*Vai selecionar todos os itens com a borda e adicionar na lista o nome e o preço*/ 
        const selecoes = document.querySelectorAll(".borda-selecao");

        for(let i = 0; i < selecoes.length; i++){
            const titulo = selecoes[i].querySelector(".nomePBS").innerText;
            const precoNF = selecoes[i].querySelector(".precoPBS").innerText;
            titulos.push(titulo);
            precos.push(precoNF.slice(3));
        }

    /*Coloca o nome/preço do item selecionado no lugar adequado na revisão*/ 
    const confirmacaoItens = document.querySelectorAll(".pedido");
    for(let i = 0; i < confirmacaoItens.length; i++){
        confirmacaoItens[i].querySelector(".item").innerText = titulos[i];
        confirmacaoItens[i].querySelector(".preco").innerText = precos[i];
    }

    /*Invoca a função somaItens*/ 
    const precoTotal = somaItens(precos);

    /*Coloca o valor da soma*/ 
    document.querySelector(".valorTotal").innerText = precoTotal;
   

        }
} 

function somaItens(precos){

    soma = 0;
    for(let i=0;i < precos.length; i++){
        soma += Number(precos[i].replace(",","."));
        /*A função acima pega o preço que está na posição i, substitui a "," por "." e converte em número*/ 
    }
    return soma.toFixed(2).replace(".",",");
    /*retorna a soma com duas casas decimais, substituindo "." por ","*/
}

function mensagem(){
    const nome = prompt("Insira seu nome:");
    const endereco = prompt("Insira seu endereço:");   

    mensagem=`Olá, gostaria de fazer o pedido:
- Prato: ${titulos[0]}
- Bebida: ${titulos[1]}
- Sobremesa: ${titulos[2]}
Total: R$ ${soma.toFixed(2).replace(".",",")}
        
Nome: ${nome}
Endereço: ${endereco}`
   
    const encodedMessage = encodeURIComponent(mensagem);
    const url = `https://wa.me/5561999599427?text=${encodedMessage}`;
    window.open(url,"_blank");


}