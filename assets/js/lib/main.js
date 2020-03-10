const config = {
	type: Phaser.AUTO,
	width: 640,
	height: 480,
	scene: [
		BootScene,
		TitleScene,
		GameScene,
		UiScene,
	],
	physics: {
		default: 'arcade',
		arcade: {
			debug: true,
			gravity: {
				y: 0
			}
		}
	}
};

const game = new Phaser.Game ( config );


