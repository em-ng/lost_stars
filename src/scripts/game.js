import Input from '/src/scripts/input';
import Spaceship from '/src/scripts/spaceship';
import Projectile from '/src/scripts/projectile';
import Enemy from '/src/scripts/enemy';

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.projectiles = [];
        this.enemies = [];
        this.spaceship = new Spaceship(this); //takes in a game instance
        // this.enemy = new Enemy(this);
    }

    start() {
        new Input(this);
    }

    // this.x = x;
    // this.y = y;
    // // this.enemyWidth =  image pixels
    // // this.enemyHeight = image pixels
    // this.velocity = {};

    spawnEnemies() {//spawn senemies right side of the canvas
        setInterval(() => {
            const enemy = new Enemy(this);
            const angle = Math.atan2(this.spaceship.position.y - enemy.y, this.spaceship.position.x-enemy.x);
            enemy.velocity = {
                x: Math.cos(angle) * 3,
                y: Math.sin(angle) * 3
            };

            this.enemies.push(enemy);
        }, 2000)
    }

    update() {//updates everything
        this.spaceship.update();

        this.projectiles.forEach(projectile => {
            projectile.update()
        });

        this.enemies.forEach(enemy => {
            enemy.update()
        });
    }

    draw(ctx) {//draw everything
        this.spaceship.draw(ctx);
        this.projectiles.forEach(projectile => {
            projectile.draw(ctx)
        });
        this.enemies.forEach(enemy => {
            enemy.draw(ctx)
        });
    }
}