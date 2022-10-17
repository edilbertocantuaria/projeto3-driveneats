let habilitarBotao = document.querySelectorAll(".borda-selecao").length;
let verificarPrato = document.querySelector(".prato .borda-selecao");
let verificarBebida = document.querySelector(".bebida .borda-selecao");
let verificarSobremesa = document.querySelector(".sobremesa .borda-selecao");

/*let verificarIconePrato = document.querySelector(".prato .borda-selecao .icone");
let verificarIconeBebida = document.querySelector(".bebida .borda-selecao .icone");
let verificarIconeSobremesa = document.querySelector(".sobremesa .borda-selecao .icone");*/

let selecaoCompleta = 0;
let titulos = [],
  precos = [];


/*function coringaPrato(coringa){
const  iconeSelecionadoPrato= document.querySelector(".prato .borda-selecao .icone");
 coriga = iconeSelecionadoPrato.classList.add("escondido");
 }*/

 /*function coringaBebida(coringa){
const  iconeSelecionadoBebida= document.querySelector(".bebida .borda-selecao .icone");
 coriga = iconeSelecionadoBebida.classList.add("escondido");
 }*/

/*function coringaSobremesa(coringa){
const  iconeSelecionadoSobremesa= document.querySelector(".prato .borda-selecao .icone");
 coriga = iconeSelecionadoSobremesa.classList.add("escondido");
 }*/
/*
 function adicionarIcone_Prato(check){
const selecionado= document.querySelector(".prato .borda-selecao .icone");
selecionado.classList.remove("escondido");
IconePrato = document.querySelector(".prato .borda-selecao .icone");
}

function adicionarIcone_Bebida(check){
    const selecionado= document.querySelector(".bebida .borda-selecao .icone");
    selecionado.classList.remove("escondido");
    verificarIconeBebida = document.querySelector(".bebida .borda-selecao .icone");
    }

    function adicionarIcone_Sobremesa(check){
        const selecionado= document.querySelector(".sobremesa .borda-selecao .icone");
        selecionado.classList.remove("escondido");
        verificarIconeSobremesa = document.querySelector(".sobremesa .borda-selecao .icone");
        }
*/
function adicionarBorda_Prato(selecionado){
    console.log(selecionado);
    const selecionadoAnteriormente = document.querySelector(".prato .borda-selecao");
    /*const iconeSelecionadoPrato = document.querySelector(".prato .borda-selecao .icone");*/


    if (selecionadoAnteriormente !== null){
    console.log(selecionadoAnteriormente);
     selecionadoAnteriormente.classList.remove("borda-selecao");
     /*iconeSelecionadoPrato.classList.remove("escondido");*/
    }

    selecionado.classList.add("borda-selecao");
    /*adicionarIcone_Prato();*/
    /*coringaPrato();*/
    /*iconeSelecionadoPrato.classList.add("escondido");*/

    verificarPrato = document.querySelector('.prato .borda-selecao');
    habilitarBotao = document.querySelectorAll('.borda-selecao').length;
    
}


function adicionarBorda_Bebida(selecionado) {
    console.log(selecionado);
  
    const selecionadoAnteriormente = document.querySelector(
      ".bebida .borda-selecao"
    );
  /*  const iconeSelecionadoBebida = document.querySelector(".bebida .borda-selecao .icone");*/
  
    if (selecionadoAnteriormente !== null){
    console.log(selecionadoAnteriormente);
     selecionadoAnteriormente.classList.remove("borda-selecao");
     /*iconeSelecionadoBebida.classList.remove("escondido");*/
    }
  
    selecionado.classList.add("borda-selecao");
  /*adicionarIcone_Bebida();
  iconeSelecionadoBebida.classList.add("escondido");*/

    verificarBebida = document.querySelector(".bebida .borda-selecao");
    habilitarBotao = document.querySelectorAll(".borda-selecao").length;
  }
  
function adicionarBorda_Sobremesa(selecionado) {
    console.log(selecionado);
  
    const selecionadoAnteriormente = document.querySelector(
      ".sobremesa .borda-selecao"
    );
  /* const iconeSelecionadoSobremesa = document.querySelector(".sobremesa .borda-selecao .icone");*/
  
    if (selecionadoAnteriormente !== null){
    console.log(selecionadoAnteriormente);
    selecionadoAnteriormente.classList.remove("borda-selecao");
     /*iconeSelecionadoSobremesa.classList.remove("escondido");*/
    }
  
    selecionado.classList.add("borda-selecao");
  /*adicionarIcone_Sobremesa();
  coringaSobremesa()*/
  /*iconeSelecionadoSobremesa.classList.add("escondido");*/

    verificarSobremesa = document.querySelector(".sobremesa .borda-selecao");
    habilitarBotao = document.querySelectorAll(".borda-selecao").length;
  }

/*Altera o layout do botão para continuar fazendo o pedido*/

