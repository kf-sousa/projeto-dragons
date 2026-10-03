/*
OBJETIVO - quando clicarmos no botao temos que mostrar a imagem de fundo correspondente
  - passo 1: dar um jeito de pegar o elemento HTML dos botoes
  - passo 2: dar um jeito de identificar o clique do usuario
  - passo 3: desmarcar o botao selecionado anterior
  - passo 4: marcar o botao clicado como se estivesse selecionado
  - passo 5: esconder a imagem anteriormente selecionado
  - passo 6: fazer aparecer a imagem correspondente ao botao clicado
  - passo 7: esconder a informação do dragão anteriormente selecionado
  - passo 8: mostrar a informação do dragão referente ao botao clicado
*/

//passo 1
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes =  document.querySelectorAll(".informacoes");

//passo 2
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //passo 3
        //exemplo de refatoração
        desativarBotaoSelecionado();

        //passo 4
        botao.classList.add("selecionado");

        //passo 5
        const imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa");
        
        //passo 6
        imagens[indice].classList.add("ativa");

        //passo 7
        const informacoesAtiva = document.querySelector(".informacoes.ativa");
        informacoesAtiva.classList.remove("ativa");

        //passo 8
        informacoes[indice].classList.add("ativa");

    });
});


//exemplo de refatoração
function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");

    botaoSelecionado.classList.remove("selecionado");
}
