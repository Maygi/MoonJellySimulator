class Enemy {
	constructor(game, x, y) {
		this.game = game;
		this.x = x;
		this.y = y;
		this.hspeed = 0;
		this.vspeed = 0;
		this.hFriction = 0;
		this.gravity = 0;
		this.proposedGravity = 0.2;
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
		this.initialY = y;
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
		this.invulnFromTop = 0;
		this.invuln = false;
		this.mapFlag = false;
		
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
	
	isLeftOfPlayer() {
		return this.getXMidpoint() < this.game.player1.x + this.game.player1.hitBoxDef.offsetX + this.game.player1.hitBoxDef.width / 2;
	}
	
	distanceToPlayer() {
		return Math.abs(this.getXMidpoint() - (this.game.player1.x + this.game.player1.hitBoxDef.offsetX + this.game.player1.hitBoxDef.width / 2));
	}
	
	distanceToPlayerTrue() {
		return Math.abs(this.getXMidpoint() - (this.game.player1.x + this.game.player1.hitBoxDef.offsetX + this.game.player1.hitBoxDef.width / 2)) + 
				Math.abs(this.getYMidpoint() - (this.game.player1.y + this.game.player1.hitBoxDef.offsetY + this.game.player1.hitBoxDef.height / 2));
	}
	
	handleSideHit() {
		
	}
	
	flip() {
		if (this.bounceCd == 0 && this.currentHealth == this.maxHealth) {
			this.hspeed *= -1;
			this.bounceCd = 30;
		}
	}
	
	update() {
		var that = this;
		var checkPlatforms = false;
		if (!isOnScreen(this))
			return;
		if (this.displacementXSpeed != 0) {
			if (this.displacementXSpeed > 0) {
				this.displacementXSpeed -= this.displacementFriction;			
				if (this.displacementXSpeed < 0)
					this.displacementXSpeed = 0;
			} else {
				this.displacementXSpeed += this.displacementFriction;			
				if (this.displacementXSpeed > 0)
					this.displacementXSpeed = 0;
			}
			this.displacementX += this.displacementXSpeed;
			checkPlatforms = true;
		}
		if (this.currentHealth < this.maxHealth || this instanceof AnglerSlime2)
			checkPlatforms = true;
		if (checkPlatforms) {
			var found = false;
			if (this.groundlocked && that.getY() + that.hitBoxDef.height + that.hitBoxDef.offsetY >= this.game.player1.ground) {
				found = true;
				that.gravity = 0;
				that.vspeed = 0;
			}
			this.game.currentMap.platforms.forEach(function(currentPlatform) {
				if (that.getX() + that.hitBoxDef.offsetX + that.hitBoxDef.width > currentPlatform.hitBox.x) {
					if (that.getX() < (currentPlatform.hitBox.x + currentPlatform.hitBox.width - 1)) {
						if ((that.getY() + that.hitBoxDef.height + that.hitBoxDef.offsetY) + currentPlatform.vSpeed <= currentPlatform.hitBox.y + 16 || 
								(that.getY() + that.hitBoxDef.height + that.hitBoxDef.offsetY) - currentPlatform.vSpeed <= currentPlatform.hitBox.y + 16) {
							if ((that.getY() + that.hitBoxDef.height + that.hitBoxDef.offsetY + (that.vspeed + that.proposedGravity)) >= currentPlatform.hitBox.y) {
								if (!currentPlatform.isWall && !that.groundlocked) {
									//FOREACH LOOP CONTINUE LETS GO HOW TO DISCRETE LOGIC
								} else {
									found = true;
									that.gravity = 0;
									that.vspeed = 0;
								}
								if (currentPlatform.specialId == WALL_SPIKE_UP && currentPlatform.isWall) {
									applyDamage(that.x, that.y, that.game, 9999, that);
									playSound(shotHitSound);
								}
							}
						}
					}
				}
				if (currentPlatform.isWall) {
					if (that.getX() + that.hitBoxDef.width > currentPlatform.x && that.getX() < currentPlatform.x + currentPlatform.width - 1) {
						if (that.getY() + that.hitBoxDef.offsetY + that.hitBoxDef.height > currentPlatform.y + currentPlatform.height && that.getY() + that.hitBoxDef.offsetY < currentPlatform.y + currentPlatform.height) {
							that.y = currentPlatform.y + currentPlatform.height - that.hitBoxDef.growthY - that.hitBoxDef.offsetY - that.displacementY;
							that.vspeed = 0;
							that.gravity = 0;	
							if (currentPlatform.specialId == WALL_SPIKE_DOWN) {
								applyDamage(that.getX(), that.getY(), that.game, 9999, that);
								playSound(shotHitSound);
							}
						}
					} else {
						if (that.getY() + that.hitBoxDef.offsetY + that.hitBoxDef.height > currentPlatform.y && that.getY() + that.hitBoxDef.offsetY < currentPlatform.y + currentPlatform.height) {
							if (that.getX() < currentPlatform.x && that.getX() + that.hitBoxDef.width >= currentPlatform.x && (that.displacementXSpeed > 0 || that.hspeed > 0)) {
								that.x = currentPlatform.x - that.hitBoxDef.width - that.hitBoxDef.offsetX - that.displacementX;
								if (currentPlatform.specialId == WALL_SPIKE_LEFT) {
									applyDamage(that.getX(), that.getY(), that.game, 9999, that);
									playSound(shotHitSound);
								}
							} else if (that.getX() < currentPlatform.x + currentPlatform.width && that.getX() + that.hitBoxDef.width >= currentPlatform.x + currentPlatform.width && (that.displacementXSpeed < 0 || that.hspeed < 0)) {
								that.x = currentPlatform.x + currentPlatform.width - that.hitBoxDef.growthX - that.hitBoxDef.offsetX - 1 - that.displacementX;
								if (currentPlatform.specialId == WALL_SPIKE_RIGHT) {
									applyDamage(that.getX(), that.getY(), that.game, 9999, that);
									playSound(shotHitSound);
								}
							}
						}
					}
				}
			});
			if (!found) {
				this.gravity = this.groundlocked ? this.proposedGravity : 0;
				this.vspeed += this.gravity;
			}
		}
		if (this.displacementYSpeed != 0 && !this.groundlocked) {
			if (this.displacementYSpeed > 0) {
				this.displacementYSpeed -= this.displacementFriction;			
				if (this.displacementYSpeed < 0)
					this.displacementYSpeed = 0;
			} else {
				this.displacementYSpeed += this.displacementFriction;			
				if (this.displacementYSpeed > 0)
					this.displacementYSpeed = 0;
			}
			this.displacementY += this.displacementYSpeed;
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
		if (this.hFriction > 0) {
			if (this.hspeed > 0) {
				this.hspeed = Math.max(0, this.hspeed - this.hFriction);
			} else {
				this.hspeed = Math.min(0, this.hspeed + this.hFriction);
			}
		}
		this.x += this.hspeed;
		this.y += this.vspeed;
		if (this.hspeed > 0) {
			this.currentAnimation = this.aniRight;
			this.lastDirection = "Right";
		} else if (this.hspeed < 0) {
			this.currentAnimation = this.aniLeft;
			this.lastDirection = "Left";
		} else {
			if (this.lastDirection == "Left")
				this.currentAnimation = this.aniLeft;
			else
				this.currentAnimation = this.aniRight;
		}
		if (this.autoDamage > 0 && checkCollision(this.game.player1, this) && !this.game.player1.hitByAttack) {
			if (this.game.player1.vulnerable && this.game.player1.invincTimer === 0) {
				var createX;
				var createY;
				if (this.getXMidpoint() > this.game.player1.x + this.game.player1.hitBoxDef.offsetX + this.game.player1.hitBoxDef.width / 2) {
					createX = this.game.player1.x + this.game.player1.hitBoxDef.offsetX + this.game.player1.hitBoxDef.width;
				} else if (this.getXMidpoint() < this.game.player1.x + this.game.player1.hitBoxDef.offsetX + this.game.player1.hitBoxDef.width / 2) {
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
				if (this.game.player1.attacking) {
					this.game.player1.elapsedTime = 0;
					this.game.player1.attacking = false;
					this.game.player1.attackIndex = 0;
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
				if (this.lastDirection == "Right") {
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
			else
				this.currentAnimation = this.deadAnimationLeft;
			if (this.maxHealth < 300) {
				this.game.addEntity(new Particle(IMG_PART, this.x + this.displacementX, this.y + this.displacementY,
					0, 0, 0, 0, 0, 0, 0, 30, 0, 10, 1, 0, false, this.game, this.currentAnimation));
			}
			var coins = this.scoreValue / 25;
			var bigCoins = 0;
			if (coins >= 8) {
				bigCoins = this.scoreValue / 100;
				coins = (this.scoreValue % 100) / 25;
			}
			for (var i = 0; i < bigCoins; i++) {
				this.game.addEntity(new Powerup(this.game, this.getXMidpoint(), this.getYMidpoint(), JELLY_COIN, 1));
			}
			for (var i = 0; i < coins; i++) {
				this.game.addEntity(new Powerup(this.game, this.getXMidpoint(), this.getYMidpoint(), JELLY_COIN_SM, 1));
			}
			//addScore(this.game, this.scoreValue);
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
		this.scoreValue = 50;
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
		} else if (this.walkDistance != 0 && Math.abs(this.initialX - this.x) >= this.walkDistance && this.bounceCd == 0) {
			this.hspeed *= -1;
			this.bounceCd = 10;
		}
		super.update();
	}
}

class AnglerSlime extends Enemy {
	
	constructor(game, x, y) {
		super(game, x, y);

		this.hspeed = 0;
		this.walkDistance = 0;
		this.scoreValue = 50;
		this.maxHealth = 90.0;
		this.autoDamage = 5;
		this.currentHealth = this.maxHealth;
		this.currentHealthTemp = this.currentHealth;
		this.displacementFriction = 5000; //basically, how "heavy" a mob is
		this.groundlocked = true;
		
		// Animations
		this.walkAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/anglerslime.png"), 0, 0, 64, 64, 0.5, 2, true, false, 0, 0);
		this.walkAnimationRight = this.walkAnimationLeft;
		this.deadAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/anglerslime_dead.png"), 0, 0, 64, 64, 1, 1, true, false, 0, 0);
		this.deadAnimationRight = this.deadAnimationLeft;
		this.aniLeft = this.walkAnimationLeft;
		this.aniRight = this.walkAnimationRight;
		this.currentAnimation = this.aniLeft;
		
		this.hitBoxDef = {
			width: 60, height: 48, offsetX: 2, offsetY: 16, growthX: 0, growthY: 0
		};
		drawHitBox(this);
	}
	
	update() {
		super.update();
	}
}

class ShellSnail extends SeaSlug {
	
	constructor(game, x, y, hspeed, walkDistance) {
		super(game, x, y, hspeed, walkDistance);

		this.scoreValue = 200;
		this.maxHealth = 75.0;
		this.autoDamage = 20;
		this.currentHealth = this.maxHealth;
		this.currentHealthTemp = this.currentHealth;
		this.displacementFriction = 0.50; //basically, how "heavy" a mob is
		this.groundlocked = true;
		this.invulnFromTop = 48;
		
		// Animations
		this.walkAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/shellsnail_left.png"), 0, 0, 64, 64, 0.5, 2, true, false, 0, 0);
		this.walkAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/shellsnail_right.png"), 0, 0, 64, 64, 0.5, 2, true, false, 0, 0);
		this.deadAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/shellsnail_dead_left.png"), 0, 0, 64, 64, 1, 1, true, false, 0, 0);
		this.deadAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/shellsnail_dead_right.png"), 0, 0, 64, 64, 1, 1, true, false, 0, 0);
		this.aniLeft = this.walkAnimationLeft;
		this.aniRight = this.walkAnimationRight;
		this.currentAnimation = this.aniLeft;
		
		this.hitBoxDef = {
			width: 56, height: 60, offsetX: 2, offsetY: 4, growthX: 0, growthY: 0
		};
		drawHitBox(this);
	}
	
	update() {
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
		} else if (this.walkDistance != 0 && Math.abs(this.initialX - this.x) >= this.walkDistance && this.bounceCd == 0) {
			this.hspeed *= -1;
			this.bounceCd = 10;
		}
		super.update();
	}
}


class AnglerSlime2 extends Enemy {
	
	constructor(game, x, y) {
		super(game, x, y);

		this.hspeed = 0;
		this.walkDistance = 0;
		this.scoreValue = 50;
		this.maxHealth = 45.0;
		this.autoDamage = 20;
		this.currentHealth = this.maxHealth;
		this.currentHealthTemp = this.currentHealth;
		this.displacementFriction = 0.5; //basically, how "heavy" a mob is
		this.groundlocked = false;
		
		// Animations
		this.walkAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/anglerslime2.png"), 0, 0, 64, 64, 0.5, 2, true, false, 0, 0);
		this.walkAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/anglerslime2_right.png"), 0, 0, 64, 64, 0.5, 2, true, false, 0, 0);
		this.deadAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/anglerslime2_dead.png"), 0, 0, 64, 64, 1, 1, true, false, 0, 0);
		this.deadAnimationRight = this.deadAnimationLeft;
		this.aniLeft = this.walkAnimationLeft;
		this.aniRight = this.walkAnimationRight;
		this.currentAnimation = this.aniLeft;
		
		this.hitBoxDef = {
			width: 56, height: 56, offsetX: 4, offsetY: 4, growthX: 0, growthY: 0
		};
		drawHitBox(this);
	}
	
	update() {
		if (this.distanceToPlayerTrue() <= 500 || this.activated) {
			this.activated = true;
			this.lineUpTargetY = this.game.player1.y + this.game.player1.hitBoxDef.height / 2 + this.game.player1.hitBoxDef.offsetY;
			var deltaY = this.getYMidpoint() - this.lineUpTargetY;
			if (Math.abs(deltaY) < 30) {
				this.vspeed = 0;
			} else if (deltaY < 0) {
				this.vspeed = 1.5;
			} else {
				this.vspeed = -1.5;
			}
			var deltaX = this.getXMidpoint() - (this.game.player1.x + this.game.player1.hitBoxDef.width / 2 + this.game.player1.hitBoxDef.offsetX);
			if (Math.abs(deltaX) < 30)
				this.hspeed = 0;
			else if (deltaX < 0)
				this.hspeed = 1.5;
			else
				this.hspeed = -1.5;
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
		this.maxHealth = 90.0;
		this.autoDamage = 30;
		this.currentHealth = this.maxHealth;
		this.currentHealthTemp = this.currentHealth;
		this.displacementFriction = 5; //basically, how "heavy" a mob is
		this.groundlocked = false;
		
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
		if (this.changeCooldown > 0)
			this.changeCooldown--;
		if (this.changeCooldown == 0 && !this.changing && this.changeTime == 0 && !this.unchanging) {
			this.changing = true;
			this.aniLeft = this.changeAnimationLeft;
			this.aniRight = this.changeAnimationRight;
		}
		if (this.changing && this.currentAnimation.isDone()) {
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
			this.unchanging = false;
			this.changeCooldown = 150;
			this.currentAnimation.restart();
			this.aniLeft = this.walkAnimationLeft;
			this.aniRight = this.walkAnimationRight;
			this.displacementFriction = 5;
		}
		if (this.changeTime > 0) {
			this.changeTime--;
			if (this.changeTime == 0) {
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

class Clam extends Enemy {
	
	constructor(game, x, y) {
		super(game, x, y);
		
		this.scoreValue = 500;
		this.maxHealth = 300.0;
		this.autoDamage = 20;
		this.currentHealth = this.maxHealth;
		this.currentHealthTemp = this.currentHealth;
		this.displacementFriction = 1000; //basically, how "heavy" a mob is
		this.groundlocked = false;
		
		//unique vars
		this.changing = false;
		this.unchanging = false;
		this.changeTime = 0;
		this.attackStep = 0;
		this.changeCooldown = 0;
		this.attackSequence = 0;
		this.totalAttacks = 0;
		this.attackMax = 5;
		this.dieTime = 0;
		
		// Animations
		this.walkAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/clam.png"), 0, 0, 160, 128, 1, 1, true, false, 0, 0);
		this.walkAnimationRight = this.walkAnimationLeft;
		this.changeAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/clam_open.png"), 0, 0, 160, 128, 0.2, 3, false, false, 0, 0);
		this.changeAnimationRight = this.changeAnimationLeft;
		this.changedAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/clam_idle_open.png"), 0, 0, 160, 128, 0.5, 2, true, false, 0, 0);
		this.changedAnimationRight = this.changeAnimationLeft;
		this.unchangeAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/clam_close.png"), 0, 0, 160, 128, 0.2, 3, false, false, 0, 0);
		this.unchangeAnimationRight = this.unchangeAnimationLeft;
		this.vulnAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/clam_vulnerable.png"), 0, 0, 256, 128, 1, 1, true, false, 0, 0);
		this.deadAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/clam.png"), 0, 0, 160, 128, 1, 1, true, false, 0, 0);
		this.deadAnimationRight = this.deadAnimationLeft;
		this.aniLeft = this.walkAnimationLeft;
		this.aniRight = this.walkAnimationRight;
		this.currentAnimation = this.aniLeft;
		
		this.hitBoxSmall = {
			width: 110, height: 80, offsetX: 8, offsetY: 45, growthX: 0, growthY: 0
		};
		this.hitBoxDefBig = {
			width: 110, height: 110, offsetX: 8, offsetY: 45, growthX: 0, growthY: 0
		};
		this.hitBoxDef = this.hitBoxSmall;
		this.hitBoxInitial = this.hitBoxDef;
		drawHitBox(this);
	}
	
	
	update() {
		if (this.game.currentPhase == GAME_PHASE_CLAM);
			this.game.currentBoss = this;
		if (this.changeCooldown > 0)
			this.changeCooldown--;
		if (this.changeCooldown == 0 && !this.changing && this.changeTime == 0 && !this.unchanging) {
			this.changing = true;
			this.aniLeft = this.changeAnimationLeft;
			this.aniRight = this.changeAnimationRight;
		}
		if (this.changeTime > 0) {
			this.attackStep++;
			switch(this.attackSequence) {
				case 0: //targeted
					if (this.attackStep >= 30 && this.attackStep % 15 == 0) {
						var newParticle = new Particle(PART_SECONDARY, this.x + 60, this.y + 94, 
								0, 0, 0, 0, 0.1, 0.1, 0, 150, 0, 0, .8, .1, false, this.game);
						var element = new CircleElement(14 + Math.random() * 5, "#ff4e21", "#ff7c2b");
						newParticle.other = element;
						newParticle.attackId = PARTICLE_CLAM_ATTACK;
						newParticle.targetX = this.game.player1.x + this.game.player1.hitBoxDef.width / 2 + this.game.player1.hitBoxDef.offsetX;
						newParticle.targetY = this.game.player1.y + this.game.player1.hitBoxDef.height / 2 + this.game.player1.hitBoxDef.offsetY - 20 + Math.random() * 40;
						newParticle.targetSpeed = 14;
						this.game.addEntity(newParticle);
						playSound(shootSound);
					}
				break;
				case 1: //rain
					if (this.attackStep >= 30 && this.attackStep % 5 == 0) {
						var newParticle = new Particle(PART_SECONDARY, this.x + 60, this.y + 94, 
								-5, -20, -10, -20, 0.3, 0.1, 0, 210, 0, 0, .8, .1, false, this.game);
						var element = new CircleElement(14 + Math.random() * 5, "#ff4e21", "#ff7c2b");
						newParticle.other = element;
						newParticle.attackId = PARTICLE_CLAM_ATTACK;
						this.game.addEntity(newParticle);
						playSound(shootSound);
					}
				break;
				case 2: //explosive charges
					if (this.attackStep >= 60 && this.attackStep % 60 == 0) {
						var newParticle = new Particle(PART_SECONDARY, this.x + 60, this.y + 94, 
								-5, -12, -15, -15, 0.3, 0.1, 0, 90, 0, 0, .8, .1, false, this.game);
						var element = new CircleElement(25, "#fae993", "#f0da69");
						newParticle.other = element;
						newParticle.attackId = PARTICLE_CLAM_ATTACK2;
						this.game.addEntity(newParticle);
						playSound(shootSound);
					}
				break;
				case 3: //vulnerable
					if (this.attackStep % 5 == 0) {
						var newParticle = new Particle(PART_SECONDARY, this.x + 30 + Math.random() * 60, this.y + 94, 
								-2, 2, -3, -5, 0.05, 0.1, 0, 30, 0, 0, .8, .1, false, this.game);
						var element = new CircleElement(10, "#d9d9d9", "#bab8b1");
						newParticle.other = element;
						this.game.addEntity(newParticle);
					}
				break;
			}
		}
		if (this.changing && this.currentAnimation.isDone()) {
			this.changing = false;
			this.currentAnimation.restart();
			this.changeTime = 210;
			this.attackStep = 0;
			this.totalAttacks++;
			this.attackSequence = Math.round(Math.random() * 2);
			this.meleeInvuln = true;
			this.aniLeft = this.changedAnimationLeft;
			this.aniRight = this.changedAnimationRight;
			if (this.totalAttacks >= this.attackMax) {
				this.changeTime = 300;
				this.totalAttacks = 0;
				this.attackSequence = 3; //vulnerable
				this.meleeInvuln = false;
				this.aniLeft = this.vulnAnimation;
				this.aniRight = this.vulnAnimation;
				playSound(breakSound);
			}
			this.hitBoxDef = this.hitBoxDefBig;
		}
		if (this.unchanging && this.currentAnimation.isDone()) {
			this.unchanging = false;
			this.changeCooldown = 90;
			this.currentAnimation.restart();
			this.aniLeft = this.walkAnimationLeft;
			this.aniRight = this.walkAnimationRight;
		}
		if (this.changeTime > 0) {
			this.changeTime--;
			if (this.changeTime == 0) {
				this.unchanging = true;
				this.aniLeft = this.unchangeAnimationLeft;
				this.aniRight = this.unchangeAnimationRight;
				this.meleeInvuln = true;
				this.hitBoxDef = this.hitBoxSmall;
			}
		}
		if (this.currentHealth <= 0 && this.dieTime == 0) { //close before dying
			this.dieTime = 120;
			this.currentHealth = 1;
			this.meleeInvuln = true;
			this.unchanging = true;
			this.aniLeft = this.unchangeAnimationLeft;
			this.aniRight = this.unchangeAnimationRight;
			this.invuln = true;
		}
		if (this.dieTime > 0) {
			this.dieTime--;
			if (this.dieTime == 0) {
				this.currentHealth = 0;
				this.game.addEntity(new ClamObject(this.game, this.x, this.y));
			}
		}
		super.update();
	}
}

class Tentacle extends Enemy {
	
	constructor(game, x, y) {
		super(game, x, y);
		
		this.scoreValue = 200;
		this.maxHealth = 22200.0;
		this.autoDamage = 30;
		this.currentHealth = this.maxHealth;
		this.currentHealthTemp = this.currentHealth;
		this.displacementFriction = 1000; //basically, how "heavy" a mob is
		this.groundlocked = true;
		
		//unique vars
		this.changing = false;
		this.unchanging = false;
		this.changeTime = 0;
		this.changeCooldown = 0;
		
		// Animations
		this.walkAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/tentacle_idle_left.png"), 0, 0, 280, 160, 0.5, 4, true, false, -75, 0);
		this.walkAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/tentacle_idle_right.png"), 0, 0, 280, 160, 0.5, 4, true, false, 75, 0);
		this.changeAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/tentacle_slam_left.png"), 0, 0, 280, 160, 0.08, 12, false, false, -75, 0);
		this.changeAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/tentacle_slam_right.png"), 0, 0, 280, 160, 0.08, 12, false, false, 75, 0);
		this.changedAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/tentacle_slammed_left.png"), 0, 0, 280, 160, 1, 1, true, false, -75, 0);
		this.changedAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/tentacle_slammed_right.png"), 0, 0, 280, 160, 1, 1, true, false, 75, 0);
		this.unchangeAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/tentacle_raise_left.png"), 0, 0, 280, 160, 0.12, 4, false, false, -75, 0);
		this.unchangeAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/tentacle_raise_right.png"), 0, 0, 280, 160, 0.12, 4, false, false, 75, 0);
		this.deadAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/tentacle_slammed_left.png"), 0, 0, 280, 160, 1, 1, true, false, -75, 0);
		this.deadAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/tentacle_slammed_right.png"), 0, 0, 280, 160, 1, 1, true, false, 75, 0);
		this.aniLeft = this.walkAnimationLeft;
		this.aniRight = this.walkAnimationRight;
		this.currentAnimation = this.aniLeft;
		
		this.hitBoxSmall = {
			width: 32, height: 160, offsetX: 125, offsetY: 0, growthX: 0, growthY: 0
		};
		this.hitBoxDefBigL = {
			width: 220, height: 24, offsetX: -60, offsetY: 136, growthX: 0, growthY: 0
		};
		this.hitBoxDefBigR = {
			width: 220, height: 24, offsetX: 125, offsetY: 136, growthX: 0, growthY: 0
		};
		this.hitBoxDef = this.hitBoxSmall;
		this.hitBoxInitial = this.hitBoxDef;
		drawHitBox(this);
	}
	
	
	update() {
		var inRange = this.distanceToPlayer() <= 200;
		if (this.changeCooldown > 0)
			this.changeCooldown--;
		if (this.changing) {
			if (this.currentAnimation.elapsedTime >= 0.56) {
				if (this.lastDirection == "Right")
					this.hitBoxDef.growthX += 7.5;
				else
					this.hitBoxDef.growthX -= 7.5;
				this.hitBoxDef.growthY -= 4;
			}
		}
		if (this.unchanging) {
			if (this.lastDirection == "Right")
				this.hitBoxDef.growthX -= 6;
			else
				this.hitBoxDef.growthX += 6;
			this.hitBoxDef.growthY += 4;
		}
		if (inRange && this.changeCooldown == 0 && !this.changing && this.changeTime == 0 && !this.unchanging) {
			this.changing = true;
			this.aniLeft = this.changeAnimationLeft;
			this.aniRight = this.changeAnimationRight;
			if (this.isLeftOfPlayer()) { 
				this.lastDirection = "Right";
			} else {
				this.lastDirection = "Left";
			}
		}
		if (this.changing && this.currentAnimation.isDone()) {
			this.changing = false;
			this.currentAnimation.restart();
			this.changeTime = 60;
			if (this.lastDirection == "Right")
				this.hitBoxDef = this.hitBoxDefBigR;
			else
				this.hitBoxDef = this.hitBoxDefBigL;
			this.aniLeft = this.changedAnimationLeft;
			this.aniRight = this.changedAnimationRight;
			
		}
		if (this.unchanging && this.currentAnimation.isDone()) {
			this.unchanging = false;
			this.changeCooldown = 150;
			this.currentAnimation.restart();
			this.hitBoxDef.growthX = 0;
			this.hitBoxDef.growthY = 0;
			this.aniLeft = this.walkAnimationLeft;
			this.aniRight = this.walkAnimationRight;
		}
		if (this.changeTime > 0) {
			this.changeTime--;
			if (this.changeTime == 0) {
				this.unchanging = true;
				this.aniLeft = this.unchangeAnimationLeft;
				this.aniRight = this.unchangeAnimationRight;
				this.hitBoxDef = this.hitBoxSmall;
			}
		}
		super.update();
	}
}

class Squid extends Enemy {
	
	constructor(game, x, y) {
		super(game, x, y);
		
		this.scoreValue = 200;
		this.maxHealth = 150.0;
		this.autoDamage = 25;
		this.currentHealth = this.maxHealth;
		this.currentHealthTemp = this.currentHealth;
		this.displacementFriction = 0.4; //basically, how "heavy" a mob is
		this.hFriction = 0.05;
		
		// Animations
		this.walkAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/squid.png"), 0, 0, 64, 64, 0.3, 4, true, false, 0, 0);
		this.walkAnimationRight = this.walkAnimationLeft;
		this.deadAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/squid_dead.png"), 0, 0, 64, 64, 1, 1, true, false, 0, 0);
		this.deadAnimationRight = this.deadAnimationLeft;
		this.aniLeft = this.walkAnimationLeft;
		this.aniRight = this.walkAnimationRight;
		this.currentAnimation = this.aniLeft;
		
		this.hitBoxDef = {
			width: 56, height: 56, offsetX: 4, offsetY: 4, growthX: 0, growthY: 0
		};
		drawHitBox(this);
	}
	
	
	update() {
		if (this.bounceCd == 0) {
			this.bounceCd = 90;
			this.vspeed = Math.random() * (this.y / 500) * -4 - 3;
			if (this.getY() + 100 >= this.game.player1.ground)
				this.vspeed = Math.random() * -3 * (this.y / 500) - 3;
			if (this.getY() <= this.initialY - 100)
				this.vspeed = -3;
			this.hspeed = -4 + Math.random() * 8;
			var delta = this.getX() - this.initialX;
			if (delta < -100)
				this.hspeed = Math.random() * 4;
			if (delta > 100)
				this.hspeed = Math.random() * -4;
			
		}
		this.vspeed += 0.08;
		if (this.vspeed < 0 && this.getY() < 0)
			this.vspeed = 0;
		if (this.vspeed > 0 && this.getY() + this.hitBoxDef.height / 2 >= this.game.player1.ground)
			this.vspeed = 0;
		super.update();
	}
}