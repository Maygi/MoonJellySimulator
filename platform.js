var PLATFORM_BOUNCY = 1;
var PLATFORM_FIRE = 2;
var PLATFORM_FADE = 3;
var PLATFORM_BREAK = 4;

/**
    Platform
*/
function Platform(game, x, y, hSpeed, vSpeed, switchDelay, specialId, stepOffset) {
    // Number Variables
    this.x = x;
    this.y = y;
    this.width = 63;
    this.height = 16;
    this.hSpeed = hSpeed || 0;
    this.vSpeed = vSpeed || 0;
    this.switchDelay = switchDelay || 0;
	this.specialId = specialId || 0;
    this.step = stepOffset || 0;
    this.delay = 0;
	this.fadeAmount = 0;
	this.trigger = false;
	this.temporary = false;
	this.tick = 0;
	this.life = 0;
    if (this.vSpeed !== 0 && this.step > 0) {
    	this.delay = this.step;
    	this.step = 0;
    }
    // Pictures and Animations
    this.platformPicture = ASSET_MANAGER.getAsset("./img/UI/Platform.png");
    if (this.specialId === PLATFORM_BOUNCY) {
        this.platformPicture = ASSET_MANAGER.getAsset("./img/UI/PlatformBouncy.png");    	
    }
    if (this.specialId === PLATFORM_FIRE) {
        this.platformPicture = ASSET_MANAGER.getAsset("./img/UI/PlatformFire.png");    	
    }
    if (this.specialId === PLATFORM_BREAK) {
        this.platformPicture = ASSET_MANAGER.getAsset("./img/Platform/platform_crumble.png");    	
    }
	if (this.specialId == 0 && game.currentMapId == GAME_EATENPART)
		this.platformPicture = ASSET_MANAGER.getAsset("./img/Platform/platform_red.png");  
    
    Entity.call(this, game, x, y);
    
    this.hitBoxDef = {
    	width: this.width, height: this.height, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
    };
    createHitBox(this);
}

Platform.prototype = new Entity();
Platform.prototype.constructor = Platform;

Platform.prototype.remove = function() {
	for (i = 0; i < this.hitBox.width; i += 10) {
		playSound(breakSound);
		var particle = new Particle(SHAPE_PART, this.x + i, this.y, 4, -4, 0, -4, 0.15, 0.1, 0, 5, 0, 50, 1, 0, true, this.game);
		var element;
		if (this.specialId === 0)
			element = new SquareElement(6 + Math.random() * 4, 6 + Math.random() * 4, "#123D5C", "#386586");
		else if (this.specialId === 1)
			element = new SquareElement(6 + Math.random() * 4, 6 + Math.random() * 4, "#39682D", "#41850B");
		else
			element = new SquareElement(6 + Math.random() * 4, 6 + Math.random() * 4, "#3A1F0E", "#7F5336");	        	
		particle.other = element;
		this.game.addEntity(particle);
	}
	this.removeFromWorld = true;
};

