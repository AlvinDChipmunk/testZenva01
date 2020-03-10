class TitleScene extends Phaser.Scene {
	constructor () {
		super ('Title');
	}

	create () {
		var myTitleFontSizeNumber = this.scale.width / 12;
		var myTitleFontSizeString = myTitleFontSizeNumber + "px";

		// create title text
		this.titleText = this.add.text( 
			this.scale.width / 2, 
			this.scale.height / 2, 
			"Alvin's Test Game", 
			{ 
				/* fontSize: '64px', */
				fontSize: myTitleFontSizeString,
				fontFamily: 'Verdana, "Times New Roman", Tahoma, serif',
				fontStyle: 'italic',
				fill: '#fff'
			} 
		);
		this.titleText.setOrigin ( 0.5 );
		
		this.startGameButton = new UiButton ( 
			this, 
			this.scale.width / 2, 
			this.scale.height * 0.7, 
			'button1', 
			'button2', 
			'Start Game!',
			this.startScene.bind ( this, 'Game' )
		);

		/*
		var myBtnFontSizeNumber = this.scale.width * 3 / 80;
		var myBtnFontSizeString = myBtnFontSizeNumber + "px";

		this.button = this.add.image( this.scale.width / 2, this.scale.height * 0.7, 'button1' );
		this.button.setInteractive();
		this.buttonText = this.add.text (
			0,
			0,
			'Start Game',
			{
				// fontSize: '26px',
				fontSize: myBtnFontSizeString,
				fontFamily: 'Verdana, "Times New Roman", Tahoma, serif',
				fill: '#fff'
			}
		);
		Phaser.Display.Align.In.Center ( this.buttonText, this.button );

		this.button.on ( 
			'pointerdown', 
			() => {
				//console.log( 'pointer down' );
				this.scene.start ( 'Game' );
			}
		);

		this.button.on ( 
			'pointerover', 
			() => {
				//console.log( 'pointer over' );
				this.button.setTexture ( 'button2' );
			}
		);

		this.button.on ( 
			'pointerout', 
			() => {
				//console.log( 'pointer out' );
				this.button.setTexture ( 'button1' );
			}
		);
		*/

	}

	startScene ( targetScene ) {
		this.scene.start( targetScene );
	}
}