export default class Spaceship {
    constructor(gameWidth, gameHeight) {
        this.image = document.getElementById('img_kat');
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.radius = 10;   
        this.position = {//position will be center of ship/circle object on screen
            x: this.radius + 50,
            y: this.gameHeight - this.radius - 50
        };
        this.maxSpeed = 5;
        this.xSpeed = 0;
        this.ySpeed = 0;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x - this.radius, this.position.y-this.radius, 50, 50);
        // ctx.beginPath();
        // ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        // ctx.stroke();
    }

    moveLeft() {
        this.xSpeed = -this.maxSpeed;
    }

    moveRight() {
        this.xSpeed = this.maxSpeed;
    }

    moveUp() {
        this.ySpeed = -this.maxSpeed;
    }

    moveDown() {
        this.ySpeed = this.maxSpeed;
    }

    moveDiagonalLeft() {}
    moveDiagonalLeft() {}
    moveDiagonalLeft() {}
    moveDiagonalLeft() {}

    stop() {
        this.xSpeed = 0;
        this.ySpeed = 0;
    }

    update(dT) {
        this.position.x += this.xSpeed;
        this.position.y += this.ySpeed;
        if (this.position.x < this.radius) this.position.x = this.radius; //left wall
        if (this.position.y < this.radius) this.position.y = this.radius; //upper wall
        if (this.position.x > this.gameWidth - this.radius) this.position.x = this.gameWidth - this.radius; //right wall
        if (this.position.y > this.gameHeight - this.radius) this.position.y = this.gameHeight - this.radius; //lower wall
    
    }

}