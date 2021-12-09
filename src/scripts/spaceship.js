import Projectile from '/src/scripts/projectile';
import Game from '/src/scripts/game';

export default class Spaceship {
    constructor(game) { //pass in game instance
        this.image = document.getElementById('img_ship');
        this.game = game;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.shipWidth = 150;  //change this after adding actual image
        this.shipHeight = 68;  //change this after adding actual image
        this.position = {
            x: this.shipWidth,
            y: this.gameHeight - this.shipHeight - 50
        };
        this.maxSpeed = 5;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.canvas = document.getElementById("gameView");
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }

    update() {
        this.position.x += this.xSpeed;
        this.position.y += this.ySpeed;
        if (this.position.x < 0) this.position.x = 0; //left wall
        if (this.position.y < 0) this.position.y = 0; //upper wall
        if (this.position.x  > this.gameWidth - this.shipWidth) this.position.x = this.gameWidth - this.shipWidth; //right wall
        if (this.position.y > this.gameHeight - this.shipHeight) this.position.y = this.gameHeight - this.shipHeight; //lower wall
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


    fire(e) {
        const projectile = new Projectile(this);
        // const projectile2 = new Projectile(game.spaceship);
        this.game.projectiles.push(projectile);
        // const canvas = document.getElementById("gameView");
        // console.log(canvas)
        const rect = this.canvas.getBoundingClientRect();

        // // debugger
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const angle = Math.atan2(y-projectile.position1.y, x-projectile.position1.x);
        // const angle2 = Math.atan2(e.clientY-projectile2.position2.y, e.clientX-projectile2.position2.x);
        // console.log(e.clientX);
        // console.log(e.clientY);



        projectile.velocity = {
            x: Math.cos(angle) * 5,
            y: Math.sin(angle) * 5
        }
    }

}