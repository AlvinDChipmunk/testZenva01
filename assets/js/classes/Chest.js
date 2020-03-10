class Chest extends Phaser.Physics.Arcade.Image {
	constructor (scene, x, y, key, frame) {
		super (scene, x, y, key, frame);

		// the scene this game object will be added to
		this.scene = scene;

		// minimum and maximum values of what could be in the chest
		this.minCoins = 1;
		this.maxCoins = 15;

		// randomized value of coins in this object that will be awarded upon pickup
		this.coins = Phaser.Math.Between(this.minCoins, this.maxCoins);

		// need to enable physics
		this.scene.physics.world.enable (this);

		// add the player to the existing scene
		this.scene.add.existing (this);
	}

}