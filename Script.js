const dino = document.querySelector('.dino'); // Serve como um armario para selecionar em um metodo de documento(um tipo de biblioteca). Constante não pode ser sobre esrita
const background = document.querySelector('.background');
let position = 0; // 'let' usado quando vai modificar a variavel
let isJumping = false;
//console.log(dino); //Permite visualizar o javascript console o que está nas variaveis e entender melhor

// Condição de pulo
function handleKeyUp(event) {   // Função a executar: precionar a tecla espaço 
    if (event.keyCode === 32) { 
        if (!isJumping) {
            jump();
        }  
    }
}
// Pulo
function jump() {   // Função para pular
    
    isJumping = true;

// Tamanho do pulo
    let upInterval = setInterval(() => {    // setInterval serve para definir intervalos
        if (position >= 200) {
            clearInterval (upInterval);

// Descer
            let downInterval = setInterval(() => {
                if (position <= 0){
                    clearInterval (downInterval);
                    isJumping = false;
                } else {
                position -= 20;
                dino.style.bottom = position + 'px'
                }
            }, 20);

// Subir          
        }else {     
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);  
}

// Cria cactos
function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosistion = 2000;
    let randomTime =Math.random() * 6000;

    console.log(randomTime);

    cactus.classList.add('cactus');
    cactus.style.left = 2000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval (() => {
        if (cactusPosistion < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);

        // Game over
        }else if (cactusPosistion >0 && cactusPosistion < 60 && position < 60) { 
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">You Lose</h1>'
        } else {
            cactusPosistion -= 10;
            cactus.style.left = cactusPosistion + 'px';
        }
    }, 20);
    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp); 