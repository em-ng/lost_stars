import Input from '/src/scripts/input';
import Spaceship from '/src/scripts/spaceship';
import Projectile from '/src/scripts/projectile';

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.projectiles = [];
        this.spaceship = new Spaceship(this); //takes in a game instance
    }

    start() {
        new Input(this);
        // this.projectile = new Projectile();
    }

    update() {
        this.spaceship.update();
        this.projectiles.forEach(projectile => {
            projectile.update()
        });
    }

    draw(ctx) {
        this.spaceship.draw(ctx);
        this.projectiles.forEach(projectile => {
            projectile.draw(ctx)
        });
    }
}