    alert('Bem vindo ao jogo do número secreto!');
    let numeroSecreto = parseInt(Math.random() * 10 + 1);
    let chute;
    let tentativas = 1; 
    //while significa que vai acontecer um loop até atingir o resultado.
    while (chute != numeroSecreto) {
        chute = prompt('Adivinhe o número secreto, entre 1 e 100 :)');
        // If sigfnifica "SE" se chute for igual ao numeroSecreto, você acertou.
        if (chute == numeroSecreto) {  
            break
        } else { 
            if (chute > numeroSecreto) {
                alert (`O número secreto é menor que esse ${chute} XD`);
            } else {
                alert (`O número secreto é maior que esse ${chute} XD`);
            }// Quando adiciona a váriavel o (++) ele atribuira +1.
            tentativas++;
        } 
    }
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Parabêns, você acertou o numero secreto! com ${tentativas} ${palavraTentativas} (${numeroSecreto})`);   
