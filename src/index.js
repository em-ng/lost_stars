import Game from '/src/scripts/game';

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("gameView");
    const ctx = canvas.getContext('2d');
    const GAME_WIDTH = 900;
    const GAME_HEIGHT = 550;
    let music = new Audio("src/music/life-is-a-dream.mp3");
    let button = document.getElementById("unmuteButton");
    music.play();

    let game = new Game(GAME_WIDTH, GAME_HEIGHT);
    game.start();
    game.spawnEnemies();
    
    // let lastTime = 0;
    function animate() {
        // let dT = currentTime - lastTime;
        // lastTime = currentTime;
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        game.update(ctx);
    }
    animate();
})

