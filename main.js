/**
    Variables for testing
*/

var soundOn = true;
var showHitBox = false;
var invincible = false;

var gameEngine;
var textBox;

/**
    General Variables
*/

// Booleans
var musicFadingOut = false;
var musicFadingIn = false;
// Numbers
var bossMusicVolume = 0.1;
var COMBO_DROPOFF_TIME = 5;
var IMG_PART = 1;
var PART_SECONDARY = 2;
var TEXT_PART = 3;
var SHAPE_PART = 4;
var VOID_BALL = 5;
var PART_GENERATOR = 6;
var VOID_PORTAL = 7;
var VOID_ERUPTION = 8;
var IMG_FLASH_PART = 9;
var BURROW_PART = 10;
var VOID_STORM = 11;
var VOID_GOOP = 12;
var VOID_GATE = 13;
var VOID_LIGHTNING = 14;
var BRANDONG_SPIN = 15;
var BRANDONG_WHIP = 16;


//attack ids for particles
var BRANDONG_WHIPWALL = 7;
var BRANDONG_WHIPLINE = 8;
var AYA_SHOT = 9;
var ALPHA_SHOT = 10;
var TUNA_CHARGE = 11;
var TUNA_CHARGE_EXPLODE = 12;

var gameStarted = false;
var mode = "hard";
// Sounds
var startMusic = new Audio("./sounds/startMusic.mp3");
startMusic.loop = true;
startMusic.volume = 0.1;
var bossMusic = new Audio("./sounds/bgm_boss.mp3");
bossMusic.loop = true;
bossMusic.volume = bossMusicVolume;
var climbMusic = new Audio("./sounds/malz.mp3");
climbMusic.loop = true;
climbMusic.volume = 0.2;
var finalMusic = new Audio("./sounds/finalmusic.ogg");
finalMusic.loop = true;
finalMusic.volume = 0.3;

var startMusic = new Audio("./sounds/bgm_start.mp3");
startMusic.loop = true;
startMusic.volume = 0.1;
var forestMusic = new Audio("./sounds/bgm_forest.mp3");
forestMusic.loop = true;
forestMusic.volume = 0.1;
var chaseMusic = new Audio("./sounds/bgm_bikechase.mp3");
chaseMusic.loop = true;
chaseMusic.volume = 0.1;
var brandongMusic = new Audio("./sounds/bgm_brandong.mp3");
brandongMusic.loop = true;
brandongMusic.volume = 0.1;
var crisisMusic = new Audio("./sounds/bgm_crisis.mp3");
crisisMusic.loop = true;
crisisMusic.volume = 0.1;
var part2Music = new Audio("./sounds/bgm_lilysegment.mp3");
part2Music.loop = true;
part2Music.volume = 0.1;

var earthRumble = new Audio("./sounds/earth_rumble.wav");
earthRumble.loop = true;
earthRumble.volume = 0.4;
var fireSound = new Audio("./sounds/fire_burning.wav");
fireSound.volume = 0.4;
var healSound = new Audio("./sounds/heal.wav");
healSound.volume = 0.1;
var invulnSound = new Audio("./sounds/invulnerable.wav");
invulnSound.volume = 0.1;
var airHitSound = new Audio("./sounds/windhit.wav");
airHitSound.volume = 0.1;
var lightningSound = new Audio("./sounds/lightning.wav");
lightningSound.volume = 0.1;
var lightningExSound = new Audio("./sounds/void_lightning.mp3");
lightningExSound.volume = 0.2;
var lightningFallSound = new Audio("./sounds/comet_fall.wav");
lightningFallSound.volume = 0.5;
var explosionSound = new Audio("./sounds/explosion.wav");
explosionSound.volume = 0.1;
var burnSound = new Audio("./sounds/burn.wav");
burnSound.volume = 0.2;
var hitSound = new Audio("./sounds/punch.mp3");
hitSound.volume = 0.5;
var voidlingDeathSound = new Audio("./sounds/Death.mp3");
voidlingDeathSound.volume = 0.1;
var spawnSound = new Audio("./sounds/Spawn.mp3");
spawnSound.volume = 0.1;
var disappearSound = new Audio("./sounds/disappear.mp3");
disappearSound.volume = 1.0;
var footsteps = new Audio("./sounds/footsteps.mp3");
footsteps.loop = true;
footsteps.volume = 0;
if (soundOn) {
    this.footsteps.play();
}
var victory = new Audio("./sounds/victory.mp3");
victory.loop = true;
victory.volume = 0.1;
var bounceSound = new Audio("./sounds/bounce.wav");
bounceSound.volume = 0.1;
var chargedBurstSound = new Audio("./sounds/chargedburst.wav");
hitSound.volume = 1;
var teleportSound = new Audio("./sounds/teleport.wav");
teleportSound.volume = 0.3;
teleportSound.playbackRate = 1.5;
var voidGateSound = new Audio("./sounds/voidgate.wav");
voidGateSound.volume = 1;
var laserSound = new Audio("./sounds/laser.wav");
laserSound.volume = 0.04;
var jumpSound = new Audio("./sounds/jumpSound.mp3");
jumpSound.volume = 0.3;
var breakSound = new Audio("./sounds/rock_break.wav");
breakSound.volume = 0.1;

var shotHitSound = new Audio("./sounds/shot_hit.wav");
shotHitSound.volume = 0.1;
var beep = new Audio("./sounds/beep.mp3");
beep.volume = 0.05;
var lenoxQSound = new Audio("./sounds/lenox_q.mp3");
var lenoxWSound = new Audio("./sounds/lenox_w.mp3");
var lenoxRSound = new Audio("./sounds/lenox_r.mp3");
var lenoxHookSound = new Audio("./sounds/lenox_hook.mp3");
var emoteSound = new Audio("./sounds/emote_start.mp3");
var emoteEndSound = new Audio("./sounds/emote_end.mp3");
var speedgateSound = new Audio("./sounds/speedgate.mp3");
var explodeSound = new Audio("./sounds/explode.mp3");
var treeSound = new Audio("./sounds/tree.mp3");
var alertSound = new Audio("./sounds/alert.mp3");
var shootSound = new Audio("./sounds/shoot.wav");
var ayaSound = new Audio("./sounds/bangbang.mp3");
var cutSound = new Audio("./sounds/cuteffect.wav");
var energyMaxSound = new Audio("./sounds/energymax.mp3");
var autoSound = new Audio("./sounds/electric.wav");
var energyUpSound = new Audio("./sounds/energyup.wav");
var thunderboltSound = new Audio("./sounds/pikachu.wav");
var dieSound = new Audio("./sounds/aiya.wav");
var dieSound2 = new Audio("./sounds/aiya.wav");
var cannedTunaSound = new Audio("./sounds/cannedtuna.wav");
var coinSound = new Audio("./sounds/coin.wav");
var slapSound = new Audio("./sounds/slap.wav");
var beepSound = new Audio("./sounds/beep.mp3");
var rumbleSound = new Audio("./sounds/rumble.wav");
var beepsSound = new Audio("./sounds/beeps.wav");
var wooshSound = new Audio("./sounds/woosh.wav");
var boomSound = new Audio("./sounds/boom.mp3");
boomSound.volume = 0.1;
var boomSound2 = new Audio("./sounds/boom2.wav");
boomSound2.volume = 0.1;
var slashSound = new Audio("./sounds/slash.mp3");
wooshSound.volume = 0.05;
slapSound.volume = 0.05;
beepsSound.volume = 0.05;
var hitMetal = new Audio("./sounds/metalHit.wav");
var drownHurtSound = new Audio("./sounds/drownhurt.wav");
cannedTunaSound.volume = 0.03;
energyUpSound.volume = 0.07;


/**
    Useful methods
*/

// Creates an animation
function Animation(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse, offsetX, offsetY) {
    this.spriteSheet = spriteSheet;
    this.startX = startX;
    this.startY = startY;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.reverse = reverse;
	this.offsetX = offsetX || 0;
	this.offsetY = offsetY || 0;
}

// Returns whether or not the audio file is playing
function isPlaying(audio) {
    return !audio.paused;
}

// Checks collision between two entities. Handles displacement effects for entity2 (for mob collision purposes).
function checkCollision(entity1, entity2) {
    var hitBox1 = entity1.hitBox;
    var hitBox2 = entity2.hitBox;
	var displacementX = entity2.displacementX || 0;
	var displacementY = entity2.displacementY || 0;
    return (hitBox1.x + hitBox1.width > hitBox2.x + displacementX && hitBox1.x < hitBox2.x + hitBox2.width + displacementX
         && hitBox1.y < hitBox2.y + hitBox2.height + displacementY && hitBox1.y + hitBox1.height > hitBox2.y + displacementY);
}

// Checks collision between two entities, with a X/Y bonus to entity1's hitbox
function checkCollision(entity1, entity2, xbonus, ybonus) {
    var hitBox1 = entity1.hitBox;
    var hitBox2 = entity2.hitBox;
	var displacementX = entity2.displacementX || 0;
	var displacementY = entity2.displacementY || 0;
	return (hitBox1.x + hitBox1.width + (xbonus > 0 ? xbonus : 0) > hitBox2.x + displacementX && hitBox1.x + (xbonus < 0 ? xbonus : 0) < hitBox2.x + hitBox2.width + displacementX
         && hitBox1.y + (ybonus < 0 ? ybonus : 0) < hitBox2.y + hitBox2.height + displacementY && hitBox1.y + hitBox1.height + (ybonus > 0 ? ybonus : 0) > hitBox2.y + displacementY);
    /*return (hitBox1.x + hitBox1.width + (xbonus > 0 ? xbonus : 0) > hitBox2.x + displacementX && hitBox1.x + (xbonus < 0 ? xbonus : 0) < hitBox2.x + hitBox2.width + displacementX
         && hitBox1.y + (ybonus < 0 ? ybonus : 0) < hitBox2.y + hitBox2.height + displacementY && hitBox1.y + hitBox1.height + (ybonus > 0 ? ybonus : 0) > hitBox2.y + displacementY);*/
}

// Returns the distance along the x-axis between two entities. If they collide, the distance is 0
function getXDistance(entity1, entity2) {
    var distance = 0;
    if (entity1.hitBox.x + entity1.hitBox.width < entity2.hitBox.x) {
        distance = entity1.hitBox.x + entity1.hitBox.width - entity2.hitBox.x;        
    } else if (entity1.hitBox.x > entity2.hitBox.x + entity2.hitBox.width) {
        distance = entity1.hitBox.x - entity2.hitBox.x + entity2.hitBox.width;
    }
    return distance;
};

// Creates the hitbox for the entity
function createHitBox(entity) {
    entity.hitBox = {
    	x: entity.x + entity.hitBoxDef.offsetX + (entity.hitBoxDef.growthX < 0 ? entity.hitBoxDef.growthX : 0), 
		y: entity.y + entity.hitBoxDef.offsetY + (entity.hitBoxDef.growthY < 0 ? -1 * entity.hitBoxDef.growthY : 0),
		width: entity.hitBoxDef.width + Math.abs(entity.hitBoxDef.growthX), 
		height: entity.hitBoxDef.height + (entity.hitBoxDef.growthY)
	};
}

// Draws the hitbox of an entity
function drawHitBox(entity, ctx) {
    if (entity.hitBoxDef) {
        entity.hitBox = {
            x: entity.x + entity.hitBoxDef.offsetX + (entity.hitBoxDef.growthX < 0 ? entity.hitBoxDef.growthX : 0), 
            y: entity.y + entity.hitBoxDef.offsetY + (entity.hitBoxDef.growthY < 0 ? -1 * entity.hitBoxDef.growthY : 0),
            width: entity.hitBoxDef.width + Math.abs(entity.hitBoxDef.growthX), 
            height: entity.hitBoxDef.height +(entity.hitBoxDef.growthY)
        };
    }
    if (showHitBox) {
    	if (ctx != null) {
	        ctx.globalAlpha = 0.2;
	        var tempStyle = ctx.fillStyle;
	        ctx.fillStyle = "black";
	        ctx.fillRect(entity.hitBox.x, entity.hitBox.y, entity.hitBox.width, entity.hitBox.height);
	        ctx.fillStyle = tempStyle;
	        ctx.globalAlpha = 1;
    	}
    }
}


fadeChaseMusicOut = function() {
    if (!soundOn) { 
        return; 
    }
    if (chaseMusic.volume > 0) {
        musicFadingOut = true;
    	chaseMusic.volume = Math.max(0, chaseMusic.volume - 0.01);
    }
    if (chaseMusic.volume <= 0) {
        chaseMusic.Volume = 0;
        chaseMusic.pause();
        chaseMusic.currentTime = 0;
        musicFadingOut = false;
    }
}

// Fades the boss music out
fadeBossMusicOut = function() {
    if (!soundOn) { 
        return; 
    }
    if (bossMusic.volume > 0) {
        musicFadingOut = true;
    	bossMusic.volume = Math.max(0, bossMusic.volume - 0.01);
    }
    if (bossMusic.volume <= 0) {
        bossMusic.Volume = 0;
        bossMusic.pause();
        bossMusic.currentTime = 0;
        musicFadingOut = false;
    }
}

// Fades the boss music in
fadeBossMusicIn = function() {
    if (!soundOn) { 
        return; 
    }
    if (!isPlaying(bossMusic)) {
        bossMusic.play();
    }
    if (bossMusic.volume < bossMusicVolume) {
        musicFadingIn = true;
    	bossMusic.volume = Math.min(bossMusicVolume, bossMusic.volume + 0.01);
    }
    if (bossMusic.volume >= bossMusicVolume) {
        bossMusic.Volume = bossMusicVolume;
        musicFadingOut = false;
    }
}

// Fades the climb music out
fadeClimbMusicOut = function() {
    if (!soundOn) { 
        return; 
    }
    if (climbMusic.volume > 0) {
        musicFadingOut = true;
    	climbMusic.volume = Math.max(0, climbMusic.volume - 0.01);
    }
    if (climbMusic.volume <= 0) {
        climbMusic.Volume = 0;
        climbMusic.pause();
        climbMusic.currentTime = 0;
        musicFadingOut = false;
    }
}

// Returns the RGB of a hex color (e.g. #FFFFFF)
function rgb(color) {
    return color.match(/\w\w/g).map(function(b){
    	return parseInt(b,16)
    });
}

// Returns a random color, in hex, of two other hex colors.
function getRandomColor(color1, color2) {
	var rgb1 = color1.match(/\w\w/g).map(function(b){
    	return parseInt(b,16)
    });
	var rgb2 = color2.match(/\w\w/g).map(function(b){
    	return parseInt(b,16)
    });
	var rgb = []; //the returning rgb
	for (var i = 0; i < 3; i++) {
		rgb[i] = rgb1[i] + Math.random()*(rgb2[i]-rgb1[i]) | 0;
	}
	return '#' + rgb
		.map(function(n){ return n.toString(16) })
	    .map(function(s){ return "00".slice(s.length)+s}).join(''); 
}

// Returns whether or not the entity is on the screen
function isOnScreen(entity) {
	return (entity.x + entity.hitBoxDef.width >= entity.game.liveCamera.x - 50 && entity.x <= entity.game.liveCamera.x + entity.game.liveCamera.width + 50
			&& entity.y >= entity.game.liveCamera.y -50 && entity.y <= entity.game.liveCamera.y + entity.game.liveCamera.height + 50);
}

// Returns whether or not the entity is NEARBY the screen
function isNearbyScreen(entity) {
	return (entity.x + entity.hitBoxDef.width >= entity.game.liveCamera.x - 250 && entity.x <= entity.game.liveCamera.x + entity.game.liveCamera.width + 250
			&& entity.y >= entity.game.liveCamera.y - 250 && entity.y <= entity.game.liveCamera.y + entity.game.liveCamera.height + 250);
}

// Returns whether or not the entity is on the screen in terms of X only
function readyToMove(entity) {
	return (entity.x >= entity.game.liveCamera.x - 50 && entity.x <= entity.game.liveCamera.x + entity.game.liveCamera.width);
}

function onYBoundary(entity) {
	return entity.y >= entity.game.liveCamera.y && entity.y - entity.hitBox.height <= entity.game.liveCamera.y + entity.game.liveCamera.height
}

function addScore(game, amount) {
    if (mode === "easy") {
		amount /= 2;
	}
	if (mode === "medium") {
		amount *= 3 / 4;
	}
	game.score += Math.round(amount);
}

function energyBarFlash(game) {
	var x = game.UI.staminaX;
	var y = game.UI.staminaY + game.UI.globalY;
	var width = game.UI.staminaWidth;
	var height = game.UI.staminaHeight;
	var fullParticle = new Particle(PART_SECONDARY, x + 71, y + 4, 
			0, 0, 0, 0, 0, 0, 0, 5, 0, 30, 1, 0, false, game);
	fullElement = new SquareElement(width, height, "#d9fafc", "#d9fafc");
	fullParticle.other = fullElement;
	fullParticle.highPriority = 3;
	game.addEntity(fullParticle);
}


function addEnergy(game, amount) {
	//amount *= 10;
	var x = game.UI.staminaX;
	var y = game.UI.staminaY + game.UI.globalY;
	var width = game.UI.staminaWidth;
	var height = game.UI.staminaHeight;
	if (game.player1.currentStamina + amount < 0) {
		game.player1.currentStamina = 0;
		applyDamage(game.player1.x, game.player1.y, game, Math.abs(amount), game.player1);
		playSound(drownHurtSound);
	} else if (amount < 0) {
		game.player1.currentStamina += amount;
	}
	if (game.player1.currentStamina < game.player1.maxStamina && amount > 0) {
		var oldStamina = game.player1.currentStamina;
		game.player1.currentStamina += amount;
		if (game.player1.currentForm >= FORM_ANGLER && oldStamina <= game.player1.maxStamina && game.player1.currentStamina >= game.player1.maxStamina) {
			playSound(energyMaxSound);
			game.player1.currentStamina = game.player1.maxStamina;
			for (var i = 0; i < 50; i++) {
				var newParticle = new Particle(PART_SECONDARY, x + Math.random() * width, y + Math.random() * height, 
						-2, 2, -2, 2, 0, 0.1, 0, 0, 0, 50, .75, .15, true, game);
				element = new SquareElement(10 + Math.random() * 10, 10 + Math.random() * 10, "#a6f9ff", "#6ae2eb");
				newParticle.other = element;
				newParticle.highPriority = 3;
				game.addEntity(newParticle);
			}
			energyBarFlash(game);
		}
	}
}

function getDistance(x1, y1, x2, y2) {
	var dx = x2 - x1;
	var dy = y2 - y1;
	var dxSquared = Math.pow(dx, 2);
	var dySquared = Math.pow(dy, 2);
	var sum = dxSquared + dySquared;
	return Math.sqrt(sum);
}

// Plays the given audio
function playSound(audio) {
    if (!soundOn) {
        return;
    }
	if (audio.volume === 1) //default volume
		audio.volume = 0.3;
    audio.currentTime = 0;
    audio.play();
}

// Plays the given audio
function playSoundProx(game, source, audio) {
    if (!soundOn) {
        return;
    }
	audio.volume = 0.1;
	var dist = getDistance(game.player1.x + game.player1.hitBoxDef.offsetX + game.player1.hitBoxDef.width / 2, game.player1.y + game.player1.hitBoxDef.offsetY + game.player1.hitBoxDef.height / 2, 
		source.x, source.y);
	var mult = 1 - dist / 500;
	//console.log("distance: "+ dist + "; mult: " + mult);
	audio.volume = audio.volume * Math.max(0, mult);
    audio.currentTime = 0;
    audio.play();
}
function applyDamage(x, y, game, damage, victim) {
	var displacementX = victim.displacementX || 0;
	var displacementY = victim.displacementY || 0;
	var damageParticle = new Particle(TEXT_PART, x + victim.hitBoxDef.width / 2 + victim.hitBoxDef.offsetX + displacementX, y + victim.hitBoxDef.offsetY + displacementY, 0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, game);
	var color = "white";
	if (victim.isPlayer) {
		color = "red";
		if (game.player1.currentHealth - damage <= 0) {
			game.player1.dead = true;
			handleDie(game);
		}
	} else {
		victim.hurtTimer = 5;
		if (victim.maxHealth < 80)
			game.addEntity(new Particle(IMG_PART, x + displacementX, y + displacementY, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10, 0.5, 0, false, game, victim.currentAnimation));
	}
	var damageText = new TextElement("", "Lucida Console", 25, color, "black");
	victim.currentHealth -= damage;
	damageText.text = damage;
	damageParticle.other = damageText;
	if (damage > 0)
		game.addEntity(damageParticle);
}

/**
    Animation
*/

// Draws the frame for an animation
Animation.prototype.drawFrame = function (tick, ctx, x, y, scaleBy, linger, tint) {
	var linger = linger || false;
    var scale = scaleBy || 1;
	var tint = tint || null;
    this.elapsedTime += tick;
    if (this.loop && this.isDone()) {
        this.elapsedTime = 0;
    } else if (this.isDone() && !linger) {
        return;
    }
    var index = this.reverse ? this.frames - this.currentFrame() - 1 : this.currentFrame();
    var vindex = 0;
    if (linger && index >= this.frames) { // Stay on the last frame
        index = this.frames - 1;
    }
    if ((index + 1) * this.frameWidth + this.startX > this.spriteSheet.width) {
        index -= Math.floor((this.spriteSheet.width - this.startX) / this.frameWidth);
        vindex++;
    }
    while ((index + 1) * this.frameWidth > this.spriteSheet.width) {
        index -= Math.floor(this.spriteSheet.width / this.frameWidth);
        vindex++;
    }

    var locX = x;
    var locY = y;
    var offset = vindex === 0 ? this.startX : 0;
	
	ctx.drawImage(this.spriteSheet,
			  index * this.frameWidth + offset, vindex * this.frameHeight + this.startY,  // source from sheet
			  this.frameWidth, this.frameHeight,
			  locX, locY,
			  this.frameWidth * scale,
			  this.frameHeight * scale);
				  
				  
	/*if (tint !== null) {
		var buffer = document.createElement('canvas');
		var rawImage = this.spriteSheet;
        buffer.width = rawImage.width;
        buffer.height = rawImage.height;
        bx = buffer.getContext('2d');

        // fill offscreen buffer with the tint color
        bx.fillStyle = tint;
        bx.fillRect(0,0,buffer.width,buffer.height);
		bx.globalCompositeOperation = "destination-atop";
		ctx.globalAlpha = 0.2;
		ctx.drawImage(buffer,
					  index * this.frameWidth + offset, vindex * this.frameHeight + this.startY,  // source from sheet
					  this.frameWidth, this.frameHeight,
					  locX, locY,
					  this.frameWidth * scale,
					  this.frameHeight * scale);
	}*/
	
   /*var imageData = ctx.getImageData(gameEngine.liveCamera.x, gameEngine.liveCamera.y,
    		gameEngine.liveCamera.x + gameEngine.liveCamera.width, gameEngine.liveCamera.y + gameEngine.liveCamera.height);
    var data = imageData.data;
    for (var i = 0; i < data.length; i += 4) {
    	data[i]     = 255 - data[i];     // red
		data[i + 1] = 255 - data[i + 1]; // green
		data[i + 2] = 255 - data[i + 2]; // blue
	}
	ctx.putImageData(imageData, 0, 0);*/
};

// Returns the current frame of an animation
Animation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
};

// Returns whether or not the animation is done
Animation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
};

// Returns whether or not the animation is done
Animation.prototype.restart = function () {
    this.elapsedTime = 0;
};

/**
    Background
*/

function Background(game) {
    Entity.call(this, game, 0, 0);
}
Background.prototype = new Entity();
Background.prototype.constructor = Background;
Background.prototype.update = function () {
};
Background.prototype.draw = function (ctx) {
	for (var i = 0; i < 30; i++) {
		ctx.drawImage(ASSET_MANAGER.getAsset("./img/Background.png"), -2400 + i * 800, 0);
	}
    //ctx.drawImage(ASSET_MANAGER.getAsset("./img/Misc/tree.png"), 1500, -200);
    Entity.prototype.draw.call(this);
};

/**
    UI (UI ID)
*/

function UI(game) {
    // Number Variables
    this.gameOverTransparency = 0;  
    this.barChangingSpeed = 1;  
    
    // Bottom
	this.bottomX = 0;
	this.bottomY = 380;
	this.bottomWidth = 800;
	this.bottomHeight = 120;
    // Player Portrait
	this.portraitX = 10;
	this.portraitY = this.bottomY + 10;
	this.portraitWidth = 100;
	this.portraitHeight = 100;
    // Player Health Bar
	this.bar1X = this.portraitX + this.portraitWidth - 20;
	this.bar1Y = this.portraitY + 25;
	this.bar1Width = 150;
	this.bar1Height = 30;
	this.healthX = this.bar1X + 5;
	this.healthY = this.bar1Y + 11;
	this.healthWidth = this.bar1Width - 8;
	this.healthHeight = this.bar1Height - 21;
    // Player Stamina Bar
	this.bar2X = this.portraitX + this.portraitWidth - 20;
	this.bar2Y = this.portraitY + 45;
	this.bar2Width = 150;
	this.bar2Height = 30;
	this.staminaX = this.bar2X + 5;
	this.staminaY = this.bar2Y + 11;
	this.staminaWidth = this.bar2Width - 8;
	this.staminaHeight = this.bar2Height - 21;
    // Boss Portrait
    this.bossPortraitX = 280;
    this.bossPortraitY = 20;
    this.bossPortraitWidth = 80;
    this.bossPortraitHeight = 80;
    // Boss Health Bar
    this.bossBarX = this.bossPortraitX + this.bossPortraitWidth - 12;
    this.bossBarY = this.bossPortraitY + 15;
    this.bossBarWidth = 400;
    this.bossBarHeight = 50;
    this.bossHealthX = this.bossBarX + 10;
    this.bossHealthY = this.bossBarY + 18;
    this.bossHealthWidth = this.bossBarWidth - 20;
    this.bossHealthHeight = this.bossBarHeight - 35;
	
	this.scoreX = this.portraitX;
	this.scoreY = 485;
	this.highPriority = 1;
	this.ougiBar = new Animation(ASSET_MANAGER.getAsset("./img/UI/OugiBar.png"), 0, 0, 142, 9, .05, 44, true, false, 0, 0);
	this.ougiBarActive = new Animation(ASSET_MANAGER.getAsset("./img/UI/OugiBarActive.png"), 0, 0, 142, 9, .05, 44, true, false, 0, 0);
	
	this.globalX = 0;
	this.globalY = -380; //move the player UI content only (health bar and portrait)
    
	Entity.call(this, game, 0, 0);
}

UI.prototype = new Entity();
UI.prototype.constructor = UI;


UI.prototype.update = function () {
    /*if (this.game.currentPhase === 0) {
        fadeBossMusicIn();
        startMusic.pause();
    } else if (this.game.currentPhase === 1) {
        fadeBossMusicOut();
    } else if (this.game.currentPhase === 2 && this.game.currentBoss.attackEnabled) {
        fadeBossMusicIn();
    } else if (this.game.currentPhase === 3) {
        fadeBossMusicOut();
    }*/
    updatePlayerResources(this.game.player1, this);
    updateBossResources(this.game.currentBoss, this);
};



UI.prototype.draw = function (ctx) { //draw ui
    ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/BarBack.png"), this.bar1X + this.game.liveCamera.x, this.bar1Y + this.game.liveCamera.y + this.globalY, this.bar1Width, this.bar1Height);
    ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/HealthBarLight.png"), this.healthX + this.game.liveCamera.x, this.globalY + this.healthY + this.game.liveCamera.y, this.healthWidth * (this.game.player1.currentHealthTemp / this.game.player1.maxHealth), this.healthHeight);
    ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/HealthBar.png"), this.healthX + this.game.liveCamera.x, this.globalY + this.healthY + this.game.liveCamera.y, this.healthWidth * (this.game.player1.currentHealth / this.game.player1.maxHealth), this.healthHeight);
    ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/BarBack.png"), this.bar2X + this.game.liveCamera.x, this.globalY + this.bar2Y + this.game.liveCamera.y, this.bar2Width, this.bar2Height);
	
    ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/StaminaBarLight.png"), this.staminaX + this.game.liveCamera.x, this.globalY + this.staminaY + this.game.liveCamera.y, this.staminaWidth * (this.game.player1.currentStaminaTemp / this.game.player1.maxStamina), this.staminaHeight);
    ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/StaminaBar.png"), this.staminaX + this.game.liveCamera.x, this.globalY + this.staminaY + this.game.liveCamera.y, this.staminaWidth * (this.game.player1.currentStamina / this.game.player1.maxStamina), this.staminaHeight);
	if (this.game.player1.ultiTimer > 0) {
		this.ougiBarActive.drawFrame(this.game.clockTick, ctx, this.staminaX + this.game.liveCamera.x, this.globalY + this.staminaY + this.game.liveCamera.y, 1, 1);
	} else if (this.game.player1.currentStamina >= this.game.player1.maxStamina) {
		this.ougiBar.drawFrame(this.game.clockTick, ctx, this.staminaX + this.game.liveCamera.x, this.globalY + this.staminaY + this.game.liveCamera.y, 1, 1);
	}
    ctx.drawImage(ASSET_MANAGER.getAsset("./img/Jelly/JellyPortrait.png"), this.portraitX + this.game.liveCamera.x, this.globalY + this.portraitY + this.game.liveCamera.y, this.portraitWidth, this.portraitHeight);
    var tempColor = ctx.fillStyle;
    ctx.font = "30px Calibri";
    ctx.fillStyle = "white";
    ctx.font = "20px Calibri";
    //ctx.fillText("Moon Jelly  "/* + Math.floor(this.game.player1.currentHealth) + " / " + this.game.player1.maxHealth*/,this.portraitX + 90 + this.game.liveCamera.x, this.globalY + this.portraitY + 90 + this.game.liveCamera.y);
    ctx.fillText("Score: " + this.game.score, this.scoreX + this.game.liveCamera.x, this.scoreY + this.game.liveCamera.y);
    if (this.game.currentPhase === 2) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/BarBack.png"), this.bossBarX + this.game.liveCamera.x, this.bossBarY + this.game.liveCamera.y, this.bossBarWidth, this.bossBarHeight);
        ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/HealthBarLight.png"), this.bossHealthX + this.game.liveCamera.x, this.bossHealthY + this.game.liveCamera.y, this.bossHealthWidth * (this.game.currentBoss.currentHealthTemp / this.game.currentBoss.maxHealth), this.bossHealthHeight);
        ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/HealthBar.png"), this.bossHealthX + this.game.liveCamera.x, this.bossHealthY + this.game.liveCamera.y, this.bossHealthWidth * (this.game.currentBoss.currentHealth / this.game.currentBoss.maxHealth), this.bossHealthHeight);
    	//ctx.drawImage(ASSET_MANAGER.getAsset("./img/Enemy/brandong_portrait.png"), this.bossPortraitX + this.game.liveCamera.x, this.bossPortraitY + this.game.liveCamera.y, this.bossPortraitWidth, this.bossPortraitHeight);
        ctx.fillText("Demon Kelp                      " + this.game.currentBoss.currentHealth + " / " + this.game.currentBoss.maxHealth, this.bossPortraitX + 80 + this.game.liveCamera.x, 45 + this.game.liveCamera.y);
    }
    if (this.game.currentPhase === 7 || this.game.currentPhase === 8) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/BarBack.png"), this.bossBarX + this.game.liveCamera.x, this.bossBarY + this.game.liveCamera.y, this.bossBarWidth, this.bossBarHeight);
        ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/HealthBarLight.png"), this.bossHealthX + this.game.liveCamera.x, this.bossHealthY + this.game.liveCamera.y, this.bossHealthWidth * (this.game.currentBoss.currentHealthTemp / this.game.currentBoss.maxHealth), this.bossHealthHeight);
        ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/HealthBar.png"), this.bossHealthX + this.game.liveCamera.x, this.bossHealthY + this.game.liveCamera.y, this.bossHealthWidth * (this.game.currentBoss.currentHealth / this.game.currentBoss.maxHealth), this.bossHealthHeight);
    	ctx.drawImage(ASSET_MANAGER.getAsset("./img/Enemy/brandong_portrait.png"), this.bossPortraitX + this.game.liveCamera.x, this.bossPortraitY + this.game.liveCamera.y, this.bossPortraitWidth, this.bossPortraitHeight);
        ctx.fillText("Brandong                        " + this.game.currentBoss.currentHealth + " / " + this.game.currentBoss.maxHealth, this.bossPortraitX + 80 + this.game.liveCamera.x, 45 + this.game.liveCamera.y);
    }
    if (this.game.currentPhase === 14) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/BarBack.png"), this.bossBarX + this.game.liveCamera.x, this.bossBarY + this.game.liveCamera.y, this.bossBarWidth, this.bossBarHeight);
        ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/HealthBarLight.png"), this.bossHealthX + this.game.liveCamera.x, this.bossHealthY + this.game.liveCamera.y, this.bossHealthWidth * (this.game.currentBoss.currentHealthTemp / this.game.currentBoss.maxHealth), this.bossHealthHeight);
        ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/HealthBar.png"), this.bossHealthX + this.game.liveCamera.x, this.bossHealthY + this.game.liveCamera.y, this.bossHealthWidth * (this.game.currentBoss.currentHealth / this.game.currentBoss.maxHealth), this.bossHealthHeight);
    	ctx.drawImage(ASSET_MANAGER.getAsset("./img/Enemy/alpha_portrait.png"), this.bossPortraitX + this.game.liveCamera.x, this.bossPortraitY + this.game.liveCamera.y, this.bossPortraitWidth, this.bossPortraitHeight);
        ctx.fillText("Alpha                          " + this.game.currentBoss.currentHealth + " / " + this.game.currentBoss.maxHealth, this.bossPortraitX + 80 + this.game.liveCamera.x, 45 + this.game.liveCamera.y);
    }
    /*if (this.game.currentPhase === 2 || this.game.currentPhase === 14 || this.game.currentPhase === 21) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/BarBack.png"), this.bossBarX + this.game.liveCamera.x, this.bossBarY + this.game.liveCamera.y, this.bossBarWidth, this.bossBarHeight);
        ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/HealthBarLight.png"), this.bossHealthX + this.game.liveCamera.x, this.bossHealthY + this.game.liveCamera.y, this.bossHealthWidth * (this.game.currentBoss.currentHealthTemp / this.game.currentBoss.maxHealth), this.bossHealthHeight);
        ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/HealthBar.png"), this.bossHealthX + this.game.liveCamera.x, this.bossHealthY + this.game.liveCamera.y, this.bossHealthWidth * (this.game.currentBoss.currentHealth / this.game.currentBoss.maxHealth), this.bossHealthHeight);
    	ctx.drawImage(ASSET_MANAGER.getAsset("./img/Malzahar/MalzaharPortrait.png"), this.bossPortraitX + this.game.liveCamera.x, this.bossPortraitY + this.game.liveCamera.y, this.bossPortraitWidth, this.bossPortraitHeight);
        ctx.fillText("Malzahar                      " + this.game.currentBoss.currentHealth + " / " + this.game.currentBoss.maxHealth,this.bossPortraitX + 80 + this.game.liveCamera.x,45 + this.game.liveCamera.y);
    }*/
    if (!this.game.player1.dead) {
        //ctx.fillText("Homecoming", this.game.player1.x + 5,this.game.player1.y + 0);
    }
    if (this.game.currentPhase === 1) {
        ctx.fillText("Brandong", this.game.currentBoss.x + 50, this.game.currentBoss.y - 5);
    }
    /*if (this.game.currentPhase === 2 || this.game.currentPhase === 14 || this.game.currentPhase === 21) {
        ctx.fillText("Malzahar", this.game.currentBoss.x + 10, this.game.currentBoss.y - 15);
    }*/
    ctx.fillStyle = tempColor;
    if (this.game.player1.dead) {
        if (this.gameOverTransparency < 1) {
            this.gameOverTransparency += 0.025;
            ctx.globalAlpha = this.gameOverTransparency;
        }
        ctx.font = "100px Calibri";
        ctx.fillStyle = "white";
        ctx.textAlign = "center"; 
        ctx.fillText("Defeat",400 + this.game.liveCamera.x,250 + this.game.liveCamera.y);
        ctx.font = "30px Calibri";
		ctx.fillText("Continue? Press [R] to be revived",400 + this.game.liveCamera.x,350 + this.game.liveCamera.y);
        ctx.globalAlpha = 1.0;
    } else if (this.game.currentBoss !== null && this.game.currentBoss.dead) {
        if (this.gameOverTransparency < 1) {
            this.gameOverTransparency += 0.025;
            ctx.globalAlpha = this.gameOverTransparency;
        }
        ctx.font = "100px Calibri";
        ctx.fillStyle = "white";
        ctx.textAlign = "center"; 
        if (this.game.currentPhase === 0) {
	        this.game.cameraLock = false;
	        this.game.camera.maxX = 800;
	        this.game.currentPhase = 1;
     		this.game.addEntity(new Particle(IMG_FLASH_PART, 600, 250, 0, 0, 0, 0, 0, 0, 0, 500, 0, 0, 1, 0, false, this.game,
     				new Animation(ASSET_MANAGER.getAsset("./img/ArrowGoRight.png"), 0, 0, 269, 83, 1, 1, true, false, 0, 0)));
        }
        ctx.globalAlpha = 1.0;
    }
    if (this.game.gameWon) {
        if (this.gameOverTransparency < 1) {
            this.gameOverTransparency += 0.025;
            ctx.globalAlpha = this.gameOverTransparency;
        }
        if (!isPlaying(victory)) {
            playSound(victory);
        }
        ctx.font = "100px Calibri";
        ctx.fillStyle = "white";
        ctx.textAlign = "center"; 
        ctx.fillText("Victory!",400 + this.game.liveCamera.x,250 + this.game.liveCamera.y);
        ctx.font = "50px Calibri";
		ctx.fillText("More content soonTM",400 + this.game.liveCamera.x,350 + this.game.liveCamera.y);
        ctx.globalAlpha = 1.0;        
    }
    if (this.game.currentPhase >= 6 && this.game.currentPhase <= 10 || this.game.currentPhase === 17) {
        var randomness = Math.random() * 100;
        if (randomness <= 10) {
            var randomSize = 2 + Math.random() * 13;
            var randomPosition = (800 - randomSize) + Math.random() * (801 + randomSize);
            var particle = new Particle(SHAPE_PART,
                                            randomPosition,
                                            this.game.camera.y - 100, 
                                            0, 0, -3, -5, 0.3, 0, 0, 100, 0, 10, 1, 0, true, this.game);
                                    var element = new SquareElement(randomSize, randomSize, "#2A2349", "#272144");
                                    particle.other = element;
                                    this.game.addEntity(particle);
        }
	}
    if (soundOn) {
        document.getElementById("image").src = "img/UI/MusicOn.png";
        startMusic.volume = 0.1;
        forestMusic.volume = 0.1;
        chaseMusic.volume = 0.1;
        brandongMusic.volume = 0.1;
        bossMusic.volume = 0.1;
		crisisMusic.volume = 0.1;
		part2Music.volume = 0.1;
    } else {
        document.getElementById("image").src = "img/UI/MusicOff.png";
        startMusic.volume = 0;
        forestMusic.volume = 0;
        chaseMusic.volume = 0;
        brandongMusic.volume = 0;
        bossMusic.volume = 0;
		crisisMusic.volume = 0;
		part2Music.volume = 0;
        
    }
    Entity.prototype.draw.call(this);	
};

