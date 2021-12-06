export default class Projectile {
    constructor(position, velocity) {
        this.radius = 3;
        this.velocity = velocity;
        this.position = position;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'blue';
        ctx.closePath();
    }

    update(dT) {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    // const projectiles = [];



    // window.addEventListener('click', (e) => {
    //     console.log('go')
    // })

    
}