Platform.prototype.update = function () {
	// Only update when it is visible on the screen
	if (this.delay > 0) {
		this.delay--;
	} else {
		this.step++;
		this.tick++;
		if (this.tick >= this.life && this.life != 0) {
			this.remove();
		}
		if (this.switchDelay > 0 && this.step % this.switchDelay === 0) {
			this.hSpeed *= -1;
			this.vSpeed *= -1;
		}
		if (this.specialId === PLATFORM_FIRE) {
			if (this.step >= 150 && isOnScreen(this)) {
				if (this.step === 150)
					playSoundProx(this.game, this, fireSound);
				if (this.step % 2 === 0) {
					for (i = 0; i < this.hitBox.width; i += 10) {
						if (Math.random() >= 0.5) {
							var particle = new Particle(SHAPE_PART, this.x + i, this.y, 1, -1, 0, -4, 0, 0.1, 0, 5, 0, 50, 1, 0, true, this.game);
							var element;
							element = new SquareElement(4 + Math.random() * 2, 4 + Math.random() * 2, "#f27d30", "#eab120");
							particle.other = element;
							particle.attackId = 5;
							this.game.addEntity(particle);
						}
					}
				}
			}
			if (this.step >= 200)
				this.step = 0;
		}
		if (this.specialId === PLATFORM_FADE) {
			if (this.step == 120) {
				var shine = new Particle(IMG_PART, this.x, this.y, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 1, 0, false, this.game,
					new Animation(ASSET_MANAGER.getAsset("./img/Platform/invisible_shine.png"), 0, 0, 63, 16, .05, 8, false, false, 0, 0));
				shine.highPriority = 1;
				this.game.addEntity(shine);
			}
			if (this.step >= 150 && this.step <= 200) {
				this.fadeAmount += 0.02;
				if (this.fadeAmount > 1)
					this.fadeAmount = 1;
			}
			if (this.step >= 290) {
				this.fadeAmount -= 0.02;
				if (this.fadeAmount < 0)
					this.fadeAmount = 0;
			}
			if (this.step >= 340) {
				this.step = 0;
				this.fadeAmount = 0;
			}
		}
		if (this.specialId === PLATFORM_BREAK) {
			if (this.trigger) {
				if (this.step == 60) {
					playSound(breakSound);
					this.fadeAmount = 1;
					for (i = 0; i < this.hitBox.width; i += 10) {
						var particle = new Particle(SHAPE_PART, this.x + i, this.y, 4, -4, 0, -4, 0.15, 0.1, 0, 5, 0, 50, 1, 0, true, this.game);
						var element;
							element = new SquareElement(6 + Math.random() * 4, 6 + Math.random() * 4, "#123D5C", "#386586");        	
						particle.other = element;
						this.game.addEntity(particle);
					}
				}
				if (this.step >= 160) {
					this.fadeAmount -= 0.02;
					if (this.fadeAmount < 0) {
						this.fadeAmount = 0;
						this.trigger = false;
					}
				}
			} 
		}
		this.x += this.hSpeed;
		this.y += this.vSpeed;
	}
    Entity.prototype.update.call(this);
};

Platform.prototype.trigger = function() {
	this.trigger = true;
	this.step = 0;
}

Platform.prototype.draw = function (ctx) {
	if (isOnScreen(this)) {
		if (!this.removeFromWorld) {
	        ctx.globalAlpha = 1 - this.fadeAmount;
			if (this.specialId === PLATFORM_BREAK && this.trigger && this.fadeAmount == 0) {
				ctx.drawImage(this.platformPicture, this.x - 2 + Math.random() * 4, this.y - 2 + Math.random() * 4, this.width, this.height); 
			} else {
				ctx.drawImage(this.platformPicture, this.x, this.y, this.width, this.height); 
			}
	        ctx.globalAlpha = 1;
			drawHitBox(this, ctx);
		}
	}
	Entity.prototype.draw.call(this);
}

/**
    Platform
*/
var WALL_SPIKE_UP = 1;
var WALL_SPIKE_DOWN = 2;
var WALL_SPIKE_RIGHT = 3;
var WALL_SPIKE_LEFT = 4;
var WALL_NOCHECKPOINT = 5;


