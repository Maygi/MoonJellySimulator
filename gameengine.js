/**
 * The game engine, which processes the main flow of basic logic.
 * Base is from Seth Ladd's Google IO talk in 2011.
 * Heavily upgraded by @Maygi.
**/

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (/* function */ callback, /* DOMElement */ element) {
                window.setTimeout(callback, 1000 / 60);
            };
})();

function Timer() {
    this.gameTime = 0;
    this.maxStep = 0.05;
    this.wallLastTimestamp = 0;
}

Timer.prototype.tick = function () {
	var wallDelta = 0;
	while (wallDelta < .016667) {
		var wallCurrent = Date.now();
		var wallDelta = (wallCurrent - this.wallLastTimestamp) / 1000;
	}
    this.wallLastTimestamp = wallCurrent;

    var gameDelta = Math.min(wallDelta, this.maxStep);
    this.gameTime += gameDelta;
	//console.log("delta: " + wallDelta + "; game delta: " + gameDelta +"; game time: " + this.gameTime);
    return gameDelta;
};

function GameEngine() {
    this.entities = [];
    this.showOutlines = false;
    this.ctx = null;
}

GameEngine.prototype.init = function (ctx) {
	this.highPriority = 1000;
	this.score = 0;
	this.cameraShakeAmount = 0;
	this.cameraShakeTime = 0;
	this.cameraShakeDecay = 0;
    this.ctx = ctx;
    this.surfaceWidth = this.ctx.canvas.width;
    this.surfaceHeight = this.ctx.canvas.height;
    this.startInput();
    this.timer = new Timer();
    this.player1 = null;
	this.player1AttackIndex = 0; //the actual skill being used
	this.player1AttackInput = 0; //the raw attack input
	this.player1LastLightAttack = 0;
	this.currentPhase = -1;
	this.currentBoss = null;
    this.currentMap = null;
    this.UI = null;
    this.textSpeed = 5;
    this.step = 0;
    this.cameraLock = false;
    this.gameWon = false;
    this.cameraSpeed = 5;
	this.cutTime = 0; // the time where the black cross-screen cut effect is in play
	this.pauseTime = 0;
    this.camera = { //where the camera wants to be
    	x: -2400,
    	y: 0,
    	minX: -2400,
    	maxX: 0,
    	minY: 0,
    	maxY: 0,
    	width: 800,
    	height: 500
    };
    this.liveCamera = { //where the camera actually is
    	x: -2400,
    	y: 0,
    	width: 800,
    	height: 500
    };
    console.log("Game initialized");
};

GameEngine.prototype.start = function () {
    console.log("Starting game");
    var that = this;
    (function gameLoop() {
        that.loop();
        requestAnimFrame(gameLoop, that.ctx.canvas);
    })();
};

