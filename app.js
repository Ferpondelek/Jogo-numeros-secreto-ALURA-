let listaNumerosSorteados = [];
let numeroLimite = 10;
let numSecreto = gerarNumAleatorio();
let tentativas = 1;

function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute==numSecreto) {   
        ExibirTextoNaTela('h1','Acertou');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}` ;
        ExibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if(chute> numSecreto) {
            ExibirTextoNaTela('p','O número secreto é menor');  
        }else {
            ExibirTextoNaTela('p','O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function ExibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto ;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial() {
    ExibirTextoNaTela('h1','Jogo do número secreto');
    ExibirTextoNaTela('p','Escolha um número entre 1 e 10 ');
}

exibirMensagemInicial();

function gerarNumAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtdElementosNaLista = listaNumerosSorteados.length;
    if(qtdElementosNaLista==numeroLimite ) {
        listaNumerosSorteados = [];
    }
    if(listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumAleatorio();
    }else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numSecreto = gerarNumAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);


}