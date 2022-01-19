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
		if (this.distanceToPlayer() <= this.interactDistance) { //restore O2
			addEnergy(this.game, 1);
			this.game.showTip(TIP_KELP);
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
		if (!isOnScreen(this))
			return;
		if (this.tick % 150 == 0) {
			var tuna = new Particle(IMG_PART, this.x, this.y - 32, 0, 0, 2, 2, 0.02, 0, 32, 240, 0, 0, 1.0, 0, false, this.game,
				new Animation(ASSET_MANAGER.getAsset("./img/Misc/tuna_charge.png"), 0, 0, 32, 32, 0.08, 13, true, false, 0, 0));
			tuna.attackId = TUNA_CHARGE;
			this.game.addEntity(tuna);
		}
		if (this.distanceToPlayer() <= this.interactDistance) { //restore O2
			addEnergy(this.game, 1);
			this.game.showTip(TIP_KELP);
		}
		super.update();
	}
}