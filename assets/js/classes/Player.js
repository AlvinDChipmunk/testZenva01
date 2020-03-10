class Player extends Phaser.Physics.Arcade.Image {
	constructor (scene, x, y, key, frame) {
		super (scene, x, y, key, frame);

		// the scene this object will be added to
		this.scene = scene;

		// the speed of the player when moving
		this.charSpeed = 128;

		// current amount of coins player has
		this.charCoins = 0;

		// need to enable physics
		this.scene.physics.world.enable (this);

		// set immovable if another object collides with the player
		this.setImmovable(false);

		// scales the player
		this.setScale(1.5);

		// collide with viewport boundaries so not to leave the game view area
		this.setCollideWorldBounds(true);

		// add the player to the existing scene
		this.scene.add.existing (this);
	}

	update (cursors) {
		this.body.setVelocity( 0, 0 );
	
		if (cursors.left.isDown) {
			this.body.setVelocityX( this.charSpeed * -1 );
			// console.log('left');
		}
		else if (cursors.right.isDown) {
			this.body.setVelocityX( this.charSpeed );
			// console.log('right');
		}
		else if (cursors.up.isDown) {
			this.body.setVelocityY( this.charSpeed * -1 );
			// console.log('up');
		}
		else if (cursors.down.isDown) {
			this.body.setVelocityY( this.charSpeed );
			// console.log('down');
		}
		else {
			//console.log('neither');
		}
	}
}