document.addEventListener('DOMContentLoaded', function() {

    var adicaos = document.querySelector('#adicao') 
    var subtracaos = document.querySelector('#subtracao')
    var multiplicacaos = document.querySelector('#multiplicacao')
    var divisaos = document.querySelector('#divisao')

    var botoes = document.querySelectorAll('.botao')

    botoes.forEach(botao => {
        botao.addEventListener('click', function(){
            //remove a classe 'clicado' de todos os botões
            botoes.forEach(b => b.classList.remove('clicado'))
            //adiciona a classe 'clicado' ao botão clicado
            this.classList.add('clicado')
        })
    });
})