function musicControl() {
    soundOn = !soundOn;
    document.getElementById("gameWorld").focus();
};

function easyMode() {
    mode = "easy";
    gameStarted = true;
    
    gameEngine.player1.maxHealth = 200;
    gameEngine.player1.currentHealth = 200;
    gameEngine.player1.currentHealthTemp = 200;
    gameEngine.player1.staminaRegen = 0; //0.4;
    gameEngine.player1.healthRegen = 0.06;
    
    var elem = document.getElementById("difficulty");
    elem.parentNode.removeChild(elem);
    elem = document.getElementById("easyButton");
    elem.parentNode.removeChild(elem);
    elem = document.getElementById("mediumButton");
    elem.parentNode.removeChild(elem);
    elem = document.getElementById("hardButton");
    elem.parentNode.removeChild(elem);
    document.getElementById("gameWorld").focus();
};

function mediumMode() {
    mode = "medium";
    gameStarted = true;
    
    gameEngine.player1.maxHealth = 150;
    gameEngine.player1.currentHealth = 150;
    gameEngine.player1.currentHealthTemp = 150;
    gameEngine.player1.staminaRegen = 0; //0.3;
    gameEngine.player1.healthRegen = 0.03;
    var elem = document.getElementById("difficulty");
    elem.parentNode.removeChild(elem);
    elem = document.getElementById("easyButton");
    elem.parentNode.removeChild(elem);
    elem = document.getElementById("mediumButton");
    elem.parentNode.removeChild(elem);
    elem = document.getElementById("hardButton");
    elem.parentNode.removeChild(elem);
    document.getElementById("gameWorld").focus();
};

function hardMode() {
    mode = "hard";
    gameStarted = true;
    var elem = document.getElementById("difficulty");
    elem.parentNode.removeChild(elem);
    /*elem = document.getElementById("easyButton");
    elem.parentNode.removeChild(elem);
    elem = document.getElementById("mediumButton");
    elem.parentNode.removeChild(elem);*/
    elem = document.getElementById("hardButton");
    elem.parentNode.removeChild(elem);
    document.getElementById("gameWorld").focus();
};

// Updates given player's resources
function updatePlayerResources(entity, ui) {
    if (entity.currentHealth < 0) {
        entity.currentHealth = 0;
    }
    if (entity.currentHealthTemp > entity.currentHealth) {
        entity.currentHealthTemp -= ui.barChangingSpeed;
    }
    if (Math.abs(entity.currentHealthTemp - entity.currentHealth) <= ui.barChangingSpeed) {
        entity.currentHealthTemp = entity.currentHealth;
    }
    if (entity.currentHealth > entity.currentHealthTemp) {
        entity.currentHealthTemp = entity.currentHealth;
    }
    if (entity.currentHealth < entity.maxHealth) {
        entity.currentHealth += entity.healthRegen;
    }
    
    if (entity.currentStaminaTemp > entity.currentStamina) {
        entity.currentStaminaTemp -= ui.barChangingSpeed;
    }
    if (Math.abs(entity.currentStaminaTemp - entity.currentStamina) <= ui.barChangingSpeed) {
        entity.currentStaminaTemp = entity.currentStamina;
    }
    if (entity.currentStamina > entity.currentStaminaTemp) {
        entity.currentStaminaTemp = entity.currentStamina;
    }
    if (entity.currentStamina === entity.currentStaminaTemp && entity.currentStamina < entity.maxStamina) {
        entity.currentStamina += entity.staminaRegen;
        entity.currentStaminaTemp = entity.currentStamina;
        if (entity.currentStamina > entity.maxStamina) {
            entity.currentStamina = entity.maxStamina;
            entity.currentStaminaTemp = entity.maxStamina;
        }
    }  
}

// Updates Boss Resources
function updateBossResources(entity, ui) {
	if (entity != null) {
		if (entity.currentHealth < 0) {
			entity.currentHealth = 0;
		}
		if (entity.currentHealthTemp > entity.currentHealth && entity.game.player1.ultiTimer === 0) {
			entity.currentHealthTemp -= ui.barChangingSpeed * 5;
		}
		if (Math.abs(entity.currentHealthTemp - entity.currentHealth) <= ui.barChangingSpeed * 5) {
			entity.currentHealthTemp = entity.currentHealth;
		}
		if (entity.currentHealth > entity.currentHealthTemp) {
			entity.currentHealthTemp = entity.currentHealth;
		}
	}
}

/**
    Map
*/

function Map(game) {
    // Starting Platforms
    this.platforms = [];
    var startingPlatforms = [
	];
	for (i = 0; i < startingPlatforms.length; i++) {
		var p = startingPlatforms[i];
		p.y -= 300;
		this.platforms.push(p);
	}
    
    Entity.call(this, game, 0, 0);  
}

Map.prototype = new Entity();
Map.prototype.constructor = UI;

Map.prototype.update = function () {
};

Map.prototype.draw = function (ctx) {
    this.platforms.forEach(function(currentPlatform) {
        currentPlatform.draw(ctx);
    });
    Entity.prototype.draw.call(this);
}