function realizarPedido(apertado) {
  if (habilitarBotao == 3) {
    document.getElementById("botao").disabled = false;
    const pedido = document.querySelector(".botaoPedido");
    pedido.classList.add("botaoDisponivel");
    pedido.innerHTML = "Fechar pedido";
  }
}

function cancelar() {
  const embacar = document.querySelector(".revisarPedido");
  embacar.classList.add("escondido");
  /*Vai selecionar todos os itens com a borda e excluir da lista o nome e o preço*/

  const selecoes = document.querySelectorAll(".borda-selecao");
  for (let i = 0; i < selecoes.length; i++) {
    const titulo = selecoes[i].querySelector(".nomePBS").innerText;
    const precoNF = selecoes[i].querySelector(".precoPBS").innerText;
    titulos.pop(titulo);
    precos.pop(precoNF.slice(3));
  }
}

/*Ao clicar no botão, ele irá verificar se todos os itens foram marcados. Se há algum item faltando, nada acontece. Caso contrário, segue para a próxima página*/

function disponibilizarBotao(disponivel) {
  if (
    verificarPrato === null ||
    verificarBebida === null ||
    verificarSobremesa === null
  ) {
    /* alert("Vc deve escolher pelo menos um item de cada categoria! Vai ter venda casada sim!!! Quem mandou não aprender cozinhar?! Se não gostou:  \n @drfran  \n @seusdireitos \n Procon: 151");*/
    document.getElementById("botao").disabled = true;
  } else {
    const embacar = document.querySelector(".revisarPedido");
    embacar.classList.remove("escondido");

    /*Vai selecionar todos os itens com a borda e adicionar na lista o nome e o preço*/

    const selecoes = document.querySelectorAll(".borda-selecao");

    for (let i = 0; i < selecoes.length; i++) {
      const titulo = selecoes[i].querySelector(".nomePBS").innerText;
      const precoNF = selecoes[i].querySelector(".precoPBS").innerText;
      titulos.push(titulo);
      precos.push(precoNF.slice(3));
    }

    /*Coloca o nome/preço do item selecionado no lugar adequado na revisão*/

    const confirmacaoItens = document.querySelectorAll(".pedido");
    for (let i = 0; i < confirmacaoItens.length; i++) {
      confirmacaoItens[i].querySelector(".item").innerText = titulos[i];
      confirmacaoItens[i].querySelector(".preco").innerText = precos[i];
    }

    /*Invoca a função somaItens*/

    const precoTotal = somaItens(precos);
    document.querySelector(".valorTotal").innerText = precoTotal;

    const valorDesconto = cupomDesconto(precos);
    document.querySelector(".descontoTotal").innerText = valorDesconto;

    const totalDescontado = precoFinal(precos);
    document.querySelector(".valorFinal").innerText = totalDescontado;

    /*Coloca o valor da soma*/
  }
}

function cupomDesconto(precos) {
  const cupDesconto = prompt(
    "Você tem algum cupom de desconto?  \n\n\nPara fins didáticos, digite (sem as aspas) 'cupom10off'  para ganhar 10% de desconto ou 'sou_proprietario' para ganhar 100% de desconto. Qualquer outro resultado deve ser inválido"
  );
  /*alert("Vc digitou: " + cupDesconto);*/

  desc = 0;
  if (cupDesconto === "cupom10off") {
    desc = soma.toFixed(2) * 0.1;
  } else if (cupDesconto === "sou_proprietario") {
    desc = soma.toFixed(2) * 1;
  }

  return desc.toFixed(2).replace(".", ",");
}

function somaItens(precos) {
  soma = 0;
  for (let i = 0; i < precos.length; i++) {
    soma += Number(precos[i].replace(",", "."));
    /*A função acima pega o preço que está na posição i, substitui a "," por "." e converte em número*/
  }
  return soma.toFixed(2).replace(".", ",");
  /*retorna a soma com duas casas decimais, substituindo "." por ","*/
}

function precoFinal(precos) {
  vf = soma.toFixed(2) - desc.toFixed(2);
  return vf.toFixed(2).replace(".", ",");
}

function mensagem() {
    const nome = prompt("Insira seu nome:");
    const endereco = prompt("Insira seu endereço:");
  
    mensagem = `Olá, gostaria de fazer o pedido:
  - Prato: ${titulos[0]}
  - Bebida: ${titulos[1]}
  - Sobremesa: ${titulos[2]}
  Total: R$ ${soma.toFixed(2).replace(".", ",")}
        
  Nome: ${nome}
  Endereço: ${endereco}`;
  
    /*Acrescentando as seguintes linhas, a mensagem do whatsapp vai com o desconto e o valor final
  _*Descontos: R$ ${desc.toFixed(2).replace(".", ",")}*_
  _*Final: R$ ${vf.toFixed(2).replace(".", ",")}*_*
  */
  
    const encodedMessage = encodeURIComponent(mensagem);
    const url = `https://wa.me/5561999599427?text=${encodedMessage}`;
    window.open(url, "_blank");
  }
