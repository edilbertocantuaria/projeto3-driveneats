function adicionarBorda(selecionado){

    const selecionadoAnteriormente = document.querySelector("borda-selecao");
    if (selecionadoAnteriormente !== null){
    selecionadoAnteriormente=classList.remove("borda-selecao");
    document.getElementById("iconeSelecao").style.opacity="0";
    }
    const borda = document.querySelector(".containerItem");
	borda.classList.add("borda-selecao");
    document.getElementById("iconeSelecao").style.opacity="1";
}

