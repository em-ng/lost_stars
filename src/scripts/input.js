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
            }
        });
    }
}