// variaveis
let placarpc = 0;
let placarplayer = 0;


// definir quem ganhou
function win(option){
    //saber oque o jogador selecionou
    let playerOption = option;
    //randomizar a jogada do computador
    let computerOption = Math.floor(Math.random()*(2 - 0 +1));

    let caminhoDaImagemplayer = option + ".png";
    let caminhoDaImagempc = computerOption + ".png";

    let computerImage = document.getElementById('computerop')
    let playerImage = document.getElementById('playerop')

    let result = document.getElementById('result');

    result.style.display = 'block'
    playerImage.setAttribute("src", caminhoDaImagemplayer);
    computerImage.setAttribute("src", caminhoDaImagempc);


    document.getElementById('cardsArea').style.display = 'none'
    if(playerOption != computerOption){
        //confere se o player ganhou
        if (playerOption == 1 && computerOption == 0 ||
            playerOption == 0 && computerOption == 2 ||
            playerOption == 2 && computerOption == 1){
                placarplayer = placarplayer + 1;
                document.getElementById('playerScore').innerHTML = placarplayer
                result.innerHTML = 'YOU WIN'
            }else{
                placarpc = placarpc + 1;
                document.getElementById('computerScore').innerHTML = placarpc
                result.innerHTML = 'YOU LOSE'
            }
    }else{
        result.innerHTML = 'EMPATE'
    }
    //retorna os status originais
    setTimeout(function () {
        result.innerHTML = '';
        result.style.display = 'none'
        playerImage.setAttribute("src", "");
        computerImage.setAttribute("src", "");
    }, 1000);
    setTimeout(function() {
        document.getElementById('cardsArea').style.display = 'flex'
    }, 1200);
    
}
