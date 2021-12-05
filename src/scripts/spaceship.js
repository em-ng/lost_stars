export default class Spaceship {
    constructor(gameWidth, gameHeight) {
        this.image = document.getElementById('img_kat');
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.katWidth = 50;  //change this after adding actual image
        this.katHeight = 71;  //change this after adding actual image
        this.position = {
            x: 50,
            y: this.gameHeight - this.katHeight - 50
        };
        this.maxSpeed = 5;
        this.xSpeed = 0;
        this.ySpeed = 0;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y);
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

    moveUpperLeft() {
        this.xSpeed = -this.maxSpeed;
        this.ySpeed = -this.maxSpeed;
    }
    moveUpperRight() {
        this.xSpeed = this.maxSpeed;
        this.ySpeed = -this.maxSpeed;
    }
    moveLowerLeft() {
        this.xSpeed = -this.maxSpeed;
        this.ySpeed = this.maxSpeed;
    }
    moveLowerRight() {
        this.xSpeed = this.maxSpeed;
        this.ySpeed = this.maxSpeed;
    }

    stop() {
        this.xSpeed = 0;
        this.ySpeed = 0;
    }

    update(dT) {
        this.position.x += this.xSpeed;
        this.position.y += this.ySpeed;
        if (this.position.x < 0) this.position.x = 0; //left wall
        if (this.position.y < 0) this.position.y = 0; //upper wall
        if (this.position.x  > this.gameWidth - this.katWidth) this.position.x = this.gameWidth - this.katWidth; //right wall
        if (this.position.y > this.gameHeight - this.katHeight) this.position.y = this.gameHeight - this.katHeight; //lower wall
    }

}