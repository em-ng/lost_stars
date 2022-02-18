import Game from '/src/scripts/game';

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("gameView");
    const ctx = canvas.getContext('2d');
    const GAME_WIDTH = 900;
    const GAME_HEIGHT = 550;
    const music = new Audio("src/music/life-is-a-dream.mp3");
    const button = document.getElementById("unmuteButton");
    let musicState = false;
    // music.play();

    // function toggleMusic() {

    //     if (musicState === true) {
    //         // console.log(musicState)
    //         button.addEventListener('click', function() {
    //             pauseMusic();
    //             console.log('music is paused')
    //         })
    //     } else {
    //         // console.log(musicState)
    //         button.addEventListener('click', function() {
    //             playMusic();
    //             console.log('music is playing')
    //             console.log(musicState)
    //         })
    //     }
    // }

    button.addEventListener('click',(e) => {
        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }
    });

    // function pauseMusic() {
    //     music.pause();
    //     musicState = false;
    // }

    // function playMusic() {
    //     music.play();
    //     musicState = true;
    // }

  

    let game = new Game(GAME_WIDTH, GAME_HEIGHT);
    game.start();
    // game.spawnEnemies();
    
    // let lastTime = 0;
    function animate() {
        // let dT = currentTime - lastTime;
        // lastTime = currentTime;
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        game.update(ctx);
    }

    // document.getElementById("start-btn").addEventListener("click", function () { grab instructionmodal, onclick
    //     animate();
    // })

    // animate();
    
    function closeModal() {
        const instructions = document.getElementById("instructions_modal");
        instructions.style.display = "none";
        animate();
        // musicState = true;
        // music.play();
        // playMusic();
    }

    document.getElementById("instructions_modal").addEventListener("click", function () {
        closeModal();
    })
   
})

