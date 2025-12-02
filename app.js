const listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
listaNumerosSorteados.push(numeroSecreto);
let tentativas = 1;
let numeroChutes = 5;


exibirMensagemInicial();
function verificarChute() {  
    const  chute = document.querySelector('input').value;     

    if(chute =='') {         
        exibirTextoNaTela('p',`Vc não informou nenhum número :( `);        
        return 
    } 
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Vc descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p',mensagemTentativas);
        buttonsOnOffDisabled(true,false);       

    } else { 
        let palavraTentativa = (numeroChutes-tentativas) > 1 ? 'tentativas' : 'tentativa';
        if (chute > numeroSecreto) { 

            let mensagemMenor = `O numero secreto é menor, vc tem ${numeroChutes-tentativas} ${palavraTentativa}`;
            exibirTextoNaTela('p',mensagemMenor);   
        } else { 
            let mensagemMaior = `O numero secreto é maior, vc tem ${numeroChutes-tentativas} ${palavraTentativa}`;
            exibirTextoNaTela('p',mensagemMaior);  
        }
        tentativas++;
        if (tentativas == 6) {           
            let mensagemFimTentativas = `Voce usou as ${numeroChutes} tentativas disponíveis ;(`;
            exibirTextoNaTela('p',mensagemFimTentativas);
            buttonsOnOffDisabled(true,false);                     
        } else { 
            limparCampo();
        }        
    }
}

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag); // seleciona a tag no documento 
    campo.innerHTML = texto;                 // insere o texto que quero no documento   
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosNaLista = listaNumerosSorteados.length;
    if (quantidadeElementosNaLista == numeroLimite) {
        listaNumerosSorteados = [];        
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();        
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;        
    }      
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
    buttonsOnOffDisabled(false,true);    // desabilita ou habilita os botões do jogo.    
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do numero secreto');
    exibirTextoNaTela('p','escolha um numero entre 01 e 10');    
}

function buttonsOnOffDisabled (acaoChute,acaoReiniciar) { 
    // modifica o atrributo disabled, ligando ou desligando os botões
   

    const btnChute =  document.getElementById('chute'); 
    
    btnChute.disabled = acaoChute; 
    const btnReiniciar =  document.getElementById('reiniciar');
    btnReiniciar.disabled = acaoReiniciar;         
}