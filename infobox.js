var MAX_X_SIZE = 250;
var MIN_Y_SIZE = 32;

var MAX_BLACKSCREEN_OPACITY = 0.8;

/**
 * Represents an information box, which expands and appears at the top of the screen, before fading out.
 */
class InfoBox {
	
	constructor(game, showText) {
	
		this.increaseY = 0;
		this.game = game;
		this.showText = showText;
		this.tick = 0;
		this.fadeTick = 0;
		this.expandSpeedX = 0;
		this.expandSpeedY = 0;
		this.trueWidth = 2;
		this.trueHeight = 0;
	}
	
	updateHeight(context, text, maxWidth, lineHeight) {
		var words = text.split(' ');
		var line = '';
		this.increaseY = 0;
		for (var n = 0; n < words.length; n++) {
			var testLine = line + words[n] + ' ';
			var metrics = context.measureText(testLine);
			var testWidth = metrics.width;
			if (testWidth > maxWidth && n > 0) {
				line = words[n] + ' '
				this.increaseY += lineHeight;
			} else {
				line = testLine;
			}
		}
	}
	
	wrapText(context, text, x, y, maxWidth, lineHeight) {
		var words = text.split(' ');
		var line = '';
		y += 5;

		for (var n = 0; n < words.length; n++) {
			var testLine = line + words[n] + ' ';
			var metrics = context.measureText(testLine);
			var testWidth = metrics.width;
			if (testWidth > maxWidth && n > 0) {
				context.fillText(line, x, y);
				line = words[n] + ' ';
				y += lineHeight;
			} else {
				line = testLine;
			}
		}
		context.fillText(line, x, y);
	}
	
	update() {
		if (this.tick == 0) {
			this.expandSpeedX = 0;
			this.expandSpeedY = 5;
		}
		if (this.tick == 30) {
			playSound(wooshSound);
			this.expandSpeedX = 20;
			this.expandSpeedY = 0;
		}
		this.trueWidth += this.expandSpeedX;
		this.trueHeight += this.expandSpeedY;
		if (this.trueWidth > MAX_X_SIZE)
			this.trueWidth = MAX_X_SIZE;
		if (this.expandSpeedX != 0)
			this.expandSpeedX = Math.max(2, 0.95 * this.expandSpeedX);
		if (this.expandSpeedY != 0)
			this.expandSpeedY = Math.max(2, 0.95 * this.expandSpeedY);
		this.tick++;
		if (this.tick >= 300) {
			this.expandSpeedX = -15;
			this.fadeTick++;
			if (this.fadeTick >= 100)
				this.removeFromWorld = true;
		}
	}
	
	draw(ctx) {
		var alphaMult = Math.max(1 - (this.fadeTick / 100), 0);
		var tempColor = ctx.fillStyle;
		var truerWidth = Math.max(0, Math.min(MAX_X_SIZE, this.trueWidth));
		var truerHeight = Math.min(MIN_Y_SIZE + this.increaseY, this.trueHeight);
		ctx.fillStyle = "#9dadc4";
		ctx.globalAlpha = 0.5 * alphaMult;
		ctx.font = "18px Lucida Console";
		ctx.textAlign = "center";
		this.updateHeight(ctx, this.showText, MAX_X_SIZE, MIN_Y_SIZE);
		ctx.fillRect(400 + this.game.liveCamera.x - truerWidth / 2, 100 + this.game.liveCamera.y - truerHeight / 2, truerWidth, truerHeight);
		ctx.fillStyle = tempColor;
		ctx.fillStyle = "black";
		if (truerWidth == MAX_X_SIZE) {
			ctx.globalAlpha = Math.min(1, this.tick / 100) * Math.max(1 - (this.fadeTick * 3 / 100), 0);
			wrapText(ctx, this.showText, 400 + this.game.liveCamera.x + 13, 100 + this.game.liveCamera.y + 32 - truerHeight / 2 - 15, MAX_X_SIZE, MIN_Y_SIZE);
			ctx.fillStyle = "white";
			wrapText(ctx, this.showText, 400 + this.game.liveCamera.x + 12, 100 + this.game.liveCamera.y + 32 - truerHeight / 2 - 1 - 15, MAX_X_SIZE, MIN_Y_SIZE);
		}
		ctx.globalAlpha = 1;
		ctx.textAlign = "left";
		Entity.prototype.draw.call(this);
	}
}

/**
 * Represents a new powerup screen.
 */
class BigInfoBox extends InfoBox {
	constructor(game, header, title, desc, animation) {
		super(game, title);
		this.game = game;
		this.header = header;
		this.title = title;
		this.desc = desc;
		this.animation = animation;
		this.tick = 0;
		this.stage = 0;
		this.opacity = 0;
		this.headerOpacity = 0;
		this.titleOpacity = 0;
		this.descOpacity = 0;
		this.imageOpacity = 0;
		this.highPriority = 3;
	}
	
