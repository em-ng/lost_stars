import Game from '/src/scripts/game';

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("gameView");
    const ctx = canvas.getContext('2d');
    const GAME_WIDTH = 900;
    const GAME_HEIGHT = 550;

    let game = new Game(GAME_WIDTH, GAME_HEIGHT);
    game.start();
    game.spawnEnemies();
    
    // let spaceship = new Spaceship(GAME_WIDTH, GAME_HEIGHT);
    // new Input(spaceship);
    
    // let lastTime = 0;
    function animate() {
        // let dT = currentTime - lastTime; //change in time, how much time has passed since
        // lastTime = currentTime; //reset lastTime so it can keep updating how much time passes in between
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT); //clear each frame
        game.update(ctx);
    }

    animate();

})

