class GameScene extends Phaser.Scene {
	constructor () {
		super ('Game');
	}

	init () {
		/*
		Because the GameScene.js starts up before the UiScene, the GameScene renders first, 
		then the UiScene renders on top of the GameScene, so Game Objects DO NOT block the 
		view of the player's Ui.
		*/
		this.scene.launch( 'Ui' );
	}

	create () {
		//createPlayer
		this.createPlayer ();

		// set up treasure chest
		// createChests
		this.createChests ();
	
		// audio for when the player runs over gold to pick up
		// createAudio
		this.createAudio ();
	
		// start playing music
		// also part of createAudio
	
		// set up wall
		// createWalls
		this.createWalls ();
	
		// keyboard controls
		// createInput
		this.createInput ();

		// set up collision for player object
		// addCollisions
		this.addCollisions ();

	}

	update () {
		this.player.update(this.cursors);

	}

	createAudio () {
		this.goldPickupAudio = this.sound.add('goldSound', { loop: false, volume: 0.5});
		var music_DLLAudio = this.sound.add('music_DesertLordLoop', { loop: true, volume: 0.3 });

		music_DLLAudio.play();
	}

	createPlayer () { this.player = new Player ( this, 32, 32, 'characters', 0); }

	createChests () { 
		// create a chest group
		this.chests = this.physics.add.group ();

		// create possible chest positions for each chest in chests group by using an Array
		this.chestPositions = [
			[  75,  75 ],
			[  75, 150 ],
			[  75, 225 ],
			[  75, 300 ],
			[ 150,  75 ],
			[ 150, 150 ],
			[ 150, 225 ],
			[ 150, 300 ],
			[ 225,  75 ],
			[ 225, 150 ],
			[ 225, 225 ],
			[ 225, 300 ],
			[ 300,  75 ],
			[ 300, 150 ],
			[ 300, 225 ],
			[ 300, 300 ]
		];


		// specify the max number of chests inside the chests group
		this.maxNumberOfChests = 3;

		for ( let i = 0; i < this.maxNumberOfChests; i ++) {
			// spawn a chest
			this.spawnChest ();
		}



	}

	spawnChest () {
		var rnd = Phaser.Math.RND;
		//var item = rnd.pick(arr);

		const location = rnd.pick(this.chestPositions);
		const chest = new Chest ( this, location[0], location[1], 'items', 0 );

		// add chest to chests group
		this.chests.add ( chest );
	}

	createWalls () {
		this.wall = this.physics.add.image( 500, 100, 'button1');
		this.wall.setImmovable();
	}

	createInput () { this.cursors = this.input.keyboard.createCursorKeys (); }

	addCollisions () {
		this.physics.add.collider(this.player, this.wall); // wall collider
		this.physics.add.overlap (
			this.player, 
			this.chests, 
			this.collectChest,
			null,
			this
		);
	}

	collectChest ( player, chest ) {
		console.log('overlap');

		// play gold pickup sound
		this.goldPickupAudio.play();

		// confirm amount of coins in chest before adding to total
		console.log ( 'Coins in chest: ' + chest.coins );

		// update score in the Ui
		player.charCoins += chest.coins;
		this.events.emit( 'updateScore', player.charCoins );

		// get rid of chest game object
		chest.destroy();

		// spawn a new chest
		
	}

}