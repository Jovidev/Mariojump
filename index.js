const mario = document.querySelector('.mario');

const pipe = document.querySelector('.pipe');

const clouds = document.querySelector('.clouds');


function reset(){
   document.getElementById('resetGame').reset();
    
}

const jump = () =>{
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')

    }, 500);
}

const loop = setInterval(()=>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    console.log(marioPosition);

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'nome';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'nome';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src= 'game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clouds.style.animationPlayState = 'paused';        
        

        clearInterval(loop)

    }
}, 10)


document.addEventListener('keydown', jump)