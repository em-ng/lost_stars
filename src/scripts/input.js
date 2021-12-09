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
            game.spaceship.fire(e);
        })
    }
}