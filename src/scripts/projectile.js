import Spaceship from '/src/scripts/spaceship';

export default class Projectile {
    constructor(spaceship) {
        // const COLORS
        this.radius = 6;
        this.position1 = {
            x: spaceship.position.x + spaceship.katWidth/2,
            y: spaceship.position.y,
            y2: spaceship.position.y + Spaceship.katHeight
        };
        this.position2 = {
            x: spaceship.position.x + spaceship.katWidth/2,
            y: spaceship.position.y + spaceship.katHeight
        };
       
        this.velocity = {};
    }

    draw(ctx) {
        // debugger
        ctx.beginPath();
        ctx.fillStyle = 'gold';
        ctx.arc(this.position1.x, this.position1.y, this.radius, 0, 2 * Math.PI);
        ctx.arc(this.position2.x, this.position2.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.position1.x += this.velocity.x;
        this.position1.y += this.velocity.y;
        this.position2.x += this.velocity.x;
        this.position2.y += this.velocity.y;
    }
}

