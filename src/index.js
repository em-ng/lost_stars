import Game from '/src/scripts/game';

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("gameView");
    const ctx = canvas.getContext('2d');
    const GAME_WIDTH = 900;
    const GAME_HEIGHT = 550;
    const music = new Audio("src/music/life-is-a-dream.mp3");
    const button = document.getElementById("musicButton");
    const instructionButton = document.getElementById("instruct");
    // let text = false;
    // let musicState = false;
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

    button.addEventListener('click', (e) => {
        if (music.paused) {
            music.play();
            button.innerHTML = "<img src='https://github.com/em-ng/lost_stars/blob/c912a410e23ddc6562595650b63641a345927a99/src/images/pause-button.png' />"
        } else {
            music.pause();
            button.innerHTML = "<img src='https://github.com/em-ng/lost_stars/blob/c912a410e23ddc6562595650b63641a345927a99/src/images/play-button.png' />"
        }
    });

    instructionButton.addEventListener('click', (e) => {
        const instructions = document.getElementById("instructions_modal");
        const display = instructions.style.display
        if (display === "none") {
            openModal();
        } else {
            closeInstructions();
            // instructions.style.display = "none";
            // console.log('close window')
        }
    });


    let game = new Game(GAME_WIDTH, GAME_HEIGHT);
    // game.start();
    // game.spawnEnemies();
    
    // let lastTime = 0;
    function animate() {
        // let dT = currentTime - lastTime;
        // lastTime = currentTime;
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        game.update(ctx);
    }

    animate();
    
    function openModal() {
        const instructions = document.getElementById("instructions_modal");
        instructions.style.display = "block";
    }

    function closeModal() {
        const instructions = document.getElementById("instructions_modal");
        instructions.style.display = "none";
        music.play();
        game.start();
    }

    function closeInstructions() {
        const instructions = document.getElementById("instructions_modal");
        instructions.style.display = "none";
    }

    document.getElementById("instructions_modal").addEventListener("click", function () {
        closeModal();
    })
   
})