	update() {
		this.tick++;
		if (this.stage == 4 && this.game.spaceDown) {
			this.stage = 5;
		}
		this.game.pauseTime = 60; //continously pause until window is faded out
		switch (this.stage) {
			case 0: //start - fade in
				if (this.opacity < 1) {
					this.opacity += 0.01;
					if (this.opacity >= 1) {
						this.opacity = 1;
						this.stage = 1;
						this.tick = 0;
					}
				}
			break;
			case 1: //fade first text
				if (this.headerOpacity < 1) {
					this.headerOpacity += 0.01;
					if (this.headerOpacity >= 1) {
						this.headerOpacity = 1;
						this.stage = 2;
						this.tick = 0;
					}
				}
			break;
			case 2: //fade second text
				if (this.titleOpacity < 1) {
					this.titleOpacity += 0.01;
					if (this.titleOpacity >= 1) {
						this.titleOpacity = 1;
						this.stage = 3;
						this.tick = 0;
					}
				}
			break;
			case 3: //fade remains
				if (this.descOpacity < 1) {
					this.descOpacity += 0.01;
					this.imageOpacity += 0.01;
					if (this.descOpacity >= 1) {
						this.descOpacity = 1;
						this.imageOpacity = 1;
						this.stage = 4;
						this.tick = 0;
					}
				}
			break;
			case 5: //fade all
				if (this.descOpacity > 0) {
					this.opacity -= 0.01;
					this.headerOpacity -= 0.01;
					this.titleOpacity -= 0.01;
					this.descOpacity -= 0.01;
					this.imageOpacity -= 0.01;
					if (this.descOpacity <= 0) {
						this.removeFromWorld = true;
					}
				}
			break;
		}
	}
	
	draw(ctx) {
		
		ctx.fillStyle = "#000000";
		
		ctx.globalAlpha = MAX_BLACKSCREEN_OPACITY * this.opacity;
		ctx.fillRect(this.game.liveCamera.x, this.game.liveCamera.y, 800, 500);
		ctx.globalAlpha = this.headerOpacity;
		ctx.font = "14px Proxima Nova";
		ctx.textAlign = "center";
		ctx.globalAlpha = this.headerOpacity;
		ctx.fillStyle = "white";
		wrapText(ctx, this.header, this.game.liveCamera.x + this.game.liveCamera.width / 2, this.game.liveCamera.y + 64, 800, 32);
		ctx.globalAlpha = this.titleOpacity;
		ctx.font = "24px Proxima Nova";
		wrapText(ctx, this.title, this.game.liveCamera.x + this.game.liveCamera.width / 2, this.game.liveCamera.y + 96 + 32, 800, 32);
		ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/blackscreen_bar.png"), this.game.liveCamera.x + this.game.liveCamera.width / 2 - 200, this.game.liveCamera.y + 96 + 48, 400, 32);
		ctx.globalAlpha = this.descOpacity;
		wrapText(ctx, this.desc, this.game.liveCamera.x + this.game.liveCamera.width / 2, this.game.liveCamera.y + 160 + 32 + 6, 600, 32);
		//wrapText(ctx, ".", this.game.liveCamera.x + this.game.liveCamera.width / 2, this.game.liveCamera.y + 160 + 96, 800, 100);
		this.animation.drawFrame(this.game.clockTick, ctx, this.game.liveCamera.x + this.game.liveCamera.width / 2 + this.animation.offsetX,
			this.game.liveCamera.y + this.game.liveCamera.height / 2 + this.animation.offsetY + 160 + 48 + 32, 1);
		ctx.font = "12px Proxima Nova";
		wrapText(ctx, "Press [SPACE] to continue", this.game.liveCamera.x + this.game.liveCamera.width / 2, this.game.liveCamera.y + this.game.liveCamera.height - 16, 800, 100);
		ctx.textAlign = "left";
		Entity.prototype.draw.call(this);
	}
	
}


/**
 * A object to pause the game as it fades to black, unpausing after the fade ends.
 */
class BlackScreenFade extends InfoBox {
	constructor(game, fadeTime) {
		super(game, "");
		this.fadeTime = fadeTime;
		this.tick = 0;
		this.stage = 0;
		this.opacity = 0;
		this.highPriority = 5;
	}
	
	update() {
		this.game.pauseTime = 20; //continously pause until window is faded out
		this.tick++;
		if (this.stage == 0 && this.opacity < 1) {
			this.opacity += 1 / this.fadeTime;
			if (this.opacity >= 1) {
				this.opacity = 1;
				this.stage = 1;
				this.tick = 0;
			}
		} else if (this.stage == 1) {
			this.game.pauseTime = 0;
			this.opacity -= 1 / this.fadeTime;
			if (this.opacity <= 0) {
				this.removeFromWorld = true;
			}
		}
	}
	
	draw(ctx) {
		
		ctx.fillStyle = "#000000";
		ctx.globalAlpha = this.opacity;
		ctx.fillRect(this.game.liveCamera.x, this.game.liveCamera.y, 800, 500);
		ctx.globalAlpha = 1;
		Entity.prototype.draw.call(this);
	}
}