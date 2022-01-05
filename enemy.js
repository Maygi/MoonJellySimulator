class Enemy {
	constructor(game, x, y) {
		this.game = game;
		this.x = x;
		this.y = y;
		this.hspeed = 0;
		this.vspeed = 0;
		this.displacementX = 0;
		this.displacementY = 0;
		this.displacementXTarget = 0;
		this.displacementYTarget = 0;
		this.displacementTime = 0;
		this.displacementTimeMax = 0;
		this.displacementXSpeed = 0;
		this.autoDamage = 1;
		this.alpha = 1;
		this.step = 0;
		this.walkSpeed = 5;
		this.autoDamage = 1;
		this.spawnCount = 0;
		this.spawnTimer = 0;
		this.destinationX = -1;
		this.attackIndex = 0;
		this.attackCount = 0;
		this.hurtTimer = 0;
		this.energy = 0; //denotes if an attack is charged
		this.scoreValue = 1;
		this.maxHealth = 10.0;
		this.currentHealth = this.maxHealth;
		this.currentHealthTemp = this.currentHealth;   
		// String Variables
		this.state = "idle";
		this.lastDirection = "Left";    
		// Boolean Variables
		this.attackEnabled = false;
		this.dead = false;
		this.solid = false;
		this.attackable = true;
		this.activated = false;
		this.bounceCd = 0;
		this.hit = false;
	}
	
	update() {
		if (this.displacementXSpeed != 0) {
			this.displacementX += this.displacementXSpeed;
			if (this.displacementXSpeed > 0) {
				this.displacementXSpeed -= this.displacementFriction;			
				if (this.displacementXSpeed < 0)
					this.displacementXSpeed = 0;
			} else {
				this.displacementXSpeed += this.displacementFriction;			
				if (this.displacementXSpeed > 0)
					this.displacementXSpeed = 0;
			}
		}
		if (this.displacementXTarget != 0) {
			this.displacementTime++;
			if (this.displacementTime <= (0.3 * this.displacementTimeMax)) {
				this.displacementX = this.displacementXTarget * (this.displacementTime / (0.3 * this.displacementTimeMax))
			} else {
				this.displacementX = this.displacementXTarget - (this.displacementXTarget * (this.displacementTime - 0.3 * this.displacementTimeMax) / (0.7 * this.displacementTimeMax));
			}
			console.log("tick: " + this.displacementTime + " - " + this.displacementX);
			if (this.displacementTime >= this.displacementTimeMax) {
				this.displacementTime = 0;
				this.displacementTimeMax = 0;
				this.displacementX = 0;
				this.displacementXTarget = 0;
			}
		}
		if (this.bounceCd > 0)
			this.bounceCd--;
		this.x += this.hspeed;
		this.y += this.vspeed;
		if (this.hspeed > 0)
			this.currentAnimation = this.aniRight;
		else if (this.hspeed < 0)
			this.currentAnimation = this.aniLeft;
		if (checkCollision(this.game.player1, this) && !this.game.player1.hitByAttack) {
			if (this.game.player1.vulnerable && this.game.player1.invincTimer === 0) {
				this.game.player1.vulnerable = false;
				applyDamage(this.game.player1.x, this.game.player1.y, this.game, this.autoDamage, this.game.player1);
				this.game.player1.hitByAttack = true;
                this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
				playSound(hitSound);
				if (this.game.player1.lastDirection == "Left") {
					this.game.player1.hurtAnimation = this.game.player1.hurtAnimationLeft;
				} else {
					this.game.player1.hurtAnimation = this.game.player1.hurtAnimationRight;
				}
			}
		}
		if (this.currentHealth <= 0) {
			this.dead = true;
			this.removeFromWorld = true;
			if (this.hspeed > 0)
				this.currentAnimation = this.deadAnimationRight;
			else if (this.hspeed < 0)
				this.currentAnimation = this.deadAnimationLeft;
			this.game.addEntity(new Particle(IMG_PART, this.x + this.displacementX, this.y + this.displacementY,
				0, 0, 0, 0, 0, 0, 0, 30, 0, 10, 0.5, 0, false, this.game, this.currentAnimation));
			addScore(this.game, this.scoreValue);
		}
	}
	
	draw(ctx) {
		if (!this.dead) {
			this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x + this.currentAnimation.offsetX + this.displacementX, this.y + this.currentAnimation.offsetY + this.displacementY, 1, false, this.hurtTimer > 0 ? "red" : null);
		}
		drawHitBox(this, ctx);
		Entity.prototype.draw.call(this);
	}
}

class SeaSlug extends Enemy {
	
	constructor(game, x, y, hspeed, walkDistance) {
		super(game, x, y);

		this.hspeed = hspeed || 0;
		this.walkDistance = walkDistance || 0;
		this.scoreValue = 100;
		this.maxHealth = 300.0;
		this.autoDamage = 15;
		this.currentHealth = this.maxHealth;
		this.currentHealthTemp = this.currentHealth;
		this.initialX = x;
		this.displacementFriction = 0.25; //basically, how "heavy" a mob is
		
		// Animations
		this.walkAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/seaslug_left.png"), 0, 0, 34, 32, 0.5, 2, true, false, 0, 0);
		this.walkAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/seaslug_right.png"), 0, 0, 34, 32, 0.5, 2, true, false, 0, 0);
		this.deadAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/seaslug_dead_left.png"), 0, 0, 40, 32, 1, 1, true, false, 0, 0);
		this.deadAnimationReft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/seaslug_dead_right.png"), 0, 0, 40, 32, 1, 1, true, false, 0, 0);
		this.aniLeft = this.walkAnimationLeft;
		this.aniRight = this.walkAnimationRight;
		this.currentAnimation = this.idleLeft;
		
		this.hitBoxDef = {
			width: 32, height: 16, offsetX: 2, offsetY: 16, growthX: 0, growthY: 0
		};
		drawHitBox(this);
	}
	
	update() {
		if (this.currentHealth < this.maxHealth) {
			if (this.bounceCd == 0 && this.hspeed < 0 && this.game.player1.x + this.game.player1.hitBoxDef.width / 2 + this.game.player1.hitBoxDef.offsetX > this.x + this.displacementX + this.hitBoxDef.width / 2 + this.hitBoxDef.offsetX) {
				this.hspeed *= -1;
				this.bounceCd = 30;
			} else if (this.bounceCd == 0 && this.hspeed > 0 && this.game.player1.x + this.game.player1.hitBoxDef.width / 2 + this.game.player1.hitBoxDef.offsetX < this.x + this.displacementX + this.hitBoxDef.width / 2 + this.hitBoxDef.offsetX) {
				this.hspeed *= -1;
				this.bounceCd = 30;
			}
		} else if (Math.abs(this.initialX - this.x) >= this.walkDistance && this.bounceCd == 0) {
			this.hspeed *= -1;
			this.bounceCd = 10;
		}
		super.update();
	}
}