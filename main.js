
function escolha(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    historia.classList.add('story');
    let proximo = 2
    if (opcao === 1) {
        historia.innerHTML = "À medida que seus olhos se ajustam à escuridão, você percebe que está em uma caverna. ";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">▶</button>
        `;
    } 
}
function escolha2(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    historia.classList.add('story');
    let proximo = 3
    if (opcao === 1) {
        historia.innerHTML = "Ao seu lado, há um velho, encostado em uma parede de pedra, com as mãos e os pés acorrentados. Ele te observa com olhos arregalados, a respiração rápida e irregular.";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">▶</button>
        `;
    }
}

function escolha3(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    let proximo = 4
    if (opcao === 1) {
        historia.innerHTML = "Quando seus olhares se encontram, você quase salta de susto.";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">▶</button>
        `;
    }
}

function escolha4(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    let proximo = 5
    if (opcao === 1) {
        historia.innerHTML = "VOCÊ... VOCÊ TEM QUE SAIR DAQUI! AGORA! Se não sair, perderá sua liberdade para sempre! O velho grita...";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">▶</button>
        `;
    }
}
function escolha5(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    let proximo = 6
    if (opcao === 1) {
        historia.innerHTML = "A sensação de urgência é insuportável. O velho parece saber algo que você não entende, mas, ao mesmo tempo, não há tempo a perder. O que fazer?";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">▶</button>
        `;
    }
}
function escolha6(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    let proximo = 7
    if (opcao === 1) {
        historia.innerHTML = "O que fazer?";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">Sair correndo da caverna</button>
            <button onclick="escolha${proximo}(2)">Tentar soltar o velho acorrentado</button>
            <button onclick="escolha${proximo}(3)">Questionar o velho</button>
        `;
    }
    
}
function escolha7(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    let proximo = 8
    if (opcao === 1) {
        historia.innerHTML = "O medo é maior que a dúvida. Você decide que, independentemente do que ele tenha dito, a única coisa que importa é sair dali o mais rápido possível. Talvez a resposta esteja em fugir.";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">▶</button>
        `;
    }else if (opcao === 2) {
        historia.innerHTML = "Diga-me o que eu devo fazer? por que estou aqui? me responda... O velho olha para você e diz: Você não deve saber mais... não agora... é melhor fugir. Eu... já fiz o que pude. Você tem uma chance de sair, ainda tem. Não se perca aqui, como eu...";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(2)">▶</button>
        `;
    }
    else if (opcao === 3) {
        historia.innerHTML = "Você não deve saber mais... não agora... é melhor fugir. Eu... já fiz o que pude. Você tem uma chance de sair, ainda tem. Não se perca aqui, como eu...;"
        choices.innerHTML = `
            <button onclick="escolha${proximo}(3)">▶</button>
        `;
    }
    
}
function escolha8(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    let proximo = 9
    if (opcao === 1) {
        historia.innerHTML = "O medo pulsa dentro de você, e o desespero toma conta. Sem pensar, você dá as costas ao velho, ignorando seus gritos de advertência.";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)"></button>
        `;
    }else if (opcao === 2) {
        historia.innerHTML = "O medo pulsa dentro de você, e o desespero toma conta. Sem pensar, você dá as costas ao velho, ignorando seus gritos de advertência.";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">▶</button>
        `;
    }
    else if (opcao === 3) {
        historia.innerHTML = "Com o coração acelerado e a mente em turbilhão, você se afasta dele, ignorando suas súplicas. O medo de ser pego, de ficar preso nesse lugar sem respostas, é maior que qualquer dúvida que ainda possa ter. Você começa a correr pela caverna, as paredes frias e úmidas passando rapidamente à sua frente.";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">▶</button>
        `;
    }
    
}

function escolha9(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    let proximo = 10
    if (opcao === 1) {
        historia.innerHTML = "À sua frente, um grupo de pessoas está reunido. São cinco, todas com olhares sérios e desconfiados, vestidos com roupas simples. O líder do grupo, um homem alto com uma cicatriz no rosto, te observa com atenção. Ele tem uma faca pendurada no cinto.";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">▶</button>
        `;
    }
    
}

