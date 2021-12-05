import Input from '/src/scripts/input';
import Spaceship from '/src/scripts/spaceship';

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("gameView");
    const ctx = canvas.getContext('2d');
    const GAME_WIDTH = 900;
    const GAME_HEIGHT = 550;

    
    let spaceship = new Spaceship(GAME_WIDTH, GAME_HEIGHT);
    new Input(spaceship);
    
    let lastTime = 0;

    function gameLoop(currentTime) {
        let dT = currentTime - lastTime; //change in time, how much time has passed since
        lastTime = currentTime; //reset lastTime so it can keep updating how much time passes in between
        ctx.clearRect(0, 0, 900, 550); //clear each frame
        spaceship.update(dT);
        spaceship.draw(ctx);
        
        requestAnimationFrame(gameLoop);
    }
    gameLoop();
    
})