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
        this.spaceship = new Spaceship(this);
        this.score = 0;
        this.lives = 3;
        this.gameState = true;
        this.enemy = new Enemy(this);
    }

    start() {
        if (this.gameState) {
            new Input(this);
            this.spawnEnemies();
        }
    }

    gameOver() {
        // this.gameState = false;
        // this.projectiles = [];
        // this.enemies = [];
        // clearInterval(this.spawnInterval)
        // cancelAnimationFrame();
        
        // if (this.gameState) {
            // console.log('game over')
            this.gameState = false;
            // cancelAnimationFrame(this.spawnEnemies());
            const message = document.getElementById('game-over');
            message.style.visibility = 'visible'
            window.clearInterval(1)
            this.projectiles = [];
            this.enemies = [];

        // }
    }

    spawnEnemies() {//spawn enemies right side of the canvas
        // const intervId =
        // if (!this.gameState) return; 
        if (this.gameState) {
            console.log(this.gameState)
            setInterval(() => {
                const enemy = new Enemy(this);
                const angle = Math.atan2(this.spaceship.position.y - enemy.y, this.spaceship.position.x-enemy.x);
                enemy.velocity = {
                    x: Math.cos(angle),
                    y: Math.sin(angle)
                };
    
                this.enemies.push(enemy);
            }, 2000);
        }
    }

    draw(ctx) {
        const bg = new Image();
        bg.src = "src/images/spacejunk.jpeg";
        ctx.globalAlpha = 0.8;
        ctx.drawImage(bg, 0, 0, 900, 550);

        this.spaceship.draw(ctx);
        this.projectiles.forEach(projectile => {
            projectile.draw(ctx)
        });
        this.enemies.forEach(enemy => {
            enemy.draw(ctx)
        });
    }

    // frameRate(ctx) {
    //     setInterval(this.draw(ctx), 120)
    // }

    update(ctx) {
        this.spaceship.update();
        // console.log(this.gameEnd)
        this.projectiles.forEach(projectile => {
            projectile.update()
        });

        this.enemies.forEach((enemy, eIdx) => {
            enemy.update();
            //enemy and ship collision
            const dist = Math.hypot(this.spaceship.position.x - enemy.x + (enemy.enemyWidth/2), this.spaceship.position.y - enemy.y - (enemy.enemyHeight/2));
            if (dist - (enemy.enemyWidth) < 1 || dist - (enemy.enemyWidth) < 1) {//need to fix what's in the parenthesis
                this.enemies.splice(eIdx, 1)
                if (this.lives > 0) {
                    this.lives -=1                    
                } else {
                    this.gameOver();
                }
            }
            //enemy and projectile collision    
            this.projectiles.forEach((projectile, pIdx) => {
                const dist1 = Math.hypot(projectile.position1.x - enemy.x + (enemy.enemyWidth/2), projectile.position1.y - enemy.y - (enemy.enemyHeight/2));
                const dist2 = Math.hypot(projectile.position2.x - enemy.x + (enemy.enemyWidth/2), projectile.position2.y - enemy.y - (enemy.enemyHeight/2));
                
                if ((dist1 - projectile.radius - (enemy.enemyWidth - 45) < 1) || (dist2 - projectile.radius - (enemy.enemyWidth - 45) < 1)) {
                    this.enemies.splice(eIdx, 1)
                    this.projectiles.splice(pIdx, 1)
                    this.score += 1;
                    // this.draw(ctx);
                }
            })  
        })
        this.stats();
        this.draw(ctx);
        // this.frameRate(ctx);
    }

    stats() {
        const points = document.getElementById("score-container");
        points.innerText = `Score: ${this.score}`

        const life = document.getElementById("lives-container");
        life.innerText = `Lives: ${this.lives}`
    }
}