function escolha10(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    let proximo = 11
    if (opcao === 1) {
        historia.innerHTML = "Decida:";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">Pedir ajuda</button>
            <button onclick="escolha${proximo}(2)">Perguntar onde você está</button>
        `;
    }
}
function escolha11(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    let proximo = 12
    if (opcao === 1) {
        historia.innerHTML = "Eu... eu não sei o que está acontecendo. Fui preso em uma caverna, havia um homem velho lá, acorrentado, e algo estava me perseguindo... Eu preciso de ajuda, por favor. Não sei o que fazer ou para onde ir.;"
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">▶</button>
        `;
    }else if (opcao === 2) {
        historia.innerHTML = "Você olha para o grupo e, com um tom firme, mas cheio de incertezas, pergunta: Onde exatamente estamos? Que lugar é esse? Eu… eu estava em uma caverna, e então corri para cá. Mas onde estou? O que é este lugar?";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(2)">▶</button>
        `;
    }
    
}

function escolha12(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    let proximo = 13
    if (opcao === 1) {//1 e 4
        historia.innerHTML = "O homem da cicatriz te observa, sua expressão permanece séria, mas parece notar a sinceridade em seu pedido. Ele troca um olhar rápido com os outros membros do grupo antes de responder com cautela. Ajuda tem seu preço, mas veja bem aqui é a caverna das almas, O labirinto coleta as almas das pessoas, na verdade, é uma espécie de caverna subterrânnea que aqueles que não conseguem sair nunca mais voltam para a realidade. Você deve ter chegado até aqui por meio do poço que existe lá em cima, no mundo normal, então continue procurando uma saida e cuidado com a sombra.";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">▶</button>
        `;
    }else if (opcao === 2) {
        historia.innerHTML = "O líder, ainda com um olhar desconfiado, responde: Você está no Labirinto das Almas. Não é um lugar que você vai encontrar em qualquer mapa. Aqui, alguns de nós tentamos sobreviver às mesmas coisas que você deve ter visto na caverna. ";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(2)">▶</button>
        `;
    }

}

function escolha13(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    let proximo = 14
    if (opcao === 1) {//1 e 4
        historia.innerHTML = "Ouça jovem, você deve procurar a saida o mais rapido possivel, continue o caminho...";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">▶</button>
        `;
    }else if (opcao === 2) {
        historia.innerHTML = "O labirinto coleta as almas das pessoas, na verdade, é uma espécie de caverna subterrânnea que aqueles que não conseguem sair nunca mais voltam para a realidade. Você deve ter chegado até aqui por meio do poço que existe lá em cima, no mundo normal, então continue procurando uma saida e cuidado com a sombra";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(2)">▶</button>
        `;}
    
}
function escolha14(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    let proximo = 15
    if (opcao === 1) {//1 e 4
        historia.innerHTML = "Você segue em frente, os passos ecoando pelas paredes rochosas. A tensão aumenta, e a sensação de estar sendo observado nunca se dissipa. O ar fica mais pesado à medida que você avança, mas você sabe que não pode parar agora. A saída está lá acima, e você precisa encontrá-la a todo custo.";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">▶</button>
        `;
    }else if (opcao === 2) {
        historia.innerHTML = "Você continua, Enquanto caminha, você sente uma presença atrás de você. Algo se move nas sombras, mas quando olha, não vê nada. Você respira fundo, decidindo seguir em frente com mais cautela. Cada passo pode ser o último.";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">▶</button>
        `;}
    
}

function escolha15(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    let proximo = 16
    if (opcao === 1) {//1 e 4
        historia.innerHTML = "Você encontra um vendedor no labirinto, ele te oferece uma bebida, o que você faz:";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">Aceitar Bebida</button>
            <button onclick="escolha${proximo}(2)">Recusar Bebida</button>
        `;
    }
    
}



