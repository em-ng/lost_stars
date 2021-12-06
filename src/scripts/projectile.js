import Spaceship from '/src/scripts/spaceship';

export default class Projectile {
    constructor(spaceship) {
        this.radius = 3;
        this.topPosition = {
            x: Spaceship.position.x + Spaceship.katWidth/2,
            y: Spaceship.position.y
        };
        // this.position2 = {
        //     x: Spaceship.position.x + Spaceship.katWidth/2,
        //     y: Spaceship.position.y + Spaceship.katHeight
        // };
       
        this.topVelocity = {
            x: this.katWidth,
            y: this.gameHeight - this.katHeight - 50
        };
        // this.velocity2 = {
        //     x: this.katWidth,
        //     y: this.gameHeight - this.katHeight - 50
        // };
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.position1.x, this.position1.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'blue';
        ctx.closePath();

        ctx.beginPath();
        ctx.arc(this.position2.x, this.position2.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'blue';
        ctx.closePath();
    }

    update(dT) {
        this.position1.x += this.velocity1.x;
        this.position1.y += this.velocity1.y;
        this.position2.x += this.velocity2.x;
        this.position2.y += this.velocity2.y;
    }
}