GameEngine.prototype.startInput = function () {
    console.log("Starting input");
    var that = this;
	
    this.ctx.canvas.addEventListener("keydown", function (e) {
		if (String.fromCharCode(e.which) === 'D' || String.fromCharCode(e.which) === '\'' ) { 
			that.player1.rightDown = true;
		} else if (String.fromCharCode(e.which) === 'A' || String.fromCharCode(e.which) === '%') {
			that.player1.leftDown = true;
		}
		if (String.fromCharCode(e.which) === 'W' || String.fromCharCode(e.which) === '&') {
			that.player1.upDown = true;
		}
		if (String.fromCharCode(e.which) === 'S' || String.fromCharCode(e.which) === '(') {
			that.player1.downDown = true;
		}
		if (String.fromCharCode(e.which) === ' ') {
			that.player1.jumpDown = true;
            that.textSpeed = 1;
		}
		if (String.fromCharCode(e.which) === 'Y') {
			that.player1.attackInput = 1;
        } else if (String.fromCharCode(e.which) === 'Z') {
			that.player1.attackInput = 1;
        } else if (String.fromCharCode(e.which) === 'C') {
			if (that.player1.dead) { //revive
				that.player1.dead = false;
				that.player1.currentHealth = that.player1.maxHealth;
				that.player1.vulnerable = false;
				that.player1.invulnTimer = that.player1.invulnTimerMax * 2;
				that.player1.hitByAttack = true;
				that.player1.xVelocity = 0;
				that.score = Math.round(that.score / 2);
				if (that.currentPhase === 5) { //brandong chase
					that.player1.speedTimer = 300;
				}
			}
        } else if (String.fromCharCode(e.which) === 'Q') {
			that.player1.attackInput = 2;
        } else if (String.fromCharCode(e.which) === 'X') {
			if (that.player1.currentStamina >= 100) { //ulti
				that.player1.currentStamina = 0;
				cutEffect(that, "Thunderbolt", "./img/Particle/jelly_cut.png");
			}
        }
        if (String.fromCharCode(e.which) === 'O') {
			/*that.camera.x = 7300;
			that.liveCamera.x = 7300;
			that.camera.minX = 1100;
			that.camera.maxX = 16200;
			that.cameraSpeed = 10000;
			that.currentPhase = 5;
			that.player1.x = 7500;
			that.player1.y = 250;
			startMusic.pause();*/
			
			that.camera.x = 15200;
			that.liveCamera.x = 15200;
			that.camera.minX = 15200;
			that.camera.maxX = 30000;
			that.cameraSpeed = 5;
			that.currentPhase = 13;
			//that.player1.x = 15400;
			that.player1.x = 15300;
			that.player1.y = 250;
			
			/*that.camera.x = 19800;
			that.liveCamera.x = 19800;
			that.camera.minX = 19800;
			that.camera.maxX = 19800;
			that.cameraSpeed = 5;
			that.currentPhase = 14;
			//that.player1.x = 15400;
			that.player1.x = 19850;
			that.player1.y = 250;*/
			startMusic.pause();
			part2Music.play();
			spawnWave(gameEngine, 2);
		}
        e.preventDefault();
    }, false);
    this.ctx.canvas.addEventListener("keyup", function (e) {
		if (String.fromCharCode(e.which) === 'D' || String.fromCharCode(e.which) === '\'' ) { 
			that.player1.rightDown = false;
		} else if (String.fromCharCode(e.which) === 'A' || String.fromCharCode(e.which) === '%') {
			that.player1.leftDown = false;
		}
		if (String.fromCharCode(e.which) === 'W' || String.fromCharCode(e.which) === '&') {
			that.player1.upDown = false;
		}
		if (String.fromCharCode(e.which) === ' ') {
			that.player1.jumpDown = false;
            that.textSpeed = 5;
		}
		if (String.fromCharCode(e.which) === 'S' || String.fromCharCode(e.which) === '(') {
			that.player1.downDown = false;
		}
        if (String.fromCharCode(e.which) === 'Y' || String.fromCharCode(e.which) === 'U') {
			that.player1.attackInput = 0;
		}
        if (String.fromCharCode(e.which) === 'Z') {
			that.player1.attackInput = 0;
        }
        e.preventDefault();
    }, false);
    console.log('Input started');
};

GameEngine.prototype.addEntity = function (entity) {
    //console.log('Added Entity');
    this.entities.push(entity);
};

GameEngine.prototype.setPlayer1 = function (entity) {
    this.player1 = entity;
};

GameEngine.prototype.setBoss = function (entity) {
    this.currentBoss = entity;
};

GameEngine.prototype.setMap = function (entity) {
    this.currentMap = entity;
};

GameEngine.prototype.setUI = function (entity) {
    this.UI = entity;
};

GameEngine.prototype.draw = function () {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.save();
    this.ctx.translate(-this.liveCamera.x, -this.liveCamera.y);
	var highPriorityEntities = [];
	var highPriorityEntities2 = [];
	var highPriorityEntities3 = []; //over ui
    for (var i = 0; i < this.entities.length; i++) {
		if (this.entities[i].highPriority > 0) {
			if (this.entities[i].highPriority === 3)
				highPriorityEntities3.push(i);
			else if (this.entities[i].highPriority === 2)
				highPriorityEntities2.push(i);
			else
				highPriorityEntities.push(i);
		} else
			this.entities[i].draw(this.ctx);
    }
    for (var i = 0; i < highPriorityEntities.length; i++) {
		this.entities[highPriorityEntities[i]].draw(this.ctx);
    }
    for (var i = 0; i < highPriorityEntities2.length; i++) {
		this.entities[highPriorityEntities2[i]].draw(this.ctx);
    }
	if (!this.player1.dead)
		this.UI.draw(this.ctx);
    for (var i = 0; i < highPriorityEntities3.length; i++) {
		this.entities[highPriorityEntities3[i]].draw(this.ctx);
    }
    this.ctx.restore();
};

GameEngine.prototype.cameraShake = function(amount, time) {
	this.cameraShakeAmount = amount;
	this.cameraShakeTime = time;
}

