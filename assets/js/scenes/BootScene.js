class BootScene extends Phaser.Scene {
	constructor () {
		super ('Boot');
	}

	preload () {
		// load the different images
		this.loadImages ();

		// load the spritesheets
		this.loadSpriteSheets ();

		// load the sound and music
		this.loadAudio ();

	}

	loadImages () {
		// load the different images
		this.load.image ( 'button1', './assets/images/ui/blue_button01.png' );
		this.load.image ( 'button2', './assets/images/ui/blue_button02.png' );
	}

	loadSpriteSheets () {
		// load the spritesheets
		this.load.spritesheet ( 'items', './assets/images/items.png', { frameWidth: 32, frameHeight: 32 } );
		this.load.spritesheet ( 'characters', './assets/images/characters.png', { frameWidth: 32, frameHeight: 32 } );
	}

	loadAudio () {
		// load the sound and music
		this.load.audio ('goldSound', './assets/audio/Pickup.wav');
		this.load.audio ('music_DesertLordLoop', './assets/audio/DesertLordLoop.wav');
	}

	create () {
		//console.log("Starting game...");
		this.scene.start ( 'Title' );
		//this.scene.start ( 'Game' );
	}

}