let habilitarBotao = document.querySelectorAll(".borda-selecao").length;
let verificarPrato = document.querySelector(".prato .borda-selecao");
let verificarBebida = document.querySelector(".bebida .borda-selecao");
let verificarSobremesa = document.querySelector(".sobremesa .borda-selecao");
let selecaoCompleta = 0;
let titulos = [],
  precos = [];


function adicionarBorda_Prato(selecionado){
    const selecionadoAnteriormente = document.querySelector(".containerItem.prato.borda-selecao");    
    if (selecionadoAnteriormente !== null){
     selecionadoAnteriormente.classList.remove("borda-selecao");
    } 
  
    selecionado.classList.add("borda-selecao");
    
    verificarPrato = document.querySelector('.prato .borda-selecao');
    habilitarBotao = document.querySelectorAll('.borda-selecao').length;
    
}

function adicionarIcone_Prato(selecionado){
  const iconeSelecionadoAnteriormente = document.querySelector(".containerItem.prato.borda-selecao .icone");
  if (iconeSelecionadoAnteriormente!== null){
    iconeSelecionadoAnteriormente.classList.add("escondido-check");
  }
  selecionado.classList.remove("escondido-chek");
}


function adicionarBorda_Bebida(selecionado) {
    console.log(selecionado);
  
    const selecionadoAnteriormente = document.querySelector(
      ".bebida .borda-selecao"
    );
  
    if (selecionadoAnteriormente !== null){
    console.log(selecionadoAnteriormente);
     selecionadoAnteriormente.classList.remove("borda-selecao");
    }
  
    selecionado.classList.add("borda-selecao");
  
    verificarBebida = document.querySelector(".bebida .borda-selecao");
    habilitarBotao = document.querySelectorAll(".borda-selecao").length;
  }
  function adicionarIcone_Bebida(selecionado){
    const iconeSelecionadoAnteriormente = document.querySelector(".containerItem.bebida.borda-selecao .icone");
    if (iconeSelecionadoAnteriormente!== null){
      iconeSelecionadoAnteriormente.classList.add("escondido-check");
    }
    selecionado.classList.remove("escondido-chek");
  }
  
function adicionarBorda_Sobremesa(selecionado) {
    console.log(selecionado);
  
    const selecionadoAnteriormente = document.querySelector(
      ".sobremesa .borda-selecao"
    );
  
    if (selecionadoAnteriormente !== null){
    console.log(selecionadoAnteriormente);
    selecionadoAnteriormente.classList.remove("borda-selecao");
    }
  
    selecionado.classList.add("borda-selecao");
  
  verificarSobremesa = document.querySelector(".sobremesa .borda-selecao");
    habilitarBotao = document.querySelectorAll(".borda-selecao").length;
  }
  function adicionarIcone_Sobremesa(selecionado){
    const iconeSelecionadoAnteriormente = document.querySelector(".containerItem.sobremesa.borda-selecao .icone");
    if (iconeSelecionadoAnteriormente!== null){
      iconeSelecionadoAnteriormente.classList.add("escondido-check");
    }
    selecionado.classList.remove("escondido-chek");
  }
  

/*Altera o layout do bot??o para continuar fazendo o pedido*/

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
  /*Vai selecionar todos os itens com a borda e excluir da lista o nome e o pre??o*/

  const selecoes = document.querySelectorAll(".borda-selecao");
  for (let i = 0; i < selecoes.length; i++) {
    const titulo = selecoes[i].querySelector(".nomePBS").innerText;
    const precoNF = selecoes[i].querySelector(".precoPBS").innerText;
    titulos.pop(titulo);
    precos.pop(precoNF.slice(3));
  }
}

/*Ao clicar no bot??o, ele ir?? verificar se todos os itens foram marcados. Se h?? algum item faltando, nada acontece. Caso contr??rio, segue para a pr??xima p??gina*/

function disponibilizarBotao(disponivel) {
  if (
    verificarBebida === null ||
    verificarBebida === null ||
    verificarSobremesa === null
  ) {
    /* alert("Vc deve escolher pelo menos um item de cada categoria! Vai ter venda casada sim!!! Quem mandou n??o aprender cozinhar?! Se n??o gostou:  \n @drfran  \n @seusdireitos \n Procon: 151");*/
    document.getElementById("botao").disabled = true;
  } else {
    const embacar = document.querySelector(".revisarPedido");
    embacar.classList.remove("escondido");

    /*Vai selecionar todos os itens com a borda e adicionar na lista o nome e o pre??o*/

    const selecoes = document.querySelectorAll(".borda-selecao");

    for (let i = 0; i < selecoes.length; i++) {
      const titulo = selecoes[i].querySelector(".nomePBS").innerText;
      const precoNF = selecoes[i].querySelector(".precoPBS").innerText;
      titulos.push(titulo);
      precos.push(precoNF.slice(3));
    }

    /*Coloca o nome/pre??o do item selecionado no lugar adequado na revis??o*/

    const confirmacaoItens = document.querySelectorAll(".pedido");
    for (let i = 0; i < confirmacaoItens.length; i++) {
      confirmacaoItens[i].querySelector(".item").innerText = titulos[i];
      confirmacaoItens[i].querySelector(".preco").innerText = precos[i];
    }

    /*Invoca a fun????o somaItens*/

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
    "Voc?? tem algum cupom de desconto?  \n\n\nPara fins did??ticos, digite (sem as aspas) 'cupom10off'  para ganhar 10% de desconto ou 'sou_proprietario' para ganhar 100% de desconto. Qualquer outro resultado deve ser inv??lido"
  );
 
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
    /*A fun????o acima pega o pre??o que est?? na posi????o i, substitui a "," por "." e converte em n??mero*/
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
    const endereco = prompt("Insira seu endere??o:");
  
    mensagem = `Ol??, gostaria de fazer o pedido:
  - Prato: ${titulos[0]}
  - Bebida: ${titulos[1]}
  - Sobremesa: ${titulos[2]}
  Total: R$ ${soma.toFixed(2).replace(".", ",")}
  _*Descontos: R$ ${desc.toFixed(2).replace(".", ",")}*_
  _*Final: R$ ${vf.toFixed(2).replace(".", ",")}*_
        
  Nome: ${nome}
  Endere??o: ${endereco}`;
  
    const encodedMessage = encodeURIComponent(mensagem);
    const url = `https://wa.me/5561999599427?text=${encodedMessage}`;
    window.open(url, "_blank");
  }
