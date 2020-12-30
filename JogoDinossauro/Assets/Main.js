const dino = document.querySelector(".dino");
const background = document.querySelector('.background');
let isJumping = false;
let position =0;

function handleKeyUp(event){
    if(event.keyCode === 32){
        if(!isJumping){
        jump();
    }
  }
}

function jump(){

    isJumping = true;
    let upInterval = setInterval(() => {
        if(position >=150){
            clearInterval(upInterval);
            //dino descendo

            let downInterval = setInterval(() => {
                if(position <=0){
                    clearInterval(downInterval)
                    isJumping = false;
                }else{
                    position -=20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        }else{
            position +=20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}
function createCactus(){ //cria o cactus e move para a esquerda
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let ramdomTime = Math.random() * 6000; //faz cactus surgirem ramdomicamente

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if(cactusPosition < -60){ //faz o cactus sumir
            clearInterval(leftInterval);
            background.removeChild(cactus)
        } else if( cactusPosition > 0 && cactusPosition < 60 && position < 60){
            //game over
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Você perdeu!</h1>'
        }
        else{
        cactusPosition-=10;
        cactus.style.left =  cactusPosition + "px";
        }
    }, 20);
    setTimeout(createCactus,ramdomTime);//cria novos cactus na tela
}
createCactus();
document.addEventListener('keyup',handleKeyUp);