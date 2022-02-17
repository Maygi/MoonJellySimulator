
const pSBC=(p,c0,c1,l)=>{
    let r,g,b,P,f,t,h,i=parseInt,m=Math.round,a=typeof(c1)=="string";
    if(typeof(p)!="number"||p<-1||p>1||typeof(c0)!="string"||(c0[0]!='r'&&c0[0]!='#')||(c1&&!a))return null;
    if(!this.pSBCr)this.pSBCr=(d)=>{
        let n=d.length,x={};
        if(n>9){
            [r,g,b,a]=d=d.split(","),n=d.length;
            if(n<3||n>4)return null;
            x.r=i(r[3]=="a"?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1
        }else{
            if(n==8||n==6||n<4)return null;
            if(n<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(n>4?d[4]+d[4]:"");
            d=i(d.slice(1),16);
            if(n==9||n==5)x.r=d>>24&255,x.g=d>>16&255,x.b=d>>8&255,x.a=m((d&255)/0.255)/1000;
            else x.r=d>>16,x.g=d>>8&255,x.b=d&255,x.a=-1
        }return x};
    h=c0.length>9,h=a?c1.length>9?true:c1=="c"?!h:false:h,f=this.pSBCr(c0),P=p<0,t=c1&&c1!="c"?this.pSBCr(c1):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},p=P?p*-1:p,P=1-p;
    if(!f||!t)return null;
    if(l)r=m(P*f.r+p*t.r),g=m(P*f.g+p*t.g),b=m(P*f.b+p*t.b);
    else r=m((P*f.r**2+p*t.r**2)**0.5),g=m((P*f.g**2+p*t.g**2)**0.5),b=m((P*f.b**2+p*t.b**2)**0.5);
    a=f.a,t=t.a,f=a>=0||t>=0,a=f?a<0?t:t<0?a:a*P+t*p:0;
    if(h)return"rgb"+(f?"a(":"(")+r+","+g+","+b+(f?","+m(a*1000)/1000:"")+")";
    else return"#"+(4294967296+r*16777216+g*65536+b*256+(f?m(a*255):0)).toString(16).slice(1,f?undefined:-2)
}

const calcAngleDegrees = (x, y) => {
  return Math.atan2(y, x) * 180 / Math.PI;
}

class Laser {
	constructor(game, x1, y1, x2, y2, width, color, wiggle) {
		this.game = game;
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
		this.x2O = x2;
		this.y2O = y2;
		this.width = width;
		this.color = color;
		this.tick = 0;
		this.effectiveWidth = this.width;
		this.particleFrequency = 1;
		this.singleTarget = false;
		this.extend = false;
		this.canHit = true;
		this.damage = 1;
		this.hitBoxLenience = 0.8;
		this.wiggle = wiggle || 0.2;
		this.effectiveWiggle = 0;
		this.lastWiggle = 0;
		this.distanceMultiplier = 1;
		this.special = 0;
		this.finishing = false;
	}
	
	checkCollision() { //checks collision with player
		if (this.damage == 0)
			return;
		var dx = this.x1 - this.x2;
		var dy = this.y1 - this.y2;
		var collision = false;
		var px = this.game.player1.x + this.game.player1.hitBoxDef.width / 2 + this.game.player1.hitBoxDef.offsetX;
		var py = this.game.player1.y + this.game.player1.hitBoxDef.height / 2 + this.game.player1.hitBoxDef.offsetY;
		if (dx == 0) { //it's a vertical line
			collision = Math.abs(px - this.x1) <= this.width * this.hitBoxLenience;			
		} else {
			var slope = dy/dx;
			
			var calcY = (px - this.x1) * slope + this.y1;
			collision = Math.abs(py - calcY) <= this.width * this.hitBoxLenience;
		}
		if (collision && this.canHit && this.game.player1.vulnerable) { //hit!!
			
			var createX = this.game.player1.x + this.game.player1.hitBoxDef.offsetX + this.game.player1.hitBoxDef.width / 2;
			var createY = this.game.player1.y + this.game.player1.hitBoxDef.offsetY + this.game.player1.hitBoxDef.height / 2;
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
			applyDamage(this.game.player1.x, this.game.player1.y, this.game, this.damage, this.game.player1);
			this.game.player1.hitByAttack = true;
			this.game.player1.stunTimer = this.game.player1.invulnTimerMax;
			this.game.player1.invulnTimer = this.game.player1.invulnTimerMax * 2;
			this.game.player1.stunned = true;
			playSound(hitSound);
			this.game.player1.yVelocity = 7;
			this.game.player1.jumping = true;
			this.game.pauseTime = 8;
			if (dx == 0) {
				if (px <= this.x1) {
					this.game.player1.hurtAnimation = this.game.player1.hurtAnimationRight;
					this.game.player1.xVelocity = -2;
				} else {
					this.game.player1.hurtAnimation = this.game.player1.hurtAnimationLeft;
					this.game.player1.xVelocity = 2;					
				}
			} else if (this.x1 >= this.x2) {
				this.game.player1.hurtAnimation = this.game.player1.hurtAnimationLeft;
				this.game.player1.xVelocity = 2;
			} else {
				this.game.player1.hurtAnimation = this.game.player1.hurtAnimationRight;
				this.game.player1.xVelocity = -2;
			}
		}
	}
	
	setWaitTime(ticks) {
		this.tick = 0 - ticks;
	}
	
	extrapolate(p, q, x0, x1, y0, y1) {
		var dx = q.x - p.x;
		var dy = q.y - p.y;
		if (dx === 0) return [{x: p.x, y: y0}, {x: p.x, y: y1}];
		var slope = dy / dx;

		var y_at_x0 = slope * (x0 - p.x) + p.y;
		var y_at_x1 = slope * (x1 - p.x) + p.y;
		var x_at_y0 = (y0 - p.y) / slope + p.x;
		var x_at_y1 = (y1 - p.y) / slope + p.x;

		var r, s;
		if (y_at_x0 < y0) r = {x: x_at_y0, y: y0};
		else if (y_at_x0 <= y1) r = {x: x0, y: y_at_x0};
		else r = {x: x_at_y1, y: y1};

		if (y_at_x1 < y0) s = {x: x_at_y0, y: y0};
		else if (y_at_x1 <= y1) s = {x: x1, y: y_at_x1};
		else s = {x: x_at_y1, y: y1};

		return [r, s];
	}
	
	finish() {
		this.tick = this.growTime + this.sustain;
		this.finishing = true;
	}
	
	update() {
		this.checkCollision();
		this.tick++;
		//console.log("xoffset: " + xOffset + " y: " + yOffset);
		//console.log("partfreq: " + this.particleFrequency);
		var speedFactor = 50;
		if (this.extend) { //find the distance to the end of the camera
			var camXSide = (this.x2O >= (this.game.camera.x + this.game.camera.width / 2)) ?
				(this.game.camera.x + this.game.camera.width) : this.game.camera.x;
			var camYSide = (this.y2O >= (this.game.camera.y + this.game.camera.height / 2)) ?
				(this.game.camera.y + this.game.camera.height) : this.game.camera.y;
			var camDx = Math.abs(this.x2O - camXSide);
			var camDy = Math.abs(this.y2O - camYSide);
			var onScreen = this.x2O >= this.game.camera.x && this.x2O <= this.game.camera.x + this.game.camera.width &&
				this.y2O >= this.game.camera.y && this.y2O <= this.game.camera.y + this.game.camera.height;
				
			var p = {x: this.x1, y: this.y1};
			var q = {x: this.x2O, y: this.y2O};
			var newPoint = this.extrapolate(p, q, this.game.liveCamera.x - 64, this.game.liveCamera.x + this.game.liveCamera.width + 128, 
				this.game.liveCamera.y - 64, this.game.liveCamera.y + this.game.liveCamera.height + 128);
			if (this.x1 <= this.x2O) {
				this.x2 = newPoint[1].x;
				this.y2 = newPoint[1].y;
			} else {
				this.x2 = newPoint[0].x;
				this.y2 = newPoint[0].y;
			}
			if (!this.trace)
				this.extend = false;
		}
		var dx = this.x1 - this.x2;
		var dy = this.y1 - this.y2;
		if (dx == 0)
			dx = 0.01;
		var slope = dy/dx;
		var partAmount = 15;
		var partWidth = this.tick < 0 ? this.width * 1.4 : this.effectiveWidth * 1.4;
		var xOffset = Math.abs(Math.sin(Math.atan2(dy, dx))) * partWidth;
		var yOffset = Math.abs(Math.cos(Math.atan2(dy, dx))) * partWidth;
		if (Math.random() < this.particleFrequency) {
			for (var i = 0; i < partAmount; i++) {
				var origX = this.x1 - (dx / partAmount) * i;
				var partX = origX - xOffset + Math.random() * xOffset * 2;
				var partY = (origX - this.x1) * slope + this.y1 - yOffset + Math.random() * yOffset * 2;
				var newParticle = new Particle(PART_SECONDARY, partX, partY, 
						- dx / speedFactor, - dx / speedFactor, - dy / speedFactor, - dy / speedFactor , 0, 0, 0, 0, 0, 20, .5, .15, true, this.game);
				var element = new SquareElement((3 + Math.random() * 1) * Math.min(3, this.tick / 30), 
					(3 + Math.random() * 1) * Math.min(3, this.tick / 30), pSBC(1, this.color), pSBC(1, this.color));
				newParticle.other = element;
				this.game.addEntity(newParticle);
			}
		}
		var wiggleThreshold = this.effectiveWidth * this.wiggle;
		var wiggleAmount = wiggleThreshold + Math.random() * wiggleThreshold * 2;
		this.effectiveWiggle = (this.lastWiggle + wiggleAmount) / 2;
		this.lastWiggle = this.effectiveWiggle;
		if (this.tick >= this.growTime + this.sustain + this.shrinkTime) {
			this.tick = 0;
			this.particleFrequency = 1;
			this.playerTarget = true;
			this.extend = true;
			this.removeFromWorld = true;
		}
	}
	
	draw(ctx) {
		/*ctx.strokeStyle = this.color;
		ctx.lineWidth = this.effectiveWidth;
		ctx.moveTo(this.x1, this.y1);
		ctx.lineTo(this.x2, this.y2);
		ctx.lineWidth = 1;
		ctx.strokeStyle = "#000";*/
		Entity.prototype.draw.call(this);
	}
}

class GrowLaser extends Laser {
	constructor(game, x1, y1, x2, y2, width, color, growTime, sustain, shrinkTime, wiggle) {
		super(game, x1, y1, x2, y2, width, color, wiggle);
		this.growTime = growTime;
		this.sustain = sustain;
		this.shrinkTime = shrinkTime;
		this.playerTarget = false;
		this.waitTime = 0;
		this.canHit = false;
		this.effectiveWidth = Math.max(0.1 * this.width);
		
		this.trace = false;
		this.traceSpeed = 1;
		this.traceWaitTime = 0;
	}
	
	update() {
		if (this.playerTarget) {
			if (this.trace) {
				if (this.tick >= 0)
					this.playerTarget = false;
			} else if (this.singleTarget) {
				this.playerTarget = false;
			}
			this.x2O = this.game.player1.x + this.game.player1.hitBoxDef.width / 2 + this.game.player1.hitBoxDef.offsetX;
			this.y2O = this.game.player1.y + this.game.player1.hitBoxDef.height / 2 + this.game.player1.hitBoxDef.offsetY;
		}
		if (this.trace && this.tick >= this.traceWaitTime) {
			var px = this.game.player1.x + this.game.player1.hitBoxDef.width / 2 + this.game.player1.hitBoxDef.offsetX;
			var py = this.game.player1.y + this.game.player1.hitBoxDef.height / 2 + this.game.player1.hitBoxDef.offsetY;
			var effSpeed = this.traceSpeed;
			if (this.y2O != py && this.x2O != px && Math.abs(this.y2O - py) >= 128)
				effSpeed = this.traceSpeed * 0.5;
			if (this.x2O < px) {
				this.x2O = Math.min(px, this.x2O + effSpeed);
			} else {
				this.x2O = Math.max(px, this.x2O - effSpeed);				
			}
			if (this.y2O < py) {
				this.y2O = Math.min(py, this.y2O + effSpeed);
			} else {
				this.y2O = Math.max(py, this.y2O - effSpeed);			
			}
		}
		if (this.special == 1) {
			var dx = this.x1 - this.x2;
			var dy = this.y1 - this.y2;
			var createX = this.x1 - dx * this.distanceMultiplier;
			var createY = this.y1 - dy * this.distanceMultiplier
			var newParticle = new Particle(PART_SECONDARY, createX, createY, 
					-3, 3, -3, 3, 0, 0, 20, 0, 0, 30, .7, .2, true, this.game);
			var element = new CircleElement(20 + (this.finishing ? 20 : 0) + Math.random() * 6, "#c4fbff", "#ffffe3");
			newParticle.other = element;
			newParticle.acceleration = this.finishing ? 0.12 : 0.15;
			newParticle.grow = true;
			this.game.addEntity(newParticle);
		}
		this.canHit = false;
		if (this.tick <= this.growTime)
			this.effectiveWidth = (this.tick / this.growTime) * this.width;
		else if (this.tick >= this.growTime && this.tick <= this.growTime + this.sustain) {
			this.effectiveWidth = this.width;
			this.canHit = true;
		} else {
			this.effectiveWidth = this.width - this.width * ((this.tick - this.sustain - this.growTime) / this.shrinkTime);
			this.particleFrequency = 1 - ((this.tick - this.sustain - this.growTime) / this.shrinkTime) * 2;
		}
		this.effectiveWidth = Math.max(0.1 * this.width, this.effectiveWidth);
		super.update();
	}
	
	draw(ctx) {
		var dx = this.x1 - this.x2;
		var dy = this.y1 - this.y2;
		ctx.strokeStyle = this.color;
		ctx.lineWidth = this.effectiveWidth + this.effectiveWiggle;
		ctx.beginPath();
		ctx.moveTo(this.x1, this.y1);
		ctx.lineTo(this.x1 - dx * this.distanceMultiplier, this.y1 - dy * this.distanceMultiplier);
		ctx.stroke();
		
		ctx.globalAlpha = 0.7;
		ctx.lineWidth = (this.effectiveWidth + this.effectiveWiggle) * 1.2;
		ctx.beginPath();
		ctx.moveTo(this.x1, this.y1);
		ctx.lineTo(this.x1 - dx * this.distanceMultiplier, this.y1 - dy * this.distanceMultiplier);
		ctx.stroke();
		
		ctx.globalAlpha = 0.4;
		ctx.lineWidth = (this.effectiveWidth + this.effectiveWiggle) * 1.4;
		ctx.beginPath();
		ctx.moveTo(this.x1, this.y1);
		ctx.lineTo(this.x1 - dx * this.distanceMultiplier, this.y1 - dy * this.distanceMultiplier);
		ctx.stroke();
		
		ctx.lineWidth = 1;
		ctx.strokeStyle = "#000";
		Entity.prototype.draw.call(this);
		//var slope = dy / dx;
		var partAmount = 10;
		ctx.globalAlpha = 1;
		
		/*ctx.font = "18px Lucida Console";
		ctx.textAlign = "center";
		ctx.fillStyle = "black";
		ctx.fillText("ANGLE: " + calcAngleDegrees(dx, dy), this.game.player1.x, this.game.player1.y - 60);
		ctx.fillText("COS: " + Math.cos(Math.atan2(dy, dx)), this.game.player1.x, this.game.player1.y - 30);
		ctx.fillText("SIN: " + Math.sin(Math.atan2(dy, dx)), this.game.player1.x, this.game.player1.y);*/
	}
}