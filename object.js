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
		this.mapFlag = false;
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

class Maygi extends BackgroundObject {
	constructor(game, x, y) {
		super(game, x, y);
		this.interactText = "Talk";
		this.interactChat = [];
		this.idleAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Maygi/maygi_idle_left.png"), 0, 0, 82, 81, 0.2, 5, true, false, 0, 0);
		this.idleAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Maygi/maygi_idle_right.png"), 0, 0, 82, 81, 0.2, 5, true, false, 0, 0);
		this.waveAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Maygi/maygi_wave_left.png"), 0, 0, 82, 81, 0.1, 19, false, false, 0, 0);
		this.waveAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Maygi/maygi_wave_right.png"), 0, 0, 82, 81, 0.1, 19, false, false, 0, 0);
		this.currentAnimation = this.idleAnimationLeft;
		this.hitBoxDef = {
			width: 82, height: 81, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
		this.pauseTime = 0;
		this.textDelay = 3000;
		this.waveCooldown = 0;
		this.waving = false;
		this.interacted = false;
		this.maxScore = 17525;
		drawHitBox(this);
		this.chats = [];
		this.chats.push(new TextBox(this.game, "./img/Chat/MaygiSquare.png", "Why am I so smol? Uhh... magic!", true));
		this.chats.push(new TextBox(this.game, "./img/Chat/MaygiSquare.png", "You know, my DMs are always open! Please leave me any feedback on the game ♥", true));
		this.chats.push(new TextBox(this.game, "./img/Chat/MaygiSquare.png", "What's that? You want to talk about cheesy lore?", true));
		this.chats.push(new TextBox(this.game, "./img/Chat/MaygiSquare.png", "Here's hoping I don't stop working on this project now that I released part 1...", true));
		this.chats.push(new TextBox(this.game, "./img/Chat/MaygiSquare.png", "So I spent 4 hours making those tentacles and never used them yet...", true));
		this.chats.push(new TextBox(this.game, "./img/Chat/MaygiSquare.png", "This game is open source! But don't look at the code, your brain might rot.", true));
		this.chats.push(new TextBox(this.game, "./img/Chat/MaygiSquare.png", "H-huh? You're approaching me? *blushes in shyness*", true));
		this.chats.push(new TextBox(this.game, "./img/Chat/MaygiSquare.png", "Fun fact... the oxygen system was added as an afterthought for lore-accuracy.", true));
		this.chats.push(new TextBox(this.game, "./img/Chat/MaygiSquare.png", "You should try out the omnidirectional combat. It's so much better!", true));
		this.chats.push(new TextBox(this.game, "./img/Chat/MaygiSquare.png", "So, when are we getting Jelly kettle merch?", true));
		this.chats.push(new TextBox(this.game, "./img/Chat/MaygiSquare.png", "I wrote this before seeing Jelly 2.0 but I LOVE IT SO MUCH.", true));
		this.chats.push(new TextBox(this.game, "./img/Chat/MaygiSquare.png", "You're actually still reading dialogues??", true));
	}
	
	update() {
		var px = this.game.player1.x + this.game.player1.hitBoxDef.width / 2 + this.game.player1.hitBoxDef.offsetX;
		if (this.waveCooldown > 0) {
			this.waveCooldown--;
			if (this.waveCooldown == 0 &&  Math.abs(px - (this.x + this.hitBoxDef.width / 2)) <= 96)
				this.waveCooldown = 1; //don't wave again until you walk away
		}
		if (Math.abs(px - (this.x + this.hitBoxDef.width / 2)) <= 96 && this.waveCooldown == 0) {
			this.waving = true;
			this.waveAnimationLeft.restart();
			this.waveAnimationRight.restart();
			this.waveCooldown = 60;
			if (!this.interacted) {
				this.interact();
			}
		}
		if (this.x + this.hitBoxDef.width / 2 > px) {
			if (this.waving)
				this.currentAnimation = this.waveAnimationLeft;
			else
				this.currentAnimation = this.idleAnimationLeft;
		} else {
			if (this.waving)
				this.currentAnimation = this.waveAnimationRight;
			else
				this.currentAnimation = this.idleAnimationRight;
		}
		if (this.waving && this.currentAnimation.isDone()) {
			this.waving = false;
		}
		super.update();
	}
	interact() {
		if (this.cooldown > 0)
			return;
		this.cooldown = 30;
		if (!this.interacted) {
			var chat1 = new TextBox(this.game, "./img/Chat/MaygiSquare.png", "Jelly!! You made it!!", true);
			var chat2 = new TextBox(this.game, "./img/Chat/JellySquare.png", "What is this place...?", true);
			var chat3 = new TextBox(this.game, "./img/Chat/MaygiSquare.png", "This is an alternate reality. A sandbox of sorts...", true);
			var chat4 = new TextBox(this.game, "./img/Chat/MaygiSquare.png", "In other words, you've beat the game. Thank you so much for playing!! ♥", true);
			var chat5 = new TextBox(this.game, "./img/Chat/MaygiSquare.png", "Your total score was " + this.game.score + " out of a maximum possible " + this.maxScore + ".", true);
			var chat6;
			
			if (this.game.score >= this.maxScore)
				chat6 = new TextBox(this.game, "./img/Chat/MaygiSquare.png", "IMPRESSIVE! To be able to achieve the perfect score... you deserve the rank of [Princess Jelly]!", true);
			else if (this.game.score >= 0.97 * this.maxScore)
				chat6 = new TextBox(this.game, "./img/Chat/MaygiSquare.png", "Extremely well done !! You missed a little bit of JellyCoin, but you are still a [God Gamer]!", true);
			else if (this.game.score >= 0.90 * this.maxScore)
				chat6 = new TextBox(this.game, "./img/Chat/MaygiSquare.png", "Sugoi !! You missed some JellyCoin, but with a score like this, you are still a [Jelly Champion]!", true);
			else if (this.game.score >= 0.80 * this.maxScore)
				chat6 = new TextBox(this.game, "./img/Chat/MaygiSquare.png", "Very good!! You missed a good amount of JellyCoin but at least you didn't die. Your rank is [Immortal Jelly]!", true);
			else if (this.game.score >= 0.70 * this.maxScore)
				chat6 = new TextBox(this.game, "./img/Chat/MaygiSquare.png", "Not a bad performance at all. Your rank is [Epic Jelly]!", true);
			else if (this.game.score >= 0.60 * this.maxScore)
				chat6 = new TextBox(this.game, "./img/Chat/MaygiSquare.png", "Well... you made it, and that's what matters, right? Your rank is [JellyDrool]!", true);
			else if (this.game.score >= 0.50 * this.maxScore)
				chat6 = new TextBox(this.game, "./img/Chat/MaygiSquare.png", "I guess you got... a bit more than half?? Your rank is [Jelly15Head]!", true);
			else if (this.game.score >= 0.40 * this.maxScore)
				chat6 = new TextBox(this.game, "./img/Chat/MaygiSquare.png", "You... didn't even get half. Your rank is [OmegaJelly]!", true);
			else if (this.game.score >= 0.30 * this.maxScore)
				chat6 = new TextBox(this.game, "./img/Chat/MaygiSquare.png", "Mm... I'm glad you're here, either way. Your rank is [JellyREEEE]!", true);
			else if (this.game.score >= 0.20 * this.maxScore)
				chat6 = new TextBox(this.game, "./img/Chat/MaygiSquare.png", "Uhm... are you allergic to JellyCoins?? Your rank is [JellyKEK]!", true);
			else if (this.game.score >= 0.10 * this.maxScore)
				chat6 = new TextBox(this.game, "./img/Chat/MaygiSquare.png", "It's actually impressive how you died this much. Your rank is [JellyOmegaRoll]!", true);
			else
				chat6 = new TextBox(this.game, "./img/Chat/MaygiSquare.png", "I'm... not sure what to say. Your rank is [AiRo] - appropriately on the bottom.", true);

			if (this.game.score >= 0.70 * this.maxScore)
				chat6.sound = powerupSound;
			else if (this.game.score >= 0.50 * this.maxScore)
				chat6.sound = energyUpSound;
			else
				chat6.sound = clownSound;
			chat1.nextText = chat2;
			chat2.nextText = chat3;
			chat3.nextText = chat4;
			chat4.nextText = chat5;
			chat5.nextText = chat6;
			this.game.addEntity(chat1);
			this.interacted = true;
		} else {
			if (this.game.jellybait) {
				this.game.jellybait = false;
				var chat1 = new TextBox(this.game, "./img/Chat/MaygiSquare.png", "I still can't believe you actually took the #jellybait.", true);
				var chat2 = new TextBox(this.game, "./img/Chat/JellySquare.png", "(:", true);
				var chat3 = new TextBox(this.game, "./img/Chat/MaygiSquare.png", "I expected no less, really!", true);
				chat1.nextText = chat2;
				chat2.nextText = chat3;
				this.game.addEntity(chat1);
			} else {
				if (this.chats.length == 0) {
					if (Math.random() >= 0.66)
						this.game.addEntity(new TextBox(this.game, "./img/Chat/MaygiSquare.png", ":3"));
					else if (Math.random() >= 0.66)
						this.game.addEntity(new TextBox(this.game, "./img/Chat/MaygiSquare.png", "<3"));
					else
						this.game.addEntity(new TextBox(this.game, "./img/Chat/MaygiSquare.png", "awawawa~"));
				} else {
					var chatIndex = getRandomInt(0, this.chats.length - 1);
					this.game.addEntity(this.chats[chatIndex]);
					this.chats.splice(chatIndex, 1);
				}
			}
		}
		super.interact();
	}
}

class Virus extends BackgroundObject {
	constructor(game, x, y) {
		super(game, x, y);
		this.interactText = "Communicate";
		var text = new TextBox(this.game, null, "The alien cell sends a command, manipulating mass to create a mobile wall...");
		//text.nextText = new TextBox(this.game, null, "The cell sends a command, manipulating mass to create a mobile wall...");
		this.interactChat = [text];
		this.baseAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Misc/virus.png"), 0, 0, 32, 32, 0.5, 2, true, false, 0, 0);
		this.currentAnimation = this.baseAnimation;
		this.interactCooldown = 300;
		this.hitBoxDef = {
			width: 32, height: 32, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
		drawHitBox(this);
	}
	
	interact() {
		var that = this;
		var platforms = [
			/*new Wall(that.game, that.x + 32, that.y + 32 * 4, 32, 32, WALL_NOCHECKPOINT),
			new Wall(that.game, that.x + 32 * 2, that.y + 32 * 4, 32, 32, WALL_NOCHECKPOINT),
			new Wall(that.game, that.x + 32 * 3, that.y + 32 * 4, 32, 32, WALL_NOCHECKPOINT),*/
		];
		for (var i = -9; i < 5; i += 2) {
			platforms.push(new Platform(that.game, that.x + 32, that.y + 32 * i));
			platforms.push(new Platform(that.game, that.x + 96, that.y + 32 * i));
		}
		/*for (var i = -9; i < 4; i++) {
			platforms.push(new Wall(that.game, that.x + 32 * 4, that.y + 32 * i, 32, 32, WALL_NOCHECKPOINT));
		}*/
		platforms.forEach(function(currentPlatform) {
			currentPlatform.temporary = true;
			that.game.currentMap.platforms.push(currentPlatform);
		});
		setTimeout(
			function() {
				platforms.forEach(function(currentPlatform) {
					currentPlatform.hSpeed = 2;
					currentPlatform.temporary = true;
					currentPlatform.life = 900;
				});
			}, 4000);
		super.interact();
	}
}

class ClamObject extends BackgroundObject {
	constructor(game, x, y) {
		super(game, x, y);
		this.interactText = "Absorb";
		
		this.interactCooldown = 1500;
		this.currentAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/clam_dead.png"), 0, 0, 160, 128, 0.25, 4, false, false, 0, 0);
		this.hitBoxDef = {
			width: 128, height: 128, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
		this.sound = healSound;
		this.pauseTime = 0;
		drawHitBox(this);
	}
	
	interact() {
		this.game.advancePhase(GAME_PHASE_POSTCLAM);
		var that = this;
		playSound(boomSound);
		var newParticle = new Particle(IMG_PART, this.game.liveCamera.x - 50, this.game.liveCamera.y - 30, 
				0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0.3, 0, false, this.game,
				new Animation(ASSET_MANAGER.getAsset("./img/Particle/flash.png"), 0, 0, 907, 564, 0.03, 1, true, false, 0, 0));
		this.game.addEntity(newParticle);
		this.explodeTimer = 300;
		this.game.player1.canControl = false;
		super.interact();
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
						var newParticle = new Particle(PART_SECONDARY, (this.x + 28 + i * 5), (this.y + 63 + Math.random() * 120), 
								-4, 4, -3, -3, 0.3, 0.03, 0, 0, 0, 60, .7, .15, true, this.game);
						var element = new SquareElement(16, 16, "#f5f0df", "#dbd4c8");
						newParticle.other = element;
						this.game.addEntity(newParticle);
					}
				}
				playSound(yoinkSound);
				this.removeFromWorld = true;
				this.game.advancePhase(GAME_PHASE_AFTER_CLAM);
				setTimeout(
					function() {
						that.game.player1.currentForm = FORM_HEAL;
						that.game.addEntity(new BigInfoBox(that.game, "Evolution Complete", "Consumed the GIANT CLAM", "Press [A] to channel energy to heal yourself. Gain energy by damaging enemies with basic attacks.",
								new Animation(ASSET_MANAGER.getAsset("./img/UI/jelly_waterbreathe.png"), 0, 0, 192, 432, 1, 1, true, false, -96, -450)));
							that.game.player1.canControl = true;
					}, 2000);
			}
		}
		super.update();
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
				this.game.player1.canControl = false;
				this.game.player1.binded = false;
				this.game.player1.currentAnimation = this.game.player1.idleAnimation;
				this.game.currentPhase = 4;
				setTimeout(
					function() {
						that.game.addEntity(new BigInfoBox(that.game, "Evolution Complete", "Consumed the DEMON KELP", "You can now breathe underwater. Your oxygen will no longer deplete over time, and your oxygen meter is replaced with an energy meter.",
							new Animation(ASSET_MANAGER.getAsset("./img/UI/jelly_waterbreathe.png"), 0, 0, 192, 432, 1, 1, true, false, -96, -450)));
						that.game.player1.canControl = true;
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
	constructor(game, x, y, delay) {
		super(game, x, y);
		this.delay = delay || 0;
		this.backgroundObject = true;
		this.currentAnimation = null;
		this.hitBoxDef = {
			width: 32, height: 32, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
		drawHitBox(this);
	}
	
	update() {
		if (isOnScreen(this) && (this.tick + this.delay) % 150 == 0) {
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
		this.completeCount = 0;
		this.awawa = false;
		this.laser = null;
		this.laser2 = null;
		for (var i = 0; i < 5; i++) {
			this.currentButtons.push(this.buttonOptions[Math.floor(Math.random() * this.buttonOptions.length)]);
		}
		console.log(this.currentButtons);
		drawHitBox(this);
	}
	
	setAwawa(laser, laser2) {
		this.awawa = true;
		this.laser = laser;
		this.laser2 = laser2;
		this.buttonOptions = ["a","w"];
		this.currentButtons = [];
		this.currentButtons.push("a");
		this.currentButtons.push("w");
		this.currentButtons.push("a");
		this.currentButtons.push("w");
		this.currentButtons.push("a");
	}
	
	success() {
		var particle = new Particle(TEXT_PART, 300 + this.game.liveCamera.x + 6, 150 + this.game.liveCamera.y, 
				0, 0, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
		var damageText = new TextElement(this.currentButtons[0], "Lucida Console", 25, "green");
		particle.other = damageText;
		this.game.addEntity(particle);
		this.currentButtons.shift();
		this.buttonScrollSpeed = 15;
		this.buttonScrollAmount = 0;
		this.cooldown = 5;
		this.completeCount++;
		if (this.awawa) {
			this.laser.distanceMultiplier -= 0.018;
			this.laser2.distanceMultiplier += 0.018;
			if (this.currentButtons[this.currentButtons.length - 1] == 'w')
				this.currentButtons.push("a");
			else
				this.currentButtons.push("w");
			this.cooldown = 3;
			if (this.laser2.distanceMultiplier >= 1) {
				this.laser.finish();
				this.laser2.finish();
				this.removeFromWorld = true;
				var screenFade = new BlackScreenFade(this.game, 90, GAME_SANDBOX);
				screenFade.color = "#ffffff";
				screenFade.linger = 120;
				playSound(lightningExSound);
				this.game.addEntity(screenFade);
				this.game.player1.phaseTimer = 150;
				bossMusic2.pause();
				this.game.absorbEntity = null;
				this.game.buttonChallenge = null;	
			}
		} else
			this.currentButtons.push(this.buttonOptions[Math.floor(Math.random() * this.buttonOptions.length)]);
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
				this.game.buttonChallenge = null;	
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
		if (this.awawa) {
			this.laser.distanceMultiplier += 0.002;
			this.laser2.distanceMultiplier -= 0.002;
			if (this.laser.distanceMultiplier > 1) {
				this.laser.distanceMultiplier = 1;
				this.laser2.distanceMultiplier = 0;
				if (this.game.player1.vulnerable) {
					this.game.player1.vulnerable = false;
					applyDamage(this.game.player1.x, this.game.player1.y, this.game, 20, this.game.player1);
					this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
					this.game.player1.hitByAttack = true;
					playSound(hitSound);
				}
			}
		}
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
	constructor(game, x, y, pushHspeed, distance) {
		super(game, x, y);
		this.backgroundObject = true;
		this.currentAnimation = null;
		this.pushHspeed = pushHspeed;
		this.distance = distance || 500;
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
			var inXPushRange = (xDist < 0 && xDist >= -1 * this.distance && this.pushHspeed > 0 ||
				xDist > 0 && xDist <= this.distance && this.pushHspeed < 0);
			var inYPushRange = Math.abs((this.y + this.hitBoxDef.height/2) - 
				(this.game.player1.y + this.game.player1.hitBoxDef.offsetY + this.game.player1.hitBoxDef.height / 2)) < 60;
			if (inYPushRange && inXPushRange) { //push
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

class GasVent extends BackgroundObject {
	constructor(game, x, y, interval, offset) {
		super(game, x, y);
		this.backgroundObject = true;
		this.currentAnimation = null;
		this.interval = interval;
		this.cooldown = interval;
		this.offset = offset || 0;
		this.hitBoxDef = {
			width: 32, height: 64, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
		drawHitBox(this);
	}
	
	update() {
		if (this.tick % 10 == 0 && isNearbyScreen(this)) {
			var newParticle = new Particle(PART_SECONDARY, this.x + 16, this.y, 
					-2, 2, -3, -3, -0.1, 0.1, 0, 75, 0, 30, .9, 0, false, this.game);
			var element = new CircleElement(3, "#298f44", "#286640");
			newParticle.other = element;
			//newParticle.acceleration = 0.03;
			this.game.addEntity(newParticle);
		}
		if ((this.tick + this.offset) % this.interval == 0) {
			if (isNearbyScreen(this)) {
				if (Math.random() >= 0.66)
					playSoundProx(this.game, this, bubbleSound);
				else if (Math.random() >= 0.66)
					playSoundProx(this.game, this, bubbleSound2);
				else
					playSoundProx(this.game, this, bubbleSound3);
				var newParticle = new Particle(PART_SECONDARY, this.x + 16, this.y, 
						-2, 2, -3, -3, -0.2, 0.2, 0, 75, 0, 30, .9, 0, false, this.game);
				var element = new CircleElement(18, "#298f44", "#286640");
				newParticle.other = element;
				newParticle.attackId = PARTICLE_GASBUBBLE;
				//newParticle.acceleration = 0.03;
				this.game.addEntity(newParticle);
			}
		}

		super.update();
	}
}