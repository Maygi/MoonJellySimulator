let myFont = new FontFace(
  "Font",
  "url(./fonts/AYearWithoutRain.ttf)"
);

class BackgroundObject {
	constructor(game, x, y) {
		this.game = game;
		this.x = x;
		this.y = y;
		this.backgroundObject = false; //is a BackgroundObject is a backgroundObject, that means it's not interactable ever!
		this.interactable = false;
		this.interactDistance = 100;
		this.interactText = "Interact";
		this.interactButton = new Animation(ASSET_MANAGER.getAsset("./img/Misc/t_key.png"), 0, 0, 32, 32, 1, 1, true, false, 0, 0);
		this.interactOptionOffsetX = 16;
		this.interactOptionOffsetY = -16;
		this.cooldown = 0;
		this.interactCooldown = 150;
		this.interactChat = [];
		this.pauseTime = 0;
		this.textDelay = 0; //a delay time before the text appears, in ms
		this.sound = null;
		this.tick = 0;
		this.phase = 0;
	}
	
	getX() {
		return this.x + this.displacementX;
	}
	
	getY() {
		return this.y + this.displacementY;
	}
	
	getXMidpoint() {
		return this.x + this.hitBoxDef.offsetX + this.hitBoxDef.width / 2;
	}
	
	getYMidpoint() {
		return this.y + this.hitBoxDef.offsetY + this.hitBoxDef.height / 2;
	}
	
	isLeftOfPlayer() {
		return this.getXMidpoint() < this.game.player1.x + this.game.player1.hitBoxDef.offsetX + this.game.player1.hitBoxDef.width / 2;
	}
	
	distanceToPlayer() {
		return Math.abs(this.getXMidpoint() - (this.game.player1.x + this.game.player1.hitBoxDef.offsetX + this.game.player1.hitBoxDef.width / 2));
	}
	distanceToPlayerY() {
		return Math.abs(this.getYMidpoint() - (this.game.player1.y + this.game.player1.hitBoxDef.offsetY + this.game.player1.hitBoxDef.height / 2));
	}
	
	xToPlayer() {
		return this.getXMidpoint() - (this.game.player1.x + this.game.player1.hitBoxDef.offsetX + this.game.player1.hitBoxDef.width / 2);
	}
	update() {
		this.tick++;
		if (this.cooldown > 0)
			this.cooldown--;
		if (!this.backgroundObject && this.distanceToPlayer() <= this.interactDistance && this.cooldown == 0) {
			this.interactable = true;
		} else {
			this.interactable = false;
		}
		if (this.game.interactDown && this.interactable) {
			this.interact();
		}
	}
	interact() {
		this.interactable = false;
		if (this.sound != null) {
			playSound(this.sound);
		}
		setTimeout(
			function() {
				var index = 0;
				while (index < that.interactChat.length) {
					if (index > 0 && that.game.pauseTime > 0)
						continue;
					var chat = that.interactChat[index];
					that.game.addEntity(new TextBox(that.game, chat.image, chat.text, true));
					index++;
				}
				console.log("Interacted with object at " + that.x +", " + that.y);
				that.cooldown = that.interactCooldown;
			}, this.textDelay);
		this.game.pauseTime = this.pauseTime;
		var that = this;
	}
	
	draw(ctx) {
		if (this.currentAnimation != null) {
			this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x + this.currentAnimation.offsetX, this.y + this.currentAnimation.offsetY, 1, false, null);
			if (this.interactable) {
				this.interactButton.drawFrame(this.game.clockTick, ctx, this.x + this.interactButton.offsetX + this.interactOptionOffsetX, 
					this.y + this.interactButton.offsetY + this.interactOptionOffsetY, 1, false, null);
				ctx.font = "24px Font";
				ctx.fillStyle = "white";
				ctx.textAlign = "left"; 
				ctx.fillText(this.interactText, this.x + this.interactButton.offsetX + this.interactOptionOffsetX + 32 + 5, 
						this.y + this.interactButton.offsetY + this.interactOptionOffsetY + 24);
			}
			drawHitBox(this, ctx);
			Entity.prototype.draw.call(this);
		}
	}
}

