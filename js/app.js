let quantidadeAlugados = 0;

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    let quantidadeAlugados = document.querySelectorAll('.dashboard__item__img--rented').length + 1;

    if(imagem.classList.contains('dashboard__item__img--rented')){
        let confirmacaoDevolucao = confirm('Deseja devolver este jogo?');
        if(!confirmacaoDevolucao) return;
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
        quantidadeAlugados = quantidadeAlugados - 2;
    }else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }

    console.log(`Quantidade de jogos alugados: ${quantidadeAlugados}`);
}

quantidadeAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
console.log(`Quantidade de jogos alugados: ${quantidadeAlugados}`);