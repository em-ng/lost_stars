// import Spaceship from '/src/scripts/spaceship';
// import Projectile from '/src/scripts/projectile';
import Game from '/src/scripts/game';

export default class Input {
    constructor(game) {
        document.addEventListener('keydown', (e) => {

            switch(e.key) {
                case "a":
                    game.spaceship.moveLeft();
                    break;
                case "w":
                    game.spaceship.moveUp();
                    break;
                case "d":
                    debugger
                    game.spaceship.moveRight();
                    break;
                case "s":
                    game.spaceship.moveDown();
                    break;  
                case "a" && "w":
                    game.spaceship.moveUpperLeft();
                    break;
                case "d" && "w":
                    game.spaceship.moveUpperRight();
                    break;
                case "a" && "s":
                    game.spaceship.moveLowerLeft();
                    break;
                case "s" && "d":
                    game.spaceship.moveLowerRight();
                    break;
            }
        });

        document.addEventListener('keyup', (e) => {

            switch(e.key) {
                case "a": //traveling left
                    if (game.spaceship.xSpeed < 0) game.spaceship.stop();
                    break;
                case "w": //traveling up
                    if (game.spaceship.ySpeed < 0) game.spaceship.stop();
                    break;
                case "d": //traveling right
                    if (game.spaceship.xSpeed > 0) game.spaceship.stop();
                    break;
                case "s": //traveling dwn
                    if (game.spaceship.ySpeed > 0) game.spaceship.stop();
                    break;  
            }
        });

        window.addEventListener('click', (e) => {
            debugger
            const angle1 = Math.atan2(e.clientY-projectile.position1.y, e.clientX-projectile.position1.x);
            const angle2 = Math.atan2(e.clientY-projectile.position2.y, e.clientX-projectile.position2.x);
            const velocity1 = {
                x: Math.cos(angle1),
                y: Math.sin(angle1)
            }
            const velocity2 = {
                x: Math.cos(angle2),
                y: Math.sin(angle2)
            }
            projectiles.push(new Projectile());    
        })

        // window.addEventListener("click", function(event) {
        //     const canvasEl = document.getElementById('gameView');
        //     const ctx = canvasEl.getContext('2d');
        //     ctx.fillStyle = '#000';
        //     ctx.fillRect(event.clientX, event.clientY, 10, 10);
        // }) /// just adds a box when it clicks TEST FOR WHERE I AM CLICKING?


    }
}