function escolha16(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    let proximo = 17
    if (opcao === 1) {//1 e 4
        historia.innerHTML = "O vendedor sorri de forma enigmática enquanto oferece a bebida. Algo no fundo da sua mente te diz para ter cautela, mas a sede e a curiosidade falam mais alto. Você aceita a bebida, e a sensação de frescor rapidamente invade seu corpo. Contudo, algo parece estranho... sua visão começa a turvar, e você sente um peso crescente em sua mente.";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">▶</button>
        `;
    }else if (opcao === 2) {
        historia.innerHTML = "Você hesita, olhando para a bebida que o vendedor oferece. Algo não parece certo, e uma voz interna te avisa para não confiar nele. Você decide recusar educadamente, dizendo que não precisa da bebida. O vendedor te observa com um olhar curioso, mas, sem dizer uma palavra, ele desaparece nas sombras, deixando você com um arrepio na espinha.";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(2)">▶</button>
        `;
    }
    
}


function escolha17(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    let proximo = 18
    if (opcao === 1) {//1 e 4
        historia.innerHTML = "Você acorda de um sono profundo, sentindo-se grogue e com a mente confusa. O labirinto agora parece ainda mais distorcido, como se a bebida tivesse alterado sua percepção da realidade. Você se levanta, tentando dissipar a sensação de vertigem. À medida que caminha, seus olhos começam a focar, e logo você se depara com um homem idoso sentado em uma pedra, com uma expressão pensativa. Ele te observa, sem dizer uma palavra.";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">▶</button>
        `;
    }else if (opcao === 2) {
        historia.innerHTML = "Você continua o caminho, tentando manter a calma após a recusa ao vendedor. O labirinto parece interminável, mas logo você se depara com um homem idoso, sentado em uma pedra, perdido em seus pensamentos. Ele te observa com um olhar profundo e sereno, como se soubesse algo que você ainda não entende. Você sente uma sensação estranha, como se fosse observado por mais olhos do que os que consegue ver.";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(2)">▶</button>
        `;}
    
}


function escolha18(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    let proximo = 19
    if (opcao === 1) {//1 e 4
          historia.innerHTML = "O filósofo te observa com um sorriso enigmático. 'A verdade do labirinto não está nas suas pernas, mas na sua mente', ele diz, enquanto se levanta calmamente. 'Para seguir adiante, você deve resolver o enigma que propus. Aceita?'. Ele te olha com uma calma imperturbável, esperando sua resposta.";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">Aceitar o enigma</button>
            <button onclick="escolha${proximo}(2)">Ignorar o enigma e seguir em frente</button>
        `;
    }else if (opcao === 2) {
        historia.innerHTML = "O filósofo, notando sua hesitação, suspira e diz: 'Você já tomou a decisão mais importante, mas ela não será fácil de reverter. O labirinto exige mais do que simples coragem'. Ele se levanta lentamente e, sem mais palavras, segue adiante, como se estivesse aguardando por algo. O caminho à frente se abre, mas um sentimento de incerteza te acompanha. Gostaria de um enigma?";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">Aceitar o enigma</button>
            <button onclick="escolha${proximo}(2)">Ignorar o enigma e seguir em frente</button>
        `;
    
}


}
function escolha19(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    let proximo = 20;
    
    if (opcao === 1) {
        historia.innerHTML = "O filósofo começa a falar, revelando o enigma: 'Eu sou leve como uma pena, mas nenhum homem pode me carregar por muito tempo. O que sou eu?' Você tenta resolver rapidamente, sabendo que a resposta pode ser a chave para escapar. Sua mente trabalha freneticamente.";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">Respirar</button>
            <button onclick="escolha${proximo}(2)">Sombra</button>
            <button onclick="escolha${proximo}(3)">Pensamento</button>
        `;
    } else if (opcao === 2) {
        historia.innerHTML = "Você decide seguir seu próprio caminho, ignorando o filósofo e sua oferta de enigmas. O labirinto à sua frente continua sem fim, e uma sensação de desconforto se instala. Você sente que está se distanciando da verdade, mas não sabe o que está à frente. O som distante de algo se movendo te deixa em alerta.";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(4)">▶</button>
            
        `;
    }
}

