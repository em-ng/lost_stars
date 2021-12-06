import Game from '/src/scripts/game';
// import Input from '/src/scripts/input';
// import Spaceship from '/src/scripts/spaceship';
// import Projectile from '/src/scripts/projectile';

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

    function animate(currentTime) {
        requestAnimationFrame(animate);
        let dT = currentTime - lastTime; //change in time, how much time has passed since
        lastTime = currentTime; //reset lastTime so it can keep updating how much time passes in between
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT); //clear each frame
        // spaceship.update(dT);
        // spaceship.draw(ctx);
        game.update(dT);
        game.draw(ctx);
        
    }
    animate();

    // let projectile = new Projectile();

    // function projectileLoop(currentTime) {
    //     requestAnimationFrame(projectileLoop);
    //     let dT = currentTime - lastTime;
    //     lastTime = currentTime;
    //     ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    //     projectile.update(dT)
    //     projectile.draw(ctx);
    // }
    // projectileLoop();
    
})

