import Spaceship from '/src/scripts/spaceship';
import Projectile from '/src/scripts/projectile';

export default class Enemy {
    constructor(spaceship) {
        this.x = x;
        this.y = y;
        // this.enemyWidth =  image pixels
        // this.enemyHeight = image pixels
        this.velocity = {};
    }

    draw() {
        // ctx.drawImage(this.image, this.position.x, this.position.y);
        ctx.fillRect(this.x, this.y, 50, 50);
    }
    
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}