function escolha20(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    let proximo = 21;

    if (opcao === 1) { // Resposta ao enigma: "Respirar"
        historia.innerHTML = "'Você acertou', diz o filósofo, com um sorriso lento. 'Agora você compreende que a verdade está no simples, no que não podemos segurar por muito tempo, mas que precisamos para viver.' Ele te aponta um caminho à frente, um corredor estreito iluminado por uma luz suave. 'Siga em frente, mas lembre-se, o labirinto nunca é o que parece.'";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">Seguir pelo corredor iluminado</button>
        `;
    } else if (opcao === 2 || opcao === 3) { // Resposta ao enigma: "Sombra"
        historia.innerHTML = "O filósofo te observa por um momento e, com uma expressão séria, diz: 'Você falhou, mas a resposta ainda está diante de você. O labirinto pode enganar, mas a verdade sempre está ao alcance de quem procura com sinceridade.' Ele desaparece na escuridão, deixando você sozinho, sem mais pistas, no mesmo ponto do caminho.";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(2)">Continuar explorando sem mais respostas</button>
        `;
    }
    else if (opcao === 4) { // Resposta ao enigma: "Sombra"
        historia.innerHTML = "Agora não tem mais volta, a sombra da caverna rouba a sua alma, você passou muito tempo em busca da saida, se tivesse aceitado o enigma... poderia ter sido diferente, mas você perdeu sua liberdade para sempre...";
        choices.innerHTML = `
            
            <button onclick="escolha${proximo}(3)">▶</button>
        `;
    }
}




function escolha21(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    let proximo = 22
    if (opcao === 1) { // Seguir pelo corredor iluminado
        historia.innerHTML = "O corredor parece se estender infinitamente, e a luz suave parece ter um poder hipnótico. Ao avançar, você começa a sentir uma sensação estranha, como se o ambiente estivesse mudando à sua volta, moldando-se à medida que você caminha. O ar se torna mais denso, e o som de suas próprias respirações se torna o único ruído que você ouve.";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">Continuar caminhando até o fim</button>
        `;}
        else if (opcao === 2) { // Investigar mais ao redor
        historia.innerHTML = "Você decide não seguir o caminho iluminado e começa a explorar os arredores. À medida que caminha para a escuridão, encontra uma parede com inscrições antigas que parecem te observar. O silêncio é absoluto, mas uma sensação de ser observado cresce dentro de você. De repente, um som de algo se movendo começa a surgir das sombras.";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(2)">Investigar as inscrições</button>
        `;}

        else if (opcao === 3) {
            historia.innerHTML = "Game Over...";
            choices.innerHTML = `
            <button onclick="location.reload()">Tentar novamente</button>
               
    
        `;}
}
function escolha22(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    let proximo = 23;
    
    if (opcao === 1) { // Continuar caminhando até o fim
        historia.innerHTML = "Você continua a caminhar pelo corredor iluminado, sentindo que a tensão está prestes a quebrar. A cada passo, o som das suas próprias respirações parece ecoar com mais intensidade, até que, finalmente, você chega a uma grande porta, que se abre diante de você com um estalo. A luz intensa ofusca sua visão por um momento, mas você percebe que finalmente encontrou a saída. O labirinto ficou para trás, e a liberdade está ao seu alcance.";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">Sair para a liberdade</button>
        `;
    } else if (opcao === 2) { // Investigar as inscrições
        historia.innerHTML = "Você se aproxima das inscrições na parede e começa a estudá-las. As palavras antigas parecem se mover, como se estivessem vivas, e você começa a entender o significado delas. Elas revelam um caminho oculto para a saída. Você sente uma sensação de alívio enquanto as paredes ao seu redor começam a se abrir, revelando uma passagem secreta. Você corre para ela, finalmente encontrando a saída do labirinto.";
        choices.innerHTML = `
            <button onclick="escolha${proximo}(1)">Escapar para a liberdade</button>
        `;
    }
}

function escolha23(opcao) {
    let historia = document.getElementById('story');
    let choices = document.getElementById('choices');
    let proximo = ' ';
    
    if (opcao === 1) { // Continuar caminhando até o fim
         historia.innerHTML = "Você finalmente encontrou a saída. O labirinto, com todos seus enigmas e desafios, ficou para trás. A luz do dia brilha sobre você, e você sente o vento fresco no rosto. Você está livre, mas algo dentro de você sabe que o labirinto sempre estará à espreita, esperando por aqueles corajosos o suficiente para enfrentá-lo novamente.";
    choices.innerHTML = `
        <button onclick="location.reload()">Jogar novamente</button>
    `;
    } 
}