import Spaceship from '/src/scripts/spaceship';

export default class Projectile {
    constructor(spaceship) {
        this.radius = 3;
        this.topPosition = {
            x: spaceship.position.x + spaceship.katWidth/2,
            y: spaceship.position.y
        };
        // this.position2 = {
        //     x: Spaceship.position.x + Spaceship.katWidth/2,
        //     y: Spaceship.position.y + Spaceship.katHeight
        // };
       
        this.topVelocity = {
        };
        // this.velocity2 = {
        //     x: this.katWidth,
        //     y: this.gameHeight - this.katHeight - 50
        // };
    }

    draw(ctx) {
        // debugger
        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.arc(this.topPosition.x, this.topPosition.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        // ctx.beginPath();
        // ctx.arc(this.position2.x, this.position2.y, this.radius, 0, 2 * Math.PI);
        // ctx.fillStyle = 'blue';
        // ctx.closePath();
    }

    update() {
        this.topPosition.x += this.topVelocity.x;
        this.topPosition.y += this.topVelocity.y;
        // this.position2.x += this.velocity2.x;
        // this.position2.y += this.velocity2.y;
    }
}

