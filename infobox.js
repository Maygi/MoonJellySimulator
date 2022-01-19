var MAX_X_SIZE = 250;
var MIN_Y_SIZE = 32;

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
			wrapText(ctx, this.showText, 400 + this.game.liveCamera.x + 13, 100 + this.game.liveCamera.y + truerHeight / 2 - 15, MAX_X_SIZE, MIN_Y_SIZE);
			ctx.fillStyle = "white";
			wrapText(ctx, this.showText, 400 + this.game.liveCamera.x + 12, 100 + this.game.liveCamera.y  + truerHeight / 2 - 1 - 15, MAX_X_SIZE, MIN_Y_SIZE);
		}
		ctx.globalAlpha = 1;
		ctx.textAlign = "left";
		Entity.prototype.draw.call(this);
	}
}