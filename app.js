let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

console.log(numeroSecreto);

function verificarChute() {  
    const  chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Vc descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p',mensagemTentativas); 
        document.getElementById('reiniciar').removeAttribute('disabled');  // Habilita o botão novo jogo   
    } else { 
        if (chute > numeroSecreto) { 
            exibirTextoNaTela('p','O numero secreto é menor');   
        } else { 
            exibirTextoNaTela('p','O numero secreto é maior');  
        }
        tentativas++;
        limparCampo();
    }
}

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag); // seleciona a tag no documento 
    campo.innerHTML = texto;                 // insere o texto que quero no documento
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);    
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';    
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1 ;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true)  // desabilita o botão novo jogo
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do numero secreto');
    exibirTextoNaTela('p','escolha um numero entre 01 e 10');    
}

///**************** ITERAÇÃO FOREACH VARIOS INPUTS*******************

   // const inputs = document.querySelectorAll('input');
   // Criando um array para armazenar os valores
   // const valores = [];

   // Iterando sobre os inputs e adicionando seus valores ao array
   //inputs.forEach(input => {
   //   valores.push(input.value);
   //});

   //console.log(valores[1] == numeroSecreto )
   // Exibindo os valores no console
   //console.log(valores);   
   // console.log(numeroSecreto == chute);      
   // console.log(chute);