function Wall(game, x, y, width, height, specialId, specialFunction, stepOffset) {
    // Number Variables
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
	this.tick = 0;
    this.platformPicture = ASSET_MANAGER.getAsset("./img/UI/Bottom.png");
	if (game.currentPhase == GAME_PHASE_EATEN)
		this.platformPicture = ASSET_MANAGER.getAsset("./img/Platform/wall_red.png");
    this.isWall = true;
	this.hSpeed = 0;
	this.vSpeed = 0;
	this.fadeAmount = 0;
	this.specialId = specialId || 0;
	this.specialFunction = specialFunction || 0;
	this.stepOffset = stepOffset || 0;
	this.phase = 0;
	if (this.stepOffset != 0 && this.specialId >= 1 && this.specialId <= 4) { //limit offset for walls. too lazy to make another offset value adjustor
		this.phase = 1;
		this.stepOffset = 0;
		switch(this.specialId) {
			case WALL_SPIKE_UP:
				this.y += 64;
			break;
			case WALL_SPIKE_DOWN:
				this.y -= 64;
			break;
			case WALL_SPIKE_LEFT:
				this.x += 64;
			break;
			case WALL_SPIKE_RIGHT:
				this.x -= 64;
			break;
		}
		
	}
	this.temporary = false;
	this.life = 0;
	if (this.specialId == WALL_SPIKE_UP) {
		this.platformPicture = ASSET_MANAGER.getAsset("./img/Platform/spike_up.png");
		this.width = 32;
		this.height = 48;
	}
	if (this.specialId == WALL_SPIKE_DOWN) {
		this.platformPicture = ASSET_MANAGER.getAsset("./img/Platform/spike_down.png");
		this.width = 32;
		this.height = 48;
	}
	if (this.specialId == WALL_SPIKE_RIGHT) {
		this.platformPicture = ASSET_MANAGER.getAsset("./img/Platform/spike_right.png");
		this.width = 48;
		this.height = 48;
	}
	if (this.specialId == WALL_SPIKE_LEFT) {
		this.platformPicture = ASSET_MANAGER.getAsset("./img/Platform/spike_left.png");
		this.width = 48;
		this.height = 48;
	}
    
    Entity.call(this, game, this.x, this.y);
    
    this.hitBoxDef = {
    	width: this.width, height: this.height, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
    };
    createHitBox(this);
}

Wall.prototype = new Entity();
Wall.prototype.constructor = Wall;

Wall.prototype.remove = function() {
	for (i = 0; i < this.hitBox.width; i += 10) {
		playSound(breakSound);
		var particle = new Particle(SHAPE_PART, this.x + i, this.y, 4, -4, 0, -4, 0.15, 0.1, 0, 5, 0, 50, 1, 0, true, this.game);
		var element;
		element = new SquareElement(6 + Math.random() * 4, 6 + Math.random() * 4, "#123D5C", "#386586");            	
		particle.other = element;
		this.game.addEntity(particle);
	}
	this.removeFromWorld = true;
};

Wall.prototype.canHit = function() {
	if (this.phase == 1)
		return false;
	return true;
}

Wall.prototype.update = function () {
    Entity.prototype.update.call(this);
	this.tick++;
	if (this.specialFunction == 1 && this.specialId >= WALL_SPIKE_UP && this.specialId <= WALL_SPIKE_LEFT) {
		if ((this.tick - this.stepOffset) % 60 == 0) {
			if (this.phase == 0) { //spikes retreat
				this.phase = 1;
				switch(this.specialId) {
					case WALL_SPIKE_UP:
						this.vSpeed = 11;
					break;
					case WALL_SPIKE_DOWN:
						this.vSpeed = -10;
					break;
					case WALL_SPIKE_LEFT:
						this.hSpeed = 10;
					break;
					case WALL_SPIKE_RIGHT:
						this.hSpeed = -10;
					break;
				}
			} else {
				this.phase = 0;
				switch(this.specialId) {
					case WALL_SPIKE_UP:
						this.vSpeed = -11;
					break;
					case WALL_SPIKE_DOWN:
						this.vSpeed = 10;
					break;
					case WALL_SPIKE_LEFT:
						this.hSpeed = -10;
					break;
					case WALL_SPIKE_RIGHT:
						this.hSpeed = 10;
					break;
				}
			}
		}
	}
	this.x += this.hSpeed;
	this.y += this.vSpeed;
	if (this.specialFunction == 1) {
		this.vSpeed *= 0.8;
		this.hSpeed *= 0.8;
	}
		
	if (this.tick >= this.life && this.life != 0) {
		this.remove();
	}
};

Wall.prototype.draw = function (ctx) {
    ctx.drawImage(this.platformPicture, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height); 
    drawHitBox(this, ctx);
	Entity.prototype.draw.call(this);
}