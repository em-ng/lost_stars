import Input from '/src/scripts/input';
import Spaceship from '/src/scripts/spaceship';
// import Projectile from '/src/scripts/projectile';

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.spaceship = new Spaceship(this); //takes in a game instance
        new Input(this.spaceship);
    }

    update(dT) {
        this.spaceship.update(dT);
    }

    draw(ctx) {
        this.spaceship.draw(ctx);
    }
}