class Spaceship extends BackgroundObject {
	constructor(game, x, y) {
		super(game, x, y);
		this.interactText = "Operate";
		this.interactChat = [new TextBox(this.game, null, "There's no reply...")];
		this.baseAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Misc/ship.png"), 0, 0, 96, 96, 0.5, 6, true, false, 0, 0);
		this.contactAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Misc/ship_contact.png"), 0, 0, 96, 96, 0.25, 4, true, false, 0, 0);
		this.currentAnimation = this.baseAnimation;
		this.hitBoxDef = {
			width: 96, height: 96, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
		this.sound = beepsSound;
		this.pauseTime = 300;
		this.textDelay = 3000;
		drawHitBox(this);
	}
	
	interact() {
		var that = this;
		this.currentAnimation = this.contactAnimation;
		setTimeout(
			function() {
				that.currentAnimation = that.baseAnimation;
			}, this.textDelay);
		super.interact();
	}
}

class Kelp extends BackgroundObject {
	constructor(game, x, y) {
		super(game, x, y);
		this.interactDistance = 32;
		this.backgroundObject = true;
		this.currentAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Misc/kelp.png"), 0, 0, 32, 264, 0.5, 20, true, false, 0, 0);
		this.hitBoxDef = {
			width: 32, height: 264, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
		drawHitBox(this);
	}
	
	update() {
		if (this.tick % 10 == 0) {
			var newParticle = new Particle(PART_SECONDARY, (this.x + this.hitBoxDef.width / 2), (this.y + this.hitBoxDef.height), 
					-1, 1, -4.5, -5, 0.03, 0.03, 0, 0, 0, 180, .3, .15, true, this.game);
			var element = new CircleElement(6 + Math.random() * 2, "#2bd9b3", "#2bc8d9");
			newParticle.other = element;
			this.game.addEntity(newParticle);
		}
		if (this.distanceToPlayer() <= this.interactDistance && this.distanceToPlayerY() <= this.hitBoxDef.height / 2) { //restore O2
			if (!this.game.player1.binded)
				addEnergy(this.game, 1);
			this.game.showTip(TIP_KELP);
		}
		super.update();
	}
}

class LivingKelp extends BackgroundObject {
	constructor(game, x, y) {
		super(game, x, y);
		this.interactDistance = 25;
		this.cooldown = 5;
		this.backgroundObject = true;
		this.currentHealth = 50;
		this.maxHealth = 50;
		this.explodeTimer = 0;
		this.currentAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Misc/kelp.png"), 0, 0, 32, 264, 0.5, 20, true, false, 0, 0);
		this.hitBoxDef = {
			width: 32, height: 264, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
		drawHitBox(this);
	}
	
	update() {
		var that = this;
		if (this.explodeTimer > 0) {
			this.explodeTimer--;
			if (this.explodeTimer == 80)
				playSound(chargedBurstSound);
			if (this.explodeTimer == 0) {
				for (var i = 0; i < 22; i++) {
					for (var parts = 0; parts < 3; parts++) {
						var newParticle = new Particle(PART_SECONDARY, (this.x + this.hitBoxDef.width / 2), (this.y + 12 * i), 
								-4, 4, -3, -3, 0.3, 0.03, 0, 0, 0, 60, .7, .15, true, this.game);
						var element = new SquareElement(16, 16, "#0e4533", "#156373");
						newParticle.other = element;
						this.game.addEntity(newParticle);
					}
				}
				this.removeFromWorld = true;
				this.game.player1.canControl = true;
				this.game.player1.binded = false;
				this.game.currentPhase = 4;
				setTimeout(
					function() {
						that.game.addEntity(new BigInfoBox(that.game, "Evolution Complete", "Consumed the DEMON KELP", "You can now breathe underwater. Your oxygen will no longer deplete over time, and your oxygen meter is replaced with an energy meter.",
							new Animation(ASSET_MANAGER.getAsset("./img/UI/jelly_waterbreathe.png"), 0, 0, 192, 432, 1, 1, true, false, -96, -450)));
					}, 2000);
			}
		}
		if (this.tick % 10 == 0) {
			var newParticle = new Particle(PART_SECONDARY, (this.x + this.hitBoxDef.width / 2), (this.y + this.hitBoxDef.height), 
					-1, 1, -4.5, -5, 0.03, 0.03, 0, 0, 0, 180, .3, .15, true, this.game);
			var element = new CircleElement(6 + Math.random() * 2, "#0e4533", "#156373");
			newParticle.other = element;
			this.game.addEntity(newParticle);
		}
		if (this.distanceToPlayer() <= this.interactDistance && this.phase == 0) {
			var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
					0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
			var damageText = new TextElement("!", "Lucida Console", 50, "#ffd43a", "black");
			damageParticle.other = damageText;
			this.game.addEntity(damageParticle);
			this.game.player1.currentStamina = this.game.player1.maxStamina;
			this.game.currentBoss = this;
			this.game.currentPhase = 2;
			this.phase = 1;
			this.game.player1.canControl = false;
			this.game.player1.binded = true;
			this.game.pauseTime = 300;
			var chat = new TextBox(this.game, "./img/Chat/JellySquare.png", "Huh...?");
			var chat2 = new TextBox(this.game, "./img/Chat/JellySquare.png", "I can't move...!");
			this.game.addEntity(new InfoBox(this.game, "Struggle to survive!"));
			chat.nextText = chat2;
			this.game.addEntity(chat);
			var buttonChallenge = new ButtonChallenge(this.game);
			buttonChallenge.kelp = this;
			this.game.buttonChallenge = buttonChallenge;			
			this.game.addEntity(buttonChallenge);
			playSound(alertSound);
		}
		super.update();
	}
}

class TunaChargeDropper extends BackgroundObject {
	constructor(game, x, y) {
		super(game, x, y);
		this.backgroundObject = true;
		this.currentAnimation = null;
		this.hitBoxDef = {
			width: 32, height: 32, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
		drawHitBox(this);
	}
	
	update() {
		if (isOnScreen(this) && this.tick % 150 == 0) {
			var tuna = new Particle(IMG_PART, this.x, this.y - 32, 0, 0, 2, 2, 0.02, 0, 0, 240, 0, 0, 1.0, 0, false, this.game,
				new Animation(ASSET_MANAGER.getAsset("./img/Misc/tuna_charge.png"), 0, 0, 32, 32, 0.08, 13, true, false, 0, 0));
			tuna.overrideHitbox = {
				x: 0, 
				y: 0,
				width: 32, 
				height: 32,
				followPosition: true
			};
			tuna.attackId = TUNA_CHARGE;
			this.game.addEntity(tuna);
		}
		super.update();
	}
}

class ButtonChallenge extends BackgroundObject {
	constructor(game) {
		super(game, 0, 0);
		this.backgroundObject = true;
		this.currentAnimation = null;
		this.kelp = null;
		this.hitBoxDef = {
			width: 32, height: 32, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
		this.buttonOptions = ["↑","↓","←","→","x","z","c"];
		this.currentButtons = [];
		this.completedButtons = [];
		this.buttonScrollTime = 0;
		this.buttonScrollSpeed = 0;
		this.buttonScrollAmount = 0;
		for (var i = 0; i < 5; i++) {
			this.currentButtons.push(this.buttonOptions[Math.floor(Math.random() * this.buttonOptions.length)]);
		}
		console.log(this.currentButtons);
		drawHitBox(this);
	}
	success() {
		var particle = new Particle(TEXT_PART, 300 + this.game.liveCamera.x + 6, 150 + this.game.liveCamera.y, 
				0, 0, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
		var damageText = new TextElement(this.currentButtons[0], "Lucida Console", 25, "green");
		particle.other = damageText;
		this.game.addEntity(particle);
		this.currentButtons.shift();
		this.currentButtons.push(this.buttonOptions[Math.floor(Math.random() * this.buttonOptions.length)]);
		this.buttonScrollSpeed = 15;
		this.buttonScrollAmount = 0;
		this.cooldown = 5;
		playSound(beepSound);
		if (this.kelp != null) {
			this.kelp.currentHealth -= 1;
			if (this.kelp.currentHealth == 0) {
				this.kelp.explodeTimer = 300;
				this.game.currentPhase = 3;
				this.game.player1.currentForm = FORM_WATERBREATHE;
				this.game.player1.phaseTick = 0;
				playSound(boomSound);
				var newParticle = new Particle(IMG_PART, this.game.liveCamera.x - 50, this.game.liveCamera.y - 30, 
						0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0.3, 0, false, this.game,
						new Animation(ASSET_MANAGER.getAsset("./img/Particle/flash.png"), 0, 0, 907, 564, 0.03, 1, true, false, 0, 0));
				this.game.addEntity(newParticle);
				this.removeFromWorld = true;
			}
		}
	}
	fail() {
		var particle = new Particle(TEXT_PART, 300 + this.game.liveCamera.x + 6, 150 + this.game.liveCamera.y, 
				0, 0, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
		var damageText = new TextElement("Miss", "Lucida Console", 25, "red");
		particle.other = damageText;
		this.game.addEntity(particle);
		this.cooldown = 30;
		playSound(breakSound);
	}
	update() {
		if (this.buttonScrollSpeed > 0) {
			this.buttonScrollAmount += this.buttonScrollSpeed;
			this.buttonScrollSpeed *= 0.72;
			if (this.buttonScrollSpeed < 1) {
				this.buttonScrollSpeed = 0;
				this.buttonScrollAmount = 0;
			}
		}
		super.update();
	}
	draw(ctx) {
		ctx.font = "24px Font";
		if (this.cooldown > 0)
			ctx.fillStyle = "gray";
		else
			ctx.fillStyle = "white";
		ctx.textAlign = "left"; 
		for (var i = 0; i < 5; i++) {
			ctx.fillText(this.currentButtons[i], (300 + this.game.liveCamera.x + 50 * (this.buttonScrollSpeed > 0 ? i + 1 : i)) - this.buttonScrollAmount,
				150 + this.game.liveCamera.y);
		}
		Entity.prototype.draw.call(this);
	}
}

class BubbleCurrent extends BackgroundObject {
	constructor(game, x, y, pushHspeed) {
		super(game, x, y);
		this.backgroundObject = true;
		this.currentAnimation = null;
		this.pushHspeed = pushHspeed;
		this.hitBoxDef = {
			width: 32, height: 64, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
		drawHitBox(this);
	}
	
	update() {
		if (!isNearbyScreen(this))
			return;
		if (this.phase == 0 && this.cooldown == 0) {
			this.phase = 1; //bubble blowing mode
			this.cooldown = 90;
		}
		if (this.phase == 1) {
			if (this.cooldown == 0) {
				this.phase = 0;
				this.cooldown = 120;
			}
			var xDist = this.xToPlayer();
			var inXPushRange = (xDist < 0 && xDist >= -500 && this.pushHspeed > 0 ||
				xDist > 0 && xDist <= 500 && this.pushHspeed < 0);
			var inYPushRange = Math.abs((this.y + this.hitBoxDef.height/2) - 
				(this.game.player1.y + this.game.player1.hitBoxDef.offsetY + this.game.player1.hitBoxDef.height / 2)) < 60;
			if (inYPushRange && inXPushRange) { //push
				console.log("PUSHHHH");
				this.game.player1.displacementXSpeed = this.pushHspeed * 3 / 4;
			}
			var newParticle = new Particle(PART_SECONDARY, this.x + 16, this.y + Math.random() * 64, 
					this.pushHspeed, this.pushHspeed, -1, 1, 0, 0, 0, 0, 0, 45, .7, .1, false, this.game);
			var element = new CircleElement(12, "#81d4c6", "#9ed8f7");
			newParticle.other = element;
			//newParticle.acceleration = 0.03;
			this.game.addEntity(newParticle);
		}

		super.update();
	}
}