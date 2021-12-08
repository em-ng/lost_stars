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

    spawnEnemies() {//spawn senemies right side of the canvas
        setInterval(() => {
            const enemy = new Enemy(this);
            const angle = Math.atan2(this.spaceship.position.y - enemy.y, this.spaceship.position.x-enemy.x);
            enemy.velocity = {
                x: Math.cos(angle),
                y: Math.sin(angle)
            };

            this.enemies.push(enemy);
        }, 2000)
    }

    update() {//updates everything
        this.spaceship.update();

        this.projectiles.forEach(projectile => {
            projectile.update()
        });

        this.enemies.forEach((enemy, eIdx) => {
            enemy.update()
            const dist = Math.hypot(this.spaceship.position.x - enemy.x + (enemy.enemyWidth/2), this.spaceship.position.y - enemy.y - (enemy.enemyHeight/2));
            if (dist - (enemy.enemyWidth) < 1 || dist - (enemy.enemyWidth) < 1) {//need to fix what's in the parenthesis
                this.enemies.splice(eIdx, 1)
            }
    
            this.projectiles.forEach((projectile, pIdx) => {
                const dist1 = Math.hypot(projectile.position1.x - enemy.x + (enemy.enemyWidth/2), projectile.position1.y - enemy.y - (enemy.enemyHeight/2));
                const dist2 = Math.hypot(projectile.position2.x - enemy.x + (enemy.enemyWidth/2), projectile.position2.y - enemy.y - (enemy.enemyHeight/2));
                debugger
                if (dist1 - projectile.radius - (.25 * enemy.enemyWidth) < 1 || dist2 - projectile.radius - (.25 * enemy.enemyWidth) < 1) {
                    this.enemies.splice(eIdx, 1)
                    this.projectiles.splice(pIdx, 1)
                }
            })
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