function Bullet(game, x, y, vspeed, hspeed, type, specialId) {
	this.step = 0;
	this.x = x;
	this.y = y;
	this.vspeed = vspeed;
	this.hspeed = hspeed;
	this.type = type;
	this.specialId = specialId || 0;
	this.animation = null;
	this.mode = 0;
	this.haccel = 0;
	this.vaccel = 0;
	
    this.targetHit = []; // The targets you've currently hit with your attack
	
    Entity.call(this, game, x, y);
    if (type === 1 || type === 4) { //star bullet
    	this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Particle/star_bullet.png"), 0, 0, 38, 38, 0.03, 20, true, false, 0, 0);
		this.hitBoxDef = {
			width: 32, height: 32, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
    } else if (type === 3) { //spiral bullet (ulti)
    	this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Particle/star_bullet_2.png"), 0, 0, 38, 38, 0.02, 30, true, false, 0, 0);
		this.hitBoxDef = {
			width: 32, height: 32, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
    } else if (type === 2) { //petal torrent blast
    	//this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Particle/star_bullet.png"), 0, 0, 38, 38, 0.03, 20, true, false, 0, 0);
		
		this.hitBoxDef = {
			width: 128, height: 128, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
    }
    drawHitBox(this);
}

Bullet.prototype.update = function () {
	// Only update when in the screen
	this.step++;
	var that = this;
	var dissipate = false;
	if (isOnScreen(this)) {
	    drawHitBox(this);
		if (this.type === 3) { //spiral bullet
			if (this.step % 1 === 0) {
				var newParticle = new Particle(PART_SECONDARY, this.x + this.hitBoxDef.width / 2, this.y + this.hitBoxDef.height / 2, 
						-6, -4, -1, 1, 0, 0, 0, 15, 0, 15, .5, .2, true, this.game);
				var element = new CircleElement(10 + Math.random() * 4, "#dbf6ff", "#abf9ff");
				newParticle.other = element;
				this.game.addEntity(newParticle);
			}
			if (this.vaccel === 0 && this.step <= 1) {
				if (this.vspeed > 0) {
					this.vaccel = -0.5;
					this.mode = 2;
				} else {
					this.vaccel = 0.5;
					this.mode = 1;
				}
			}
			if (this.mode === 1 && this.vspeed >= 5) {
				this.vaccel = -0.5;
				this.mode = 2;
			} else if (this.mode === 2 && this.vspeed <= -5){
				this.vaccel = 0.5;
				this.mode = 1;
			}
		}
		if (this.type === 2) { //petal torrent
			if (this.step % 5 === 0) {
				this.vspeed *= -1;
			}
		}
		this.hspeed += this.haccel;
		this.vspeed += this.vaccel;
		this.x += this.hspeed;
		this.y += this.vspeed;
		if (this.type === 4) { //quiver bullet
			if (this.vspeed > 0)
				this.vspeed -= 0.2;
			if (this.vspeed < 0)
				this.vspeed += 0.2;
		}
		this.game.entities.forEach(function(entity) {
			if (readyToMove(entity) && entity.attackable && that.targetHit.indexOf(entity) === -1) {
				if (checkCollision(that, entity)) {
					that.targetHit.push(entity);
					if (that.type === 1) { //star bullet
						applyDamage(entity.x, entity.y, that.game, 5, entity);
						dissipate = true;
						addEnergy(that.game, 0.5);
					} else if (that.type === 2) { //petal torrent
						applyDamage(entity.x, entity.y, that.game, 9999, entity);
						playSound(airHitSound);
						addEnergy(that.game, Math.min(5, entity.maxHealth / 10));
					} else if (that.type === 3) { //spiral bullet
						applyDamage(entity.x, entity.y, that.game, 8, entity);
						dissipate = true;
					}
				}
			}
		});
		if (this.type === 2) { //petal torrent
			for (var i = 0; i < 3; i++) {
				var newParticle = new Particle(PART_SECONDARY, this.x + 40, this.y + 41, 
						-5, 5, -2.5, 2.5, 0, 0, 20, 0, 0, 30, .7, .2, true, this.game);
				var element = new CircleElement(20 + 10 * (3 - i) + Math.random() * 6, "#c9fffc", "#fff9ab");
				newParticle.other = element;
				newParticle.acceleration = 0.1 * i;
				newParticle.grow = true;
				this.game.addEntity(newParticle);
			}
		}
	} else {
	    this.removeFromWorld = true;
	}
	if (dissipate) {
	    this.removeFromWorld = true;
		if (this.type === 1) { //star bullet
			this.game.addEntity(new Particle(IMG_PART, this.x, this.y, 0, 0, 0, 0, 0, 0, 0, 5, 0, 30, 1, 0, false, this.game,
					new Animation(ASSET_MANAGER.getAsset("./img/Particle/white_ring.png"), 0, 0, 32, 32, 0.03, 10, true, false, 0, 0)));
            playSound(shotHitSound);
		} else if (this.type === 2) {
			this.game.addEntity(new Particle(IMG_PART, this.x, this.y, 0, 0, 0, 0, 0, 0, 0, 5, 0, 30, 1, 0, false, this.game,
					new Animation(ASSET_MANAGER.getAsset("./img/Particle/white_ring.png"), 0, 0, 128, 128, 0.03, 10, true, false, 0, 0)));
            playSound(shotHitSound);			
		} else if (this.type === 3) { //star bullet
			this.game.addEntity(new Particle(IMG_PART, this.x, this.y, 0, 0, 0, 0, 0, 0, 0, 5, 0, 30, 1, 0, false, this.game,
					new Animation(ASSET_MANAGER.getAsset("./img/Particle/white_ring.png"), 0, 0, 32, 32, 0.03, 10, true, false, 0, 0)));
            playSound(beep);
            playSound(shotHitSound);
		}
	}
    Entity.prototype.update.call(this);
};

Bullet.prototype.draw = function (ctx) { 
	if (this.animation != null) 
		this.animation.drawFrame(this.game.clockTick, ctx, this.x + this.animation.offsetX,
				this.y + this.animation.offsetY, 1, 1);
    Entity.prototype.draw.call(this);
}

/**
    TextBox (TextBox Id)
*/

function TextBox(game, image, text) {
	this.image = image;
	this.text = text;
	this.showText = "";
	this.progress = 0;
	this.step = 0;
	this.life = -1;
	this.nextText = null;
    Entity.call(this, game, 0, 0);
}

function TextBox(game, image, text, pause) {
	this.image = image;
	this.text = text;
	this.pause = pause;
	this.showText = "";
	this.progress = 0;
	this.step = 0;
	this.life = -1;
	this.nextText = null;
    Entity.call(this, game, 0, 0);
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
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

TextBox.prototype.update = function() {
	if (this.pause)
		this.game.pauseTime = 2;
	this.step++;
	if (this.life > 0) {
		this.life--;
		if (this.life <= 0) {
			this.removeFromWorld = true;
			if (this.nextText != null)
				this.game.addEntity(this.nextText);
		}
	}
	if (this.step % this.game.textSpeed === 0) {
		this.progress++;
		if (this.progress >= this.text.length) {
			this.showText = this.text;
			if (this.life === -1) {
				this.life = 100;
			}
		} else {
			this.showText = this.text.substring(0, this.progress);
			var c = this.showText.charAt(this.progress - 1);
			if (c === '?' || (c.toLowerCase() != c.toUpperCase())) { // It's a character
                if (soundOn) {
                    var sound = new Audio("./sounds/chat.wav");
                    sound.volume = 0.05;
                    if (this.image == null || this.image.indexOf("Jelly") !== -1) {
                        sound = new Audio("./sounds/chat2.wav");
                        sound.volume = 0.05;
                    }
                    sound.play();
                }
            }
		}
	}
    Entity.prototype.update.call(this);
}

TextBox.prototype.draw = function(ctx) {
    var tempColor = ctx.fillStyle;
    var trueWidth = 220;
    var trueHeight = 64;
	if (this.image != null) {
		ctx.fillStyle = "#452a84";
		ctx.globalAlpha = 0.5;
		ctx.fillRect(285 + 64 + this.game.liveCamera.x, 420 + this.game.liveCamera.y, trueWidth, trueHeight);
		ctx.fillStyle = tempColor;
		ctx.globalAlpha = 1;
		ctx.drawImage(ASSET_MANAGER.getAsset("./img/Chat/ChatSquare.png"), 285 + this.game.liveCamera.x, 
				420 + this.game.liveCamera.y, 64, 64);
		ctx.drawImage(ASSET_MANAGER.getAsset(this.image), 285 + this.game.liveCamera.x, 
				420 + this.game.liveCamera.y, 64, 64);
		ctx.font = "13px Lucida Console";
		ctx.textAlign = "left";
		ctx.fillStyle = "black";
		wrapText(ctx, this.showText, 285 + 64 + this.game.liveCamera.x + 12 + 1, 420 + this.game.liveCamera.y + 12 + 1, 196, 20);
		ctx.fillStyle = "white";
		wrapText(ctx, this.showText, 285 + 64 + this.game.liveCamera.x + 12, 420 + this.game.liveCamera.y + 12, 196, 20);
	} else {
		ctx.fillStyle = "#9dadc4";
		ctx.globalAlpha = 0.5;
		ctx.fillRect(285 + this.game.liveCamera.x, 420 + this.game.liveCamera.y, trueWidth, trueHeight);
		ctx.fillStyle = tempColor;
		ctx.globalAlpha = 1;
		ctx.font = "13px Lucida Console";
		ctx.textAlign = "left";
		ctx.fillStyle = "black";
		wrapText(ctx, this.showText, 285 + this.game.liveCamera.x + 13, 420 + this.game.liveCamera.y + 13, 196, 20);
		ctx.fillStyle = "white";
		wrapText(ctx, this.showText, 285 + this.game.liveCamera.x + 12, 420 + this.game.liveCamera.y + 12, 196, 20);
	}
	
    Entity.prototype.draw.call(this);
}

/**
    Particles
*/

// A shape element which is attached to a particle.
// If the particle.other is not null, the shape is drawn instead of an image.
function SquareElement(width, height, color1, color2) {
	this.width = width;
	this.height = height;
	var color1 = color1;
	var color2 = color2 || null;
	if (color2 != null) {
		this.color = getRandomColor(color1, color2);
	} else {
		this.color = color1;
	}
}

SquareElement.prototype.draw = function(ctx, x, y, sizeScale) {
    var tempColor = ctx.fillStyle;
    var trueWidth = this.width * sizeScale;
    var trueHeight = this.height * sizeScale;
    ctx.fillStyle = this.color;
    ctx.fillRect(x - trueWidth / 2, y - trueHeight / 2, trueWidth, trueHeight);
    ctx.fillStyle = tempColor;
    Entity.prototype.draw.call(this);
}

// A shape element which is attached to a particle.
// If the particle.other is not null, the shape is drawn instead of an image.
function CircleElement(radius, color1, color2) {
	this.radius = radius;
	var color1 = color1;
	var color2 = color2 || null;
	if (color2 != null) {
		this.color = getRandomColor(color1, color2);
	} else {
		this.color = color1;
	}
}

CircleElement.prototype.draw = function(ctx, x, y, sizeScale) {
    var tempColor = ctx.fillStyle;
    var trueRadius = Math.max(0, this.radius * sizeScale);
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(x, y, trueRadius, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.fillStyle = tempColor;
    Entity.prototype.draw.call(this);
}

// A text element which is attached to a particle.
// If the particle.other is not null, the text is drawn instead of an image.
function TextElement(text, font, size, color, shadowColor, offset) {
	this.text = text;
	this.font = font;
	this.size = size;
	this.color = color;
	this.shadowColor = shadowColor || null;
	this.offset = offset || 4;
}

TextElement.prototype.draw = function(ctx, x, y, sizeScale) {
    var tempColor = ctx.fillStyle;
    var trueSize = this.size * sizeScale;
    var trueFont = "" + trueSize + "px " + this.font;
    ctx.textAlign = "center";
    ctx.font = trueFont;
    if (this.shadowColor !== null) {
	    ctx.fillStyle = this.shadowColor;
	    ctx.fillText(this.text, x + this.offset, y + this.offset);
    }
    ctx.fillStyle = this.color;
    ctx.fillText(this.text, x, y);
    ctx.fillStyle = tempColor;
    Entity.prototype.draw.call(this);
	ctx.textAlign = "left";
}

// PARTICLE ID
function Particle(particleId, x, y, minHSpeed, maxHSpeed, minVSpeed, maxVSpeed,
	gravity, friction, width, maxLife, fadeIn, fadeOut, maxAlpha, alphaVariance, shrink, game, anim) {
	this.explodeTime = 0;
	this.particleId = particleId;
	this.GRAVITY_CAP = 30;
	this.animation = anim || null;
	this.hSpeed = maxHSpeed - (Math.random() * (maxHSpeed - minHSpeed));
	this.vSpeed = maxVSpeed - (Math.random() * (maxVSpeed - minVSpeed));
	this.gravity = gravity;
	this.friction = friction; //horizontal friction only
	this.life = 0;
	this.maxLife = maxLife;
	this.fadeIn = fadeIn;
	this.fadeOut = fadeOut;
	this.shrink = shrink;
	this.grow = false;
	this.sizeScale = 1;
	this.absoluteSizeScale = 1;
	this.width = width;
	this.maxAlpha = maxAlpha + Math.random() * (alphaVariance * 2) - alphaVariance;
	this.other = null;
	this.snapEntity = null;
	this.attackId = -1;
	this.acceleration = 0;
	this.direction = "none";
	this.canHit = true;
	this.extra = 0;
	this.textContent = null;
	this.highPriority = 0.1;
	this.hasExploded = false;
	
	this.targetX = null;
	this.targetY = null;
	this.targetSpeed = 0;
	this.converge = false;
	this.convergeMultiplier = 20;
	if (fadeIn > 0) {
		this.alpha = 0;
	} else {
		this.alpha = maxAlpha;
    }
    this.hitBox = {
    	x: this.x - this.width / 2 + this.width, 
		y: this.y - this.width / 2 + this.width,
		width: this.width, 
		height: this.width
	};
	this.overrideHitbox = null;
    Entity.call(this, game, x + Math.random() * (width * 2) - width, y + Math.random() * (width * 2) - width);
}

Particle.prototype = new Entity();
Particle.prototype.constructor = Particle;

Particle.prototype.update = function() {
	if ((this.particleId === BRANDONG_WHIP || this.attackId === BRANDONG_WHIPLINE || this.attackId === BRANDONG_WHIPWALL) && this.game.currentPhase === 9)
		this.removeFromWorld = true;
	if ((this.targetX !== null && this.targetY !== null && this.targetSpeed !== 0) || this.converge) { //assign a speed to chase the target
		var dx = this.targetX - (this.x + this.hitBox.width / 2);
		var dy = this.targetY - (this.y + this.hitBox.height / 2);
		if (this.converge) {
			this.hSpeed = 0;
			this.vSpeed = 0;
			this.gravity = 0;
			this.x += dx / this.convergeMultiplier;
			this.y += dy / this.convergeMultiplier;
			//console.log("CONVERGE TO : " + this.x);
		} else {
			if (Math.abs(dx) > Math.abs(dy)) {
				this.hSpeed = this.targetSpeed;
				this.vSpeed = Math.abs(dy / dx) * this.targetSpeed;
			} else {
				this.vSpeed = this.targetSpeed;	
				this.hSpeed = Math.abs(dx / dy) * this.targetSpeed;
			}
			this.hSpeed = dx > 0 ? this.hSpeed : -1 * this.hSpeed;
			this.vSpeed = dy > 0 ? this.vSpeed : -1 * this.vSpeed;
			this.targetX = null;
			this.targetY = null;
			this.targetSpeed = 0;
		}
		//console.log("hspeed: " + this.hSpeed + "; vspeed: " + this.vSpeed);
	}
	if (this.particleId === IMG_PART) {
		/*this.game.addEntity(new Particle(PART_SECONDARY, this.x + 20, this.y + 20, 3, -3, 3, 0,
			0, 0, 0, 10, 10, 10, 1, 0, true, this.game,
		new Animation(ASSET_MANAGER.getAsset("./img/small_flare.png"), 0, 0, 12, 12, 1, 1, false, false, 0, 0)));*/
	}
	if (this.particleId === IMG_PART && this.attackId == TUNA_CHARGE && this.life % 5 == 0) {
	    var newParticle = new Particle(PART_SECONDARY, this.x + 14, this.y + 14, 
				-2, 2, -2, -2, -0.03, 0.1, 0, 30, 0, 15, .5, .2, true, this.game);
	    var element = new CircleElement(4 + Math.random() * 3, "#1d40a8", "#306085");
	   	newParticle.other = element;
	    this.game.addEntity(newParticle);
		
		if (this.explodeTime > 0) {
			this.explodeTime--;
			for (i = 0; i < 5 + Math.random() * 2; i++) {
			    var newParticle = new Particle(PART_SECONDARY, this.x + 16, this.y + 16, 
						-5, 5, -5, 5, 0, 0, 20, 0, 0, 30, .7, .2, true, this.game);
			    var element = new CircleElement(25 + Math.random() * 6, "#f0eb65", "#cf915b");
			   	newParticle.other = element;
			   	newParticle.acceleration = 0.05;
			   	newParticle.grow = true;
			    this.game.addEntity(newParticle);
			}
		   	this.alpha = 0;
		   	this.vSpeed = 0;
		    if (this.explodeTime === 0)
		    	this.removeFromWorld = true; //-4784
		} else if ((!this.canHit || this.y > this.game.player1.ground) && this.explodeTime === 0) {
	    	this.life = 0;
	    	this.explodeTime = 5;
			this.vSpeed = 0;
	    	playSoundProx(this.game, this, explosionSound);
	    	/*this.game.cameraShakeTime = 20;
	    	this.game.cameraShakeAmount = 40;
	    	this.game.cameraShakeDecay = 1;*/
			var newParticle = new Particle(PART_SECONDARY, this.x + 16, this.y + 16, 
					0, 0, 0, 0, 0, 0, 0, 0, 0, 30, .5, .2, false, this.game);
			var element = new CircleElement(100, "#f0eb65", "#cf915b");
			newParticle.other = element;
			newParticle.grow = true;
			newParticle.attackId = TUNA_CHARGE_EXPLODE;
			newParticle.overrideHitbox = {
				x: this.x - 100 + 16, 
				y: this.y  - 100 + 16,
				width: 200, 
				height: 200
			};
			this.game.addEntity(newParticle);
	    }
	}
	if (this.particleId === VOID_BALL && this.life % 2 === 0) {
	    var newParticle = new Particle(PART_SECONDARY, this.x, this.y, 
				-2, 2, -2, 2, 0, 0.1, 0, 30, 0, 15, .7, .2, true, this.game);
	    var element = new CircleElement(10 + Math.random() * 4, "#240340", "#131d4f");
	   	newParticle.other = element;
	    this.game.addEntity(newParticle);
	}
	if (this.particleId === VOID_PORTAL && this.life % 2 === 0) {
	    var newParticle = new Particle(PART_SECONDARY, this.x, this.y, 
				-3, 3, -2, 0, 0, 0.1, 0, 30, 0, 15, .7, .2, true, this.game);
	    var element = new CircleElement(4 + Math.random() * 2, "#9321c4", "#722f8e"); //"#240340", "#131d4f");
	   	newParticle.other = element;
	    this.game.addEntity(newParticle);
		if (this.life >= (this.maxLife / 2)) { //erupt!
		    newParticle = new Particle(PART_SECONDARY, this.x, this.y, 
					-3, 3, -10, -15, -.5, 0.1, 0, 30, 0, 15, .7, .2, true, this.game);
		    element = new CircleElement(10 + Math.random() * 4, "#9321c4", "#722f8e");
		   	newParticle.other = element;
		   	newParticle.attackId = 2;
		    this.game.addEntity(newParticle);
		}
	}
	if (this.attackId === ALPHA_SHOT && this.life % 2 === 0) {
	    var newParticle = new Particle(PART_SECONDARY, this.x, this.y, 
				-2, 2, -2, 2, 0, 0.2, 0, 20, 0, 15, .5, .2, true, this.game);
	    var element = new CircleElement(10 + Math.random() * 4, "#9321c4", "#722f8e");
	   	newParticle.other = element;
	    this.game.addEntity(newParticle);
	}
	if (this.particleId === VOID_GATE) {
		if (this.life === 150) {
			if (this.direction === "Right")
				this.hSpeed = 30;
			else
				this.hSpeed = -30;
			this.friction = 0.5;
		}
		if (this.life % 1 === 0) {
			var distanceFromSide = this.x - this.game.liveCamera.x;
			var squareSize = Math.abs(distanceFromSide - this.game.camera.width / 2) / 15 + 8;
		    var newParticle = new Particle(PART_SECONDARY, this.x - 30 + Math.random() * 60, this.y - 30 + Math.random() * 60, 
					0, 0, 0, 0, 0, 0, 0, 30, 0, 15, .5, .2, false, this.game);
		    var element = new SquareElement(squareSize + Math.random() * squareSize * .2, squareSize + Math.random() * squareSize * .2, "#9321c4", "#671ca5");
		   	newParticle.other = element;
			if (this.life >= 150) //only do damage after a certain period of windup
				newParticle.attackId = 4;
			//console.log("Void gate particle at: "+this.x+", "+this.y+". Player: "+this.game.player1.x+", "+this.game.player1.y);
		    this.game.addEntity(newParticle);
		}
	}
	if (this.particleId === VOID_STORM && this.life % 2 === 0) {
		var speed = this.direction === "Right" ? 8 : -8;
	    var newParticle = new Particle(PART_SECONDARY, this.x, this.y, 
				speed, speed, -4, 4, 0, 0, 0, 90, 0, 15, .5, .2, true, this.game);
	    var element = new CircleElement(10 + Math.random() * 4, "#9321c4", "#722f8e");
	   	newParticle.other = element;
	   	newParticle.attackId = 3;
	    this.game.addEntity(newParticle);
	}
	if (this.particleId === VOID_LIGHTNING) {
		if (this.life % 4 === 0 && this.explodeTime === 0) {
		    var newParticle = new Particle(PART_SECONDARY, this.x + 40, this.y + 41, 
					-2, 2, -1, 0, 0, 0.1, 0, 30, 0, 30, .5, .2, true, this.game);
		    var element = new CircleElement(4 + Math.random() * 2, "#ffffff", "#ae9fcc");
		   	newParticle.other = element;
		   	newParticle.grow = true;
		    this.game.addEntity(newParticle);
		}
		if (this.explodeTime > 0) {
			this.explodeTime--;
			for (i = 0; i < 1 + Math.random() * 2; i++) {
			    var newParticle = new Particle(PART_SECONDARY, this.x + 40, this.y + 41, 
						-10, 10, -10, 10, 0, 0, 20, 0, 0, 30, .7, .2, true, this.game);
			    var element = new CircleElement(17 + Math.random() * 6, "#ffffff", "#ae9fcc");
			   	newParticle.other = element;
			   	newParticle.acceleration = 0.1;
			   	newParticle.grow = true;
			    this.game.addEntity(newParticle);
			}
		   	this.alpha = 0;
		   	this.vSpeed = 0;
		   	this.y = -4800;
		    if (this.explodeTime === 0)
		    	this.removeFromWorld = true; //-4784
		} else if (this.y >= -4800 && this.explodeTime === 0) {
	    	this.life = 0;
	    	this.explodeTime = 20;
	    	this.y = -4800;
	    	lightningExSound.play();
	    	explosionSound.play();
	    	this.game.cameraShakeTime = 20;
	    	this.game.cameraShakeAmount = 40;
	    	this.game.cameraShakeDecay = 1;
	    	var newParticle = new Particle(IMG_PART, this.game.liveCamera.x - 50, this.game.liveCamera.y - 30, 
					0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0.3, 0, false, this.game,
		        	new Animation(ASSET_MANAGER.getAsset("./img/Particle/flash.png"), 0, 0, 907, 564, 0.03, 1, true, false, 0, 0));
		    this.game.addEntity(newParticle);
            if (this.game.player1.vulnerable && this.game.player1.invincTimer === 0) {
                this.game.player1.vulnerable = false;
                var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
            			0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
                var damageText = new TextElement("", "Lucida Console", 25, "red", "black");
                var damage = 40;
            	damageText.text = damage;
                damageParticle.other = damageText;
                this.game.addEntity(damageParticle);
                this.game.player1.currentHealth -= 40;
                this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
                this.game.player1.hitByAttack = true;
                playSound(airHitSound);
                if (this.hSpeed < 0) {
                    this.game.player1.xVelocity = -3;
                    this.game.player1.lastDirection = "Right";
                    this.game.player1.hurtAnimation = this.game.player1.hurtAnimationRight;
                } else {
                    this.game.player1.xVelocity = 3;
                    this.game.player1.lastDirection = "Left";
                    this.game.player1.hurtAnimation = this.game.player1.hurtAnimationLeft;
                }
            }
	    }
	}
	if (this.particleId === VOID_GOOP && this.life % 2 === 0) {
		if (this.y <= this.game.liveCamera.y + this.game.liveCamera.height) {
		    var newParticle = new Particle(PART_SECONDARY, this.x, this.y, 
					0, 0, 0, 0, 0, 0, 0, 40, 10, 10, .3, .2, true, this.game);
		    var element = new CircleElement(7 + Math.random() * 4, "#240340", "#131d4f");
		   	newParticle.other = element;
		    this.game.addEntity(newParticle);
		} else {
			//console.log("deleting goop "+this.y)
			this.removeFromWorld = true;			
		}
	}
	if (this.particleId === BURROW_PART) {
		var right = false;
        var distance = getXDistance(this.game.player1, this) - this.game.player1.hitBox.width / 2;
        if (distance > 0) {
        	right = true;
        	this.x += Math.min(distance, 2);
        } else
        	this.x += Math.max(distance, -2);
        if (this.life % 3 === 0) {
            var randomSize = 5 + Math.random() * 8;
            var particle = new Particle(SHAPE_PART,
                                            this.x + (Math.random() * 21) - 10 + 25,
                                            this.y + 30, 
                                            -3, 3, -3, 0, 0.1, 0, 0, 60, 10, 10, 0.9, 0.1, true, this.game);
                                    var element = new SquareElement(randomSize, randomSize, "#2A2349", "#272144");
                                    particle.other = element;
                                    this.game.addEntity(particle);
                                    
            
		    var newParticle = new Particle(PART_SECONDARY, this.x + (Math.random() * 11) - 5, this.y, 
					-2, 2, -3, 0, 0.1, 0.1, 0, 30, 0, 15, .7, .2, true, this.game,
		        	new Animation(ASSET_MANAGER.getAsset("./img/Particle/smoke.png"), 0, 0, 256, 256, 0.06 + Math.random() * 0.02, 20, true, false, 15, 10));
		    newParticle.absoluteSizeScale = .1 + Math.random() * .1;
		    this.game.addEntity(newParticle);
            
        }
		if (this.life % 2 === 0 && this.life >= (this.maxLife * 3 / 4)) { //erupt!
            rocksSound.volume = 0.2;
            var randomSize = 10 + Math.random() * 5;
            var particle = new Particle(SHAPE_PART,
                                            this.x + (Math.random() * 21) - 10 + 25,
                                            this.y + 30, 
                                            -3, 3, -3, 0, 0.1, 0, 0, 60, 10, 10, 0.9, 0.1, true, this.game);
                                    var element = new SquareElement(randomSize, randomSize, "#2A2349", "#272144");
                                    particle.other = element;
                                    this.game.addEntity(particle);
        
		    newParticle = new Particle(PART_SECONDARY, this.x + (Math.random() * 11) - 5, this.y - 5, 
					-3, 3, -5, 0, 0.1, 0.1, 0, 30, 0, 15, .7, .2, true, this.game,
		        	new Animation(ASSET_MANAGER.getAsset("./img/Particle/smoke.png"), 0, 0, 256, 256, 0.03 + Math.random() * 0.04, 20, true, false, 15, 5));
		    newParticle.absoluteSizeScale = .2 + Math.random() * .2;
		    this.game.addEntity(newParticle);
		}
		if (this.life === this.maxLife) {
			this.game.currentBoss.energy = 0;
            this.game.currentBoss.state = "attacking";
            playSound(screamSound);
            this.game.currentBoss.attackIndex = 4; //scream that does damage
            if (!right) {
                this.game.currentBoss.attackAnimation = this.game.currentBoss.screamAnimationLeft;
            } else {
                this.game.currentBoss.attackAnimation = this.game.currentBoss.screamAnimationRight;
            }
			this.game.currentBoss.y -= 1000;
			this.game.currentBoss.x = this.x - this.game.currentBoss.hitBox.width / 2;
		}
	}
	/**
	 * particle generators create particles similar to whatever they were initialized with
	 */
	if (this.particleId === PART_GENERATOR) {
		var particle;
		if (this.other.animation != null) {
			particle = new Particle(IMG_PART, this.x, this.y, 4, -4, 2, -6, 0.15, 0.05, 0, this.other.maxLife, 10, 50, 1, 0, false, this.game, this.other.animation);
		} else {
			particle = new Particle(SHAPE_PART, this.x, this.y, 4, -4, 2, -6, 0.15, 0.05, 0, this.other.maxLife, 10, 50, 1, 0, false, this.game);
		}
        particle.other = this.other; /*new Particle(this.other.particleId, this.x, this.y, this.other.minHSpeed, this.other.maxHSpeed, this.other.minVSpeed, this.other.maxVSpeed, this.other.gravity, 
			this.other.friction, this.other.width, this.other.maxLife, this.other.fadeIn, this.other.fadeOut, this.other.maxAlpha, this.other.alphaVariance, this.other.shrink, this.other.game, this.other.anim);*/
		//particle.other.x = this.x;
		//particle.other.y = this.y;
        this.game.addEntity(particle);
	}
	if (this.particleId === BRANDONG_WHIP) { //brandong whip generator - bounce on the sides
		var particle;
		if (this.vSpeed !== 0) { //diagonal whip only
			if (this.y + this.vSpeed < 0 || this.y + this.vSpeed > this.game.camera.y + this.game.camera.height)
				this.vSpeed *= -1;
			if (this.x < this.game.camera.minX)
				this.hSpeed *= -1;
			if (this.x > this.game.camera.minX + this.game.camera.width) {
				if (this.extra > 0) {
					this.hSpeed *= -1;
					this.extra--;
				} else {
					this.removeFromWorld = true;
				}
			}
			particle = new Particle(SHAPE_PART, this.x, this.y, 0, 0, 0, 0, 0, 0, 0, 1000, 100, 100, 1, 0, false, this.game);
			particle.attackId = BRANDONG_WHIPWALL;
		} else {
			particle = new Particle(SHAPE_PART, this.x, this.y, 0, 0, 0, 0, 0, 0, 0, 30, 5, 25, 1, 0, false, this.game);
			particle.attackId = BRANDONG_WHIPLINE;
		}
        particle.other = this.other;
        this.game.addEntity(particle);
	}
	if (this.life < this.fadeIn) {
		this.alpha = this.life / this.fadeIn;
	}
	if (this.life > this.maxLife) {
		this.alpha = 1 - ((this.life - this.maxLife) / this.fadeOut);
	}
	if (this.life > this.maxLife + this.fadeOut) {
		if (this.particleId === BRANDONG_WHIP && this.extra === 100) { //brandong special move - blue viper!
			playSound(lenoxRSound);
			this.game.addEntity(new Particle(IMG_PART, this.x - 32 + 150, this.y - 32, 0, 0, 0, 0, 0, 0, 0, 160, 0, 160, 0.8, 0, false, this.game,
					new Animation(ASSET_MANAGER.getAsset("./img/Enemy/blue_viper.png"), 0, 0, 64, 64, 0.033, 25, false, false, 0, 0)));
			this.game.currentBoss.phaseTimer = 240;
		}
		this.removeFromWorld = true;
	}
	if (this.hSpeed > 0) {
		this.hSpeed -= this.friction;
		if (this.hSpeed <= 0)
			this.hSpeed = 0;
	}
	if (this.hSpeed < 0) {
		this.hSpeed += this.friction;
		if (this.hSpeed >= 0)
			this.hSpeed = 0;
	}
	if (this.vSpeed > 0) {
		this.vSpeed -= this.friction;
		if (this.vSpeed <= 0)
			this.vSpeed = 0;
	}
	if (this.vSpeed < 0) {
		this.vSpeed += this.friction;
		if (this.vSpeed >= 0)
			this.vSpeed = 0;
	}
	this.vSpeed += this.gravity;
	if (this.vSpeed > this.GRAVITY_CAP)
		this.vSpeed = this.GRAVITY_CAP;
	var accelMultiplier = 1 + this.acceleration * this.life;
	this.x += this.hSpeed * accelMultiplier;
	this.y += this.vSpeed * accelMultiplier;
	if (this.y >= 600) {
		this.removeFromWorld = true;
    }
	this.life++;
	
	if (this.snapEntity != null) {
		this.x = this.snapEntity.x;
		this.y = this.snapEntity.y;
	}

	if (this.overrideHitbox != null) {
		this.hitBox = this.overrideHitbox;
		if (this.overrideHitbox.followPosition) {
			this.hitBox.x = this.x;
			this.hitBox.y = this.y;
		}
	} else if (this.particleId == IMG_PART) {
		this.hitBox = { //update hitbox as we move
			x: this.x, 
			y: this.y,
			width: Math.max(1, this.width), 
			height: Math.max(1, this.width)
		};
	} else {
		this.hitBox = { //update hitbox as we move
			x: this.x - this.width / 2 + this.width, 
			y: this.y - this.width / 2 + this.width,
			width: Math.max(1, this.width), 
			height: Math.max(1, this.width)
		};
	}
    if (this.particleId === VOID_LIGHTNING) {
    	this.hitBox.x += 16;
    	this.hitBox.y += 16;
    }
	if (this.particleId === BRANDONG_SPIN) { //special hitbox
		var playerMidpointX = this.game.player1.x + this.game.player1.hitBoxDef.offsetX + this.game.player1.hitBoxDef.width / 2;
		var playerMidpointY = this.game.player1.y + this.game.player1.hitBoxDef.offsetY + this.game.player1.hitBoxDef.height / 2;
		var attackMidpointX = this.x + 150;
		var attackMidpointY = this.y + 150;
		var dist = getDistance(playerMidpointX, playerMidpointY, attackMidpointX, attackMidpointY);
		if (dist <= 150 && dist >= 100) { //caught in the ring
			if (this.game.player1.vulnerable && this.game.player1.invincTimer === 0 && this.canHit) {
				this.canHit = false;
				this.game.player1.vulnerable = false;
				this.game.currentBoss.scoreValue -= 250;
				applyDamage(this.game.player1.x, this.game.player1.y, this.game, 25, this.game.player1);
				this.game.player1.invulnTimer = this.game.player1.invulnTimerMax * 2;
				this.game.player1.hitByAttack = true;
				playSound(hitSound);	
			}
		}
	}
    if (checkCollision(this, this.game.player1) && !this.game.player1.hitByAttack) { 
		if (this.attackId == TUNA_CHARGE && this.canHit) {
			this.canHit = false;
		}
		if (this.attackId == TUNA_CHARGE_EXPLODE && this.explodeTime == 0 && this.canHit) {
			this.canHit = false;
			this.game.player1.vulnerable = false;
			applyDamage(this.game.player1.x, this.game.player1.y, this.game, 25, this.game.player1);
			this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
			this.game.player1.hitByAttack = true;
			playSound(hitSound);
		}
    	if (this.particleId === VOID_LIGHTNING && this.explodeTime === 0) {
    		if (this.game.player1.attacking) {
    			this.removeFromWorld = true;
    			burnSound.play();
    		} else {
    			var damage = 10;
    			if (this.game.player1.invincTimer > 0)
    				damage = 0;
                var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
            			0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
                var damageText = new TextElement("", "Lucida Console", 25, "red", "black");
            	damageText.text = damage;
                damageParticle.other = damageText;
                this.game.addEntity(damageParticle);
                this.game.player1.currentHealth -= damage;
                this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
                this.game.player1.hitByAttack = true;
                playSound(airHitSound);
                if (this.hSpeed < 0) {
                    this.game.player1.xVelocity = -3;
                    this.game.player1.lastDirection = "Right";
                    this.game.player1.hurtAnimation = this.game.player1.hurtAnimationRight;
                } else {
                    this.game.player1.xVelocity = 3;
                    this.game.player1.lastDirection = "Left";
                    this.game.player1.hurtAnimation = this.game.player1.hurtAnimationLeft;
                }
    			this.removeFromWorld = true;
    			burnSound.play();
    		}
    	}
    	if (this.attackId === 1) { // Reksai Void Ball
            if (this.game.player1.vulnerable && this.game.player1.invincTimer === 0) {
                this.game.player1.vulnerable = false;
                var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
            			0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
                var damageText = new TextElement("", "Lucida Console", 25, "red", "black");
                var damage = 25;
            	damageText.text = damage;
                damageParticle.other = damageText;
                this.game.addEntity(damageParticle);
                this.game.player1.currentHealth -= damage;
                this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
                this.game.player1.hitByAttack = true;
                playSound(airHitSound);
                if (this.hSpeed < 0) {
                    this.game.player1.xVelocity = -3;
                    this.game.player1.lastDirection = "Right";
                    this.game.player1.hurtAnimation = this.game.player1.hurtAnimationRight;
                } else {
                    this.game.player1.xVelocity = 3;
                    this.game.player1.lastDirection = "Left";
                    this.game.player1.hurtAnimation = this.game.player1.hurtAnimationLeft;
                }
            }
    	}
    	if (this.attackId === 2 || this.attackId === 6) { //malzahar void eruption
            if (this.attackId === 6 && this.life >= 10) {
            	
            } else if (this.game.player1.vulnerable && this.game.player1.invincTimer === 0) {
                this.game.player1.vulnerable = false;
                var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
            			0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
                var damageText = new TextElement("", "Lucida Console", 25, "red", "black");
                var damage = 25;
                if (this.attackId === 6) {
                	this.game.player1.timesHit++;
                	damage = 5;
                	if (this.game.player1.timesHit % 5 === 0) {
                		var chat;
                		if (this.game.player1.timesHit === 5)
                			chat = new TextBox(this.game, "./img/Chat/EzrealSquare.png", "...press S + U together to do an invulnerable dash.");
                		else if (this.game.player1.timesHit === 10)
                			chat = new TextBox(this.game, "./img/Chat/EzrealSquare.png", "Are you ok? Press S + U together to do an invulnerable dash.");
                		else if (this.game.player1.timesHit === 15)
                			chat = new TextBox(this.game, "./img/Chat/EzrealSquare.png", "You there? Press S + U together to do an invulnerable dash.");
                		else
                			chat = new TextBox(this.game, "./img/Chat/EzrealSquare.png", "I give up. Riven, I am disappoint.");
            	 		if (textBox != null)
            	 			textBox.removeFromWorld = true;
            	 		textBox = chat;
            	 		this.game.addEntity(chat);
                	}
                }
            	damageText.text = damage;
                damageParticle.other = damageText;
                this.game.addEntity(damageParticle);
                this.game.player1.currentHealth -= damage;
                this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
                this.game.player1.hitByAttack = true;
                playSound(lightningSound);
                if (this.hSpeed < 0 || this.attackId === 6) {
                    this.game.player1.xVelocity = -3;
                    this.game.player1.lastDirection = "Right";
                    this.game.player1.hurtAnimation = this.game.player1.hurtAnimationRight;
                } else {
                    this.game.player1.xVelocity = 3;
                    this.game.player1.lastDirection = "Left";
                    this.game.player1.hurtAnimation = this.game.player1.hurtAnimationLeft;
                }
            }
    	}
    	if (this.attackId === 3) { //malzahar void storm
            if (this.game.player1.vulnerable && this.game.player1.invincTimer === 0) {
                this.game.player1.vulnerable = false;
                var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
            			0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
                var damageText = new TextElement("", "Lucida Console", 25, "red", "black");
                var damage = 6; //this is going to tick a lot
            	damageText.text = damage;
                damageParticle.other = damageText;
                this.game.addEntity(damageParticle);
                this.game.player1.currentHealth -= damage;
                this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
                this.game.player1.hitByAttack = true;
                playSound(lightningSound);
                if (this.hSpeed < 0) {
                    this.game.player1.xVelocity = -3;
                    this.game.player1.lastDirection = "Right";
                    this.game.player1.hurtAnimation = this.game.player1.hurtAnimationRight;
                } else {
                    this.game.player1.xVelocity = 3;
                    this.game.player1.lastDirection = "Left";
                    this.game.player1.hurtAnimation = this.game.player1.hurtAnimationLeft;
                }
            }
    	}
    	if (this.attackId === 4) {
            if (this.game.player1.vulnerable && this.game.player1.invincTimer === 0) {
                this.game.player1.vulnerable = false;
                var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
            			0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
                var damageText = new TextElement("", "Lucida Console", 25, "red", "black");
                var damage = 20; //usually around 2 hits
            	damageText.text = damage;
                damageParticle.other = damageText;
                this.game.addEntity(damageParticle);
                this.game.player1.currentHealth -= damage;
                this.game.player1.invulnTimer = this.game.player1.invulnTimerMax * 2;
                this.game.player1.hitByAttack = true;
                playSound(lightningSound);
                if (this.hSpeed < 0) {
                    this.game.player1.xVelocity = -3;
                    this.game.player1.lastDirection = "Right";
                    this.game.player1.hurtAnimation = this.game.player1.hurtAnimationRight;
                } else {
                    this.game.player1.xVelocity = 3;
                    this.game.player1.lastDirection = "Left";
                    this.game.player1.hurtAnimation = this.game.player1.hurtAnimationLeft;
                }
            }
    	}
    	if (this.attackId === 5 && this.life < this.maxLife / 4) { //platform fire
            if ((this.game.player1.hitBox.y + this.game.player1.hitBox.height <= this.y + 3) && this.game.player1.vulnerable && this.game.player1.invincTimer === 0) {
                this.game.player1.vulnerable = false;
                var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
            			0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
                var damageText = new TextElement("", "Lucida Console", 25, "red", "black");
                var damage = 10;
            	damageText.text = damage;
                damageParticle.other = damageText;
                this.game.addEntity(damageParticle);
                this.game.player1.currentHealth -= damage;
                this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
                this.game.player1.hitByAttack = true;
                playSound(burnSound);
                if (this.hSpeed < 0) {
                    this.game.player1.xVelocity = 0;
                    this.game.player1.lastDirection = "Right";
                    this.game.player1.hurtAnimation = this.game.player1.hurtAnimationRight;
                } else {
                    this.game.player1.xVelocity = 0;
                    this.game.player1.lastDirection = "Left";
                    this.game.player1.hurtAnimation = this.game.player1.hurtAnimationLeft;
                }
            }
    	}
		if (this.attackId === BRANDONG_WHIPWALL) {
			if (this.canHit && this.life >= 100) { //diagonal bouncer - ignores invincibility
				this.canHit = false;
				this.game.player1.vulnerable = false;
				applyDamage(this.game.player1.x, this.game.player1.y, this.game, 15, this.game.player1);
				this.game.currentBoss.scoreValue -= 150;
				this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
				this.game.player1.hitByAttack = true;
				playSound(hitSound);
				if (this.x > this.game.player1.x + this.game.player1.hitBoxDef.offsetX + this.game.player1.hitBoxDef.width / 2) {
					this.game.player1.xVelocity = -2;
				} else {
					this.game.player1.xVelocity = 2;
				}
				if (this.y > this.game.player1.y + this.game.player1.hitBoxDef.offsetY + this.game.player1.hitBoxDef.height / 2) {
					this.game.player1.yVelocity = -2;
				} else {
					this.game.player1.yVelocity = 2;
				}
			}
		}
		if (this.attackId === BRANDONG_WHIPLINE) {
			if (this.game.player1.vulnerable && this.game.player1.invincTimer === 0 && this.canHit) {
				this.canHit = false;
				this.game.player1.vulnerable = false;
				applyDamage(this.game.player1.x, this.game.player1.y, this.game, 25, this.game.player1);
				this.game.currentBoss.scoreValue -= 250;
				this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
				this.game.player1.hitByAttack = true;
				playSound(hitSound);
			}
		}
		if (this.attackId === AYA_SHOT) {
			if (this.game.player1.vulnerable && this.game.player1.invincTimer === 0 && this.canHit) {
				this.canHit = false;
				this.game.player1.vulnerable = false;
				applyDamage(this.game.player1.x, this.game.player1.y, this.game, 15, this.game.player1);
				this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
				this.game.player1.hitByAttack = true;
				playSound(slapSound);
			}
		}
		if (this.attackId === ALPHA_SHOT) {
			if (this.game.player1.vulnerable && this.game.player1.invincTimer === 0 && this.canHit) {
				this.canHit = false;
				this.game.player1.vulnerable = false;
				applyDamage(this.game.player1.x, this.game.player1.y, this.game, 20, this.game.player1);
				this.game.currentBoss.scoreValue -= 200;
				this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
				this.game.player1.hitByAttack = true;
				playSound(hitSound);
			}
		}
    }
    Entity.prototype.update.call(this);
};

Particle.prototype.draw = function (ctx) {
	var drawX = this.x;
	var drawY = this.y;
	if (this.highPriority === 3) { //draw above ui - follow camera
		drawX += this.game.liveCamera.x;
		drawY += this.game.liveCamera.y;
	}
	if (this.grow) {
		this.sizeScale = this.life / (this.maxLife + this.fadeOut);
	} else if (this.shrink) {
		this.sizeScale = 1 - this.life / (this.maxLife + this.fadeOut);
	}
	if (this.particleId === IMG_FLASH_PART) {
		this.sizeScale = 0.4;
	    if (this.life % 30 === 0)
	    	this.alpha = this.alpha === 1 ? 0 : 1;
	}
	ctx.globalAlpha = this.alpha * this.maxAlpha;
	if (this.particleId === VOID_LIGHTNING) {
		this.other.drawFrame(this.game.clockTick, ctx, drawX + this.other.offsetX,
				drawY + this.other.offsetY, this.sizeScale * this.absoluteSizeScale, this.sizeScale * this.absoluteSizeScale);
		this.animation.drawFrame(this.game.clockTick, ctx, drawX + this.animation.offsetX,
				drawY + this.animation.offsetY, this.sizeScale * this.absoluteSizeScale, this.sizeScale * this.absoluteSizeScale);
	} else if (this.other == null) {
		if (this.animation !== null)
			this.animation.drawFrame(this.game.clockTick, ctx, drawX + this.animation.offsetX,
					drawY + this.animation.offsetY, this.sizeScale * this.absoluteSizeScale, this.sizeScale * this.absoluteSizeScale);
	} else {
		this.other.draw(ctx, drawX, drawY, this.sizeScale * this.absoluteSizeScale);
	}
    Entity.prototype.draw.call(this);
	ctx.globalAlpha = 1;
    drawHitBox(this, ctx);
};

/**
    Powerup ID
*/

var JELLY_COIN = 2;
var JELLY_COIN_SM = 3;
var ENTITY_MARKER = 4; //invisible, limiting hitbox to prevent entity movement
var TIP_MARKER = 5; //tip trigger
var JELLYBAIT = 6; //jellybait

function Powerup(game, x, y, type, specialId) {
	this.step = 0;
	this.x = x;
	this.y = y;
	this.type = type;
	this.specialId = specialId || 0;
	this.animation = null;
	this.gatherTime = 0;
	this.hspeed = 0;
	this.vspeed = 0;
	this.phase = 0;
    Entity.call(this, game, x, y);
    this.hitBoxDef = {
    	width: 32, height: 32, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
    };
    if (type === 1) { //invuln
    	this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Particle/invuln.png"), 0, 0, 32, 32, 0.03, 20, true, false, 0, 0);
    }
    if (type === 2) { //jelly coin
    	this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Powerup/jellycoin.png"), 0, 0, 28, 28, 0.25, 4, true, false, 0, 0);
		this.hitBoxDef = {
			width: 28, height: 28, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
		if (specialId > 0) { //dropped coin
			this.hspeed = -5 + Math.random() * 10;
			this.vspeed = 5 - Math.random() * 10;
		}
    }
    if (type === 3) { //jelly coin
    	this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Powerup/jellycoin_sm.png"), 0, 0, 14, 14, 0.25, 4, true, false, 0, 0);
		this.hitBoxDef = {
			width: 14, height: 14, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
		if (specialId > 0) { //dropped coin
			this.hspeed = -5 + Math.random() * 10;
			this.vspeed = 5 - Math.random() * 10;
		}
    }
    if (type === TIP_MARKER || type === JELLYBAIT) { //tip marker
		this.hitBoxDef = {
			width: 32, height: 192, offsetX: 0, offsetY: 0, growthX: 0, growthY: 0
		};
    	//this.animation = new Animation(ASSET_MANAGER.getAsset("./img/Powerup/hermes.png"), 0, 0, 64, 64, 0.05, 10, true, false, 0, 0);
    }
	
    drawHitBox(this);
}

Powerup.prototype.update = function () {
	// Only update when in the screen
	this.step++;
	var that = this;
	if (isOnScreen(this)) {
		if (this.type === 0) { //health powerup
			this.game.addEntity(new Particle(IMG_PART, this.x, this.y - 10, -0.2, 0.2, -0.2, 0.2, 0, 0, 5, 5, 10, 50, 0.7, 0.2, true, this.game,
				new Animation(ASSET_MANAGER.getAsset("./img/Particle/pink_flare.png"), 0, 0, 64, 64, 0.03, 16, true, false, 0, 0)));
	        if (checkCollision(this, this.game.player1)) {
	            playSound(healSound);
	            
	            var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
	                    0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
	            var damageText = new TextElement("", "Lucida Console", 25, "#ADFF2F", "black");
	            var damage = 30;
	            damageText.text = damage;
	            damageParticle.other = damageText;
	            this.game.addEntity(damageParticle);
	            this.game.player1.currentHealth += damage;
	            if (this.game.player1.currentHealth >= this.game.player1.maxHealth) {
	            	this.game.player1.currentHealth = this.game.player1.maxHealth;
	            }
	            this.removeFromWorld = true;
	        }
		}
		if (this.type === 1) { //invuln powerup
			if (this.step % 4 === 0)
				this.game.addEntity(new Particle(IMG_PART, this.x, this.y - 10, -0.2, 0.3, -0.3, 0.3, 0, 0.1, 5, 5, 10, 50, 0.7, 0.2, true, this.game,
						new Animation(ASSET_MANAGER.getAsset("./img/Particle/orange_flare.png"), 0, 0, 64, 64, 0.03, 16, true, false, 0, 0)));
	        if (checkCollision(this, this.game.player1)) {
	            playSound(invulnSound);
	            
	            var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
	                    0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
	            var damageText = new TextElement("", "Lucida Console", 25, "#ffd43a", "black");
	            damageText.text = "Invulnerable!";
	            damageParticle.other = damageText;
	            this.game.player1.invincTimer = 400;
	            this.game.addEntity(damageParticle);
	            this.removeFromWorld = true;
	        }
		}
		if (this.type === 2 || this.type === 3) { //jelly coin
			if (this.specialId != 0) {
				if (this.phase == 0) {
					this.x += this.hspeed;
					this.y += this.vspeed;
					if (this.vspeed > 0) {
						this.vspeed = Math.max(0, this.vspeed - 0.1);
					}
					if (this.vspeed < 0) {
						this.vspeed = Math.min(0, this.vspeed + 0.1);
					}
					if (this.hspeed > 0) {
						this.hspeed = Math.max(0, this.hspeed - 0.1);
					} else if (this.hspeed < 0) {
						this.hspeed = Math.min(0, this.hspeed + 0.1);
					}
					if (this.vspeed == 0 && this.hspeed == 0) {
						this.phase = 1;
					}
				}
				if (this.phase == 1) {
					var dx = (this.game.player1.x + this.game.player1.hitBoxDef.offsetX + this.game.player1.hitBoxDef.width / 2) - (this.x + this.hitBoxDef.width / 2);
					var dy = (this.game.player1.y + this.game.player1.hitBoxDef.offsetY + this.game.player1.hitBoxDef.height / 2) - (this.y + this.hitBoxDef.height / 2);
					this.x += dx / 20;
					this.y += dy / 20;
				}
			}
	        if (checkCollision(this, this.game.player1)) {
				addScore(this.game, this.type == 2 ? 100 : 25);
                playSound(coinSound);
	            this.removeFromWorld = true;
				var particleAmount = this.type == 2 ? 10 : 3;
				for (var i = 0; i < particleAmount; i++) {
					var newParticle = new Particle(PART_SECONDARY, (this.x + this.hitBoxDef.width / 2), (this.y + this.hitBoxDef.height / 2), 
							-2, 2, -2, 2, 0, 0.15, 0, 0, 0, 50, .75, .15, true, this.game);
					element = new CircleElement(4 + Math.random() * 2, "#73efff", "#ffb8ff");
					newParticle.other = element;
					this.game.addEntity(newParticle);
				}
	        }
		}
		if (this.type === ENTITY_MARKER) { //entity marker
			/*if (this.step % 4 === 0)
				this.game.addEntity(new Particle(IMG_PART, this.x, this.y - 10, -0.2, 0.3, -0.3, 0.3, 0, 0.1, 5, 5, 10, 50, 0.7, 0.2, true, this.game,
						new Animation(ASSET_MANAGER.getAsset("./img/Particle/orange_flare.png"), 0, 0, 64, 64, 0.03, 16, true, false, 0, 0)));*/
			this.game.entities.forEach(function(entity) {
				if (entity.hitBox != null) {
					if (entity instanceof Enemy && checkCollision(that, entity)) {
						entity.flip();
						/*that.game.addEntity(new Particle(IMG_PART, that.x, that.y - 10, -0.2, 0.3, -0.3, 0.3, 0, 0.1, 5, 5, 10, 50, 0.7, 0.2, true, that.game,
								new Animation(ASSET_MANAGER.getAsset("./img/Particle/orange_flare.png"), 0, 0, 64, 64, 0.03, 16, true, false, 0, 0)));*/
					}
				}
			});
		}
		if (this.type === TIP_MARKER) {
	        if (checkCollision(this, this.game.player1)) {
	            this.game.showTip(this.specialId);
	            this.removeFromWorld = true;
	        }
		}
		if (this.type === JELLYBAIT && this.phase == 0) {
	        if (checkCollision(this, this.game.player1)) {
				this.phase = 1;
				setTimeout(
					function() {
						var chat = new TextBox(that.game, "./img/Chat/UnknownSquare.png", "...", true);
						var chat2 = new TextBox(that.game, "./img/Chat/UnknownSquare.png", "Jelly... I'm not sure what you expected when you jumped down here.", true);
						var chat3 = new TextBox(that.game, "./img/Chat/JellySquare.png", "lol idk either", true);
						var chat4 = new TextBox(that.game, "./img/Chat/UnknownSquare.png", "You're lucky though !! Because I'm going to go bail you out ~", true);
						chat.nextText = chat2;
						chat2.nextText = chat3;
						chat3.nextText = chat4;
						that.game.addEntity(chat);
						that.game.pauseTime = 100;
						that.game.player1.teleportToX = 5574 - 128;
						that.game.player1.teleportToY = 32;
						that.phase = 2;
					}, 5000);
	        }
		}
		if (this.type === JELLYBAIT && this.phase == 2) {
	        if (checkCollision(this, this.game.player1)) {
				this.phase = 3;
				setTimeout(
					function() {
						var chat = new TextBox(that.game, "./img/Chat/UnknownSquare.png", "...", true);
						var chat2 = new TextBox(that.game, "./img/Chat/UnknownSquare.png", "Jelly... are you cereal", true);
						var chat3 = new TextBox(that.game, "./img/Chat/JellySquare.png", "lag?", true);
						var chat4 = new TextBox(that.game, "./img/Chat/UnknownSquare.png", "Let me help you up again~", true);
						chat.nextText = chat2;
						chat2.nextText = chat3;
						chat3.nextText = chat4;
						that.game.addEntity(chat);
						that.game.pauseTime = 100;
						that.game.player1.teleportToX = 5574 - 128;
						that.game.player1.teleportToY = 32;
						that.phase = 4;
					}, 5000);
	        }
		}
		if (this.type === JELLYBAIT && this.phase == 4) {
	        if (checkCollision(this, this.game.player1)) {
				this.phase = 5;
				setTimeout(
					function() {
						var chat = new TextBox(that.game, "./img/Chat/UnknownSquare.png", "...", true);
						var chat2 = new TextBox(that.game, "./img/Chat/UnknownSquare.png", "Ok Jelly... you're trying really hard I know", true);
						var chat3 = new TextBox(that.game, "./img/Chat/UnknownSquare.png", "But I think this is enough for now...", true);
						var chat4 = new TextBox(that.game, "./img/Chat/UnknownSquare.png", "We'll meet soon enough! So wait until then, okay?", true);
						chat.nextText = chat2;
						chat2.nextText = chat3;
						//chat3.nextText = chat4;
						that.game.addEntity(chat);
						that.game.pauseTime = 100;
						that.game.player1.teleportToX = 5574 - 128;
						that.game.player1.teleportToY = 32;
						var p = new Platform(that.game, 5560, 224, 0, 0, 0, PLATFORM_BOUNCY);
						that.game.addEntity(p);
						that.game.currentMap.platforms.push(p);
						that.removeFromWorld = true;
					}, 5000);
	        }
		}
		if (this.type === 7) { //tree of life
			if (this.step % 3 === 0) {
				var newParticle = new Particle(PART_SECONDARY, this.x + 80 + Math.random() * 50, this.y + Math.random() * 100, 
						-2, 2, -3, -5, -.5, 0.1, 0, 0, 0, 15, .2, .05, true, this.game);
				element = new CircleElement(30 + Math.random() * 4, "#6bb572", "#7be384");
				newParticle.other = element;
				this.game.addEntity(newParticle);
			}
	        if (checkCollision(this, this.game.player1)) {
				if (this.gatherTime % 60 === 0)
					playSound(treeSound); //gather sound
				this.gatherTime++;
				if (this.gatherTime >= 180) {
					var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x - 50, this.game.player1.hitBox.y, 
							0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
					var damageText = new TextElement("", "Lucida Console", 25, "#ffd43a", "black");
					damageText.text = "Tree of life - obtained!";
					damageParticle.other = damageText;
					this.game.addEntity(damageParticle);
					this.removeFromWorld = true;
					this.game.currentPhase = 3;
					
					var chat = new TextBox(this.game, "./img/Chat/JellySquare.png", "There's a suspicious smell nearby.");
					this.game.addEntity(chat);
					this.game.player1.canControl = false;
				}
	        } else {
				this.gatherTime = 0;
			}
		}
		if (this.type === 8) { //landmine
	        if (checkCollision(this, this.game.player1) && this.game.player1.vulnerable) {
				var newParticle = new Particle(PART_SECONDARY, this.x + 32, this.y + 32, 
						-2, 2, -3, -5, -.5, 0.1, 0, 0, 0, 15, .2, .05, true, this.game);
				element = new CircleElement(100, "#ed0000", "#cc0000");
				newParticle.other = element;
				this.game.addEntity(newParticle);
                this.game.player1.xVelocity = -0.1;
				this.game.player1.vulnerable = false;
				this.game.player1.hitByAttack = true;
                this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
	            playSound(explosionSound);
				applyDamage(this.game.player1.x, this.game.player1.y, this.game, 20, this.game.player1);
	            this.removeFromWorld = true;
	        }
		}
		if (this.type === 9) { //telephoto camera
	        if (checkCollision(this, this.game.player1)) {
	            playSound(healSound);
	            var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
	                    0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
	            var damageText = new TextElement("", "Lucida Console", 25, "#ffd43a", "black");
	            damageText.text = "Stealth Detection!";
	            damageParticle.other = damageText;
                this.game.addEntity(damageParticle);
	            this.game.player1.telephotoTimer = 600;
	            this.removeFromWorld = true;
	        }
		}
		if (this.type === 10) { //speed gate
		
			var newParticle = new Particle(PART_SECONDARY, this.x + Math.random() * 50, this.y + Math.random() * 500, 
					-2, 2, -3, -5, -.5, 0.1, 0, 0, 0, 15, .2, .05, true, this.game);
			element = new SquareElement(30 + Math.random() * 20, 30 + Math.random() * 20, "#a6f9ff", "#6ae2eb");
			newParticle.other = element;
			this.game.addEntity(newParticle);
	        if (checkCollision(this, this.game.player1)) {
	            playSound(speedgateSound);
				this.game.cameraSpeed = 50;
	            this.game.player1.zoomTimer = 180;
				this.game.player1.xVelocity = 50;
	            this.removeFromWorld = true;
				this.game.player1.canControl = false;
				this.game.currentPhase = 6;
	        }
		}
		if (this.type === 11) { //radar
	        if (checkCollision(this, this.game.player1)) {
	            playSound(healSound);
	            var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
	                    0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
	            var damageText = new TextElement("", "Lucida Console", 25, "#ffd43a", "black");
	            damageText.text = "Attack Speed Up!";
	            damageParticle.other = damageText;
                this.game.addEntity(damageParticle);
	            this.game.player1.telephotoTimer = 600;
	            this.removeFromWorld = true;
	        }
		}
		if (this.type === 12) { //tear of selene
	        if (checkCollision(this, this.game.player1)) {
	            playSound(energyUpSound);
	            var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
	                    0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
	            var damageText = new TextElement("", "Lucida Console", 25, "#ffd43a", "black");
	            damageText.text = "Energy Up!";
	            damageParticle.other = damageText;
                this.game.addEntity(damageParticle);
	            addEnergy(this.game, 25);
	            this.removeFromWorld = true;
	        }
		}
		if (this.type === 13) { //mithril quiver
	        if (checkCollision(this, this.game.player1)) {
	            playSound(healSound);
	            var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
	                    0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
	            var damageText = new TextElement("", "Lucida Console", 25, "#ffd43a", "black");
	            damageText.text = "Weapons upgraded!";
	            damageParticle.other = damageText;
                this.game.addEntity(damageParticle);
	            this.removeFromWorld = true;
				this.game.currentPhase = 16;
	        }
		}
	}
    Entity.prototype.update.call(this);
};

Powerup.prototype.draw = function (ctx) {
	if (this.type === 8) {
		if (this.game.player1.telephotoTimer > 0)
			this.animation.drawFrame(this.game.clockTick, ctx, this.x + this.animation.offsetX,
					this.y + this.animation.offsetY, 1, 1);
		
	} else if (this.animation != null) {
		this.animation.drawFrame(this.game.clockTick, ctx, this.x + this.animation.offsetX,
				this.y + this.animation.offsetY, 1, 1);
	}
    drawHitBox(this);
    Entity.prototype.draw.call(this);
}


// equipment ID
var LONG_RANGE = 0;

// form IDs
var FORM_BABY = 0;
var FORM_WATERBREATHE = 1;
var FORM_ANGLER = 2;

/**
    Character (Character ID)
*/

function Character(game) {
    // Number Variables
	this.runSpeed = 4;
	this.jumpSpeed = 0; // X Velocity when jumping
	this.displacementXSpeed = 0;
	this.displacementFriction = 0.4;
    this.yVelocity = 0;
    this.xVelocity = 0; // X Velocity when hit
	this.destinationX = -1;
	this.destinationY = -1;
    this.jumpYVelocity = 9; // Max Y upwards velocity when jumping
    this.gravity = 0.4;
    this.strongAttackCost = 20; // Stamina cost of strong attacks
    this.wCost = 30;
    this.eCost = 40;
    this.staminaRegen = 0; // 0.2
    this.healthRegen = 0.0;
    this.maxHealth = 100.0;
    this.currentHealth = this.maxHealth;
    this.currentHealthTemp = this.currentHealth;
    this.maxStamina = 100.0;
    this.currentStamina = 100;
    this.currentStaminaTemp = 0;
    this.attackInput = 0; // Keyboard Input for Attack, 1 = Light, 2 = Strong
	this.attackIndex = 0;
    this.lastComboIndex = 0; // The last combo index (AA, Q, etc)
    this.lastComboStage = 0; // The last stage of your combo (1, 2, 3, etc)
    this.comboTime = 0; // The timer before the combo drops off
    this.invulnTimerMax = 40;
    this.invulnTimer = 0;
	this.stunTimer = 0;
	this.stunned = false;
	this.speedTimer = 0;
	this.ultiTimer = 0;
	this.zoomTimer = 0;
	this.telephotoTimer = 0;
	this.petalTorrentHits = 0;
    this.invincTimer = 0; //invulnerability from powerup
    this.bounceTimer = 0;
    this.ground = 425;
    this.autoDamage = 2;
    this.autoScaling = 1;
    this.qDamage = 4;
    this.qScaling = 2;
    this.wDamage = 6;
    // String Variables
	this.lastDirection = "Right";
	this.attackDirection = "Right";
    // Boolean Variables
	this.running = false;
	this.runningVertical = false;
    this.dead = false;
    this.jumping = false;
	this.dashing = false;
	this.dashTime = 0;
	this.dashIndex = 0;
    this.falling = true;
	this.attacking = false;
    this.vulnerable = true;
    this.canControl = true;
    this.hurt = false;
    this.hitByAttack = false;
    this.leftDown = false;
    this.rightDown = false;
    this.upDown = false;
    this.downDown = false;
    this.jumpDown = false;
	this.lastDirectionVertical = "Up";
	this.cooldown = 0;
	this.dashCooldown = 0;
	this.isPlayer = true;
	this.phaseTimer = 0;
	this.alternate = 0;
	this.queuedAction = "";
	this.queuedTime = 0;
	this.binded = false;
	this.phaseTick = 0;
	
	this.lastX = 0;
	this.lastY = 0;
	
	this.lastSafeX = -1;
	this.lastSafeY = -1;
	this.lastPlatform = null;
	this.teleportToX = -1;
	this.teleportToY = -1;
    
    this.timesHit = 0;
	this.currentForm = 0;
    
    this.targetHit = []; // The targets you've currently hit with your attack
	
	//equipment states
	this.equipment = [
		false
	];
      
    // Animations    	
	
	//function Animation(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop, reverse, offsetX, offsetY)
	
	//default attack animations
    this.idleAnimationDefRight = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_idle_right.png"), 0, 0, 128, 128, .1, 46, true, false, 0, 0);
    this.idleAnimationDefLeft = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_idle_left.png"), 0, 0, 128, 128, .1, 46, true, false, 0, 0);
    this.walkAnimationDefRight = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_walk_right.png"), 0, 0, 128, 128, .2, 4, true, false, 0, 0);
    this.walkAnimationDefLeft = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_walk_left.png"), 0, 0, 128, 128, .2, 4, true, false, 0, 0);
    this.jumpAnimationDefRight = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_jump_right.png"), 0, 0, 128, 128, 1, 1, true, false, 0, 0);
    this.jumpAnimationDefLeft = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_jump_left.png"), 0, 0, 128, 128, 1, 1, true, false, 0, 0);
    this.fallAnimationDefRight = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_fall_right.png"), 0, 0, 128, 128, 1, 1, true, false, 0, 0);
    this.fallAnimationDefLeft = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_fall_left.png"), 0, 0, 128, 128, 1, 1, true, false, 0, 0);
    this.hurtAnimationDefRight = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_hurt_right.png"), 0, 0, 64, 64, 1, 1, false, false, 32, 32);
    this.hurtAnimationDefLeft = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_hurt_left.png"), 0, 0, 64, 64, 1, 1, false, false, 32, 32);
    this.attackAnimationDefAirLeft = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_attack_air_left.png"), 0, 0, 128, 128, .10, 4, false, false, -32, 32);
    this.attackAnimationDefAirRight = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_attack_air_right.png"), 0, 0, 128, 128, .10, 4, false, false, 32, 32);
    this.attackAnimationDefGroundLeft = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_attack_ground_left.png"), 0, 0, 128, 128, .10, 4, false, false, -32, 32);
    this.attackAnimationDefGroundRight = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_attack_ground_right.png"), 0, 0, 128, 128, .10, 4, false, false, 32, 32);
    this.attackAnimationDefUpAirLeft = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_attackup_air_left.png"), 0, 0, 64, 144, .10, 4, false, false, 32, -48);
    this.attackAnimationDefUpAirRight = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_attackup_air_right.png"), 0, 0, 64, 144, .10, 4, false, false, 32, -48);
    this.attackAnimationDefUpGroundLeft = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_attackup_ground_left.png"), 0, 0, 64, 144, .10, 4, false, false, 32, -48);
    this.attackAnimationDefUpGroundRight = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_attackup_ground_right.png"), 0, 0, 64, 144, .10, 4, false, false, 32, -48);
    this.attackAnimationDefDownLeft = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_attackdown_left.png"), 0, 0, 64, 128, .1, 4, false, false, 32, 32);
    this.attackAnimationDefDownRight = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_attackdown_right.png"), 0, 0, 64, 128, .1, 4, false, false, 32, 32);
    this.bindAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/babyjelly_binded.png"), 0, 0, 64, 64, 1, 1, false, false, 32, 32);
    this.wokeAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/babyjelly_woke.png"), 0, 0, 64, 64, 1, 1, false, false, 32, 32);
    this.wokeAnimation2 = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/babyjelly_woke2.png"), 0, 0, 64, 64, 0.3, 2, true, false, 32, 32);
	
	//baby jelly
    this.idleAnimationBabyRight = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/babyjelly_idle_right.png"), 0, 0, 128, 128, .1, 32, true, false, 0, 0);
    this.idleAnimationBabyLeft = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/babyjelly_idle_left.png"), 0, 0, 128, 128, .1, 32, true, false, 0, 0);
    this.walkAnimationBabyRight = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/babyjelly_walk_right.png"), 0, 0, 128, 128, .2, 4, true, false, 0, 0);
    this.walkAnimationBabyLeft = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/babyjelly_walk_left.png"), 0, 0, 128, 128, .2, 4, true, false, 0, 0);
    this.jumpAnimationBabyRight = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/babyjelly_jump_right.png"), 0, 0, 128, 128, 1, 1, true, false, 0, 0);
    this.jumpAnimationBabyLeft = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/babyjelly_jump_left.png"), 0, 0, 128, 128, 1, 1, true, false, 0, 0);
    this.fallAnimationBabyRight = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/babyjelly_fall_right.png"), 0, 0, 128, 128, 1, 1, true, false, 0, 0);
    this.fallAnimationBabyLeft = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/babyjelly_fall_left.png"), 0, 0, 128, 128, 1, 1, true, false, 0, 0);
    this.hurtAnimationBabyRight = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/babyjelly_hurt_right.png"), 0, 0, 64, 64, 1, 1, false, false, 32, 32);
    this.hurtAnimationBabyLeft = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/babyjelly_hurt_left.png"), 0, 0, 64, 64, 1, 1, false, false, 32, 32);
    this.attackAnimationBabyAirLeft = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/babyjelly_attack_air_left.png"), 0, 0, 128, 128, .10, 4, false, false, -32, 32);
    this.attackAnimationBabyAirRight = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/babyjelly_attack_air_right.png"), 0, 0, 128, 128, .10, 4, false, false, 32, 32);
    this.attackAnimationBabyGroundLeft = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/babyjelly_attack_ground_left.png"), 0, 0, 128, 128, .10, 4, false, false, -32, 32);
    this.attackAnimationBabyGroundRight = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/babyjelly_attack_ground_right.png"), 0, 0, 128, 128, .10, 4, false, false, 32, 32);
	
	//long attack animations
    this.attackAnimationLongAirLeft = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_attacklong_air_left.png"), 0, 0, 128, 128, .10, 4, false, false, -32, 32);
    this.attackAnimationLongAirRight = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_attacklong_air_right.png"), 0, 0, 128, 128, .10, 4, false, false, 32, 32);
    this.attackAnimationLongGroundLeft = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_attacklong_ground_left.png"), 0, 0, 128, 128, .10, 4, false, false, -32, 0);
    this.attackAnimationLongGroundRight = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_attacklong_ground_right.png"), 0, 0, 128, 128, .10, 4, false, false, 32, 0);
    this.attackAnimationLongUpAirLeft = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_attackuplong_air_left.png"), 0, 0, 64, 144, .10, 4, false, false, 32, -48);
    this.attackAnimationLongUpAirRight = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_attackuplong_air_right.png"), 0, 0, 64, 144, .10, 4, false, false, 32, -48);
    this.attackAnimationLongUpGroundLeft = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_attackuplong_ground_left.png"), 0, 0, 64, 144, .10, 4, false, false, 32, -48);
    this.attackAnimationLongUpGroundRight = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_attackuplong_ground_right.png"), 0, 0, 64, 144, .10, 4, false, false, 32, -48);
    this.attackAnimationLongDownLeft = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_attackdownlong_left.png"), 0, 0, 64, 128, .1, 4, false, false, 32, 32);
    this.attackAnimationLongDownRight = new Animation(ASSET_MANAGER.getAsset("./img/Jelly/jelly_attackdownlong_right.png"), 0, 0, 64, 128, .1, 4, false, false, 32, 32);
	this.attackAnimation = this.attackAnimationGroundLeft;
	
	
    this.idleAnimationRight = this.idleAnimationBabyRight;
    this.idleAnimationLeft = this.idleAnimationBabyLeft;
    this.walkAnimationRight = this.walkAnimationBabyRight;
    this.walkAnimationLeft = this.walkAnimationBabyLeft;
    this.jumpAnimationRight = this.jumpAnimationBabyRight;
    this.jumpAnimationLeft = this.jumpAnimationBabyLeft;
    this.fallAnimationRight = this.fallAnimationBabyRight;
    this.fallAnimationLeft =this.fallAnimationBabyLeft;
    this.hurtAnimationRight = this.hurtAnimationBabyRight;
    this.hurtAnimationLeft =this.hurtAnimationBabyLeft;
	
    this.attackAnimationAirLeft = this.attackAnimationBabyAirLeft;
    this.attackAnimationAirRight = this.attackAnimationBabyAirRight;
    this.attackAnimationGroundLeft = this.attackAnimationBabyGroundLeft;
    this.attackAnimationGroundRight = this.attackAnimationBabyGroundRight;
    this.attackAnimationUpAirLeft = this.attackAnimationDefUpAirLeft;
    this.attackAnimationUpAirRight = this.attackAnimationDefUpAirRight;
    this.attackAnimationUpGroundLeft = this.attackAnimationDefUpGroundLeft;
    this.attackAnimationUpGroundRight = this.attackAnimationDefUpGroundRight;
    this.attackAnimationDownLeft = this.attackAnimationDefDownLeft;
    this.attackAnimationDownRight = this.attackAnimationDefDownRight;	
	
	this.idleAnimation = this.idleAnimationRight;
	this.walkAnimation = this.walkAnimationRight;
	this.jumpAnimation = this.jumpAnimationRight;
	this.fallAnimation = this.fallAnimationRight;
    
    // Hurt
    this.hurtAnimation = this.hurtAnimationLeft;
    
    this.currentAnimation = this.idleAnimationRight; // Setting starting animation
    
    Entity.call(this, game, -2300, 300);
    
    this.hitBoxDef = {
    	width: 26, height: 53, offsetX: 52, offsetY: 40, growthX: 0, growthY: 0, originalOffsetX: 52
    };
    drawHitBox(this);
}

Character.prototype = new Entity();
Character.prototype.constructor = Character;

Character.prototype.notBaby = function() { 
    this.idleAnimationRight = this.idleAnimationDefRight;
    this.idleAnimationLeft = this.idleAnimationDefLeft;
    this.walkAnimationRight = this.walkAnimationDefRight;
    this.walkAnimationLeft = this.walkAnimationDefLeft;
    this.jumpAnimationRight = this.jumpAnimationDefRight;
    this.jumpAnimationLeft = this.jumpAnimationDefLeft;
    this.fallAnimationRight = this.fallAnimationDefRight;
    this.fallAnimationLeft = this.fallAnimationDefLeft;
    this.hurtAnimationRight = this.hurtAnimationDefRight;
    this.hurtAnimationLeft =this.hurtAnimationDefLeft;
	this.currentForm = FORM_ANGLER;
}

Character.prototype.defaultAnimations = function() {
    this.attackAnimationAirLeft = this.attackAnimationDefAirLeft;
    this.attackAnimationAirRight = this.attackAnimationDefAirRight;
    this.attackAnimationGroundLeft = this.attackAnimationDefGroundLeft;
    this.attackAnimationGroundRight = this.attackAnimationDefGroundRight;
    this.attackAnimationUpAirLeft = this.attackAnimationDefUpAirLeft;
    this.attackAnimationUpAirRight = this.attackAnimationDefUpAirRight;
    this.attackAnimationUpGroundLeft = this.attackAnimationDefUpGroundLeft;
    this.attackAnimationUpGroundRight = this.attackAnimationDefUpGroundRight;
    this.attackAnimationDownLeft = this.attackAnimationDefDownLeft;
    this.attackAnimationDownRight = this.attackAnimationDefDownRight;	
}

Character.prototype.longRangeAnimations = function() {
    this.attackAnimationAirLeft = this.attackAnimationLongAirLeft;
    this.attackAnimationAirRight = this.attackAnimationLongAirRight;
    this.attackAnimationGroundLeft = this.attackAnimationLongGroundLeft;
    this.attackAnimationGroundRight = this.attackAnimationLongGroundRight;
    this.attackAnimationUpAirLeft = this.attackAnimationLongUpAirLeft;
    this.attackAnimationUpAirRight = this.attackAnimationLongUpAirRight;
    this.attackAnimationUpGroundLeft = this.attackAnimationLongUpGroundLeft;
    this.attackAnimationUpGroundRight = this.attackAnimationLongUpGroundRight;
    this.attackAnimationDownLeft = this.attackAnimationLongDownLeft;
    this.attackAnimationDownRight = this.attackAnimationLongDownRight;	
}

Character.prototype.groundSlam = function() {
	this.game.cameraShakeTime = 5;
	this.game.cameraShakeAmount = 25;
	this.game.cameraShakeDecay = 5;
	var partAmount = 40;
	playSound(boomSound2);
	for (var i = 0; i < partAmount; i++) {
		var newParticle = new Particle(PART_SECONDARY, this.hitBox.x + this.hitBox.width / 2, this.hitBox.y + this.hitBox.height, 
				-15, 15, -10, 10, -0.55, 0.5, 0, 0, 0, 50, .75, .15, true, this.game);
		var size = 10 + Math.random() * 5;
		element = new SquareElement(size, size, "#f7ffba", "#faf6be");
		newParticle.other = element;
		this.game.addEntity(newParticle);
	}
	var attackWidth = 150;
	/*var newParticle = new Particle(PART_SECONDARY, this.hitBox.x + this.hitBox.width / 2, this.hitBox.y + this.hitBox.height - 16, 
			0, 0, 0, 0, 0, 0, 0, 0, 0, 10, .75, 0, false, this.game);
	var size = this.hitBox.width;
	element = new SquareElement(attackWidth, 16, "#f7ffba", "#faf6be");
	newParticle.other = element;
	this.game.addEntity(newParticle);*/
	
	var shine = new Particle(IMG_PART, this.hitBox.x + this.hitBox.width / 2 - attackWidth / 2, this.hitBox.y + this.hitBox.height - 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 1, 0, false, this.game,
		new Animation(ASSET_MANAGER.getAsset("./img/Particle/ground_slam.png"), 0, 0, 150, 16, .08, 6, false, false, 0, 0));
	shine.highPriority = 1;
	this.game.addEntity(shine);
					
	var that = this;
	this.game.entities.forEach(function(entity) {
		if (entity instanceof Enemy && 
				Math.abs((entity.getY() + entity.hitBoxDef.offsetY + entity.hitBoxDef.height) - 
				(that.hitBox.y + that.hitBox.height)) <= 32 &&
				Math.abs((entity.getXMidpoint() - (that.hitBox.x + that.hitBox.width / 2)) <= attackWidth / 2)) {
			var targetEntity = entity;
			var damage = 25;
			applyDamage(targetEntity.x, targetEntity.y, that.game, damage, targetEntity);
			playSound(lightningSound);
			addEnergy(that.game, that.currentForm >= FORM_ANGLER ? 20 : 0);
			targetEntity.handleSideHit();
			if (that.game.player1.x + that.game.player1.hitBoxDef.offsetX + that.game.player1.hitBoxDef.width / 2 < targetEntity.x + targetEntity.displacementX + targetEntity.hitBoxDef.offsetX + targetEntity.hitBoxDef.width / 2) {
				targetEntity.displacementXSpeed = 6;
			} else {
				targetEntity.displacementXSpeed = -6;
			}
		}
	});
}

Character.prototype.hitSpike = function() {
	playSound(hitSound);
	if (this.lastDirection == "Right") {
		this.hurtAnimation = this.hurtAnimationLeft;
	} else {
		this.hurtAnimation = this.hurtAnimationRight;
	}
	this.stunTimer = 30;
	this.invulnTimer = this.invulnTimerMax;
	this.stunned = true;
	this.game.pauseTime = 5;
	this.game.addEntity(new BlackScreenFade(this.game, 30));
	console.log("teleporting to : " + this.lastSafeX);
	this.teleportToX = this.lastSafeX;
	this.teleportToY = this.lastSafeY - 3;
	this.yVelocity = 0;
	applyDamage(this.x, this.y, this.game, 20, this);
}

function cutEffect(game, ultiName, imageName) {
	playSound(cutSound);
	game.cutTime = 50;
	game.pauseTime = 100;
	setTimeout(
		function() {
			var cutChar = new Particle(IMG_PART, game.liveCamera.x + game.liveCamera.width, game.liveCamera.y + 225 , -32, -32, 0, 0, 0, 0.5, 0, 60, 20, 20, 1, 0, false, game,
				new Animation(ASSET_MANAGER.getAsset(imageName), 0, 0, 1350, 50, 1, 1, true, false, 0, 0));
			cutChar.highPriority = 1;
			game.addEntity(cutChar);
		}, 100);
	setTimeout(
		function() {			
			var textParticle = new Particle(TEXT_PART, game.liveCamera.x + game.liveCamera.width + 200, game.liveCamera.y + 350, 
					-20, -20, 0, 0, 0, 0.5, 0, 40, 20, 20, 1, 0, false, game);
			var textContent = new TextElement("", "Lucida Console", 50, "white");
			textContent.offset = 2;
			textContent.text = ultiName;
			textParticle.other = textContent;
			textParticle.highPriority = 2;
			game.addEntity(textParticle);
		}, 500);
	if (imageName.includes("jelly")) {
		setTimeout(
			function() {			
				game.player1.ultiTimer = 100;
				playSound(thunderboltSound);
			}, 1500);
		setTimeout(
			function() {			
				game.addEntity(new Bullet(game, game.player1.x, game.player1.y, 12, 22, 2, 0));
				playSound(laserSound);
			}, 2500);
		setTimeout(
			function() {			
				game.addEntity(new Bullet(game, game.player1.x, game.player1.y, -12, 22, 2, 0));
				playSound(laserSound);
			}, 2700);
		setTimeout(
			function() {			
				game.addEntity(new Bullet(game, game.player1.x, game.player1.y, 12, 22, 2, 0));
				playSound(laserSound);
			}, 2900);
		setTimeout(
			function() {			
				game.addEntity(new Bullet(game, game.player1.x, game.player1.y, -12, 22, 2, 0));
				playSound(laserSound);
				game.player1.canControl = true;
			}, 3100);
	}
}

function handleCut(game) {
	var cutLeft = new Particle(IMG_PART, game.liveCamera.x - 1600, game.liveCamera.y, 60, 60, 0, 0, 0, 0.1, 0, 150, 0, 0, 1, 0, false, game,
		new Animation(ASSET_MANAGER.getAsset("./img/Particle/ulti_cut.png"), 0, 0, 1600, 225, 1, 1, true, false, 0, 0));
	cutLeft.highPriority = 1;
	var cutRight = new Particle(IMG_PART, game.liveCamera.x + game.liveCamera.width, game.liveCamera.y + game.liveCamera.height - 225, -60, -60, 0, 0, 0, 0.1, 0, 150, 0, 0, 1, 0, false, game,
		new Animation(ASSET_MANAGER.getAsset("./img/Particle/ulti_cut.png"), 0, 0, 1600, 225, 1, 1, true, false, 0, 0));
	cutRight.highPriority = 1;
	game.addEntity(cutLeft);
	game.addEntity(cutRight);
	
}

function handleDie(game) {
	game.pauseTime = 0;
	playSound(dieSound);
	game.player1.vulnerable = false;
	var particle = new Particle(PART_GENERATOR,
			game.player1.hitBox.x + game.player1.hitBox.width / 2,
			game.player1.hitBox.y + game.player1.hitBox.height / 2, 
			0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, false, game);
	var element = new SquareElement(6 + Math.random() * 4, 6 + Math.random() * 4, "#b7f7f3", "#fbcfff");
	particle.other = element;
	game.addEntity(particle);
}

Character.prototype.update = function () {
	this.lastX = this.x;
	this.lastY = this.y;
	var that = this;
	if (this.cooldown > 0)
		this.cooldown--;
	if (this.dashCooldown > 0)
		this.dashCooldown--;
	if (this.teleportToX != -1) {
		this.x = this.teleportToX;
		this.y = this.teleportToY;
		this.xVelocity = 0;
		this.yVelocity = 0;
		this.teleportToX = -1;
		this.teleportToY = -1;
		console.log("teleporting to: " + this.x + ", " + this.y);
	} else {
		this.phaseTick++;
		if (gameStarted) {
			//game phase management
			if (this.game.currentPhase < 1) {
				startMusic.play();
				var chat = new TextBox(this.game, "./img/Chat/JellySquare.png", "awawawa!");
				this.game.addEntity(new InfoBox(this.game, "Press ↑↓←→ to move."));
				this.game.step = 0;
				//this.game.addEntity(chat);
				/*this.game.addEntity(new BigInfoBox(this.game, "Evolution Complete", "Consumed the ANGLERFISH SPIRIT",
					"Attack range and damage is increased with the power of lightning. Press [↑] or [↓] + [Z] to attack up or down.",
					new Animation(ASSET_MANAGER.getAsset("./img/UI/jelly_lightning.png"), 0, 0, 384, 192, 1, 1, true, false, -200, -200)));*/
				this.game.currentPhase = 1;
			}
			if (this.game.currentPhase == 3 && this.phaseTick > 90) { //JELLY WOKE
				if (this.phaseTick == 91)
					playSound(rumbleSound);
				var maxDiff = 100 + Math.min(800, this.phaseTick * 10);
				var chosenX = this.x - maxDiff / 2 + Math.random() * maxDiff + this.hitBoxDef.offsetX;
				var chosenY =  this.y - maxDiff / 2 + Math.random() * maxDiff + this.hitBoxDef.height + this.hitBoxDef.offsetY;
				var theDistance = getDistance(chosenX, chosenY, this.game.player1.x, this.game.player1.y);
				var newParticle = new Particle(PART_SECONDARY, chosenX, chosenY, 
						-2, 2, -2, 2, 0, 0.3, 0, 0, 0, 80, .3, .15, true, this.game);
				element = new SquareElement((10 + Math.random() * 10) * Math.min(3, this.phaseTick / 30), 
					(10 + Math.random() * 10) * Math.min(3, this.phaseTick / 30), "#a6f9ff", "#6ae2eb");
				newParticle.other = element;
				newParticle.targetX = this.game.player1.x + this.game.player1.hitBoxDef.width / 2 + this.hitBoxDef.offsetX;
				newParticle.targetY = this.game.player1.y + this.game.player1.hitBoxDef.height / 2 + this.hitBoxDef.offsetY;
				newParticle.converge = true;
				var distMultiplier = Math.min(1, theDistance / maxDiff);
				newParticle.convergeMulitplier = 10 / distMultiplier + 5;
				this.game.addEntity(newParticle);
			}
			if (this.phaseTimer > 0) {
				this.phaseTimer--;
				switch(this.game.currentPhase) {
					case 6: //brandong tp
						var newParticle = new Particle(PART_SECONDARY, 15700 + Math.random() * 150, 200 + Math.random() * 150, -3, 3, -3, 3, 0, 0.1, 0, 0, 0, 15, .2, .05, true, this.game);
						element = new SquareElement(30 + Math.random() * 20, 30 + Math.random() * 20, "#a6f9ff", "#6ae2eb");
						newParticle.other = element;
						this.game.addEntity(newParticle);
					break;
				}
				if (this.phaseTimer === 0) {
					switch(this.game.currentPhase) {
						case 4: //brandong grrrr
							this.game.player1.canControl = true;
							this.game.currentPhase = 5;
							this.game.cameraLock = false;
							this.game.cameraSpeed = 10;
							this.game.camera.minX = 1100;
							this.game.camera.maxX = 16200;
						break;
						case 6: //brandong tp
							var brandongBoss = new BrandongBoss(this.game, 15700, 200);
							this.game.currentBoss = brandongBoss;
							this.game.currentPhase = 7;
							bossMusic.play();
							var chat = new TextBox(this.game, "./img/Chat/JellySquare.png", "Are you serious?");
							this.game.addEntity(chat);
							this.game.addEntity(brandongBoss);
						break;
						case 11: //brandong dead
							var chat = new TextBox(this.game, "./img/Chat/JellySquare.png", "...");
							this.game.addEntity(chat);
							this.game.currentPhase = 12;
							//this.game.gameWon = true; //temp!
						break;
					}
				}
			}
			if (invincible) {
				this.currentHealth = 1;
			}
			if (this.dead) {
				this.running = false;
				this.runningVertical = false;
			}
			if (this.game.currentPhase >= 0 && this.game.currentPhase <= 10) {
				/*var newParticle = new Particle(VOID_GOOP, this.game.liveCamera.x + Math.random() * this.game.liveCamera.width, this.game.liveCamera.y + this.game.liveCamera.height - 1, 
						-4, 4, -6, -4, .2, 0, 0, 60, 10, 15, .5, .2, true, this.game);
				this.game.addEntity(newParticle);*/
			}
			if (this.game.currentPhase === 10 || this.game.currentPhase === 17) {
				if (this.game.liveCamera.y <= -120 && this.hitBox.y + this.hitBox.height >= this.game.liveCamera.y + 500) {
					if (mode === "easy") {
						this.yVelocity = 20;
						this.jumping = true;
						this.y = this.game.liveCamera.y + 500 - this.hitBox.height - 10;
						this.currentHealth -= 50;
						if (this.currentHealth > 0) {
							playSound(lightningSound);
						}
						var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
								0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
						var damageText = new TextElement("", "Lucida Console", 25, "red", "black");
						var damage = 50;
						damageText.text = damage;
						damageParticle.other = damageText;
						this.game.addEntity(damageParticle);
					} else if (mode === "medium") {
						this.yVelocity = 15;
						this.jumping = true;
						this.y = this.game.liveCamera.y + 500 - this.hitBox.height - 10;
						this.currentHealth -= 75;
						if (this.currentHealth > 0) {
							playSound(lightningSound);
						}
						var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
								0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
						var damageText = new TextElement("", "Lucida Console", 25, "red", "black");
						var damage = 75;
						damageText.text = damage;
						damageParticle.other = damageText;
						this.game.addEntity(damageParticle);
					} else {
						this.currentHealth = 0;
						var damageParticle = new Particle(TEXT_PART, this.game.player1.hitBox.x, this.game.player1.hitBox.y, 
								0.2, -0.2, -3, -3, 0, 0.1, 0, 5, 10, 50, 1, 0, false, this.game);
						var damageText = new TextElement("", "Lucida Console", 25, "red", "black");
						var damage = 100;
						damageText.text = damage;
						damageParticle.other = damageText;
					}
					//console.log(mode);
				}
			}
			if (this.bounceTimer > 0) {
				this.bounceTimer--;
				if (this.bounceTimer % 2 === 0) {
					var particle = new Particle(SHAPE_PART,
							this.game.player1.hitBox.x + this.game.player1.hitBox.width / 2 - 10 + Math.random() * 20,
							this.game.player1.hitBox.y + this.game.player1.hitBox.height / 2 - 10 + Math.random() * 20, 
							0, 0, 0, 0, 0, 0.1, 0, 5, 10, 50, .6, .2, true, this.game);
					var element = new SquareElement(10, 10, "#00f6cb", "#70fe37");
					particle.other = element;
					this.game.addEntity(particle);
				}
			}
			if (this.destinationX !== -1 || this.destinationY !== -1) {
				this.running = true;
				if (this.destinationX !== -1) {
					if (this.destinationX > this.x) {
						this.x = Math.min(this.destinationX, this.x + this.runSpeed);
						this.lastDirection = "Right";
					} else {
						this.x = Math.max(this.destinationX, this.x - this.runSpeed);
						this.lastDirection = "Left";
					}
					if (this.x === this.destinationX) {
						this.destinationX = -1;
						this.lastDirection = "Right";
					}
				}
				if (this.destinationY !== -1) {
					if (this.destinationY > this.y)
						this.y = Math.min(this.destinationY, this.y + this.runSpeed);
					else
						this.y = Math.max(this.destinationY, this.y - this.runSpeed);
					if (this.y === this.destinationY)
						this.destinationY = -1;
				}
			}
			if (!this.dead && gameStarted && this.currentForm == FORM_BABY && this.game.step % 30 == 0) { //baby drowns
				addEnergy(this.game, -2);
			}
			if (this.currentHealth <= 0 && !this.dead) {
				this.dead = true;
				handleDie(this.game);
			}
			if (!this.dead) {
				if (this.stunned) {
					if (this.xVelocity !== 0) { //knockback equates to stun
						this.canControl = false;
					}
					this.running = false;
					this.runningVertical = false;
					this.jumpSpeed = 0;
					this.hitBoxDef.growthX = 0;
				}
				if (this.zoomTimer > 0) { //speed gate
					this.zoomTimer--;
					fadeChaseMusicOut();
					this.x += this.xVelocity;
					if (this.zoomTimer < 50)
						this.xVelocity--;
					else {
						var particle = new Particle(SHAPE_PART,
								this.game.player1.x + 1000,
								0 + Math.random() * 500, 
								-5, -5, 0, 0, 0, 0, 0, 15, 10, 5, .6, .2, false, this.game);
						var element = new SquareElement(150, 6, "white", "white");
						particle.other = element;
						this.game.addEntity(particle);
					}
					if (this.zoomTimer === 0) {
						this.xVelocity = 0;
						var chat = new TextBox(this.game, "./img/Chat/JellySquare.png", "I think I lost him for now...");
						this.game.camera.minX = 15200;
						this.game.camera.maxX = 15200;
						this.game.camera.cameraSpeed = 5;
						this.game.addEntity(chat);
					}
					if (this.speedTimer % 3 == 0)
						this.game.addEntity(new Particle(IMG_PART, this.x, this.y, 0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 0.5, 0, false, this.game,
								this.game.player1.currentAnimation));
				}
				if (this.ultiTimer > 0) {
					if (this.ultiTimer === 600) {
						energyBarFlash(this.game);
					}
					if (this.canControl)
						this.ultiTimer--;
					if (this.ultiTimer % 1 == 0) {
						var chosenX = this.x - 30 + Math.random() * 60 + this.hitBoxDef.offsetX;
						var chosenY =  this.y - 30 + Math.random() * 60 + this.hitBoxDef.height + this.hitBoxDef.offsetY;
						var theDistance = getDistance(chosenX, chosenY, this.game.player1.x, this.game.player1.y);
						var newParticle = new Particle(PART_SECONDARY, chosenX, chosenY, 
								-2, 2, -2, 2, 0, 0.3, 0, 0, 0, 50, .3, .15, true, this.game);
						element = new SquareElement(20 + Math.random() * 20, 20 + Math.random() * 20, "#a6f9ff", "#6ae2eb");
						newParticle.other = element;
						newParticle.targetX = this.game.player1.x + this.game.player1.hitBoxDef.width / 2 + this.hitBoxDef.offsetX;
						newParticle.targetY = this.game.player1.y + this.game.player1.hitBoxDef.height / 2 + this.hitBoxDef.offsetY;
						newParticle.targetSpeed = 3 * (theDistance / 60);
						this.game.addEntity(newParticle);
					}
				}
				if (this.telephotoTimer > 0) {
					this.telephotoTimer--;
				}
				if (!this.vulnerable && this.invulnTimer > 0) {
					this.invulnTimer--;
					if (this.invulnTimer <= 0) {
						this.vulnerable = true;
						this.hurt = false;
						this.hitByAttack = false;
					}
				}
				if (this.stunTimer > 0) {
					this.stunTimer--;
					if (this.stunTimer <= 0) {
						this.stunned = false;
						this.canControl = true;
						this.xVelocity = 0;
					}
				}
				if (!this.canControl && this.stunned) { 
					this.x += this.xVelocity;
				}
				this.x += this.displacementXSpeed;
				if (this.displacementXSpeed > 0) {
					this.displacementXSpeed -= this.displacementFriction;			
					if (this.displacementXSpeed < 0)
						this.displacementXSpeed = 0;
				} else {
					this.displacementXSpeed += this.displacementFriction;			
					if (this.displacementXSpeed > 0)
						this.displacementXSpeed = 0;
				}
				if ((this.rightDown || this.leftDown) && this.canControl) {
					if (this.rightDown) {
						this.running = true;
						this.lastDirection = "Right";
					} else if (this.leftDown) {
						this.running = true;
						this.lastDirection = "Left";
					} else {
						this.running = false;
					}
				} else {
					this.running = false;
				}
				if (this.binded) {
					if (this.currentForm == FORM_BABY && this.game.step % 30 == 0) {
						this.game.cameraShakeTime = 10;
						this.game.cameraShakeAmount = 10;
						this.game.cameraShakeDecay = 1;
					} else if (this.currentForm == FORM_WATERBREATHE && this.phaseTick > 90 && this.game.step % 5 == 0) {
						this.game.cameraShakeTime = 5;
						this.game.cameraShakeAmount = 25;
						this.game.cameraShakeDecay = 5;
						
					}
				}
		
				var platformFound = false;
				var wallFound = false;
				this.game.currentMap.platforms.forEach(function(currentPlatform) {
					currentPlatform.update();
					if ((that.hitBox.x + that.hitBox.width) > currentPlatform.hitBox.x) {
						if (that.hitBox.x < (currentPlatform.hitBox.x + currentPlatform.hitBox.width - 1)) {
							if ((that.hitBox.y + that.hitBox.height) + currentPlatform.vSpeed <= currentPlatform.hitBox.y || (that.hitBox.y + that.hitBox.height) - currentPlatform.vSpeed <= currentPlatform.hitBox.y) {
								if ((that.hitBox.y + that.hitBox.height - (that.yVelocity - that.gravity )) >= currentPlatform.hitBox.y) {
									if (currentPlatform.fadeAmount >= 0.5) {
										//fall through
									} else {
										if (currentPlatform.specialId == PLATFORM_BREAK && !currentPlatform.trigger) {
											currentPlatform.trigger = true;
											currentPlatform.step = 0;
										}
										platformFound = true;
										if (currentPlatform.specialId == 0 && currentPlatform.hSpeed == 0 && currentPlatform.vSpeed == 0) {
											that.lastSafeX = that.x;
											that.lastSafeY = that.y;
										}
										if (currentPlatform.isWall) {
											wallFound = true;
										}
										if (currentPlatform.isWall && currentPlatform.specialId == WALL_SPIKE_UP && !that.stunned) {
											if (that.attacking && that.attackIndex == 2) {
												playSound(hitMetal);
												if (that.falling || that.jumping) {
													that.yVelocity = 8;
												}
											} else {
												that.hitSpike();
											}
										} else if (!currentPlatform.isWall && currentPlatform.specialId === PLATFORM_BOUNCY) { //bouncy platform
											that.yVelocity = 15;
											that.bounceTimer = 30;
											that.jumpSpeed = 0;
											that.jumping = true;
											playSound(bounceSound);
										} else {
											that.x += currentPlatform.hSpeed;
											that.y += currentPlatform.vSpeed;
											that.yVelocity = 0;
											if (that.dashIndex == 1) {
												that.dashing = false;
												that.dashTime = 0;
												that.dashIndex = 0;
												that.groundSlam();
											}
											if (that.falling) {
												that.falling = false;
												that.yVelocity = 0;
												that.y = currentPlatform.hitBox.y - that.hitBox.height - that.hitBoxDef.offsetY;
											}
										}
									}
								}
							}
						}
					}
				});
				if (this.jumpDown && !this.jumping && !this.falling && this.canControl) {
					this.jumping = true;
					playSound(jumpSound);
					if (this.downDown && platformFound && !wallFound) {
						this.yVelocity = -1; //drop through
						console.log("dropping");					
					} else {
						this.yVelocity = this.jumpYVelocity;
					}
					if (this.rightDown) {
						this.lastDirection = "Right";
						this.jumpSpeed = this.runSpeed;
					} else if (this.leftDown) {
						this.lastDirection = "Left";
						this.jumpSpeed = -this.runSpeed;
					} else {
						this.jumpSpeed = 0;
					}
				}
				if (this.queuedTime > 0) {
					this.queuedTime--;
					if (this.queuedTime == 0) {
						this.queuedAction = "";
					}
				}
				if ((this.queuedAction == "Dash" || this.attackInput == 2) && this.canControl) {
					if (this.dashCooldown === 0) {
						if (this.queuedAction == "Dash") {
							this.queuedAction = "";
							this.queuedTime = 0;
						}
						if (!this.dashing) {
							this.dashCooldown = 30;
							
							this.targetHit = [];
							this.attacking = false;
							this.dashing = true;
							this.dashTime = 10;
							if (this.leftDown)
								this.attackDirection = "Left";
							else if (this.rightDown)
								this.attackDirection = "Right";
							else
								this.attackDirection = this.lastDirection;
							playSound(slashSound);
							if (this.currentForm >= FORM_ANGLER) {
								if (this.downDown && (this.falling || this.jumping) && this.yVelocity != 0)
									this.dashIndex = 1;
							}
						}
					} else if (this.attackInput == 2) { //queue up the attack
						this.queuedAction = "Dash";
						this.queuedTime = 10;
					}
				}
				if ((this.queuedAction == "Attack" || this.attackInput == 1) && this.canControl) {
					if (this.cooldown === 0) {
						if (this.queuedAction == "Attack") {
							this.queuedAction = "";
							this.queuedTime = 0;
						}
						if (!this.attacking) {
							this.cooldown = 30;
							
							this.targetHit = [];
							this.attacking = true;
							this.attackIndex = 1;
							this.dashing = false;
							this.dashTime = 0;
							if (this.leftDown)
								this.attackDirection = "Left";
							else if (this.rightDown)
								this.attackDirection = "Right";
							else
								this.attackDirection = this.lastDirection;
							if (this.currentForm >= FORM_ANGLER) {
								if (this.downDown && (this.falling || this.jumping) && this.yVelocity != 0)
									this.attackIndex = 2;
								else if (this.upDown)
									this.attackIndex = 3;
								playSound(autoSound);
							} else {
								playSound(slashSound);
							}
						}
					} else if (this.attackInput == 1) { //queue up the attack
						this.queuedAction = "Attack";
						this.queuedTime = 10;
					}
				}
				
				//extended hitboxes
				var xBonus = 0;
				var yBonus = 0;
				var attackRange = this.currentForm < FORM_ANGLER ? 32 : 48;
				if (this.equipment[LONG_RANGE]) {
					attackRange = 72;
				}
				if (this.attackIndex > 0 && this.canControl) {
					switch(this.attackIndex) {
						case 1: //side attack
							if (this.falling || this.jumping) {
								if (this.attackDirection === "Right") {
									this.attackAnimation = this.attackAnimationAirRight;
									xBonus = attackRange;
								} else {
									this.attackAnimation = this.attackAnimationAirLeft;
									xBonus = -1 * attackRange;
								}
							} else {
								if (this.attackDirection === "Right") {
									this.attackAnimation = this.attackAnimationGroundRight;
									xBonus = attackRange;
								} else {
									this.attackAnimation = this.attackAnimationGroundLeft;
									xBonus = -1 * attackRange;
								}
							}
						break;
						case 2: //down attack
							yBonus = attackRange;
							if (this.attackDirection === "Right") {
								xBonus = 12;
								this.attackAnimation = this.attackAnimationDownRight;
							} else {
								xBonus = -12;
								this.attackAnimation = this.attackAnimationDownLeft;
							}
						break;
						case 3: //up attack
							yBonus = -1 * attackRange;
							if (this.falling || this.jumping) {
								if (this.attackDirection === "Right") {
									xBonus = 12;
									this.attackAnimation = this.attackAnimationUpAirRight;
								} else {
									xBonus = -12;
									this.attackAnimation = this.attackAnimationUpAirLeft;
								}
							} else {
								if (this.attackDirection === "Right") {
									xBonus = 12;
									this.attackAnimation = this.attackAnimationUpGroundRight;
								} else {
									xBonus = -12;
									this.attackAnimation = this.attackAnimationUpGroundLeft;
								}							
							}
						break;
					}
				}
				
				if (!platformFound && !this.jumping) {
					if (!this.falling) {
						this.falling = true;
						if (!this.attacking) {
							if (this.rightDown) {
								this.lastDirection = "Right";
								this.jumpSpeed = this.runSpeed;
							} else if (this.leftDown) {
								this.lastDirection = "Left";
								this.jumpSpeed = -this.runSpeed;
							} else {
								this.jumpSpeed = 0;
							}
						}
					}
				}
				
				// Animation Direction Control
				if (this.lastDirection === "Right") {
					this.idleAnimation = this.idleAnimationRight;
				} else {
					if (this.canControl) {
						this.idleAnimation = this.idleAnimationLeft;
					}
				}
				var noSnap = false;
				var collision = false;
				var targetEntity = null;
				var lowestDistance = 99999999;
				if (this.attacking) { //hit enemy
					this.game.entities.forEach(function(entity) {
						if (entity.attackable && that.targetHit.indexOf(entity) === -1 && that.targetHit.length == 0) {
							if (checkCollision(that, entity, xBonus, yBonus) && !checkCollision(that, entity)) {
								var playerMidpointX = that.x + that.hitBoxDef.offsetX + that.hitBoxDef.width / 2;
								var playerMidpointY = that.y + that.hitBoxDef.offsetY + that.hitBoxDef.height / 2;
								var distance = getDistance(playerMidpointX, playerMidpointY, entity.getXMidpoint(), entity.getYMidpoint());
								if (distance < lowestDistance || targetEntity == null) {
									targetEntity = entity;
									lowestDistance = distance;
								}
							}
						}
					});
					if (targetEntity != null) {
						console.log("entity y: " + (targetEntity.y + targetEntity.invulnFromTop + targetEntity.hitBoxDef.offsetY) + "; player y: " + (this.game.player1.y + this.game.player1.hitBoxDef.height + this.game.player1.hitBoxDef.offsetY));
						if (targetEntity.meleeInvuln) {
							playSound(hitMetal);
							this.game.player1.targetHit.push(targetEntity);
							
						} else if (targetEntity.invulnFromTop > 0 &&
								(((targetEntity.y + targetEntity.invulnFromTop + targetEntity.hitBoxDef.offsetY) > (this.game.player1.y + this.game.player1.hitBoxDef.height + this.game.player1.hitBoxDef.offsetY)
								) || this.game.player1.attackIndex == 2)) {
							playSound(hitMetal);
							this.game.player1.targetHit.push(targetEntity);
						} else {
							var createX;
							var createY;
							if (Math.abs(xBonus) > 20) {
								createX = this.game.player1.x + (xBonus > 0 ? this.game.player1.hitBoxDef.width : 0) + xBonus + this.game.player1.hitBoxDef.offsetX;
								createY = this.game.player1.y + this.game.player1.hitBoxDef.height / 2 + this.game.player1.hitBoxDef.offsetY;
							} else {
								createX = this.game.player1.x + this.game.player1.hitBoxDef.width / 2 + this.game.player1.hitBoxDef.offsetX;
								createY = this.game.player1.y + (yBonus > 0 ? this.game.player1.hitBoxDef.height : 0) + this.game.player1.hitBoxDef.offsetY;
							}
							var partAmount = this.currentForm < FORM_ANGLER ? 3 : 6;
							for (var i = 0; i < partAmount; i++) {
								var newParticle = new Particle(PART_SECONDARY, createX, createY, 
										-5, 5, -5, 5, 0, 0.15, 0, 0, 0, 50, .75, .15, true, this.game);
								element = new CircleElement(5 + Math.random() * 3, "#f7ffba", "#faf6be");
								newParticle.other = element;
								this.game.addEntity(newParticle);
							}
							this.game.player1.targetHit.push(targetEntity);
							var damage = 25;
							if (this.currentForm < FORM_ANGLER) //baby
								damage = 15;
							applyDamage(targetEntity.x, targetEntity.y, this.game, 15, targetEntity);
							playSound(this.currentForm < FORM_ANGLER ? shotHitSound : lightningSound);
							addEnergy(this.game, this.currentForm >= FORM_ANGLER ? 20 : 0);
						}
						switch(this.game.player1.attackIndex) {
							case 1: //side hit
								//targetEntity.displacementXTarget = 64;
								//targetEntity.displacementTimeMax = 10;
								//console.log("side hit! your X: " + (this.game.player1.x + this.game.player1.hitBoxDef.offsetX + this.game.player1.hitBoxDef.width / 2) + "; their X: " + (targetEntity.x + targetEntity.displacementX + targetEntity.hitBoxDef.offsetX + targetEntity.hitBoxDef.width / 2));
								targetEntity.handleSideHit();
								if (this.game.player1.x + this.game.player1.hitBoxDef.offsetX + this.game.player1.hitBoxDef.width / 2 < targetEntity.x + targetEntity.displacementX + targetEntity.hitBoxDef.offsetX + targetEntity.hitBoxDef.width / 2) {
									targetEntity.displacementXSpeed = 6;
									this.game.player1.displacementXSpeed = -6;
								} else {
									targetEntity.displacementXSpeed = -6;
									this.game.player1.displacementXSpeed = 6;
								}
							break;
							case 2: //down hit
								this.game.player1.yVelocity = 8;
								targetEntity.displacementYSpeed = 5;
							break;
							case 3: //up hit
								targetEntity.displacementYSpeed = -5;
								if (this.game.player1.falling || this.game.player1.jumping) {
									this.game.player1.yVelocity = -5;
								}
							break;
						}
					}
					if (this.attackAnimation != null && this.attackAnimation.isDone()) {
						this.attackAnimation.elapsedTime = 0;
						this.attacking = false;
						this.attackIndex = 0;
						noSnap = true;
					}
				}
				if (this.invincTimer > 0) {
					this.invincTimer--;
					if (this.invincTimer % 4 === 0) {
						var particle = new Particle(SHAPE_PART,
								this.game.player1.hitBox.x + this.game.player1.hitBox.width / 2 - 10 + Math.random() * 20,
								this.game.player1.hitBox.y + this.game.player1.hitBox.height * Math.random(), 
								2, -2, 2, -2, 0, 0.05, 0, 5, 10, 50, 1, 0, false, this.game);
						var element = new SquareElement(4 + Math.random() * 4, 4 + Math.random() * 4, "#ffffff", "#ffffff");
						particle.other = element;
						this.game.addEntity(particle);
					}
				}
			}
		}
		
		if (this.lastDirection === "Right") {
			this.jumpAnimation = this.jumpAnimationRight;
			this.fallAnimation = this.fallAnimationRight;
			this.idleAnimation = this.idleAnimationRight;
			this.walkAnimation = this.walkAnimationRight;
		} else {
			this.jumpAnimation = this.jumpAnimationLeft;
			this.fallAnimation = this.fallAnimationLeft;
			if (this.canControl) {
				this.idleAnimation = this.idleAnimationLeft;
			}
			this.walkAnimation = this.walkAnimationLeft;
		}
		var moveSpeed = this.runSpeed;
		if (this.speedTimer > 0)
			moveSpeed *= 1.6;
		if (this.dashing) { //ignore all other input
			if (this.dashTime % 3 == 0)
				this.game.addEntity(new Particle(IMG_PART, this.x, this.y, 0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 0.3, 0, false, this.game, this.currentAnimation));
			this.dashTime -= 1;
			this.yVelocity = 0;
			if (this.dashIndex == 0) {
				if (this.attackDirection == "Right")
					this.x += moveSpeed * 3;
				else
					this.x -= moveSpeed * 3;
			} else { //down dash
				this.yVelocity = moveSpeed * -3;
				this.y -= this.yVelocity;    
				this.falling = true;
				this.jumping = false;
			}
			if (this.dashTime <= 0) {
				this.dashing = false;
				this.dashIndex = false;
			}
		} else {
			if (this.running) {
				if (this.lastDirection === "Right") {
					this.x += moveSpeed;
				} else if (this.lastDirection === "Left") {
					this.x -= moveSpeed;
				}
			}
			/*if (this.runningVertical) {
				if (this.lastDirectionVertical === "Up") {
					this.y -= moveSpeed;
				} else if (this.lastDirectionVertical === "Down") {
					this.y += moveSpeed;
				}*/
			if (this.jumping || this.falling) {
				this.yVelocity-= this.gravity;  
				this.y -= this.yVelocity;    
			}
			if (this.jumping && this.yVelocity <= 0) {
				this.falling = true;
				this.jumping = false;
			}
		}
		if (this.falling && (this.hitBox.y + this.hitBox.height - this.hitBoxDef.offsetY) >= this.ground) {
			this.yVelocity = 0;
			this.falling = false;
			this.y = this.ground - this.hitBox.height;
			this.lastSafeX = that.x;
			this.lastSafeY = that.y;
			if (that.dashIndex == 1) {
				that.dashing = false;
				that.dashTime = 0;
				that.dashIndex = 0;
				that.groundSlam();
			}
		}
		if (this.running && !platformFound && !this.falling && !this.jumping) {
			this.lastSafeX = that.x;
			this.lastSafeY = that.y;
		}
		/*if (this.hitBox.x + this.hitBoxDef.width >= this.game.camera.maxX + this.game.surfaceWidth && (this.lastDirection === "Right" || this.hurt)) {
			this.x = this.game.camera.maxX + this.game.surfaceWidth - this.hitBoxDef.width - this.hitBoxDef.offsetX;
		}
		if (this.hitBox.x + this.hitBox.width - this.hitBoxDef.width <= this.game.camera.minX && (this.lastDirection === "Left" || this.hurt)) {
			this.x = this.game.camera.minX + 0 - this.hitBoxDef.offsetX;
		}*/
		this.game.currentMap.platforms.forEach(function(currentPlatform) {
			if (currentPlatform.isWall) {
				if (that.hitBox.x + that.hitBox.width > currentPlatform.x && that.hitBox.x < currentPlatform.x + currentPlatform.width - 1) {
					if (that.lastY + that.hitBoxDef.offsetY > currentPlatform.y + currentPlatform.height && that.y + that.hitBoxDef.offsetY < currentPlatform.y + currentPlatform.height) {
						that.y = currentPlatform.y + currentPlatform.height - that.hitBoxDef.growthY - that.hitBoxDef.offsetY;
						that.yVelocity = 0;
						that.jumping = false;
						that.falling = true;		
						if (currentPlatform.specialId == WALL_SPIKE_DOWN && !that.stunned) {
							if (that.attacking && that.attackIndex == 3) {
								playSound(hitMetal);
								if (that.falling || that.jumping) {
									that.yVelocity = -5;
								}
							} else {
								that.hitSpike();
							}
						}
					}
				}
				if (that.hitBox.y + that.hitBox.height > currentPlatform.y && that.hitBox.y < currentPlatform.y + currentPlatform.height) {
					if (that.hitBox.x < currentPlatform.x && that.hitBox.x + that.hitBox.width >= currentPlatform.x && (that.lastDirection == "Right" || that.displacementXSpeed > 0 || that.xVelocity > 0)) {
						platformFound = true;
						that.x = currentPlatform.x - that.hitBox.width - that.hitBoxDef.offsetX;
						if (currentPlatform.specialId == WALL_SPIKE_LEFT && !that.stunned) {
							if (that.attacking && that.attackIndex == 1) {
								playSound(hitMetal);
								that.displacementXSpeed = 6;
							} else {
								if (!that.falling && !that.jumping) {
									console.log("last safe X: " + that.lastSafeX);
									that.lastSafeX = that.x + 20;
									console.log("last safe X: " + that.lastSafeX);
								}
								that.hitSpike();
							}
						}
					} else if (that.hitBox.x < currentPlatform.x + currentPlatform.width && that.hitBox.x + that.hitBox.width >= currentPlatform.x + currentPlatform.width && (that.lastDirection == "Left" || that.displacementXSpeed < 0 || that.xVelocity < 0)) {
						platformFound = true;
						that.x = currentPlatform.x + currentPlatform.width - that.hitBoxDef.growthX - that.hitBoxDef.offsetX - 1;
						if (currentPlatform.specialId == WALL_SPIKE_RIGHT && !that.stunned) {
							if (that.attacking && that.attackIndex == 1) {
								playSound(hitMetal);
								that.displacementXSpeed = -6;
							} else {
								if (!that.falling && !that.jumping) {
									console.log("last safe X: " + that.lastSafeX);
									that.lastSafeX = that.x - 20;
									console.log("last safe X: " + that.lastSafeX);
								}
								that.hitSpike();
							}
						}
					}
				} 
			}
		});
		if (this.hitBox.x + this.hitBoxDef.width >= this.game.camera.x + this.game.camera.width) {
			this.x = this.game.camera.x + this.game.camera.width - this.hitBoxDef.width - this.hitBoxDef.offsetX - 4;
		}
		if (this.hitBox.x + this.hitBox.width - this.hitBoxDef.width <= this.game.camera.x) {
			this.x = this.game.camera.x + 0 - this.hitBoxDef.offsetX + 4;
		}
		if (this.hitBox.y + this.hitBoxDef.height >= this.game.camera.maxY + this.game.surfaceHeight && (this.lastDirectionVertical === "Down")) {
			this.y = this.game.camera.maxY + this.game.surfaceHeight - this.hitBoxDef.height - this.hitBoxDef.offsetY;
		}
		if (this.hitBox.y + this.hitBox.height - this.hitBoxDef.height <= this.game.camera.minY) {
			this.y = this.game.camera.minY + 1 - this.hitBoxDef.offsetY;
			this.yVelocity = -1;
		}
		if (this.x <= 0 && this.game.currentPhase === 0) {
			this.x = 0;
		}
	}
    
    Entity.prototype.update.call(this);
};

Character.prototype.draw = function (ctx) {
	if (!this.dead) {
		if (this.petalTorrentHits > 0) {
			var animation = new Animation(ASSET_MANAGER.getAsset("./img/UI/shuriken_small.png"), 0, 0, 32, 32, 1, 1, false, false, 0, 0);
			animation.drawFrame(this.game.clockTick, ctx, this.x + 20, this.y - 25, 1, true);
			ctx.font = "20px Calibri"; 
			ctx.fillStyle = "white";
			ctx.align = "Left";
			ctx.fillText(this.petalTorrentHits, this.x + 20 + 32, this.y - 10 + 6);
		}
		var doNotDraw = false;
		if (this.binded) {
			if (this.currentForm == FORM_BABY)
				this.currentAnimation = this.bindAnimation;
			else if (this.phaseTick <= 90)
				this.currentAnimation = this.wokeAnimation;
			else {
				if (this.phaseTick == 91) {
					playSound(boomSound);
					var newParticle = new Particle(IMG_PART, this.game.liveCamera.x - 50, this.game.liveCamera.y - 30, 
							0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0.3, 0, false, this.game,
							new Animation(ASSET_MANAGER.getAsset("./img/Particle/flash.png"), 0, 0, 907, 564, 0.3, 1, true, false, 0, 0));
					this.game.addEntity(newParticle);
				}
				this.currentAnimation = this.wokeAnimation2;
			}
		} else if (this.stunned) {
			this.currentAnimation = this.hurtAnimation;
		} else if (this.attacking && this.attackAnimation != null) { // Attacking
	        this.currentAnimation = this.attackAnimation;
	    } else if (this.jumping) {
			this.currentAnimation = this.jumpAnimation;
		} else if (this.falling) {
			this.currentAnimation = this.fallAnimation;
		} else if (this.running) { // Running
	        this.currentAnimation = this.walkAnimation;
	    } else {
			this.currentAnimation = this.idleAnimation;
		}
		//ctx.drawImage(ASSET_MANAGER.getAsset("./img/Misc/debug.png"), this.lastSafeX + this.currentAnimation.offsetX + 16 + this.hitBoxDef.offsetX, 
			//this.lastSafeY + this.currentAnimation.offsetY + 16 + this.hitBoxDef.offsetY);
		if (!this.vulnerable) {
			if (this.game.step % 4 !== 0) {
				doNotDraw = true;
			}
		}
		if (!doNotDraw)
			this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x + this.currentAnimation.offsetX, this.y + this.currentAnimation.offsetY, 1, true);
		else {
			ctx.globalAlpha = 0.1;
			this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x + this.currentAnimation.offsetX, this.y + this.currentAnimation.offsetY, 1, true);
			ctx.globalAlpha = 1;
		}
	    drawHitBox(this, ctx);
	}
    Entity.prototype.draw.call(this);
};

function Chicken(game, x, y, hspeed, vspeed, haccel, vaccel, mode) {
	// Number Variables
	this.game = game;
	this.x = x;
	this.y = y;
	this.hspeed = hspeed || 0;
	this.vspeed = vspeed || 0;
	this.haccel = haccel || -0.05;
	this.vaccel = vaccel || 0;
	this.mode = mode || 0; //1 = wave up, 2 = wave down
	if (mode !== 0)
		this.haccel = 0;
	this.alpha = 1;
	this.step = 0;
    this.walkSpeed = 5;
    this.autoDamage = 15;
    this.spawnCount = 0;
    this.spawnTimer = 0;
    this.destinationX = -1;
    this.attackIndex = 0;
    this.attackCount = 0;
    this.hurtTimer = 0;
    this.energy = 0; //denotes if an attack is charged
	this.scoreValue = 100;
    this.idleTimerMax = 110;
    this.idleTimer = this.idleTimerMax;
    this.maxHealth = 10.0;
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
	this.movementTimer = 30;


    this.cooldown = [];
    
    // Animations
	this.idleLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/chicken.png"), 0, 0, 64, 64, 0.25, 2, true, false, 0, 0);
    this.idleAnimation = this.idleLeft;
    this.currentAnimation = this.idleLeft;
    
    this.hitBoxDef = {
    	width: 46, height: 46, offsetX: 9, offsetY: 9, growthX: 0, growthY: 0
    };
    drawHitBox(this);
}

Chicken.prototype.update = function() {
    for (i = 0; i < this.cooldown.length; i++) {
        if (this.cooldown[i] > 0)
            this.cooldown[i]--;
    }
	if (this.hurtTimer > 0)
		this.hurtTimer--;
	if (this.bounceCd > 0)
		this.bounceCd--;
	if (!onYBoundary(this) && this.activated && this.bounceCd === 0 && this.mode === 0) {
		this.vspeed *= -1;
		this.vaccel *= -1;
		this.bounceCd = 30;
	}
	if (this.vspeed >= 10)
		this.vspeed = 10;
	if (this.vspeed <= -10)
		this.vspeed = -10;
	if (readyToMove(this)) {
		this.step++;
		/*if (this.step >= 30) {
			this.hspeed += this.haccel;
			this.vspeed += this.vaccel;
			this.x += this.hspeed;
			this.y += this.vspeed;
		}
		if (this.mode !== 0 && !this.activated) {
			if (this.mode === 1) {
				this.vspeed = -5;
				this.vaccel = 0.25;
			} else {
				this.vspeed = 5;
				this.vaccel = -0.25;
			}
		}
		if (this.mode === 1 && this.vspeed >= 5) {
			this.vaccel = -0.25;
			this.mode = 2;
		} else if (this.mode === 2 && this.vspeed <= -5){
			this.vaccel = 0.25;
			this.mode = 1;
		}*/
		this.activated = true;
		if (checkCollision(this, this.game.player1) && !this.game.player1.hitByAttack) {
			if (this.game.player1.vulnerable && this.game.player1.invincTimer === 0) {
				this.game.player1.vulnerable = false;
				applyDamage(this.game.player1.x, this.game.player1.y, this.game, this.autoDamage, this.game.player1);
				this.game.player1.hitByAttack = true;
                this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
				playSound(hitSound);
				if (this.game.player1.lastDirection == "Left") {
					this.game.player1.hurtAnimation = this.game.player1.hurtAnimationLeft;
				} else {
					this.game.player1.hurtAnimation = this.game.player1.hurtAnimationRight;
				}
			}
		}
	}
	
	if (this.currentHealth <= 0) {
		this.dead = true;
	    this.removeFromWorld = true;
		addScore(this.game, this.scoreValue);
	}
}

Chicken.prototype.draw = function (ctx) {
    if (!this.dead) {
		this.idleAnimation.drawFrame(this.game.clockTick, ctx, this.x + this.idleAnimation.offsetX, this.y + this.idleAnimation.offsetY, 1, false, this.hurtTimer > 0 ? "red" : null);
		this.currentAnimation = this.idleAnimation;
	}
    
    drawHitBox(this, ctx);
    
    Entity.prototype.draw.call(this);
};

function Boar(game, x, y) {
	// Number Variables
	this.game = game;
	this.x = x;
	this.y = y;
	this.hspeed = 0;
	this.vspeed = 0;
	this.alpha = 1;
	this.step = 0;
    this.walkSpeed = 5;
    this.autoDamage = 25;
    this.spawnCount = 0;
    this.spawnTimer = 0;
    this.destinationX = -1;
    this.attackIndex = 0;
    this.attackCount = 0;
    this.hurtTimer = 0;
    this.energy = 0; //denotes if an attack is charged
	this.scoreValue = 300;
    this.idleTimerMax = 110;
    this.idleTimer = this.idleTimerMax;
    this.maxHealth = 50.0;
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
	this.hit = false;
	this.phase = 1;
	this.speedCap = 16;

    this.cooldown = [];
    
    // Animations
	this.idleLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/boar_idle.png"), 0, 0, 96, 77, 1, 1, true, false, 0, 0);
	this.prepAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/boar_prep.png"), 0, 0, 96, 77, 1, 1, true, false, 0, 0);
	this.chargeAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/boar_charge.png"), 0, 0, 96, 77, 1, 1, true, false, 0, 0);
    this.idleAnimation = this.idleLeft;
    this.currentAnimation = this.idleLeft;
    
    this.hitBoxDef = {
    	width: 64, height: 46, offsetX: 16, offsetY: 15, growthX: 0, growthY: 0
    };
    drawHitBox(this);
}

Boar.prototype.update = function() {
    for (i = 0; i < this.cooldown.length; i++) {
        if (this.cooldown[i] > 0)
            this.cooldown[i]--;
    }
	if (this.bounceCd > 0)
		this.bounceCd--;
	if (this.hurtTimer > 0)
		this.hurtTimer--;
	if (readyToMove(this)) {
		this.step++;
		if (this.step >= 100 && this.phase === 1) { //prepare charge
			this.phase = 2;
		}
		if (this.step >= 200 && this.phase === 2) { //charge!
			this.phase = 3;
			if (!this.game.player1.dead) {
				var dx = this.game.player1.x - this.x;
				var dy = this.game.player1.y - this.y;
				this.vspeed = dy / 50;
				this.hspeed = dx / 50;
				if (this.hspeed > -10)
					this.hspeed = -10;
			} else {
				this.hspeed = -16;
			}
			
		}
		this.x += this.hspeed;
		this.y += this.vspeed;
		this.activated = true;
		if (checkCollision(this, this.game.player1) && !this.game.player1.hitByAttack) {
			if (this.game.player1.vulnerable && this.game.player1.invincTimer === 0) {
				this.game.player1.vulnerable = false;
				applyDamage(this.game.player1.x, this.game.player1.y, this.game, this.autoDamage, this.game.player1);
				this.game.player1.hitByAttack = true;
                this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
				if (this.phase === 3)
					this.game.player1.xVelocity = -3;
				playSound(hitSound);
				if (this.game.player1.lastDirection == "Left") {
					this.game.player1.hurtAnimation = this.game.player1.hurtAnimationLeft;
				} else {
					this.game.player1.hurtAnimation = this.game.player1.hurtAnimationRight;
				}
			}
		}
	}
	
	if (this.currentHealth <= 0) {
		this.dead = true;
	    this.removeFromWorld = true;
		addScore(this.game, this.scoreValue);
	}
}

Boar.prototype.draw = function (ctx) {
    if (!this.dead) {
		if (this.phase === 3)
			this.chargeAnimation.drawFrame(this.game.clockTick, ctx, this.x + this.chargeAnimation.offsetX, this.y + this.chargeAnimation.offsetY);
		else if (this.phase === 2)
			this.prepAnimation.drawFrame(this.game.clockTick, ctx, this.x + this.prepAnimation.offsetX, this.y + this.prepAnimation.offsetY);
		else
			this.idleAnimation.drawFrame(this.game.clockTick, ctx, this.x + this.idleAnimation.offsetX, this.y + this.idleAnimation.offsetY);
	}
    
    drawHitBox(this, ctx);
    
    Entity.prototype.draw.call(this);
};

function Aya(game, x, y) {
	// Number Variables
	this.game = game;
	this.x = x;
	this.y = y;
	this.hspeed = 0;
	this.vspeed = 0;
	this.alpha = 1;
	this.step = 0;
    this.walkSpeed = 5;
    this.autoDamage = 25;
    this.spawnCount = 0;
    this.spawnTimer = 0;
    this.destinationX = -1;
    this.attackIndex = 0;
    this.attackCount = 0;
    this.hurtTimer = 0;
    this.energy = 0; //denotes if an attack is charged
	this.scoreValue = 750;
    this.idleTimerMax = 110;
    this.idleTimer = this.idleTimerMax;
    this.maxHealth = 120.0;
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
	this.hit = false;
	this.phase = 1;
	this.shootFrames = 0;

    this.cooldown = [120];
    
    // Animations
	this.idleLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/aya.png"), 0, 0, 192, 128, 1, 1, true, false, 0, 0);
	this.shootAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/aya_shoot.png"), 0, 0, 192, 128, 1, 1, true, false, 0, 0);
    this.idleAnimation = this.idleLeft;
    this.currentAnimation = this.idleLeft;
    
    this.hitBoxDef = {
    	width: 90, height: 80, offsetX: 93, offsetY: 18, growthX: 0, growthY: 0
    };
    drawHitBox(this);
}

Aya.prototype.update = function() {
	if (readyToMove(this) || this.activated) {
		for (i = 0; i < this.cooldown.length; i++) {
			if (this.cooldown[i] > 0)
				this.cooldown[i]--;
		}
		if (this.step >= 90 && this.hspeed === 0) {
			this.hspeed = 2;
		} else if (this.step >= 450) {
			this.hspeed = -4;
		}
		this.shootFrames--;
		this.step++;
		if (this.cooldown[0] === 0) { //bang bang
			this.shootFrames = 10;
			if (this.phase === 1) {
				playSound(ayaSound);
				this.cooldown[0] = 15; 
				this.phase = 2;
			} else {
				this.cooldown[0] = 180; 
				this.phase = 3;				
			}
			var bulletHSpeed = 0;
			var bulletVSpeed = 0;
			var newParticle = new Particle(PART_SECONDARY, this.x + 5, this.y + 70, 
					bulletHSpeed, bulletHSpeed, bulletVSpeed, bulletVSpeed, 0, 0, 0, 0, 0, 120, .8, .1, false, this.game);
			element = new CircleElement(8 + Math.random() * 3, "#ff4e21", "#ff7c2b");
			newParticle.other = element;
			newParticle.attackId = AYA_SHOT;
			newParticle.targetX = this.game.player1.x + this.game.player1.hitBoxDef.width / 2;
			newParticle.targetY = this.game.player1.y + this.game.player1.hitBoxDef.height / 2;
			newParticle.targetSpeed = 14;
			this.game.addEntity(newParticle);
		} else if (this.cooldown[0] <= 150 && this.phase === 3) {
			this.phase = 1;
		}
		this.x += this.hspeed;
		this.y += this.vspeed;
		this.activated = true;
		if (checkCollision(this, this.game.player1) && !this.game.player1.hitByAttack) {
			if (this.game.player1.vulnerable && this.game.player1.invincTimer === 0) {
				this.game.player1.vulnerable = false;
				applyDamage(this.game.player1.x, this.game.player1.y, this.game, this.autoDamage, this.game.player1);
				this.game.player1.hitByAttack = true;
                this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
				playSound(hitSound);
				if (this.game.player1.lastDirection == "Left") {
					this.game.player1.hurtAnimation = this.game.player1.hurtAnimationLeft;
				} else {
					this.game.player1.hurtAnimation = this.game.player1.hurtAnimationRight;
				}
			}
		}
	}
	
	if (!isOnScreen(this) && this.activated) {
		this.dead = true;
	    this.removeFromWorld = true;
	}
	if (this.currentHealth <= 0) {
		this.dead = true;
	    this.removeFromWorld = true;
		addScore(this.game, this.scoreValue);
	}
}

Aya.prototype.draw = function (ctx) {
    if (!this.dead) {
		if (this.shootFrames > 0)
			this.shootAnimation.drawFrame(this.game.clockTick, ctx, this.x + this.shootAnimation.offsetX, this.y + this.shootAnimation.offsetY);
		else
			this.idleAnimation.drawFrame(this.game.clockTick, ctx, this.x + this.idleAnimation.offsetX, this.y + this.idleAnimation.offsetY);
	}
    
    drawHitBox(this, ctx);
    
    Entity.prototype.draw.call(this);
};


function Brandong(game, x, y) {
	// Number Variables
	this.alpha = 1;
	this.step = 0;
    this.walkSpeed = 4;
    this.autoDamage = 50;
    this.meteorCount = 0;
    this.spawnCount = 0;
    this.spawnTimer = 0;
    this.destinationX = -1;
    this.attackIndex = 0;
    this.attackCount = 0;
    this.hurtTimer = 0;
    this.energy = 0; //denotes if an attack is charged
    this.idleTimerMax = 110;
    this.idleTimer = this.idleTimerMax;
    this.maxHealth = 80.0;
    this.currentHealth = this.maxHealth;
    this.currentHealthTemp = this.currentHealth;   
    // String Variables
    this.state = "walking";
	this.lastDirection = "Right";    
    // Boolean Variables
    this.attackEnabled = false;
    this.dead = false;
    this.solid = false;
    this.attackable = true;
    this.walkToDestination = false;
    this.firstMeteor = true;
	
	this.game = game;
	this.x = x;
	this.y = y;
    
    this.cooldown = [];
    
    // Animations
	
	this.idleRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/brandong.png"), 0, 0, 207, 519, 1, 1, true, false, 0, -20);
	this.idleLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/brandong_left.png"), 0, 0, 207, 519, 1, 1, true, false, 0, -20);
    this.idleAnimation = this.idleRight;
	this.walkAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/brandong_right_slow.png"), 0, 0, 207, 519, 0.05, 8, true, false, 0, -20);
	this.walkAnimationFast = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/brandong_right_fast.png"), 0, 0, 207, 519, 0.05, 4, true, false, 0, -20);
    this.walkAnimation = this.walkAnimationRight;
    this.currentAnimation = this.walkAnimationRight;
    
    this.hitBoxDef = {
    	width: 180, height: 500, offsetX: 10, offsetY: 10, growthX: 0, growthY: 0
    };
    drawHitBox(this);
}

Brandong.prototype.update = function() {
}

Brandong.prototype.draw = function (ctx) {
    if (!this.dead) {
		if (isOnScreen(this)) {
			if (this.state === "idle") {
				this.idleAnimation.drawFrame(this.game.clockTick, ctx, this.x + this.idleAnimation.offsetX, this.y + this.idleAnimation.offsetY);
				this.currentAnimation = this.idleAnimation;
			} else if (this.state === "walking") {
				this.walkAnimation.drawFrame(this.game.clockTick, ctx, this.x + this.walkAnimation.offsetX, this.y + this.walkAnimation.offsetY);
				this.currentAnimation = this.walkAnimation;
			} else if (this.state === "running") {
				this.walkAnimationFast.drawFrame(this.game.clockTick, ctx, this.x + this.walkAnimationFast.offsetX, this.y + this.walkAnimationFast.offsetY);
				this.currentAnimation = this.walkAnimationFast;
			}
		} else {
			if (this.game.currentPhase === 5 && this.x < this.game.liveCamera.x) {
				ctx.drawImage(ASSET_MANAGER.getAsset("./img/UI/BrandongTracker.png"), 50 + this.game.liveCamera.x, 200 + this.game.liveCamera.y, 100, 100);
				ctx.font = "20px Calibri"; 
				ctx.fillStyle = "white";
				ctx.align = "Left";
				ctx.fillText(Math.round(this.game.liveCamera.x - this.x) - this.hitBoxDef.width, 50 + this.game.liveCamera.x, 300 + this.game.liveCamera.y);
			}
			
		}
    }
    
    drawHitBox(this, ctx);
    
    Entity.prototype.draw.call(this);
};


function BrandongBoss(game, x, y) {
	// Number Variables
	this.alpha = 1;
	this.step = 0;
    this.walkSpeed = 3;
    this.autoDamage = 50;
    this.meteorCount = 0;
    this.spawnCount = 0;
    this.spawnTimer = 0;
    this.destinationX = -1;
	this.destinationY = -1;
    this.attackIndex = 0;
    this.attackCount = 0;
    this.hurtTimer = 0;
    this.energy = 0; //denotes if an attack is charged
    this.idleTimerMax = 150;
    this.idleTimer = this.idleTimerMax;
	if (mode === "easy") {
		this.maxHealth = 3000.0;
	} else if (mode === "medium") {
		this.maxHealth = 4000.0;
	} else {
		this.maxHealth = 5000.0;
	}
	this.scoreValue = 15000;
	this.scoreValueMin = this.scoreValue / 3;
    this.currentHealth = this.maxHealth;
    this.currentHealthTemp = this.currentHealth;   
    // String Variables
    this.state = "walking";
	this.lastDirection = "Right";    
    // Boolean Variables
    this.attackEnabled = true;
    this.dead = false;
    this.solid = false;
    this.attackable = true;
	this.phaseTimer = 0;
	this.phase = 1;
	this.rapidCount = 0;
	
	
	this.game = game;
	this.x = x;
	this.y = y;
    
    this.cooldown = [0, 0, 0, 0];
    
    // Animations
	
	this.idleRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/brandongboss_idle_right.png"), 0, 0, 160, 160, 1, 1, true, false, 0, -20);
	this.idleLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/brandongboss_idle_left.png"), 0, 0, 160, 160, 1, 1, true, false, 0, -20);
    this.idleAnimation = this.idleLeft;
	this.walkAnimationRight = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/brandongboss_walk_right.png"), 0, 0, 160, 160, 0.05, 8, true, false, 0, -20);
	this.walkAnimationLeft = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/brandongboss_walk_left.png"), 0, 0, 160, 160, 0.05, 8, true, false, 0, -20);
    this.walkAnimation = this.walkAnimationLeft;
    this.currentAnimation = this.walkAnimationLeft;
    
    this.hitBoxDef = {
    	width: 140, height: 140, offsetX: 10, offsetY: 10, growthX: 0, growthY: 0
    };
    drawHitBox(this);
}

BrandongBoss.prototype.update = function() {
    for (i = 0; i < this.cooldown.length; i++) {
        if (this.cooldown[i] > 0)
            this.cooldown[i]--;
    }
	if (this.phaseTimer > 0) {
		this.phaseTimer--;
		if (this.phaseTimer === 0) {
			playSound(explodeSound);
			this.game.player1.phaseTimer = 180;
			this.game.currentBoss = null;
			this.removeFromWorld = true;
			this.game.addEntity(new Particle(BRANDONG_SPIN, this.x, this.y, 0, 0, 0, 0, 0, 0, 0, 50, 0, 50, 1, 0, false, this.game,
					new Animation(ASSET_MANAGER.getAsset("./img/Misc/brandong_explosion.png"), 0, 0, 150, 150, .05, 16, false, false, 0, 0)));
		}
	}
	if (this.currentHealth === 0 && this.game.currentPhase === 8) {
		addScore(this.game, Math.max(this.scoreValueMin, this.scoreValue));
		this.game.currentPhase = 9;
		this.game.player1.destinationX = 15280;
		this.game.player1.destinationY = 230;
        this.game.player1.canControl = false;
        this.game.player1.vulnerable = true;
        this.game.player1.xVelocity = 0;
		this.game.player1.yVelocity = 0;
		this.destinationX = 15800;
		this.destinationY = 200;
		this.energy = 100;
		bossMusic.pause();
	}
	if (this.energy === 101) { //brandong SPECIAL MOVE!
		cutEffect(this.game, "Blue Viper", "./img/Particle/brandong_cut.png");
		var that = this;
		setTimeout(
			function() {
				var particle = new Particle(BRANDONG_WHIP,
						that.hitBox.x + that.hitBox.width / 2,
						that.hitBox.y + that.hitBox.height / 2, 
						-8, -8, 0, 0, 0, 0, 0, 62, 0, 0, 0, 0, false, that.game);
				var element = new SquareElement(15, 15, "#fff8b8", "#fff8b8");
				crisisMusic.pause();
				particle.other = element;
				particle.extra = 100;
				playSound(lenoxHookSound);
				that.game.addEntity(particle);
			}, 1000);
		this.energy = 0;
	}
	if (this.destinationX !== -1 || this.destinationY !== -1) {
		this.state = "walking";
		if (this.destinationX !== -1) {
			if (this.destinationX > this.x)
				this.x = Math.min(this.destinationX, this.x + this.walkSpeed);
			else
				this.x = Math.max(this.destinationX, this.x - this.walkSpeed);
			if (this.x === this.destinationX)
				this.destinationX = -1;
		}
		if (this.destinationY !== -1) {
			if (this.destinationY > this.y)
				this.y = Math.min(this.destinationY, this.y + this.walkSpeed);
			else
				this.y = Math.max(this.destinationY, this.y - this.walkSpeed);
			if (this.y === this.destinationY)
				this.destinationY = -1;
		}
		if (this.destinationX === -1 && this.destinationY === -1) {
			if (this.energy === 100) {
				var chat = new TextBox(this.game, "./img/Chat/BrandongSquare.png", "Stop griefing me at tree!");
				this.game.addEntity(chat);
				this.currentAnimation = this.idleLeft;
				this.state = "idle";
				this.energy = 0;
				this.game.cameraShakeTime = 40;
				this.game.cameraShakeAmount = 40;
				this.game.cameraShakeDecay = 1;
				crisisMusic.play();
			}
		}
	} else if (this.game.currentPhase === 8) {
		this.scoreValue--;
		if (this.currentHealth < (0.75) * this.maxHealth && (mode === "medium" || mode === "hard") && this.phase === 1) {
			this.walkSpeed = 3.8;
			this.phase = 2;
		} if (this.currentHealth < (0.5) * this.maxHealth && mode === "hard" && this.phase === 2) {
			this.walkSpeed = 4.5;
			this.phase = 3;
			this.cooldown[2] = 10000;
		}
		if (this.idleTimer > 0) {
			this.idleTimer--;
			this.state = "idle";
		} else if (this.energy !== 0) { //attack charged up
			switch(this.energy) {
				case 1: //whip wall
					var minYSpeed = -20;
					if (this.phase === 3)
						minYSpeed = -18;
					var particle = new Particle(BRANDONG_WHIP,
							this.hitBox.x + this.hitBox.width / 2,
							this.hitBox.y + this.hitBox.height / 2, 
							-16, -16, minYSpeed, -12, 0, 0, 0, 1000, 0, 0, 0, 0, false, this.game);
							
					var element = new SquareElement(10 + Math.random() * 10, 10 + Math.random() * 10, "#cfc251", "#b0a64d");
					particle.other = element;
					if (this.phase === 2)
						particle.extra = 1;
					if (this.phase === 3)
						particle.extra = 2;
					this.game.addEntity(particle);
					playSound(shootSound);
					this.idleTimer = this.idleTimerMax;
				break;
				case 2: //whip line
					playSound(lenoxWSound);
					var amount = 3;
					if (this.phase === 2)
						amount = 4;
					if (this.phase === 3)
						amount = 5;
					for (var i = 0; i < amount; i++) {
						var particle = new Particle(BRANDONG_WHIP,
								this.hitBox.x + this.hitBox.width / 2 + 200,
								this.hitBox.y + this.hitBox.height / 2 - (Math.floor(amount / 2) * 16) + i * 16, 
								-16, -16, 0, 0, 0, 0, 0, 120, 0, 0, 0, 0, false, this.game);
						var element = new SquareElement(10 + Math.random() * 10, 10 + Math.random() * 10, "#fff8b8", "#fff8b8");
						particle.other = element;
						this.game.addEntity(particle);
					}
					this.idleTimer = this.idleTimerMax;
				break;
				case 3: //whip circle
					playSound(lenoxQSound);
					if (this.rapidCount > 0) {
						this.rapidCount--;
						this.idleTimer = 50;
						this.cooldown[3] = 0; //reset
					} else {
						this.idleTimer = this.idleTimerMax;
					}
					this.game.addEntity(new Particle(BRANDONG_SPIN, this.x - 75, this.y - 75, 0, 0, 0, 0, 0, 0, 0, 10, 0, 10, 0.5, 0, false, this.game,
							new Animation(ASSET_MANAGER.getAsset("./img/Enemy/brandong_spin.png"), 0, 0, 300, 300, .02, 10, true, false, 0, 0)));
				break;
			}
			this.energy = 0;
		} else if (this.cooldown[0] === 0) { //whip wall
			this.cooldown[0] = 1200;
			this.destinationX = 15800;
			this.destinationY = 200;
			this.energy = 1;
			this.rapidCount = 0;
			this.cooldown[2] = 0;
		} else if (this.cooldown[1] === 0) { //whip line
			this.cooldown[1] = 500;
			this.destinationX = Math.min(this.game.player1.x + 300, 15800);
			this.destinationY = this.game.player1.y - 20;
			this.energy = 2;
			this.rapidCount = 0;
		} else if (this.cooldown[2] === 0 && this.phase === 3) { //rapid barrage of whips
			this.cooldown[2] = 1200;
			this.rapidCount = 3;
			playSound(bounceSound);
			this.destinationX = this.game.player1.x + 100;
			this.destinationY = this.game.player1.y - 20;
			this.energy = 3;
		} else if (this.cooldown[3] === 0) {
			this.cooldown[3] = 150;
			this.destinationX = this.game.player1.x + 100;
			this.destinationY = this.game.player1.y - 20;
			this.energy = 3;
		}
	}
}

BrandongBoss.prototype.draw = function (ctx) {
    if (!this.dead) {
		if (this.state === "idle") {
			this.idleAnimation.drawFrame(this.game.clockTick, ctx, this.x + this.idleAnimation.offsetX, this.y + this.idleAnimation.offsetY);
			this.currentAnimation = this.idleAnimation;
		} else if (this.state === "walking") {
			this.walkAnimation.drawFrame(this.game.clockTick, ctx, this.x + this.walkAnimation.offsetX, this.y + this.walkAnimation.offsetY);
			this.currentAnimation = this.walkAnimation;
		}
    }
    
    drawHitBox(this, ctx);
    
    Entity.prototype.draw.call(this);
};

function Alpha(game, x, y) {
	// Number Variables
	this.alpha = 1;
	this.step = 0;
    this.walkSpeed = 3;
    this.autoDamage = 20;
    this.meteorCount = 0;
    this.spawnCount = 0;
    this.spawnTimer = 0;
    this.destinationX = -1;
	this.destinationY = -1;
    this.attackIndex = 0;
    this.attackCount = 0;
    this.hurtTimer = 0;
    this.energy = 0; //denotes if an attack is charged
    this.idleTimerMax = 150;
    this.idleTimer = this.idleTimerMax;
	if (mode === "easy") {
		this.maxHealth = 1000.0;
	} else if (mode === "medium") {
		this.maxHealth = 1500.0;
	} else {
		this.maxHealth = 2000.0;
	}
	this.scoreValue = 7500;
	this.scoreValueMin = this.scoreValue / 3;
    this.currentHealth = this.maxHealth;
    this.currentHealthTemp = this.currentHealth;   
    // String Variables
    this.state = "idle";
	this.lastDirection = "Right";    
    // Boolean Variables
    this.attackEnabled = true;
    this.dead = false;
    this.solid = false;
    this.attackable = true;
	this.phaseTimer = 0;
	this.phase = 1;
	this.rapidCount = 0;
	
	
	this.game = game;
	this.x = x;
	this.y = y;
    
    this.cooldown = [0, 0, 0, 0];
    
    // Animations
	
    this.idleAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/alpha_idle.png"), 0, 0, 400, 273, 1, 1, true, false, 0, -0);
	this.attackAnimation = new Animation(ASSET_MANAGER.getAsset("./img/Enemy/alpha_lunge.png"), 0, 0, 400, 273, 1, 1, true, false, 0, 0);
	this.prepAnimation =  new Animation(ASSET_MANAGER.getAsset("./img/Enemy/alpha_prep.png"), 0, 0, 400, 273, 1, 1, true, false, 0, 0);
	this.swingAnimation =  new Animation(ASSET_MANAGER.getAsset("./img/Enemy/alpha_swing.png"), 0, 0, 400, 273, 1, 1, true, false, 0, 0);
	this.deadAnimation =  new Animation(ASSET_MANAGER.getAsset("./img/Enemy/alpha_dead.png"), 0, 0, 400, 273, .05, 15, false, false, 0, 0);
    
    this.hitBoxDef = {
    	width: 80, height: 160, offsetX: 208, offsetY: 40, growthX: 0, growthY: 0
    };
    drawHitBox(this);
}

Alpha.prototype.update = function() {
    for (i = 0; i < this.cooldown.length; i++) {
        if (this.cooldown[i] > 0)
            this.cooldown[i]--;
    }
	if (this.x + 300 < this.game.liveCamera.x + this.game.liveCamera.width && this.game.currentPhase === 13) { //alpha!
		this.game.currentBoss = this;
		this.game.currentPhase = 14;
		this.game.cameraLock = false;
		this.game.camera.minX = 19800;
		this.game.camera.maxX = 19800;
	}
	if (this.currentHealth === 0 && this.game.currentPhase === 14) {
		addScore(this.game, Math.max(this.scoreValueMin, this.scoreValue));
		this.game.currentPhase = 15;
		this.phaseTimer = 100;
		this.attackable = false;
	}
	if (this.phaseTimer > 0) {
		this.phaseTimer--;
		var particle = new Particle(SHAPE_PART, this.x + this.hitBoxDef.offsetX + Math.random() * this.hitBoxDef.width,
			this.y + this.hitBoxDef.offsetY + Math.random() * this.hitBoxDef.height, -2, 2, 0, -4, 0, 0.1, 0, 5, 0, 50, 0.5, 0.2, true, this.game);
		var element;
		element = new SquareElement(16 + Math.random() * 8, 16 + Math.random() * 8, "#ab58cc", "#ab58cc");
		particle.other = element;
		this.game.addEntity(particle);
		if (this.phaseTimer === 0) {
			this.game.addEntity(new Powerup(this.game, this.x + 120, this.game.liveCamera.height / 2 - 64, 13));
			this.removeFromWorld = true;
			for (var i = 0; i < 20; i++) {
				var particle = new Particle(SHAPE_PART, this.x + 120 + 64 + Math.random() * 64, this.game.liveCamera.height / 2 + Math.random() * 64, -2, 2, 0, -4, 0, 0.1, 0, 5, 0, 50, 0.5, 0.2, true, this.game);
				var element;
				element = new SquareElement(20 + Math.random() * 5, 20 + Math.random() * 5, "#9e45d1", "#9e45d1");
				particle.other = element;
				this.game.addEntity(particle);
			}
		}
	}
	if (this.destinationX !== -1 || this.destinationY !== -1) {
		if (this.destinationX !== -1) {
			if (this.destinationX > this.x)
				this.x = Math.min(this.destinationX, this.x + this.walkSpeed);
			else
				this.x = Math.max(this.destinationX, this.x - this.walkSpeed);
			if (this.x === this.destinationX)
				this.destinationX = -1;
		}
		if (this.destinationY !== -1) {
			if (this.destinationY > this.y)
				this.y = Math.min(this.destinationY, this.y + this.walkSpeed);
			else
				this.y = Math.max(this.destinationY, this.y - this.walkSpeed);
			if (this.y === this.destinationY)
				this.destinationY = -1;
		}
	} else if (this.game.currentPhase === 14) {
		this.scoreValue--;
		if (this.idleTimer > 0) {
			this.idleTimer--;
			if (this.idleTimer === 0 && this.energy === 0)
				this.state = "idle";
		} else if (this.energy !== 0) { //attack charged up
			var bulletHSpeed = -10;
			var bulletVSpeed = -15;
			if (mode === "hard") {
				this.idleTimer = 3;
				bulletVSpeed += this.energy * bulletVSpeed / -10;
			} else if (mode === "medium") {
				this.idleTimer = 4;
				bulletVSpeed += this.energy * bulletVSpeed / -7.5;
			} else {
				this.idleTimer = 5;
				bulletVSpeed += this.energy * bulletVSpeed / -5;
			}
			var newParticle = new Particle(PART_SECONDARY, this.x + 145, this.y + 110, 
					bulletHSpeed, bulletHSpeed, bulletVSpeed, bulletVSpeed, 0, 0, 0, 0, 0, 120, .8, .1, false, this.game);
			element = new CircleElement(12, "#ab58cc", "#ab58cc");
			newParticle.other = element;
			newParticle.attackId = ALPHA_SHOT;
			this.game.addEntity(newParticle);
			this.energy--;
			if (this.energy === 0)
				this.state = "idle";
			else
				this.state = "swing";
			playSound(shootSound);
		} else if (this.cooldown[0] === 0) { //conal barrage
			this.cooldown[0] = 600;
			if (mode === "hard")
				this.energy = 20;
			else if (mode === "medium")
				this.energy = 15;
			else
				this.energy = 10;
			this.idleTimer = 90;
			this.state = "prep";
			this.destinationY = this.game.player1.y - 100;
		} else if (this.cooldown[1] === 0) { //bullet
			this.state = "attacking";
			this.cooldown[1] = 60;
			this.idleTimer = 30;
			var bulletHSpeed = 0;
			var bulletVSpeed = 0;
			var newParticle = new Particle(PART_SECONDARY, this.x + 55, this.y + 124, 
					bulletHSpeed, bulletHSpeed, bulletVSpeed, bulletVSpeed, 0, 0, 0, 0, 0, 120, .8, .1, false, this.game);
			element = new CircleElement(12, "#ab58cc", "#ab58cc");
			newParticle.other = element;
			newParticle.attackId = ALPHA_SHOT;
			newParticle.targetX = this.game.player1.x + this.game.player1.hitBoxDef.width / 2 + 6;
			newParticle.targetY = this.game.player1.y + this.game.player1.hitBoxDef.height / 2 + 6;
			if (mode === "hard")
				newParticle.targetSpeed = 18;
			else if (mode === "medium")
				newParticle.targetSpeed = 15;
			else
				newParticle.targetSpeed = 13;
			this.game.addEntity(newParticle);
		} else if (this.cooldown[2] === 0 && this.destinationY === -1) { //walk to top or bottom
			this.cooldown[2] = 240;
			if (this.y > this.game.liveCamera.y + this.game.liveCamera.height / 2 - 50)
				this.destinationY = this.game.liveCamera.y;
			else
				this.destinationY = this.game.liveCamera.y + 240;
		}
	}
	if (checkCollision(this, this.game.player1) && !this.game.player1.hitByAttack) {
		if (this.game.player1.vulnerable && this.game.player1.invincTimer === 0) {
			this.game.player1.vulnerable = false;
			applyDamage(this.game.player1.x, this.game.player1.y, this.game, this.autoDamage, this.game.player1);
			this.game.player1.hitByAttack = true;
			this.game.player1.invulnTimer = this.game.player1.invulnTimerMax;
			this.game.player1.xVelocity = -3;
			playSound(hitSound);
			if (this.game.player1.lastDirection == "Left") {
				this.game.player1.hurtAnimation = this.game.player1.hurtAnimationLeft;
			} else {
				this.game.player1.hurtAnimation = this.game.player1.hurtAnimationRight;
			}
		}
	}
}

Alpha.prototype.draw = function (ctx) {
	if (this.phaseTimer > 0)
		this.deadAnimation.drawFrame(this.game.clockTick, ctx, this.x + this.deadAnimation.offsetX, this.y + this.deadAnimation.offsetY);
	else {
		if (!this.dead) {
			if (this.state === "attacking") {
				this.attackAnimation.drawFrame(this.game.clockTick, ctx, this.x + this.attackAnimation.offsetX, this.y + this.attackAnimation.offsetY);
				this.currentAnimation = this.attackAnimation;
			} else if (this.state === "prep") {
				this.prepAnimation.drawFrame(this.game.clockTick, ctx, this.x + this.prepAnimation.offsetX, this.y + this.prepAnimation.offsetY);
				this.currentAnimation = this.prepAnimation;
			} else if (this.state === "swing") {
				this.swingAnimation.drawFrame(this.game.clockTick, ctx, this.x + this.swingAnimation.offsetX, this.y + this.swingAnimation.offsetY);
				this.currentAnimation = this.swingAnimation;
			} else {
				this.idleAnimation.drawFrame(this.game.clockTick, ctx, this.x + this.idleAnimation.offsetX, this.y + this.idleAnimation.offsetY);
				this.currentAnimation = this.idleAnimation;
			}
		}
	}
    
    drawHitBox(this, ctx);
    
    Entity.prototype.draw.call(this);
};



function spawnWave(game, number) {
	switch(number) {
		case 1:
			var objects = [		
				new Spaceship(game, -2400, 370),
				new LivingKelp(game, 6168, 208),
			];
			var powerups = [
			];
			var platforms = [
new Platform(game, -2144, 400, 0, 0, 0, PLATFORM_FADE, 0),
new Platform(game, -2144 + 64, 400, 0, 0, 0, PLATFORM_FADE, 0),
new Platform(game, -2144, 400 - 48, 0, 0, 0, PLATFORM_BREAK, 170),
new Platform(game, -2144 + 64, 400 - 48, 0, 0, 0, PLATFORM_BREAK, 170),
new Platform(game, -2144 + 64 + 64 + 64, 400 - 48, 2, 0, 170, PLATFORM_FIRE, 170),
new Platform(game, -2144 + 64 + 64 + 64 + 64, 400 - 48, 2, 0, 170, PLATFORM_FIRE, 170),

new Platform(game, -1544, 400),

new Platform(game, -1480, 400),

new Platform(game, -1416, 400),

new Platform(game, -1352, 400),

new Platform(game, -1288, 400),

new Platform(game, -1224, 368),

new Platform(game, -1160, 336),

new Platform(game, -968, 304),

new Platform(game, -1032, 304),

new Platform(game, -904, 304),

new Platform(game, -584, 304),

new Platform(game, -520, 304),

new Platform(game, -584, 352),

new Platform(game, -520, 352),

new Platform(game, -520, 400),

new Platform(game, -584, 400),

new Platform(game, -72, 352),

new Platform(game, -72, 400),

new Platform(game, 760, 256),

new Platform(game, 760, 192),

new Platform(game, 1208, 400),

new Platform(game, 1208, 336),

new Platform(game, 2568, 160),

new Platform(game, 3448, 224, 2, 0, 64),

new Platform(game, 3896, 224, 2, 0, 96),

new Platform(game, 4280, 160),

new Platform(game, 4280, 224),

new Platform(game, 4216, 272),

new Platform(game, 4920, 384),

new Platform(game, 4856, 384),

new Platform(game, 5272, 160, 2, 0, 64),

new Platform(game, 5720, 160, 0, 2, 128),

new Wall(game, -1096, 432, 32, 32),

new Wall(game, -1096, 400, 32, 32),

new Wall(game, -1096, 368, 32, 32),

new Wall(game, -1096, 336, 32, 32),

new Wall(game, -1096, 304, 32, 32),

new Wall(game, -1064, 304, 32, 32),

new Wall(game, -840, 304, 32, 32),

new Wall(game, -808, 304, 32, 32),

new Wall(game, -808, 336, 32, 32),

new Wall(game, -808, 368, 32, 32),

new Wall(game, -808, 400, 32, 32),

new Wall(game, -808, 432, 32, 32),

new Wall(game, -776, 304, 32, 32),

new Wall(game, -776, 272, 32, 32),

new Wall(game, -744, 304, 32, 32),

new Wall(game, -744, 240, 32, 32),

new Wall(game, -712, 208, 32, 32),

new Wall(game, -712, 304, 32, 32),

new Wall(game, -680, 176, 32, 32),

new Wall(game, -680, 304, 32, 32),

new Wall(game, -648, 144, 32, 32),

new Wall(game, -648, 304, 32, 32),

new Wall(game, -616, 112, 32, 32),

new Wall(game, -584, 112, 32, 32),

new Wall(game, -552, 112, 32, 32),

new Wall(game, -520, 112, 32, 32),

new Wall(game, -488, 112, 32, 32),

new Wall(game, -456, 112, 32, 32),

new Wall(game, -424, 112, 32, 32),

new Wall(game, -392, 112, 32, 32),

new Wall(game, -360, 112, 32, 32),

new Wall(game, -328, 112, 32, 32),

new Wall(game, -296, 112, 32, 32),

new Wall(game, -264, 112, 32, 32),

new Wall(game, -232, 112, 32, 32),

new Wall(game, -200, 112, 32, 32),

new Wall(game, -168, 112, 32, 32),

new Wall(game, -136, 112, 32, 32),

new Wall(game, -104, 112, 32, 32),

new Wall(game, -8, 112, 32, 32),

new Wall(game, -8, 80, 32, 32),

new Wall(game, -8, 48, 32, 32),

new Wall(game, -8, 16, 32, 32),

new Wall(game, -8, -16, 32, 32),

new Wall(game, -8, 144, 32, 32),

new Wall(game, -8, 176, 32, 32),

new Wall(game, -8, 208, 32, 32),

new Wall(game, -40, 208, 32, 32),

new Wall(game, -72, 208, 32, 32),

new Wall(game, -104, 208, 32, 32),

new Wall(game, -136, 208, 32, 32),

new Wall(game, -168, 208, 32, 32),

new Wall(game, -200, 208, 32, 32),

new Wall(game, -232, 208, 32, 32),

new Wall(game, -264, 208, 32, 32),

new Wall(game, -296, 208, 32, 32),

new Wall(game, -328, 208, 32, 32),

new Wall(game, -360, 208, 32, 32),

new Wall(game, -392, 208, 32, 32),

new Wall(game, -424, 208, 32, 32),

new Wall(game, -456, 208, 32, 32),

new Wall(game, -488, 208, 32, 32),

new Wall(game, -616, 304, 32, 32),

new Wall(game, -456, 304, 32, 32),

new Wall(game, -328, 304, 32, 32),

new Wall(game, -296, 304, 32, 32),

new Wall(game, -264, 304, 32, 32),

new Wall(game, -232, 304, 32, 32),

new Wall(game, -200, 304, 32, 32),

new Wall(game, -168, 304, 32, 32),

new Wall(game, -136, 304, 32, 32),

new Wall(game, -104, 304, 32, 32),

new Wall(game, -424, 304, 32, 32),

new Wall(game, -360, 304, 32, 32),

new Wall(game, -392, 304, 32, 32),

new Wall(game, -104, 336, 32, 32),

new Wall(game, -104, 368, 32, 32),

new Wall(game, -104, 400, 32, 32),

new Wall(game, -104, 432, 32, 32),

new Wall(game, -712, 240, 32, 32),

new Wall(game, -680, 208, 32, 32),

new Wall(game, -648, 176, 32, 32),

new Wall(game, -616, 144, 32, 32),

new Wall(game, 584, 128, 32, 32),

new Wall(game, 584, 160, 32, 32),

new Wall(game, 584, 192, 32, 32),

new Wall(game, 584, 224, 32, 32),

new Wall(game, 584, 256, 32, 32),

new Wall(game, 584, 288, 32, 32),

new Wall(game, 584, 320, 32, 32),

new Wall(game, 584, 352, 32, 32),

new Wall(game, 584, 384, 32, 32),

new Wall(game, 584, 416, 32, 32),

new Wall(game, 584, 448, 32, 32),

new Wall(game, 728, 0, 32, 32),

new Wall(game, 728, 32, 32, 32),

new Wall(game, 728, 64, 32, 32),

new Wall(game, 728, 96, 32, 32),

new Wall(game, 728, 128, 32, 32),

new Wall(game, 728, 160, 32, 32),

new Wall(game, 728, 192, 32, 32),

new Wall(game, 728, 224, 32, 32),

new Wall(game, 728, 256, 32, 32),

new Wall(game, 728, 288, 32, 32),

new Wall(game, 728, 320, 32, 32),

new Wall(game, 760, 320, 32, 32),

new Wall(game, 1272, 448, 32, 32),

new Wall(game, 1272, 416, 32, 32),

new Wall(game, 1272, 384, 32, 32),

new Wall(game, 1272, 352, 32, 32),

new Wall(game, 1272, 320, 32, 32),

new Wall(game, 1272, 288, 32, 32),

new Wall(game, 1272, 256, 32, 32),

new Wall(game, 1272, 224, 32, 32),

new Wall(game, 1272, 192, 32, 32),

new Wall(game, 1272, 160, 32, 32),

new Wall(game, 824, 144, 32, 32),

new Wall(game, 856, 144, 32, 32),

new Wall(game, 888, 144, 32, 32),

new Wall(game, 984, 144, 32, 32),

new Wall(game, 1016, 144, 32, 32),

new Wall(game, 1048, 144, 32, 32),

new Wall(game, 1080, 144, 32, 32),

new Wall(game, 1112, 144, 32, 32),

new Wall(game, 1144, 144, 32, 32),

new Wall(game, 1176, 144, 32, 32),

new Wall(game, 1208, 144, 32, 32),

new Wall(game, 1240, 144, 32, 32),

new Wall(game, 1864, 432, 32, 32),

new Wall(game, 1864, 400, 32, 32),

new Wall(game, 1864, 368, 32, 32),

new Wall(game, 1832, 400, 32, 32),

new Wall(game, 1832, 432, 32, 32),

new Wall(game, 2344, 0, 32, 32),

new Wall(game, 2376, 0, 32, 32),

new Wall(game, 2408, 0, 32, 32),

new Wall(game, 2440, 0, 32, 32),

new Wall(game, 2472, 0, 32, 32),

new Wall(game, 2504, 0, 32, 32),

new Wall(game, 2536, 0, 32, 32),

new Wall(game, 2568, 0, 32, 32),

new Wall(game, 2600, 0, 32, 32),

new Wall(game, 2312, 0, 32, 32),

new Wall(game, 2312, 32, 32, 32),

new Wall(game, 2312, 64, 32, 32),

new Wall(game, 2312, 96, 32, 32),

new Wall(game, 2312, 128, 32, 32),

new Wall(game, 2312, 160, 32, 32),

new Wall(game, 2312, 192, 32, 32),

new Wall(game, 2312, 224, 32, 32),

new Wall(game, 2312, 256, 32, 32),

new Wall(game, 2344, 256, 32, 32),

new Wall(game, 2376, 256, 32, 32),

new Wall(game, 2408, 256, 32, 32),

new Wall(game, 2440, 256, 32, 32),

new Wall(game, 2472, 256, 32, 32),

new Wall(game, 2504, 256, 32, 32),

new Wall(game, 2536, 256, 32, 32),

new Wall(game, 2568, 256, 32, 32),

new Wall(game, 2600, 256, 32, 32),

new Wall(game, -744, 272, 32, 32),

new Wall(game, -712, 272, 32, 32),

new Wall(game, -680, 240, 32, 32),

new Wall(game, -680, 272, 32, 32),

new Wall(game, -648, 208, 32, 32),

new Wall(game, -648, 240, 32, 32),

new Wall(game, -648, 272, 32, 32),

new Wall(game, -616, 176, 32, 32),

new Wall(game, -616, 208, 32, 32),

new Wall(game, -616, 240, 32, 32),

new Wall(game, -616, 272, 32, 32),

new Wall(game, 2904, 336, 32, 32),

new Wall(game, 2904, 304, 32, 32),

new Wall(game, 2904, 272, 32, 32),

new Wall(game, 2904, 240, 32, 32),

new Wall(game, 2904, 208, 32, 32),

new Wall(game, 2904, 176, 32, 32),

new Wall(game, 2904, 144, 32, 32),

new Wall(game, 2632, 144, 32, 32),

new Wall(game, 2632, 176, 32, 32),

new Wall(game, 2632, 208, 32, 32),

new Wall(game, 2632, 240, 32, 32),

new Wall(game, 3416, 224, 32, 32),

new Wall(game, 3416, 256, 32, 32),

new Wall(game, 3416, 288, 32, 32),

new Wall(game, 3416, 320, 32, 32),

new Wall(game, 3416, 352, 32, 32),

new Wall(game, 3416, 384, 32, 32),

new Wall(game, 3416, 416, 32, 32),

new Wall(game, 3416, 448, 32, 32),

new Wall(game, 2904, 112, 32, 32),

new Wall(game, 4344, 160, 32, 32),

new Wall(game, 4344, 192, 32, 32),

new Wall(game, 4344, 224, 32, 32),

new Wall(game, 4344, 256, 32, 32),

new Wall(game, 4344, 288, 32, 32),

new Wall(game, 4344, 320, 32, 32),

new Wall(game, 4344, 352, 32, 32),

new Wall(game, 4344, 384, 32, 32),

new Wall(game, 4344, 416, 32, 32),

new Wall(game, 4344, 448, 32, 32),

new Wall(game, 4696, 320, 32, 32),

new Wall(game, 4728, 320, 32, 32),

new Wall(game, 4760, 320, 32, 32),

new Wall(game, 4696, 352, 32, 32),

new Wall(game, 4696, 384, 32, 32),

new Wall(game, 4696, 416, 32, 32),

new Wall(game, 4696, 448, 32, 32),

new Wall(game, 4664, 384, 32, 32),

new Wall(game, 4664, 416, 32, 32),

new Wall(game, 4664, 448, 32, 32),

new Wall(game, 4728, 352, 32, 32),

new Wall(game, 4760, 352, 32, 32),

new Wall(game, 4760, 384, 32, 32),

new Wall(game, 4728, 384, 32, 32),

new Wall(game, 4728, 416, 32, 32),

new Wall(game, 4760, 416, 32, 32),

new Wall(game, 4728, 448, 32, 32),

new Wall(game, 4760, 448, 32, 32),

new Wall(game, 4792, 0, 32, 32),

new Wall(game, 4792, 32, 32, 32),

new Wall(game, 4792, 64, 32, 32),

new Wall(game, 4792, 96, 32, 32),

new Wall(game, 4792, 128, 32, 32),

new Wall(game, 4792, 160, 32, 32),

new Wall(game, 4792, 192, 32, 32),

new Wall(game, 4824, 192, 32, 32),

new Wall(game, 4824, 160, 32, 32),

new Wall(game, 4824, 128, 32, 32),

new Wall(game, 4824, 96, 32, 32),

new Wall(game, 4824, 64, 32, 32),

new Wall(game, 4824, 32, 32, 32),

new Wall(game, 4824, 0, 32, 32),

new Wall(game, 4856, 0, 32, 32),

new Wall(game, 4856, 32, 32, 32),

new Wall(game, 4856, 64, 32, 32),

new Wall(game, 4856, 96, 32, 32),

new Wall(game, 4856, 128, 32, 32),

new Wall(game, 4856, 160, 32, 32),

new Wall(game, 4856, 192, 32, 32),

new Wall(game, 4888, 192, 32, 32),

new Wall(game, 4888, 160, 32, 32),

new Wall(game, 4888, 128, 32, 32),

new Wall(game, 4888, 96, 32, 32),

new Wall(game, 4888, 64, 32, 32),

new Wall(game, 4888, 32, 32, 32),

new Wall(game, 4888, 0, 32, 32),

new Wall(game, 4920, 0, 32, 32),

new Wall(game, 4920, 32, 32, 32),

new Wall(game, 4920, 64, 32, 32),

new Wall(game, 4920, 96, 32, 32),

new Wall(game, 4920, 128, 32, 32),

new Wall(game, 4920, 160, 32, 32),

new Wall(game, 4920, 192, 32, 32),

new Wall(game, 4952, 192, 32, 32),

new Wall(game, 4984, 192, 32, 32),

new Wall(game, 5016, 192, 32, 32),

new Wall(game, 5144, 192, 32, 32),

new Wall(game, 5176, 192, 32, 32),

new Wall(game, 5176, 160, 32, 32),

new Wall(game, 4952, 0, 32, 32),

new Wall(game, 4984, 0, 32, 32),

new Wall(game, 5016, 0, 32, 32),

new Wall(game, 5048, 0, 32, 32),

new Wall(game, 5080, 0, 32, 32),

new Wall(game, 5112, 0, 32, 32),

new Wall(game, 5144, 0, 32, 32),

new Wall(game, 5176, 0, 32, 32),

new Wall(game, 4952, 32, 32, 32),

new Wall(game, 4984, 32, 32, 32),

new Wall(game, 5016, 32, 32, 32),

new Wall(game, 5048, 32, 32, 32),

new Wall(game, 5080, 32, 32, 32),

new Wall(game, 5112, 32, 32, 32),

new Wall(game, 5144, 32, 32, 32),

new Wall(game, 5176, 32, 32, 32),

new Wall(game, 4952, 64, 32, 32),

new Wall(game, 4984, 64, 32, 32),

new Wall(game, 5016, 64, 32, 32),

new Wall(game, 4952, 96, 32, 32),

new Wall(game, 4984, 96, 32, 32),

new Wall(game, 5016, 96, 32, 32),

new Wall(game, 4952, 128, 32, 32),

new Wall(game, 4984, 128, 32, 32),

new Wall(game, 5016, 128, 32, 32),

new Wall(game, 4952, 160, 32, 32),

new Wall(game, 4984, 160, 32, 32),

new Wall(game, 5016, 160, 32, 32),

new Wall(game, 5144, 160, 32, 32),

new Wall(game, 4792, 384, 32, 32),

new Wall(game, 4824, 384, 32, 32),

new Wall(game, 4824, 416, 32, 32),

new Wall(game, 4792, 416, 32, 32),

new Wall(game, 4792, 448, 32, 32),

new Wall(game, 4824, 448, 32, 32),

new Wall(game, 4984, 384, 32, 32),

new Wall(game, 4984, 416, 32, 32),

new Wall(game, 4984, 448, 32, 32),

new Wall(game, 5016, 384, 32, 32),

new Wall(game, 5016, 416, 32, 32),

new Wall(game, 5016, 448, 32, 32),

new Wall(game, 5048, 384, 32, 32),

new Wall(game, 5048, 416, 32, 32),

new Wall(game, 5048, 448, 32, 32),

new Wall(game, 5080, 384, 32, 32),

new Wall(game, 5080, 416, 32, 32),

new Wall(game, 5112, 384, 32, 32),

new Wall(game, 5080, 448, 32, 32),

new Wall(game, 5112, 416, 32, 32),

new Wall(game, 5112, 448, 32, 32),

new Wall(game, 5144, 384, 32, 32),

new Wall(game, 5144, 416, 32, 32),

new Wall(game, 5144, 448, 32, 32),

new Wall(game, 5176, 384, 32, 32),

new Wall(game, 5176, 416, 32, 32),

new Wall(game, 5176, 448, 32, 32),

new Wall(game, 5208, 160, 32, 32),

new Wall(game, 5208, 192, 32, 32),

new Wall(game, 5208, 224, 32, 32),

new Wall(game, 5208, 256, 32, 32),

new Wall(game, 5208, 288, 32, 32),

new Wall(game, 5208, 320, 32, 32),

new Wall(game, 5208, 352, 32, 32),

new Wall(game, 5208, 384, 32, 32),

new Wall(game, 5208, 416, 32, 32),

new Wall(game, 5208, 448, 32, 32),

new Wall(game, 5240, 160, 32, 32),

new Wall(game, 5208, 32, 32, 32),

new Wall(game, 5208, 0, 32, 32),

new Wall(game, 5240, 0, 32, 32),

new Wall(game, 5240, 32, 32, 32),

new Wall(game, 5272, 0, 32, 32),

new Wall(game, 5272, 32, 32, 32),

new Wall(game, 5304, 0, 32, 32),

new Wall(game, 5304, 32, 32, 32),

new Wall(game, 5336, 0, 32, 32),

new Wall(game, 5336, 32, 32, 32),

new Wall(game, 5368, 0, 32, 32),

new Wall(game, 5368, 32, 32, 32),

new Wall(game, 5400, 0, 32, 32),

new Wall(game, 5400, 32, 32, 32),

new Wall(game, 5432, 0, 32, 32),

new Wall(game, 5432, 32, 32, 32),

new Wall(game, 5464, 0, 32, 32),

new Wall(game, 5464, 32, 32, 32),

new Wall(game, 5496, 0, 32, 32),

new Wall(game, 5496, 32, 32, 32),

new Wall(game, 5528, 0, 32, 32),

new Wall(game, 5528, 32, 32, 32),

new Wall(game, 5560, 0, 32, 32),

new Wall(game, 5560, 32, 32, 32),

new Wall(game, 5592, 0, 32, 32),

new Wall(game, 5592, 32, 32, 32),

new Wall(game, 5624, 0, 32, 32),

new Wall(game, 5624, 32, 32, 32),

new Wall(game, 5656, 0, 32, 32),

new Wall(game, 5656, 32, 32, 32),

new Wall(game, 5688, 0, 32, 32),

new Wall(game, 5688, 32, 32, 32),

new Wall(game, 5720, 32, 32, 32),

new Wall(game, 5720, 0, 32, 32),

new Wall(game, 5464, 160, 32, 32),

new Wall(game, 5496, 160, 32, 32),

new Wall(game, 5528, 160, 32, 32),

new Wall(game, 5528, 192, 32, 32),

new Wall(game, 5528, 224, 32, 32),

new Wall(game, 5528, 256, 32, 32),

new Wall(game, 5528, 288, 32, 32),

new Wall(game, 5528, 320, 32, 32),

new Wall(game, 5528, 352, 32, 32),

new Wall(game, 5528, 384, 32, 32),

new Wall(game, 5528, 416, 32, 32),

new Wall(game, 5528, 448, 32, 32),

new Wall(game, 5624, 160, 32, 32),

new Wall(game, 5624, 192, 32, 32),

new Wall(game, 5624, 224, 32, 32),

new Wall(game, 5624, 256, 32, 32),

new Wall(game, 5624, 288, 32, 32),

new Wall(game, 5624, 320, 32, 32),

new Wall(game, 5624, 352, 32, 32),

new Wall(game, 5624, 384, 32, 32),

new Wall(game, 5624, 416, 32, 32),

new Wall(game, 5624, 448, 32, 32),

new Wall(game, 5656, 160, 32, 32),

new Wall(game, 5656, 192, 32, 32),

new Wall(game, 5656, 224, 32, 32),

new Wall(game, 5656, 256, 32, 32),

new Wall(game, 5656, 288, 32, 32),

new Wall(game, 5656, 320, 32, 32),

new Wall(game, 5656, 352, 32, 32),

new Wall(game, 5656, 384, 32, 32),

new Wall(game, 5656, 416, 32, 32),

new Wall(game, 5656, 448, 32, 32),

new Wall(game, 5688, 448, 32, 32),

new Wall(game, 5688, 416, 32, 32),

new Wall(game, 5688, 384, 32, 32),

new Wall(game, 5688, 352, 32, 32),

new Wall(game, 5688, 320, 32, 32),

new Wall(game, 5688, 288, 32, 32),

new Wall(game, 5688, 256, 32, 32),

new Wall(game, 5688, 224, 32, 32),

new Wall(game, 5688, 192, 32, 32),

new Wall(game, 5688, 160, 32, 32),

new Wall(game, 5752, 0, 32, 32),

new Wall(game, 5752, 32, 32, 32),

new Wall(game, 5784, 0, 32, 32),

new Wall(game, 5784, 32, 32, 32),

new Wall(game, 5816, 0, 32, 32),

new Wall(game, 5816, 32, 32, 32),

new Wall(game, 5816, 64, 32, 32),

new Wall(game, 5784, 64, 32, 32),

new Wall(game, 5784, 96, 32, 32),

new Wall(game, 5784, 128, 32, 32),

new Wall(game, 5816, 96, 32, 32),

new Wall(game, 5816, 128, 32, 32),

new Wall(game, 5784, 160, 32, 32),

new Wall(game, 5816, 160, 32, 32),

new Wall(game, 5816, 192, 32, 32),

new Wall(game, 5784, 192, 32, 32),

new Wall(game, 5784, 224, 32, 32),

new Wall(game, 5816, 224, 32, 32),

new Wall(game, 5720, 448, 32, 32),

new Wall(game, 5752, 448, 32, 32),

new Wall(game, 5784, 416, 32, 32),

new Wall(game, 5784, 448, 32, 32),

new Wall(game, 5816, 448, 32, 32),

new Wall(game, 5816, 416, 32, 32),

new Wall(game, 5784, 384, 32, 32),

new Wall(game, 5784, 352, 32, 32),

new Wall(game, 5784, 320, 32, 32),

new Wall(game, 5816, 320, 32, 32),

new Wall(game, 5816, 352, 32, 32),

new Wall(game, 5816, 384, 32, 32),

new Wall(game, 5848, 352, 32, 32),

new Wall(game, 5848, 384, 32, 32),

new Wall(game, 5848, 416, 32, 32),

new Wall(game, 5848, 448, 32, 32),

new Wall(game, 5880, 448, 32, 32),

new Wall(game, 5880, 416, 32, 32),

new Wall(game, 5880, 384, 32, 32),

new Wall(game, 5912, 416, 32, 32),

new Wall(game, 5912, 448, 32, 32),

new Wall(game, 5944, 448, 32, 32),

new Wall(game, 5848, 224, 32, 32),

new Wall(game, 5848, 192, 32, 32),

new Wall(game, 5848, 0, 32, 32),

new Wall(game, 5848, 32, 32, 32),

new Wall(game, 5848, 64, 32, 32),

new Wall(game, 5848, 96, 32, 32),

new Wall(game, 5848, 128, 32, 32),

new Wall(game, 5848, 160, 32, 32),

new Wall(game, 5880, 0, 32, 32),

new Wall(game, 5880, 32, 32, 32),

new Wall(game, 5880, 64, 32, 32),

new Wall(game, 5880, 96, 32, 32),

new Wall(game, 5880, 224, 32, 32),

new Wall(game, 5880, 128, 32, 32),

new Wall(game, 5880, 160, 32, 32),

new Wall(game, 5880, 192, 32, 32),

new Wall(game, 5912, 0, 32, 32),

new Wall(game, 5912, 32, 32, 32),

new Wall(game, 5912, 64, 32, 32),

new Wall(game, 5912, 96, 32, 32),

new Wall(game, 5912, 128, 32, 32),

new Wall(game, 5912, 160, 32, 32),

new Wall(game, 5912, 192, 32, 32),

new Wall(game, 5912, 224, 32, 32),

new Wall(game, 5912, 256, 32, 32),

new Wall(game, 5944, 0, 32, 32),

new Wall(game, 5944, 32, 32, 32),

new Wall(game, 5944, 64, 32, 32),

new Wall(game, 5944, 96, 32, 32),

new Wall(game, 5944, 128, 32, 32),

new Wall(game, 5944, 160, 32, 32),

new Wall(game, 5944, 192, 32, 32),

new Wall(game, 5944, 224, 32, 32),

new Wall(game, 5944, 256, 32, 32),

new Wall(game, 5944, 288, 32, 32),

new Wall(game, 5976, 0, 32, 32),

new Wall(game, 5976, 32, 32, 32),

new Wall(game, 5976, 64, 32, 32),

new Wall(game, 5976, 96, 32, 32),

new Wall(game, 5976, 128, 32, 32),

new Wall(game, 5976, 160, 32, 32),

new Wall(game, 5976, 192, 32, 32),

new Wall(game, 5976, 224, 32, 32),

new Wall(game, 6008, 0, 32, 32),

new Wall(game, 6008, 32, 32, 32),

new Wall(game, 6008, 64, 32, 32),

new Wall(game, 6008, 96, 32, 32),

new Wall(game, 6008, 128, 32, 32),

new Wall(game, 6008, 160, 32, 32),

new Wall(game, 6008, 192, 32, 32),

new Wall(game, 6040, 0, 32, 32),

new Wall(game, 6040, 32, 32, 32),

new Wall(game, 6040, 64, 32, 32),

new Wall(game, 6040, 96, 32, 32),

new Wall(game, 6040, 128, 32, 32),

new Wall(game, 6040, 160, 32, 32),

new Wall(game, 6040, 192, 32, 32),

new Wall(game, 6072, 0, 32, 32),

new Wall(game, 6072, 32, 32, 32),

new Wall(game, 6072, 64, 32, 32),

new Wall(game, 6072, 96, 32, 32),

new Wall(game, 6072, 128, 32, 32),

new Wall(game, 6072, 160, 32, 32),

new Wall(game, 6072, 192, 32, 32),

new Wall(game, 6104, 0, 32, 32),

new Wall(game, 6104, 32, 32, 32),

new Wall(game, 6104, 64, 32, 32),

new Wall(game, 6104, 96, 32, 32),

new Wall(game, 6104, 128, 32, 32),

new Wall(game, 6104, 160, 32, 32),

new Wall(game, 6104, 192, 32, 32),

new Wall(game, 6136, 0, 32, 32),

new Wall(game, 6136, 32, 32, 32),

new Wall(game, 6136, 64, 32, 32),

new Wall(game, 6136, 96, 32, 32),

new Wall(game, 6136, 128, 32, 32),

new Wall(game, 6136, 160, 32, 32),

new Wall(game, 6136, 192, 32, 32),

new Wall(game, 6168, 0, 32, 32),

new Wall(game, 6168, 32, 32, 32),

new Wall(game, 6168, 64, 32, 32),

new Wall(game, 6168, 96, 32, 32),

new Wall(game, 6168, 128, 32, 32),

new Wall(game, 6168, 160, 32, 32),

new Wall(game, 6168, 192, 32, 32),

new Wall(game, 6200, 0, 32, 32),

new Wall(game, 6200, 32, 32, 32),

new Wall(game, 6200, 64, 32, 32),

new Wall(game, 6200, 96, 32, 32),

new Wall(game, 6200, 128, 32, 32),

new Wall(game, 6200, 160, 32, 32),

new Wall(game, 6200, 192, 32, 32),

new Wall(game, 6232, 0, 32, 32),

new Wall(game, 6232, 32, 32, 32),

new Wall(game, 6232, 64, 32, 32),

new Wall(game, 6232, 96, 32, 32),

new Wall(game, 6232, 128, 32, 32),

new Wall(game, 6232, 160, 32, 32),

new Wall(game, 6232, 192, 32, 32),

new Wall(game, 6264, 0, 32, 32),

new Wall(game, 6264, 32, 32, 32),

new Wall(game, 6264, 64, 32, 32),

new Wall(game, 6264, 96, 32, 32),

new Wall(game, 6264, 128, 32, 32),

new Wall(game, 6264, 160, 32, 32),

new Wall(game, 6264, 192, 32, 32),

new Wall(game, 6264, 224, 32, 32),

new Wall(game, 6264, 256, 32, 32),

new Wall(game, 6264, 448, 32, 32),

new Wall(game, 6264, 416, 32, 32),

new Platform(game, -968, 448, 0, 0, 0, PLATFORM_BOUNCY),

new Platform(game, 376, 272, 0, 0, 0, PLATFORM_BOUNCY),

new Platform(game, 1912, 352, 1, 0, 256, PLATFORM_BOUNCY),

new Platform(game, 3448, 384, 0, 0, 0, PLATFORM_BOUNCY),

new Platform(game, 5080, 368, 0, 0, 0, PLATFORM_BOUNCY),

new Platform(game, 5080, 208, 0, 0, 0, PLATFORM_BOUNCY),

new Platform(game, 56, 400, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 248, 400, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 152, 336, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 56, 272, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 984, 320, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 1048, 320, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 1112, 320, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 856, 320, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 792, 320, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 3000, 208, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 3176, 208, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 3352, 208, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 3640, 224, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 3832, 224, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 4152, 224, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 1896, 400, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 1960, 400, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 2024, 400, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 2088, 400, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 2152, 400, 0, 0, 0, PLATFORM_BREAK),

new Platform(game, 120, 208, 0, 0, 0, PLATFORM_FADE, 0),

new Platform(game, 24, 144, 0, 0, 0, PLATFORM_FADE, 0),

new Platform(game, 520, 160, 0, 0, 0, PLATFORM_FADE, 0),

new Platform(game, 2824, 400, 0, 0, 0, PLATFORM_FADE, 60),

new Platform(game, 2664, 352, 0, 0, 0, PLATFORM_FADE, 0),

new Platform(game, 2824, 288, 0, 0, 0, PLATFORM_FADE, 60),

new Platform(game, 2664, 224, 0, 0, 0, PLATFORM_FADE, 0),

new Platform(game, 2824, 160, 0, 0, 0, PLATFORM_FADE, 60),

new Wall(game, 2024, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 2056, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 2088, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 2120, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 2152, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 2360, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 2456, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 2552, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 3704, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 3736, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 3768, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 3800, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 3832, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 3864, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 3896, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 3928, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 3960, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 3992, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 4024, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 4056, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 4088, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 4120, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 4152, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 4184, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 4216, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 4248, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 4280, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 4312, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 1992, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 1960, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 1928, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 1896, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 2184, 416, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5240, 432, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5272, 432, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5304, 432, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5336, 432, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5368, 432, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5400, 432, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5432, 432, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5464, 432, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5496, 432, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5720, 400, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5752, 400, 32, 32, WALL_SPIKE_UP),

new Wall(game, 5160, 336, 32, 32, WALL_SPIKE_LEFT),

new Wall(game, 5160, 304, 32, 32, WALL_SPIKE_LEFT),

new Wall(game, 2312, 288, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 2408, 288, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 2504, 288, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 2600, 288, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 4856, 224, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 4888, 224, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 4920, 224, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 4952, 224, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 4984, 224, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 5016, 224, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 5144, 224, 32, 32, WALL_SPIKE_DOWN),

new Wall(game, 5176, 224, 32, 32, WALL_SPIKE_DOWN),




			];
			var enemies = [


new Powerup(game, -168, 384, 0),

new Powerup(game, 1176, 80, 0),

new Powerup(game, 2616, 384, 0),

new SeaSlug(game, -1480, 432, -1, 32),

new SeaSlug(game, -1320, 432, 1, 32),

new SeaSlug(game, -840, 272, -1, 0),

new SeaSlug(game, -136, 176, -1, 0),

new SeaSlug(game, -328, 176, -1, 0),

new SeaSlug(game, -376, 272, -1, 0),

new SeaSlug(game, -184, 272, -1, 0),

new SeaSlug(game, 456, 432, -1, 0),

new SeaSlug(game, 136, 432, -1, 0),

new SeaSlug(game, 1592, 432, -1, 32),

new SeaSlug(game, 1688, 432, -1, 32),

new SeaSlug(game, 2952, 432, 1, 0),

new SeaSlug(game, 3048, 432, 1, 0),

new SeaSlug(game, 3192, 432, 1, 0),

new Uni(game, 2456, 176),

new Uni(game, 5064, 304),

new Pirahna(game, -744, 400, 1, 0),

new Pirahna(game, -280, 400, -1, 0),

new Pirahna(game, 2216, 64, -1, 0),

new Pirahna(game, 2504, 64, 1, 0),

new Pirahna(game, 2424, 112, 1, 0),

new Pirahna(game, 776, 400, 1, 0),

new Pirahna(game, 1048, 400, 1, 0),

new Powerup(game, -1400, 432, JELLY_COIN),

new Powerup(game, -952, 400, JELLY_COIN),

new Powerup(game, -760, 432, JELLY_COIN),

new Powerup(game, -760, 400, JELLY_COIN),

new Powerup(game, -760, 368, JELLY_COIN),

new Powerup(game, 584, 32, JELLY_COIN),

new Powerup(game, 936, 176, JELLY_COIN),

new Powerup(game, 936, 224, JELLY_COIN),

new Powerup(game, 2360, 304, JELLY_COIN),

new Powerup(game, 2456, 304, JELLY_COIN),

new Powerup(game, 2552, 304, JELLY_COIN),

new Powerup(game, 4344, 112, JELLY_COIN),

new Powerup(game, 4904, 416, JELLY_COIN),

new Powerup(game, 5576, 432, JELLY_COIN),

new Powerup(game, -1784, 416, JELLY_COIN_SM),

new Powerup(game, -1704, 416, JELLY_COIN_SM),

new Powerup(game, -1864, 416, JELLY_COIN_SM),

new Powerup(game, -1464, 368, JELLY_COIN_SM),

new Powerup(game, -1320, 368, JELLY_COIN_SM),

new Powerup(game, -1048, 368, JELLY_COIN_SM),

new Powerup(game, -1016, 368, JELLY_COIN_SM),

new Powerup(game, -1048, 400, JELLY_COIN_SM),

new Powerup(game, -1016, 400, JELLY_COIN_SM),

new Powerup(game, -1016, 432, JELLY_COIN_SM),

new Powerup(game, -1048, 432, JELLY_COIN_SM),

new Powerup(game, -840, 368, JELLY_COIN_SM),

new Powerup(game, -840, 400, JELLY_COIN_SM),

new Powerup(game, -840, 432, JELLY_COIN_SM),

new Powerup(game, -872, 432, JELLY_COIN_SM),

new Powerup(game, -872, 400, JELLY_COIN_SM),

new Powerup(game, -872, 368, JELLY_COIN_SM),

new Powerup(game, 40, 128, JELLY_COIN_SM),

new Powerup(game, 56, 96, JELLY_COIN_SM),

new Powerup(game, 40, 64, JELLY_COIN_SM),

new Powerup(game, 56, 32, JELLY_COIN_SM),

new Powerup(game, -568, 80, JELLY_COIN_SM),

new Powerup(game, -440, 80, JELLY_COIN_SM),

new Powerup(game, -312, 80, JELLY_COIN_SM),

new Powerup(game, -184, 80, JELLY_COIN_SM),

new Powerup(game, -456, 176, JELLY_COIN_SM),

new Powerup(game, -344, 176, JELLY_COIN_SM),

new Powerup(game, -232, 176, JELLY_COIN_SM),

new Powerup(game, -136, 176, JELLY_COIN_SM),

new Powerup(game, 216, 128, JELLY_COIN_SM),

new Powerup(game, 264, 112, JELLY_COIN_SM),

new Powerup(game, 312, 128, JELLY_COIN_SM),

new Powerup(game, 360, 176, JELLY_COIN_SM),

new Powerup(game, 392, 224, JELLY_COIN_SM),

new Powerup(game, 168, 176, JELLY_COIN_SM),

new Powerup(game, 664, 80, JELLY_COIN_SM),

new Powerup(game, 664, 128, JELLY_COIN_SM),

new Powerup(game, 664, 176, JELLY_COIN_SM),

new Powerup(game, 664, 224, JELLY_COIN_SM),

new Powerup(game, 1128, 288, JELLY_COIN_SM),

new Powerup(game, 1032, 288, JELLY_COIN_SM),

new Powerup(game, 120, 432, JELLY_COIN_SM),

new Powerup(game, 200, 432, JELLY_COIN_SM),

new Powerup(game, 280, 432, JELLY_COIN_SM),

new Powerup(game, 360, 432, JELLY_COIN_SM),

new Powerup(game, 440, 432, JELLY_COIN_SM),

new Powerup(game, 504, 432, JELLY_COIN_SM),

new Powerup(game, 40, 432, JELLY_COIN_SM),

new Powerup(game, -40, 432, JELLY_COIN_SM),

new Powerup(game, 1352, 112, JELLY_COIN_SM),

new Powerup(game, 1368, 176, JELLY_COIN_SM),

new Powerup(game, 1368, 256, JELLY_COIN_SM),

new Powerup(game, 1272, 96, JELLY_COIN_SM),

new Powerup(game, 840, 96, JELLY_COIN_SM),

new Powerup(game, 888, 96, JELLY_COIN_SM),

new Powerup(game, 1032, 96, JELLY_COIN_SM),

new Powerup(game, 1112, 96, JELLY_COIN_SM),

new Powerup(game, 1944, 96, JELLY_COIN_SM),

new Powerup(game, 1992, 96, JELLY_COIN_SM),

new Powerup(game, 2040, 96, JELLY_COIN_SM),

new Powerup(game, 2088, 96, JELLY_COIN_SM),

new Powerup(game, 2136, 96, JELLY_COIN_SM),

new Powerup(game, 2184, 96, JELLY_COIN_SM),

new Powerup(game, 2232, 96, JELLY_COIN_SM),

new Powerup(game, 1896, 96, JELLY_COIN_SM),

new Powerup(game, 2280, 96, JELLY_COIN_SM),

new Powerup(game, 2312, 432, JELLY_COIN_SM),

new Powerup(game, 2280, 352, JELLY_COIN_SM),

new Powerup(game, 2296, 384, JELLY_COIN_SM),

new Powerup(game, 2408, 192, JELLY_COIN_SM),

new Powerup(game, 2376, 224, JELLY_COIN_SM),

new Powerup(game, 2440, 224, JELLY_COIN_SM),

new Powerup(game, 2536, 224, JELLY_COIN_SM),

new Powerup(game, 2568, 192, JELLY_COIN_SM),

new Powerup(game, 2600, 224, JELLY_COIN_SM),

new Powerup(game, 2840, 368, JELLY_COIN_SM),

new Powerup(game, 2696, 320, JELLY_COIN_SM),

new Powerup(game, 2840, 256, JELLY_COIN_SM),

new Powerup(game, 2696, 192, JELLY_COIN_SM),

new Powerup(game, 2840, 128, JELLY_COIN_SM),

new Powerup(game, 2920, 48, JELLY_COIN_SM),

new Powerup(game, 3032, 176, JELLY_COIN_SM),

new Powerup(game, 3208, 176, JELLY_COIN_SM),

new Powerup(game, 3384, 176, JELLY_COIN_SM),

new Powerup(game, 3496, 176, JELLY_COIN_SM),

new Powerup(game, 3544, 176, JELLY_COIN_SM),

new Powerup(game, 3592, 176, JELLY_COIN_SM),

new Powerup(game, 3640, 176, JELLY_COIN_SM),

new Powerup(game, 3704, 112, JELLY_COIN_SM),

new Powerup(game, 3768, 96, JELLY_COIN_SM),

new Powerup(game, 3832, 112, JELLY_COIN_SM),

new Powerup(game, 3896, 176, JELLY_COIN_SM),

new Powerup(game, 3960, 176, JELLY_COIN_SM),

new Powerup(game, 4024, 176, JELLY_COIN_SM),

new Powerup(game, 4088, 176, JELLY_COIN_SM),

new Powerup(game, 4152, 176, JELLY_COIN_SM),

new Powerup(game, 2856, 368, JELLY_COIN_SM),

new Powerup(game, 2680, 320, JELLY_COIN_SM),

new Powerup(game, 2856, 256, JELLY_COIN_SM),

new Powerup(game, 2680, 192, JELLY_COIN_SM),

new Powerup(game, 2856, 128, JELLY_COIN_SM),

new Powerup(game, 888, 288, JELLY_COIN_SM),

new Powerup(game, 808, 288, JELLY_COIN_SM),

new Powerup(game, 4872, 432, JELLY_COIN_SM),

new Powerup(game, 4952, 432, JELLY_COIN_SM),

new Powerup(game, 5096, 176, JELLY_COIN_SM),

new Powerup(game, 5112, 128, JELLY_COIN_SM),

new Powerup(game, 5160, 112, JELLY_COIN_SM),

new Powerup(game, 5304, 112, JELLY_COIN_SM),

new Powerup(game, 5368, 112, JELLY_COIN_SM),

new Powerup(game, 5432, 112, JELLY_COIN_SM),

new Powerup(game, 5496, 112, JELLY_COIN_SM),

new Powerup(game, 5656, 112, JELLY_COIN_SM),

new Powerup(game, 5720, 112, JELLY_COIN_SM),

new Powerup(game, 5752, 256, JELLY_COIN_SM),

new Powerup(game, 5736, 304, JELLY_COIN_SM),

new Powerup(game, 5736, 208, JELLY_COIN_SM),

new Powerup(game, 5752, 352, JELLY_COIN_SM),

new Powerup(game, -520, 176, ENTITY_MARKER),

new Powerup(game, -72, 176, ENTITY_MARKER),

new Powerup(game, -72, 272, ENTITY_MARKER),

new Powerup(game, -488, 272, ENTITY_MARKER),

new Powerup(game, -792, 352, ENTITY_MARKER),

new Powerup(game, -792, 384, ENTITY_MARKER),

new Powerup(game, -792, 416, ENTITY_MARKER),

new Powerup(game, -584, 352, ENTITY_MARKER),

new Powerup(game, -584, 384, ENTITY_MARKER),

new Powerup(game, -584, 416, ENTITY_MARKER),

new Powerup(game, -488, 352, ENTITY_MARKER),

new Powerup(game, -488, 384, ENTITY_MARKER),

new Powerup(game, -488, 416, ENTITY_MARKER),

new Powerup(game, -120, 352, ENTITY_MARKER),

new Powerup(game, -120, 384, ENTITY_MARKER),

new Powerup(game, -120, 416, ENTITY_MARKER),

new Powerup(game, -1128, 272, ENTITY_MARKER),

new Powerup(game, -776, 272, ENTITY_MARKER),

new Powerup(game, 56, 432, ENTITY_MARKER),

new Powerup(game, 584, 432, ENTITY_MARKER),

new Powerup(game, 952, 80, ENTITY_MARKER),

new Powerup(game, 1848, 48, ENTITY_MARKER),

new Powerup(game, 1848, 80, ENTITY_MARKER),

new Powerup(game, 1848, 112, ENTITY_MARKER),

new Powerup(game, 1848, 144, ENTITY_MARKER),

new Powerup(game, 1848, 176, ENTITY_MARKER),

new Powerup(game, 1848, 208, ENTITY_MARKER),

new Powerup(game, 1848, 240, ENTITY_MARKER),

new Powerup(game, 1848, 272, ENTITY_MARKER),

new Powerup(game, 2312, 48, ENTITY_MARKER),

new Powerup(game, 2312, 80, ENTITY_MARKER),

new Powerup(game, 2312, 112, ENTITY_MARKER),

new Powerup(game, 2312, 176, ENTITY_MARKER),

new Powerup(game, 2312, 144, ENTITY_MARKER),

new Powerup(game, 2312, 64, ENTITY_MARKER),

new Powerup(game, 2312, 96, ENTITY_MARKER),

new Powerup(game, 2312, 128, ENTITY_MARKER),

new Powerup(game, 2632, 64, ENTITY_MARKER),

new Powerup(game, 2632, 96, ENTITY_MARKER),

new Powerup(game, 2632, 128, ENTITY_MARKER),

new Powerup(game, 2632, 160, ENTITY_MARKER),

new Powerup(game, 2632, 192, ENTITY_MARKER),

new Powerup(game, 2904, 432, ENTITY_MARKER),

new Powerup(game, 3304, 448, ENTITY_MARKER),

new Powerup(game, 2312, 272, ENTITY_MARKER),

new Powerup(game, 2312, 240, ENTITY_MARKER),

new Powerup(game, 2312, 208, ENTITY_MARKER),

new Powerup(game, 2312, 160, ENTITY_MARKER),

new Powerup(game, 584, 400, ENTITY_MARKER),

new Powerup(game, 1272, 400, ENTITY_MARKER),

new Powerup(game, 1272, 432, ENTITY_MARKER),

new Kelp(game, -56, -48),

new Kelp(game, -1928, 224),

new Kelp(game, 664, 208),

new Kelp(game, 1336, 208),

new Kelp(game, 1368, 208),

new Kelp(game, 2280, 208),

new Kelp(game, 3416, -32),

new Kelp(game, 2584, 0),

new Kelp(game, -952, 192),

new Kelp(game, 4472, 208),

new Kelp(game, 5208, -96),

new Kelp(game, 6040, 224),

new Kelp(game, 6072, 224),

new Kelp(game, 6104, 224),

new Kelp(game, 6136, 224),

new Kelp(game, 6200, 224),

new Kelp(game, 6008, 224),

new Powerup(game, -1624, 288, TIP_MARKER, 1),

new Powerup(game, -1096, 112, TIP_MARKER, 2),

new TunaChargeDropper(game, 936, 0),

new TunaChargeDropper(game, 2760, 0),

new TunaChargeDropper(game, 3656, 0),

new BubbleCurrent(game, 3384, 144, -8),

new BubbleCurrent(game, 4456, 96, -8),

new BubbleCurrent(game, 4760, 320, 8),

new Powerup(game, 5576, 448, JELLYBAIT),

/*
			new SeaSlug(game, -1944, 426, 1, 96),
			new Isopod(game, -1844, 426 - 32, 1, 96),
			new Eel(game, -1744, 426, 1, 0, 96),
			new TopRamen(game, -1644, 326, 1, 0, 96),
			new Pirahna(game, -1444, 326, 1, 96),
			new Pirahna(game, -1444 + 48 * 2, 326, 1, 96),
			new Pirahna(game, -1444 + 48 * 3, 326, 1, 96),
			new Pirahna(game, -1444 + 48 * 4, 326, 1, 96),
			new Uni(game, -1944, 400),
			new ShellSnail(game, -1544, 426 - 32, 1, 96),
			new Squid(game, -2000, 400),
			new Tentacle(game, -1444, 300),
			new Tentacle(game, -1144, 300),
*/
			];
		break;
	}
	for (i = 0; i < enemies.length; i++) {
		var v = enemies[i];
		game.addEntity(v);
	}
	for (i = 0; i < powerups.length; i++) {
		var v = powerups[i];
		game.addEntity(v);
	}
	for (i = 0; i < platforms.length; i++) {
		var p = platforms[i];
		game.currentMap.platforms.push(p);
	}
	for (i = 0; i < objects.length; i++) {
		var o = objects[i];
		game.addEntity(o);
	}
}



/*
	Asset manager
*/

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./img/Particle/flash.png");
ASSET_MANAGER.queueDownload("./img/Particle/invuln.png");
ASSET_MANAGER.queueDownload("./img/Particle/pink_flare.png");
ASSET_MANAGER.queueDownload("./img/Particle/orange_flare.png");
ASSET_MANAGER.queueDownload("./img/Particle/bubbleleft.png");
ASSET_MANAGER.queueDownload("./img/Particle/bubbleright.png");
ASSET_MANAGER.queueDownload("./img/Particle/smoke.png");
ASSET_MANAGER.queueDownload("./img/Particle/void_lightning.png");
ASSET_MANAGER.queueDownload("./img/Particle/void_lightning_large.png");
ASSET_MANAGER.queueDownload("./img/Particle/star_bullet.png");
ASSET_MANAGER.queueDownload("./img/Particle/star_bullet_2.png");
ASSET_MANAGER.queueDownload("./img/Particle/white_ring.png");
ASSET_MANAGER.queueDownload("./img/Particle/ulti_cut.png");
ASSET_MANAGER.queueDownload("./img/Particle/jelly_cut.png");
ASSET_MANAGER.queueDownload("./img/Particle/brandong_cut.png");

ASSET_MANAGER.queueDownload("./img/Background.png");
ASSET_MANAGER.queueDownload("./img/Background2.png");
ASSET_MANAGER.queueDownload("./img/Background3.png");
ASSET_MANAGER.queueDownload("./img/ArrowGoUp.png");
ASSET_MANAGER.queueDownload("./img/ArrowGoRight.png");
ASSET_MANAGER.queueDownload("./img/UI/Bottom.png");
ASSET_MANAGER.queueDownload("./img/UI/OugiBar.png");
ASSET_MANAGER.queueDownload("./img/UI/OugiBarActive.png");
ASSET_MANAGER.queueDownload("./img/UI/BarBack.png");
ASSET_MANAGER.queueDownload("./img/UI/HealthBar.png");
ASSET_MANAGER.queueDownload("./img/UI/HealthBarLight.png");
ASSET_MANAGER.queueDownload("./img/UI/StaminaBar.png");
ASSET_MANAGER.queueDownload("./img/UI/StaminaBarLight.png");
ASSET_MANAGER.queueDownload("./img/UI/Platform.png");
ASSET_MANAGER.queueDownload("./img/UI/PlatformBouncy.png");
ASSET_MANAGER.queueDownload("./img/UI/PlatformFire.png");
ASSET_MANAGER.queueDownload("./img/Chat/ChatSquare.png");
ASSET_MANAGER.queueDownload("./img/Chat/JellySquare.png");
ASSET_MANAGER.queueDownload("./img/Misc/debug.png");
ASSET_MANAGER.queueDownload("./img/Chat/UnknownSquare.png");

ASSET_MANAGER.queueDownload("./img/Jelly/jelly_idle_left.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_idle_right.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_jump_left.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_jump_right.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_fall_left.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_fall_right.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_hurt_left.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_hurt_right.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_walk_left.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_walk_right.png");
ASSET_MANAGER.queueDownload("./img/Jelly/babyjelly_binded.png");
ASSET_MANAGER.queueDownload("./img/Jelly/babyjelly_woke.png");
ASSET_MANAGER.queueDownload("./img/Jelly/babyjelly_woke2.png");
ASSET_MANAGER.queueDownload("./img/Jelly/babyjelly_idle_left.png");
ASSET_MANAGER.queueDownload("./img/Jelly/babyjelly_idle_right.png");
ASSET_MANAGER.queueDownload("./img/Jelly/babyjelly_jump_left.png");
ASSET_MANAGER.queueDownload("./img/Jelly/babyjelly_jump_right.png");
ASSET_MANAGER.queueDownload("./img/Jelly/babyjelly_fall_left.png");
ASSET_MANAGER.queueDownload("./img/Jelly/babyjelly_fall_right.png");
ASSET_MANAGER.queueDownload("./img/Jelly/babyjelly_hurt_left.png");
ASSET_MANAGER.queueDownload("./img/Jelly/babyjelly_hurt_right.png");
ASSET_MANAGER.queueDownload("./img/Jelly/babyjelly_walk_left.png");
ASSET_MANAGER.queueDownload("./img/Jelly/babyjelly_walk_right.png");

ASSET_MANAGER.queueDownload("./img/Jelly/babyjelly_attack_air_left.png");
ASSET_MANAGER.queueDownload("./img/Jelly/babyjelly_attack_air_right.png");
ASSET_MANAGER.queueDownload("./img/Jelly/babyjelly_attack_ground_left.png");
ASSET_MANAGER.queueDownload("./img/Jelly/babyjelly_attack_ground_right.png");

ASSET_MANAGER.queueDownload("./img/Jelly/jelly_attack_air_left.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_attack_air_right.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_attack_ground_left.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_attack_ground_right.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_attackup_air_left.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_attackup_air_right.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_attackup_ground_left.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_attackup_ground_right.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_attackdown_left.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_attackdown_right.png");

ASSET_MANAGER.queueDownload("./img/Jelly/jelly_attacklong_air_left.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_attacklong_air_right.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_attacklong_ground_left.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_attacklong_ground_right.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_attackuplong_air_left.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_attackuplong_air_right.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_attackuplong_ground_left.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_attackuplong_ground_right.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_attackdownlong_left.png");
ASSET_MANAGER.queueDownload("./img/Jelly/jelly_attackdownlong_right.png");
ASSET_MANAGER.queueDownload("./img/Jelly/JellyPortrait.png");

ASSET_MANAGER.queueDownload("./img/Enemy/seaslug_right.png");
ASSET_MANAGER.queueDownload("./img/Enemy/seaslug_left.png");
ASSET_MANAGER.queueDownload("./img/Enemy/seaslug_dead_right.png");
ASSET_MANAGER.queueDownload("./img/Enemy/seaslug_dead_left.png");
ASSET_MANAGER.queueDownload("./img/Enemy/squid.png");
ASSET_MANAGER.queueDownload("./img/Enemy/squid_dead.png");
ASSET_MANAGER.queueDownload("./img/Enemy/uni.png");
ASSET_MANAGER.queueDownload("./img/Enemy/uni_spiking.png");
ASSET_MANAGER.queueDownload("./img/Enemy/uni_unspike.png");
ASSET_MANAGER.queueDownload("./img/Enemy/uni_spiked.png");
ASSET_MANAGER.queueDownload("./img/Enemy/uni_dead.png");
ASSET_MANAGER.queueDownload("./img/Enemy/pirahna_right.png");
ASSET_MANAGER.queueDownload("./img/Enemy/pirahna_left.png");
ASSET_MANAGER.queueDownload("./img/Enemy/pirahna_dead_right.png");
ASSET_MANAGER.queueDownload("./img/Enemy/pirahna_dead_left.png");
ASSET_MANAGER.queueDownload("./img/Enemy/topramen.png");
ASSET_MANAGER.queueDownload("./img/Enemy/topramen_dead.png");
ASSET_MANAGER.queueDownload("./img/Enemy/cannedtuna.png");
ASSET_MANAGER.queueDownload("./img/Enemy/isopod_left.png");
ASSET_MANAGER.queueDownload("./img/Enemy/isopod_right.png");
ASSET_MANAGER.queueDownload("./img/Enemy/isopod_roll_1.png");
ASSET_MANAGER.queueDownload("./img/Enemy/isopod_roll_2.png");
ASSET_MANAGER.queueDownload("./img/Enemy/isopod_roll_3.png");
ASSET_MANAGER.queueDownload("./img/Enemy/isopod_roll_4.png");
ASSET_MANAGER.queueDownload("./img/Enemy/isopod_roll_5.png");
ASSET_MANAGER.queueDownload("./img/Enemy/isopod_roll_6.png");
ASSET_MANAGER.queueDownload("./img/Enemy/isopod_curl_right.png");
ASSET_MANAGER.queueDownload("./img/Enemy/isopod_curl_left.png");
ASSET_MANAGER.queueDownload("./img/Enemy/isopod_uncurl_right.png");
ASSET_MANAGER.queueDownload("./img/Enemy/isopod_uncurl_left.png");
ASSET_MANAGER.queueDownload("./img/Enemy/isopod_dead_right.png");
ASSET_MANAGER.queueDownload("./img/Enemy/isopod_dead_left.png");
ASSET_MANAGER.queueDownload("./img/Enemy/shellsnail_right.png");
ASSET_MANAGER.queueDownload("./img/Enemy/shellsnail_left.png");
ASSET_MANAGER.queueDownload("./img/Enemy/shellsnail_dead_right.png");
ASSET_MANAGER.queueDownload("./img/Enemy/shellsnail_dead_left.png");
ASSET_MANAGER.queueDownload("./img/Enemy/eel_right.png");
ASSET_MANAGER.queueDownload("./img/Enemy/eel_left.png");
ASSET_MANAGER.queueDownload("./img/Enemy/eel_dead_right.png");
ASSET_MANAGER.queueDownload("./img/Enemy/eel_dead_left.png");
ASSET_MANAGER.queueDownload("./img/Enemy/tentacle_idle_right.png");
ASSET_MANAGER.queueDownload("./img/Enemy/tentacle_idle_left.png");
ASSET_MANAGER.queueDownload("./img/Enemy/tentacle_raise_right.png");
ASSET_MANAGER.queueDownload("./img/Enemy/tentacle_raise_left.png");
ASSET_MANAGER.queueDownload("./img/Enemy/tentacle_slam_right.png");
ASSET_MANAGER.queueDownload("./img/Enemy/tentacle_slam_left.png");
ASSET_MANAGER.queueDownload("./img/Enemy/tentacle_slammed_right.png");
ASSET_MANAGER.queueDownload("./img/Enemy/tentacle_slammed_left.png");

ASSET_MANAGER.queueDownload("./img/Misc/ship.png");
ASSET_MANAGER.queueDownload("./img/Misc/ship_contact.png");
ASSET_MANAGER.queueDownload("./img/Misc/t_key.png");
ASSET_MANAGER.queueDownload("./img/Misc/kelp.png");
ASSET_MANAGER.queueDownload("./img/Misc/tuna_charge.png");

ASSET_MANAGER.queueDownload("./img/Platform/invisible_shine.png");
ASSET_MANAGER.queueDownload("./img/Platform/platform_crumble.png");
ASSET_MANAGER.queueDownload("./img/Platform/spike_up.png");
ASSET_MANAGER.queueDownload("./img/Platform/spike_down.png");
ASSET_MANAGER.queueDownload("./img/Platform/spike_left.png");
ASSET_MANAGER.queueDownload("./img/Platform/spike_right.png");

ASSET_MANAGER.queueDownload("./img/Particle/ground_slam.png");
ASSET_MANAGER.queueDownload("./img/UI/jelly_waterbreathe.png");
ASSET_MANAGER.queueDownload("./img/UI/jelly_lightning.png");
ASSET_MANAGER.queueDownload("./img/UI/blackscreen_bar.png");


ASSET_MANAGER.queueDownload("./img/Enemy/chicken.png");
ASSET_MANAGER.queueDownload("./img/Enemy/boar_idle.png");
ASSET_MANAGER.queueDownload("./img/Enemy/boar_prep.png");
ASSET_MANAGER.queueDownload("./img/Enemy/boar_charge.png");
ASSET_MANAGER.queueDownload("./img/Enemy/brandong.png");
ASSET_MANAGER.queueDownload("./img/Enemy/brandong_left.png");
ASSET_MANAGER.queueDownload("./img/Enemy/brandong_right_fast.png");
ASSET_MANAGER.queueDownload("./img/Enemy/brandong_right_slow.png");
ASSET_MANAGER.queueDownload("./img/Enemy/brandongboss_idle_right.png");
ASSET_MANAGER.queueDownload("./img/Enemy/brandongboss_idle_left.png");
ASSET_MANAGER.queueDownload("./img/Enemy/brandongboss_walk_right.png");
ASSET_MANAGER.queueDownload("./img/Enemy/brandongboss_walk_left.png");
ASSET_MANAGER.queueDownload("./img/Enemy/brandong_portrait.png");
ASSET_MANAGER.queueDownload("./img/Enemy/alpha_portrait.png");
ASSET_MANAGER.queueDownload("./img/Enemy/alpha_dead.png");
ASSET_MANAGER.queueDownload("./img/Enemy/alpha_idle.png");
ASSET_MANAGER.queueDownload("./img/Enemy/alpha_swing.png");
ASSET_MANAGER.queueDownload("./img/Enemy/alpha_prep.png");
ASSET_MANAGER.queueDownload("./img/Enemy/alpha_lunge.png");
ASSET_MANAGER.queueDownload("./img/Enemy/brandong_spin.png");
ASSET_MANAGER.queueDownload("./img/Enemy/brandong_whip.png");
ASSET_MANAGER.queueDownload("./img/Enemy/blue_viper.png");
ASSET_MANAGER.queueDownload("./img/Enemy/aya.png");
ASSET_MANAGER.queueDownload("./img/Enemy/aya_shoot.png");

ASSET_MANAGER.queueDownload("./img/Powerup/jellycoin.png");
ASSET_MANAGER.queueDownload("./img/Powerup/jellycoin_sm.png");
ASSET_MANAGER.queueDownload("./img/Powerup/hermes.png");
ASSET_MANAGER.queueDownload("./img/Powerup/petaltorrent.png");
ASSET_MANAGER.queueDownload("./img/Powerup/treeoflife.png");
ASSET_MANAGER.queueDownload("./img/Powerup/mine.png");
ASSET_MANAGER.queueDownload("./img/Powerup/telephoto.png");
ASSET_MANAGER.queueDownload("./img/Powerup/tearofselene.png");
ASSET_MANAGER.queueDownload("./img/Powerup/mithril_quiver2.png");
ASSET_MANAGER.queueDownload("./img/UI/shuriken_small.png");
ASSET_MANAGER.queueDownload("./img/UI/BrandongTracker.png");
ASSET_MANAGER.queueDownload("./img/Misc/tree.png");
ASSET_MANAGER.queueDownload("./img/Misc/speedgate.png");
ASSET_MANAGER.queueDownload("./img/Misc/brandong_explosion.png");

ASSET_MANAGER.downloadAll(function () {
    var canvas = document.getElementById('gameWorld');
    var ctx = canvas.getContext('2d');

    gameEngine = new GameEngine();
    var bg = new Background(gameEngine);
    var character = new Character(gameEngine);
    var map = new Map(gameEngine);
    var ui = new UI(gameEngine);
    var boss = new Brandong(gameEngine, -50000, 0);
    
    gameEngine.addEntity(bg);
    gameEngine.addEntity(map);
    gameEngine.addEntity(character);
    gameEngine.addEntity(boss);
    gameEngine.addEntity(ui);

    gameEngine.init(ctx);
    gameEngine.setPlayer1(character);
    gameEngine.setBoss(boss);
    gameEngine.setMap(map);
    gameEngine.setUI(ui);
    gameEngine.start();
	spawnWave(gameEngine, 1);
	
	var powerups = [
		//new Boar(gameEngine, -1300, 208),
		//new Powerup(gameEngine, -2000, 402, 5), //invuln powerup
		//new Powerup(gameEngine, -2000, 302, 6), //petal torrent powerup
	    /*new Powerup(gameEngine, 1024 - 3200, 620 - 300, 3, 1), //ezreal chathead
	    new Powerup(gameEngine, 896 - 3200, 380 - 300, 3, 2), //ezreal chathead
	    new Powerup(gameEngine, 2416 - 3200, 444 - 300, 0), //health powerup
	    new Powerup(gameEngine, 1472 - 3200, 636 - 300, 0), //health powerup
	    new Powerup(gameEngine, 1536 - 3200, 620 - 300, 3, 3), //ezreal chathead
	    new Powerup(gameEngine, 1808 - 3200, 684 - 300, 4), //perma void geyser
	    new Powerup(gameEngine, 2848 - 3200, 428 - 300, 3, 4)*/ //ezreal chathead
	];
	for (i = 0; i < powerups.length; i++) {
		var p = powerups[i];
		gameEngine.addEntity(p);
	}
    document.getElementById("gameWorld").focus();
});