import Projectile from '/src/scripts/projectile';
import Game from '/src/scripts/game';

export default class Enemy {
    constructor(game) {
        this.image = document.getElementById('img_ban');
        this.game = game;
        this.x = game.gameWidth;
        this.y = Math.random() * game.gameHeight;
        this.enemyWidth = 50;
        this.enemyHeight = 35;
        this.velocity = {};
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y);

    }
    
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}