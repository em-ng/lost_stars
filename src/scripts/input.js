import Spaceship from '/src/scripts/spaceship';

export default class Input {
    constructor(spaceship) {
        document.addEventListener('keydown', (e) => {

            switch(e.key) {
                case "a":
                    spaceship.moveLeft();
                    break;
                case "w":
                    spaceship.moveUp();
                    break;
                case "d":
                    spaceship.moveRight();
                    break;
                case "s":
                    spaceship.moveDown();
                    break;  
                case "a" && "w":
                    spaceship.moveUpperLeft();
                    break;
                case "d" && "w":
                    spaceship.moveUpperRight();
                    break;
                case "a" && "s":
                    spaceship.moveLowerLeft();
                    break;
                case "s" && "d":
                    spaceship.moveLowerRight();
                    break;
            }
        });

        document.addEventListener('keyup', (e) => {

            switch(e.key) {
                case "a": //traveling left
                    if (spaceship.xSpeed < 0) spaceship.stop();
                    break;
                case "w": //traveling up
                    if (spaceship.ySpeed < 0) spaceship.stop();
                    break;
                case "d": //traveling right
                    if (spaceship.xSpeed > 0) spaceship.stop();
                    break;
                case "s": //traveling dwn
                    if (spaceship.ySpeed > 0) spaceship.stop();
                    break;  
            }
        });
    }
}