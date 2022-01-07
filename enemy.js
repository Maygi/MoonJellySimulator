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
		this.displacementYSpeed = 0;
		this.lineUpTargetY = -1;
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
		this.initialX = x;
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
		this.groundlocked = false;
		this.meleeInvuln = false;
	}
	
	getX() {
		return this.x + this.displacementX;
	}
	
	getY() {
		return this.y + this.displacementY;
	}
	
	getXMidpoint() {
		return this.x + this.displacementX + this.hitBoxDef.offsetX + this.hitBoxDef.width / 2;
	}
	
	getYMidpoint() {
		return this.y + this.displacementY + this.hitBoxDef.offsetY + this.hitBoxDef.height / 2;
	}
	
	handleSideHit() {
		
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
		if (this.displacementYSpeed != 0 && !this.groundlocked) {
			this.displacementY += this.displacementYSpeed;
			if (this.displacementYSpeed > 0) {
				this.displacementYSpeed -= this.displacementFriction;			
				if (this.displacementYSpeed < 0)
					this.displacementYSpeed = 0;
			} else {
				this.displacementYSpeed += this.displacementFriction;			
				if (this.displacementYSpeed > 0)
					this.displacementYSpeed = 0;
			}
		}
		if (this.displacementXTarget != 0) { //legacy snap-displacement implementation (snap back to original after 30% travel time)
			this.displacementTime++;
			if (this.displacementTime <= (0.3 * this.displacementTimeMax)) {
				this.displacementX = this.displacementXTarget * (this.displacementTime / (0.3 * this.displacementTimeMax))
			} else {
				this.displacementX = this.displacementXTarget - (this.displacementXTarget * (this.displacementTime - 0.3 * this.displacementTimeMax) / (0.7 * this.displacementTimeMax));
			}
			if (this.displacementTime >= this.displacementTimeMax) {
				this.displacementTime = 0;
				this.displacementTimeMax = 0;
				this.displacementX = 0;
				this.displacementXTarget = 0;
			}
		}
		if (this.bounceCd > 0)
			this.bounceCd--;
		if (this.lineUpTargetY != -1) {
			if (this.vspeed > 0 && this.vspeed + this.y + this.displacementY > this.lineUpTargetY)
				this.vspeed = 0;
			else if (this.vspeed < 0 && this.vspeed + this.y + this.displacementY < this.lineUpTargetY)
				this.vspeed = 0;
		}
		this.x += this.hspeed;
		this.y += this.vspeed;
		if (this.hspeed > 0)
			this.currentAnimation = this.aniRight;
		else
			this.currentAnimation = this.aniLeft;
		if (checkCollision(this.game.player1, this) && !this.game.player1.hitByAttack) {
			if (this.game.player1.vulnerable && this.game.player1.invincTimer === 0) {
				var createX;
				var createY;
				if (this.getXMidpoint() > this.game.player1.x + this.game.player1.hitBoxDef.offsetX + this.game.player1.hitBoxDef.width / 2) {
					createX = this.game.player1.x + this.game.player1.hitBoxDef.offsetX + this.game.player1.hitBoxDef.width;
				} else if (this.getXMidpoint() > this.game.player1.x + this.game.player1.hitBoxDef.offsetX + this.game.player1.hitBoxDef.width / 2) {
					createX = this.game.player1.x + this.game.player1.hitBoxDef.offsetX;
				} else {
					createX = this.game.player1.x + this.game.player1.hitBoxDef.offsetX + this.game.player1.hitBoxDef.width / 2;
				}
				if (this.getYMidpoint() > this.game.player1.y + this.game.player1.hitBoxDef.offsetY + this.game.player1.hitBoxDef.height / 2) {
					createY = this.game.player1.y + this.game.player1.hitBoxDef.offsetY + this.game.player1.hitBoxDef.height;
				} else if (this.getYMidpoint() < this.game.player1.y + this.game.player1.hitBoxDef.offsetY + this.game.player1.hitBoxDef.height / 2) {
					createY = this.game.player1.y + this.game.player1.hitBoxDef.offsetY;
				} else {
					createY = this.game.player1.y + this.game.player1.hitBoxDef.offsetY + this.game.player1.hitBoxDef.height / 2;
				}
				for (var i = 0; i < 18; i++) {
					var newParticle = new Particle(PART_SECONDARY, createX, createY, 
							-20, 20, -20, 20, 0, 0.5, 0, 0, 0, 50, .75, .15, true, this.game);
					var element = new CircleElement(10 + Math.random() * 3, "#b7f7f3", "#fbcfff");
					newParticle.other = element;
					this.game.addEntity(newParticle);
				}
				this.game.player1.vulnerable = false;
				applyDamage(this.game.player1.x, this.game.player1.y, this.game, this.autoDamage, this.game.player1);
				this.game.player1.hitByAttack = true;
                this.game.player1.stunTimer = this.game.player1.invulnTimerMax;
                this.game.player1.invulnTimer = this.game.player1.invulnTimerMax * 2;
				this.game.player1.stunned = true;
				playSound(hitSound);
				this.game.player1.yVelocity = 7;
				this.game.player1.jumping = true;
				this.game.pauseTime = 8;
				if (this.game.player1.lastDirection == "Left") {
					this.game.player1.hurtAnimation = this.game.player1.hurtAnimationLeft;
					this.game.player1.xVelocity = 2;
				} else {
					this.game.player1.hurtAnimation = this.game.player1.hurtAnimationRight;
					this.game.player1.xVelocity = -2;
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
		this.maxHealth = 30.0;
		this.autoDamage = 15;
		this.currentHealth = this.maxHealth;
		this.currentHealthTemp = this.currentHealth;
		this.displacementFriction = 0.25; //basically, how "heavy" a mob is
		this.groundlocked = true;
		
		// Animations
		this.walkAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/seaslug_left.png"), 0, 0, 34, 32, 0.5, 2, true, false, 0, 0);
		this.walkAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/seaslug_right.png"), 0, 0, 34, 32, 0.5, 2, true, false, 0, 0);
		this.deadAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/seaslug_dead_left.png"), 0, 0, 40, 32, 1, 1, true, false, 0, 0);
		this.deadAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/seaslug_dead_right.png"), 0, 0, 40, 32, 1, 1, true, false, 0, 0);
		this.aniLeft = this.walkAnimationLeft;
		this.aniRight = this.walkAnimationRight;
		this.currentAnimation = this.aniLeft;
		
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

class Pirahna extends SeaSlug {
	
	constructor(game, x, y, hspeed, walkDistance) {
		super(game, x, y, hspeed, walkDistance);

		this.scoreValue = 150;
		this.maxHealth = 30.0;
		this.autoDamage = 15;
		this.currentHealth = this.maxHealth;
		this.currentHealthTemp = this.currentHealth;
		this.displacementFriction = 0.25; //basically, how "heavy" a mob is
		this.groundlocked = false;
		
		// Animations
		this.walkAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/pirahna_left.png"), 0, 0, 34, 32, 0.5, 4, true, false, 0, 0);
		this.walkAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/pirahna_right.png"), 0, 0, 34, 32, 0.5, 4, true, false, 0, 0);
		this.deadAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/pirahna_dead_left.png"), 0, 0, 34, 32, 1, 1, true, false, 0, 0);
		this.deadAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/pirahna_dead_right.png"), 0, 0, 34, 32, 1, 1, true, false, 0, 0);
		this.aniLeft = this.walkAnimationLeft;
		this.aniRight = this.walkAnimationRight;
		this.currentAnimation = this.aniLeft;
		
		this.hitBoxDef = {
			width: 32, height: 29, offsetX: 2, offsetY: 3, growthX: 0, growthY: 0
		};
		drawHitBox(this);
	}
	
	update() {
		if (this.currentHealth < this.maxHealth) {
			this.lineUpTargetY = this.game.player1.y + this.game.player1.hitBoxDef.height / 2 + this.game.player1.hitBoxDef.offsetY;
			if (this.lineUpTargetY > this.y + this.displacementY + this.hitBoxDef.height / 2 + this.hitBoxDef.offsetY) {
				this.vspeed = 1;
			} else if (this.lineUpTargetY < this.y + this.displacementY + this.hitBoxDef.height / 2 + this.hitBoxDef.offsetY) {
				this.vspeed = -1;
			}
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


class Isopod extends Enemy {
	
	constructor(game, x, y, hspeed, walkDistance) {
		super(game, x, y);

		this.hspeed = hspeed || 0;
		this.walkDistance = walkDistance || 0;
		this.scoreValue = 250;
		this.maxHealth = 100.0;
		this.autoDamage = 25;
		this.currentHealth = this.maxHealth;
		this.currentHealthTemp = this.currentHealth;
		this.displacementFriction = 0.4; //basically, how "heavy" a mob is
		this.groundlocked = true;
		
		//unique vars
		this.initialHspeed = hspeed;
		this.curling = false;
		this.uncurling = false;
		this.rollTime = 0;
		this.rollCooldown = 0;
		this.rollIndex = 0;
		this.rollDelta = 0;
		this.rollThreshold = 20; //amount of distance to move to advance a roll animation index
		
		// Animations
		this.walkAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/isopod_left.png"), 0, 0, 64, 64, 0.5, 2, true, false, 0, 0);
		this.walkAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/isopod_right.png"), 0, 0, 64, 64, 0.5, 2, true, false, 0, 0);
		this.curlAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/isopod_curl_left.png"), 0, 0, 64, 64, 0.1, 4, false, false, 0, 0);
		this.curlAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/isopod_curl_right.png"), 0, 0, 64, 64, 0.1, 4, false, false, 0, 0);
		this.uncurlAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/isopod_uncurl_left.png"), 0, 0, 64, 64, 0.1, 4, false, false, 0, 0);
		this.uncurlAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/isopod_uncurl_right.png"), 0, 0, 64, 64, 0.1, 4, false, false, 0, 0);
		this.deadAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/isopod_dead_left.png"), 0, 0, 64, 64, 1, 1, true, false, 0, 0);
		this.deadAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/isopod_dead_right.png"), 0, 0, 64, 64, 1, 1, true, false, 0, 0);
		this.rollAnimation = [
			new Animation(ASSET_MANAGER.getAsset("./img/Enemy/isopod_roll_1.png"), 0, 0, 64, 64, 1, 1, true, false, 0, 0),
			new Animation(ASSET_MANAGER.getAsset("./img/Enemy/isopod_roll_2.png"), 0, 0, 64, 64, 1, 1, true, false, 0, 0),
			new Animation(ASSET_MANAGER.getAsset("./img/Enemy/isopod_roll_3.png"), 0, 0, 64, 64, 1, 1, true, false, 0, 0),
			new Animation(ASSET_MANAGER.getAsset("./img/Enemy/isopod_roll_4.png"), 0, 0, 64, 64, 1, 1, true, false, 0, 0),
			new Animation(ASSET_MANAGER.getAsset("./img/Enemy/isopod_roll_5.png"), 0, 0, 64, 64, 1, 1, true, false, 0, 0),
			new Animation(ASSET_MANAGER.getAsset("./img/Enemy/isopod_roll_6.png"), 0, 0, 64, 64, 1, 1, true, false, 0, 0)
		];
		this.aniLeft = this.walkAnimationLeft;
		this.aniRight = this.walkAnimationRight;
		this.currentAnimation = this.aniLeft;
		
		this.hitBoxDef = {
			width: 64, height: 32, offsetX: 0, offsetY: 37, growthX: 0, growthY: 0
		};
		drawHitBox(this);
	}
	
	handleSideHit() {
		if (this.rollTime > 0) {
			this.hspeed = -this.hspeed * 0.2;
			console.log("hspeed down to " + this.hspeed);
		}
	}
	
	
	update() {
		if (this.currentHealth < this.maxHealth) {
			if (this.rollCooldown > 0)
				this.rollCooldown--;
			if (this.rollCooldown == 0 && !this.curling && this.rollTime == 0 && !this.uncurling) {
				this.curling = true;
				this.aniLeft = this.curlAnimationLeft;
				this.aniRight = this.curlAnimationRight;
			}
			if (this.curling && this.currentAnimation.isDone()) {
				this.curling = false;
				this.currentAnimation.restart();
				this.rollTime = 150;
				this.displacementFriction = 0.3;
			}
			if (this.uncurling && this.currentAnimation.isDone()) {
				this.uncurling = false;
				this.rollCooldown = 150;
				this.currentAnimation.restart();
				this.aniLeft = this.walkAnimationLeft;
				this.aniRight = this.walkAnimationRight;
				this.hspeed = this.initialHspeed;
				this.displacementFriction = 0.4;
			}
			if (this.rollTime > 0) {
				this.rollTime--;
				if (this.game.player1.x + this.game.player1.hitBoxDef.width / 2 + this.game.player1.hitBoxDef.offsetX > this.x + this.displacementX + this.hitBoxDef.width / 2 + this.hitBoxDef.offsetX) {
					this.hspeed += 0.23;
					if (this.hspeed >= 8)
						this.hspeed = 8;
				} else if (this.game.player1.x + this.game.player1.hitBoxDef.width / 2 + this.game.player1.hitBoxDef.offsetX < this.x + this.displacementX + this.hitBoxDef.width / 2 + this.hitBoxDef.offsetX) {
					this.hspeed -= 0.23;
					if (this.hspeed <= -8)
						this.hspeed = -8;
				}
				this.rollDelta += this.hspeed;
				var index = Math.round(this.rollDelta / this.rollThreshold) % this.rollAnimation.length;
				if (index < 0)
					index = this.rollAnimation.length + index;
				this.aniLeft = this.rollAnimation[index];
				this.aniRight = this.rollAnimation[index];
				if (this.rollTime == 0) {
					this.uncurling = true;
					this.aniLeft = this.uncurlAnimationLeft;
					this.aniRight = this.uncurlAnimationRight;
				}
			}
			if (this.rollCooldown > 0 && this.bounceCd == 0 && this.hspeed < 0 && this.game.player1.x + this.game.player1.hitBoxDef.width / 2 + this.game.player1.hitBoxDef.offsetX > this.x + this.displacementX + this.hitBoxDef.width / 2 + this.hitBoxDef.offsetX) {
				this.hspeed *= -1;
				this.bounceCd = 30;
			} else if (this.rollCooldown > 0 && this.bounceCd == 0 && this.hspeed > 0 && this.game.player1.x + this.game.player1.hitBoxDef.width / 2 + this.game.player1.hitBoxDef.offsetX < this.x + this.displacementX + this.hitBoxDef.width / 2 + this.hitBoxDef.offsetX) {
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

class Eel extends Enemy {
	
	constructor(game, x, y, hspeed, vspeed, walkDistance) {
		super(game, x, y);

		this.hspeed = hspeed || 0;
		this.vspeed = vspeed || 0;
		this.walkDistance = walkDistance || 0;
		this.scoreValue = 200;
		this.maxHealth = 75.0;
		this.autoDamage = 25;
		this.currentHealth = this.maxHealth;
		this.currentHealthTemp = this.currentHealth;
		this.displacementFriction = 0.25; //basically, how "heavy" a mob is
		
		this.maxSpeed = 4;
		
		// Animations
		this.walkAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/eel_left.png"), 0, 0, 64, 32, 0.5, 2, true, false, 0, 0);
		this.walkAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/eel_right.png"), 0, 0, 64, 32, 0.5, 2, true, false, 0, 0);
		this.deadAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/eel_dead_left.png"), 0, 0, 64, 32, 1, 1, true, false, 0, 0);
		this.deadAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/eel_dead_right.png"), 0, 0, 64, 32, 1, 1, true, false, 0, 0);
		this.aniLeft = this.walkAnimationLeft;
		this.aniRight = this.walkAnimationRight;
		this.currentAnimation = this.aniLeft;
		
		this.hitBoxDef = {
			width: 64, height: 20, offsetX: 0, offsetY: 2, growthX: 0, growthY: 0
		};
		drawHitBox(this);
	}
	
	handleSideHit() {
		if (this.activated) {
			this.hspeed = -this.hspeed * 0.2;
		}
	}
	
	
	update() {
		if (this.currentHealth < this.maxHealth) {
			if (!this.activated) {
				this.activated = true;
				this.hspeed *= 2;
			}
			if (this.game.player1.x + this.game.player1.hitBoxDef.width / 2 + this.game.player1.hitBoxDef.offsetX > this.getXMidpoint()) {
				this.hspeed += 0.12;
			} else if (this.game.player1.x + this.game.player1.hitBoxDef.width / 2 + this.game.player1.hitBoxDef.offsetX < this.getXMidpoint()) {
				this.hspeed -= 0.12;
			}
			this.lineUpTargetY = this.game.player1.y + this.game.player1.hitBoxDef.height / 2 + this.game.player1.hitBoxDef.offsetY;
			if (this.lineUpTargetY > this.y + this.displacementY + this.hitBoxDef.height / 2 + this.hitBoxDef.offsetY) {
				this.vspeed = 1;
			} else if (this.lineUpTargetY < this.y + this.displacementY + this.hitBoxDef.height / 2 + this.hitBoxDef.offsetY) {
				this.vspeed = -1;
			}
			if (this.hspeed > this.maxSpeed)
				this.hspeed = this.maxSpeed;
			if (this.hspeed < -1 * this.maxSpeed)
				this.hspeed = -1 * this.maxSpeed;
			if (this.game.player1.dead) {
				this.vspeed = 0;
			}
		} else if (Math.abs(this.initialX - this.x) >= this.walkDistance && this.bounceCd == 0) {
			this.hspeed *= -1;
			this.bounceCd = 10;
		}
		super.update();
	}
}

class TopRamen extends Enemy {
	
	constructor(game, x, y, hspeed, vspeed, walkDistance) {
		super(game, x, y);

		this.hspeed = hspeed || 0;
		this.vspeed = vspeed || 0;
		this.walkDistance = walkDistance || 0;
		this.scoreValue = 250;
		this.maxHealth = 100.0;
		this.autoDamage = 25;
		this.currentHealth = this.maxHealth;
		this.currentHealthTemp = this.currentHealth;
		this.displacementFriction = 0.25; //basically, how "heavy" a mob is
		
		//unique vars
		this.attackCooldown = 0;
		
		// Animations
		this.walkAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/topramen.png"), 0, 0, 64, 64, 0.5, 2, true, false, 0, 0);
		this.walkAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/topramen.png"), 0, 0, 64, 64, 0.5, 2, true, false, 0, 0);
		this.deadAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/topramen_dead.png"), 0, 0, 64, 64, 1, 1, true, false, 0, 0);
		this.deadAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/topramen_dead.png"), 0, 0, 64, 64, 1, 1, true, false, 0, 0);
		this.aniLeft = this.walkAnimationLeft;
		this.aniRight = this.walkAnimationRight;
		this.currentAnimation = this.aniLeft;
		
		this.hitBoxDef = {
			width: 56, height: 56, offsetX: 4, offsetY: 4, growthX: 0, growthY: 0
		};
		drawHitBox(this);
	}
	
	update() {
		if (this.currentHealth < this.maxHealth) {
			if (!this.activated) {
				this.activated = true;
			}
			if (this.activated) {
				if (this.attackCooldown == 0) {
					this.attackCooldown = 90;
					var newParticle = new Particle(IMG_PART, this.x + this.displacementX + this.hitBoxDef.width / 2, this.y + this.displacementY + this.hitBoxDef.height / 2, 0, 0, 0, 0, 0.1, 0, 10, 5, 0, 50, 1, 0, false, this.game,
						new Animation(ASSET_MANAGER.getAsset("./img/Enemy/cannedtuna.png"), 0, 0, 32, 32, 1, 1, true, false, 0, 0));
					newParticle.attackId = AYA_SHOT;
					newParticle.targetX = this.game.player1.x + this.game.player1.hitBoxDef.width / 2;
					newParticle.targetY = this.game.player1.y + this.game.player1.hitBoxDef.height;
					newParticle.targetSpeed = 2;
					this.game.addEntity(newParticle);
					playSound(cannedTunaSound);
				} else {
					this.attackCooldown--;
				}
				this.lineUpTargetY = this.game.player1.y + this.game.player1.hitBoxDef.height / 2 + this.game.player1.hitBoxDef.offsetY - 128;
				if (this.lineUpTargetY > this.y + this.displacementY + this.hitBoxDef.height / 2 + this.hitBoxDef.offsetY) {
					this.vspeed = 1;
				} else if (this.lineUpTargetY < this.y + this.displacementY + this.hitBoxDef.height / 2 + this.hitBoxDef.offsetY) {
					this.vspeed = -1;
				}
				if (this.game.player1.dead) {
					this.vspeed = 0;
				}
			}
			if (this.bounceCd == 0 && this.hspeed < 0 && this.game.player1.x + this.game.player1.hitBoxDef.width / 2 + this.game.player1.hitBoxDef.offsetX > this.x + this.displacementX + this.hitBoxDef.width / 2 + this.hitBoxDef.offsetX) {
				this.hspeed *= -1;
				this.bounceCd = 20;
			} else if (this.bounceCd == 0 && this.hspeed > 0 && this.game.player1.x + this.game.player1.hitBoxDef.width / 2 + this.game.player1.hitBoxDef.offsetX < this.x + this.displacementX + this.hitBoxDef.width / 2 + this.hitBoxDef.offsetX) {
				this.hspeed *= -1;
				this.bounceCd = 20;
			}
		} else if (Math.abs(this.initialX - this.x) >= this.walkDistance && this.bounceCd == 0) {
			this.hspeed *= -1;
			this.bounceCd = 10;
		}
		super.update();
	}
}

class Uni extends Enemy {
	
	constructor(game, x, y) {
		super(game, x, y);
		
		this.scoreValue = 200;
		this.maxHealth = 100.0;
		this.autoDamage = 30;
		this.currentHealth = this.maxHealth;
		this.currentHealthTemp = this.currentHealth;
		this.displacementFriction = 0.4; //basically, how "heavy" a mob is
		this.groundlocked = true;
		
		//unique vars
		this.changing = false;
		this.unchanging = false;
		this.changeTime = 0;
		this.changeCooldown = 0;
		
		// Animations
		this.walkAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/uni.png"), 0, 0, 64, 64, 0.5, 2, true, false, 0, 0);
		this.walkAnimationRight = this.walkAnimationLeft;
		this.changeAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/uni_spiking.png"), 0, 0, 64, 64, 0.1, 3, false, false, 0, 0);
		this.changeAnimationRight = this.changeAnimationLeft;
		this.changedAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/uni_spiked.png"), 0, 0, 64, 64, 0.5, 2, true, false, 0, 0);
		this.changedAnimationRight = this.changeAnimationLeft;
		this.unchangeAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/uni_unspike.png"), 0, 0, 64, 64, 0.1, 3, false, false, 0, 0);
		this.unchangeAnimationRight = this.unchangeAnimationLeft;
		this.deadAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/uni_dead.png"), 0, 0, 64, 64, 1, 1, true, false, 0, 0);
		this.deadAnimationRight = this.deadAnimationLeft;
		this.aniLeft = this.walkAnimationLeft;
		this.aniRight = this.walkAnimationRight;
		this.currentAnimation = this.aniLeft;
		
		this.hitBoxSmall = {
			width: 32, height: 32, offsetX: 16, offsetY: 16, growthX: 0, growthY: 0
		};
		this.hitBoxDefBig = {
			width: 56, height: 56, offsetX: 4, offsetY: 4, growthX: 0, growthY: 0
		};
		this.hitBoxDef = this.hitBoxSmall;
		this.hitBoxInitial = this.hitBoxDef;
		drawHitBox(this);
	}
	
	
	update() {
		console.log(!this.changing && this.changeTime == 0 && !this.unchanging);				
		if (this.changeCooldown > 0)
			this.changeCooldown--;
		if (this.changeCooldown == 0 && !this.changing && this.changeTime == 0 && !this.unchanging) {
			console.log("CHANGING");
			this.changing = true;
			this.aniLeft = this.changeAnimationLeft;
			this.aniRight = this.changeAnimationRight;
		}
		if (this.changing && this.currentAnimation.isDone()) {
			console.log("CHANGE DONE");
			this.changing = false;
			this.currentAnimation.restart();
			this.changeTime = 150;
			this.displacementFriction = 10;
			this.hitBoxDef = this.hitBoxDefBig;
			this.meleeInvuln = true;
			this.aniLeft = this.changedAnimationLeft;
			this.aniRight = this.changedAnimationRight;
		}
		if (this.unchanging && this.currentAnimation.isDone()) {
			console.log("unCHANGE DONE");
			this.unchanging = false;
			this.changeCooldown = 150;
			this.currentAnimation.restart();
			this.aniLeft = this.walkAnimationLeft;
			this.aniRight = this.walkAnimationRight;
			this.displacementFriction = 0.4;
		}
		if (this.changeTime > 0) {
			this.changeTime--;
			if (this.changeTime == 0) {
				console.log("time to unchange DONE");
				this.unchanging = true;
				this.aniLeft = this.unchangeAnimationLeft;
				this.aniRight = this.unchangeAnimationRight;
				this.meleeInvuln = false;
				this.hitBoxDef = this.hitBoxSmall;
			}
		}
		super.update();
	}
}