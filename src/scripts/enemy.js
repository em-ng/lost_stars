// import Spaceship from '/src/scripts/spaceship';
import Projectile from '/src/scripts/projectile';
import Game from '/src/scripts/game';

export default class Enemy {
    constructor(game) {
        this.game = game;
        this.x = game.gameWidth;
        this.y = Math.random() * game.gameHeight;
        // this.enemyWidth =  image pixels
        // this.enemyHeight = image pixels
        this.velocity = {};
    }

    draw(ctx) {
        // ctx.drawImage(this.image, this.position.x, this.position.y);
        ctx.fillRect(this.x, this.y, 25, 25);
    }
    
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}