GameEngine.prototype.update = function () {
	if (!this.player1.dead) {
		if (this.pauseTime > 0)
			this.pauseTime--;
		if (this.cutTime > 0) {
			this.cutTime--;
			handleCut(this);
		} else if (this.pauseTime === 0) {
			this.step++;
		}
	}
	if (!this.cameraLock) {
		if (this.scoreToSet > 0) {
			this.score = this.scoreToSet;
			this.scoreToSet = 0;
		}
		this.camera.x = this.player1.x - 200;
		this.camera.y = this.player1.y;
		//console.log("Updating camera coords to (" + this.camera.x+", "+this.camera.y+")");
		if (this.camera.x < this.camera.minX) {
			this.camera.x = this.camera.minX;
		}
		if (this.camera.y < this.camera.minY) {
			this.camera.y = this.camera.minY;
		}
		if (this.camera.x > this.camera.maxX) {
			this.camera.x = this.camera.maxX;
		}
		if (this.camera.y > this.camera.maxY) {
			this.camera.y = this.camera.maxY;
		}
		
		if (this.currentPhase === 1) { //starting game phase: scroll to the right
            //this.camera.x = -2400 + (this.step) * 2;
		}
		if (this.currentPhase === 13) { //starting game phase: scroll to the right
            this.camera.x = 15200 + (this.step) * 2;
		}
	    if (this.liveCamera.x != this.camera.x) {
	    	if (this.liveCamera.x < this.camera.x) {
	    		this.liveCamera.x = Math.min(this.camera.x, this.liveCamera.x + this.cameraSpeed);
	    	} else {
	    		this.liveCamera.x = Math.max(this.camera.x, this.liveCamera.x - this.cameraSpeed);	    		
	    	}
	    }
	    if (this.liveCamera.y != this.camera.y) {
	    	if (this.liveCamera.y < this.camera.y) {
	    		this.liveCamera.y = Math.min(this.camera.y, this.liveCamera.y + this.cameraSpeed);
	    	} else {
	    		this.liveCamera.y = Math.max(this.camera.y, this.liveCamera.y - this.cameraSpeed);	    		
	    	}
	    }
        if (this.currentPhase === -1 && this.camera.x >= 0) {
            this.currentPhase = 0;
            this.camera.x = 0;
            this.liveCamera.x = 0;
            this.cameraLock = true;
        }
	}
	//CAMERA SHAKE
	/*if ((this.currentPhase >= 6 && this.currentPhase <= 10) || this.currentPhase === 17) {
		this.liveCamera.x += -5 + Math.random() * 10;
		this.liveCamera.y += -5 + Math.random() * 10;
	}*/
	if (this.cameraShakeTime > 0) {
		this.cameraShakeTime--;
		this.cameraShakeAmount -= this.cameraShakeDecay;
		this.liveCamera.x = this.camera.minX -this.cameraShakeAmount / 2 + Math.random() * this.cameraShakeAmount / 2;
		this.liveCamera.y = this.camera.minY + this.cameraShakeAmount / 2 + Math.random() * this.cameraShakeAmount / 2;
		if (this.cameraShakeAmount <= 0) {
			this.cameraShakeTime = 0;
            this.liveCamera.x = this.camera.x;
            this.liveCamera.y = this.camera.y;
		}
	}
    var entitiesCount = this.entities.length;
    for (var i = 0; i < entitiesCount; i++) {
        var entity = this.entities[i];
        if (!entity.removeFromWorld && this.pauseTime === 0 || entity.highPriority > 0) {
            entity.update();
        }
    }
    for (var i = this.entities.length - 1; i >= 0; --i) {
        if (this.entities[i].removeFromWorld) {
            this.entities.splice(i, 1);
        }
    }
};

GameEngine.prototype.loop = function () {
    this.clockTick = this.timer.tick();
    this.update();
    this.draw();
    this.space = null;
	this.r = null;
};

function Entity(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.removeFromWorld = false;
}

Entity.prototype.update = function () {
};

Entity.prototype.draw = function (ctx) {
	/*
    if (this.game.showOutlines && this.radius) {
        this.game.ctx.beginPath();
        this.game.ctx.strokeStyle = "green";
        this.game.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        this.game.ctx.stroke();
        this.game.ctx.closePath();
    }*/
};

Entity.prototype.rotateAndCache = function (image, angle) {
    var offscreenCanvas = document.createElement('canvas');
    var size = Math.max(image.width, image.height);
    offscreenCanvas.width = size;
    offscreenCanvas.height = size;
    var offscreenCtx = offscreenCanvas.getContext('2d');
    offscreenCtx.save();
    offscreenCtx.translate(size / 2, size / 2);
    offscreenCtx.rotate(angle);
    offscreenCtx.translate(0, 0);
    offscreenCtx.drawImage(image, -(image.width / 2), -(image.height / 2));
    offscreenCtx.restore();
    //offscreenCtx.strokeStyle = "red";
    //offscreenCtx.strokeRect(0,0,size,size);
    return offscreenCanvas;
};
