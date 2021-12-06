export default class Projectile {
    constructor(x, y, velocity, radius) {
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.radius = radius;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'blue';
        ctx.closePath();
    }

    update(dT) {

    }
}