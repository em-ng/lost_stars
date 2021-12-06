import Game from '/src/scripts/game';
import Projectile from '/src/scripts/projectile';
// import Input from '/src/scripts/input';
// import Spaceship from '/src/scripts/spaceship';

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("gameView");
    const ctx = canvas.getContext('2d');
    const GAME_WIDTH = 900;
    const GAME_HEIGHT = 550;

    let game = new Game(GAME_WIDTH, GAME_HEIGHT);
    game.start();

    // let spaceship = new Spaceship(GAME_WIDTH, GAME_HEIGHT);
    // new Input(spaceship);

    let lastTime = 0;

    function animate() {
        requestAnimationFrame(animate);
        // let dT = currentTime - lastTime; //change in time, how much time has passed since
        // lastTime = currentTime; //reset lastTime so it can keep updating how much time passes in between
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT); //clear each frame
        // debugger
        game.update();
        game.draw(ctx);
    }

    animate();

    // window.addEventListener("click", function(event) {
    //     const canvasEl = document.getElementById('gameView');
    //     const ctx = canvasEl.getContext('2d');
    //     ctx.fillStyle = '#000';
    //     ctx.fillRect(event.clientX, event.clientY, 10, 10);
    // }) /// just adds a box when it clicks TEST FOR WHERE I AM CLICKING?
})

