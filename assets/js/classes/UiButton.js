class UiButton extends Phaser.GameObjects.Container {
	constructor ( scene, x, y, key, hoverKey, text, targetCallback ) {
		super ( scene, x, y );

		this.scene = scene; // the scene this container button will be added to
		this.x = x; // x position of container
		this.y = y; // y position of container
		this.key = key; // background image of button
		this.hoverKey = hoverKey; // new background image when player mouse hovers over this button
		this.text = text; // this button's display text / label
		this.targetCallback = targetCallback; // the callback function that activates when player clicks this button

		// creates the Ui Button
		this.createButton();

		// add this container to our Phaser scene
		this.scene.add.existing(this); 
	}

	createButton() {
		//var myBtnFontSizeNumber = this.scale.width * 3 / 80;
		//var myBtnFontSizeString = myBtnFontSizeNumber + "px";
		this.button = this.scene.add.image( 0, 0, 'button1' );

		// makes the button interactive
		this.button.setInteractive();

		// scale the button
		this.button.setScale(1.4);

		// create the button text
		this.buttonText = this.scene.add.text (
			0,
			0,
			this.text,
			{
				fontSize: '26px',
				/* fontSize: myBtnFontSizeString, */
				fontFamily: 'Verdana, "Times New Roman", Tahoma, serif',
				fill: '#fff'
			}
		);

		// center the text inside Ui Button
		Phaser.Display.Align.In.Center ( this.buttonText, this.button );

		// now add the button and its text to the container
		this.add(this.button);
		this.add(this.buttonText);

		// now listen for possible relevant events

		this.button.on ( 'pointerdown', () => { this.targetCallback (); } );
		this.button.on ( 'pointerover', () => { this.button.setTexture ( this.hoverKey ); } );
		this.button.on ( 'pointerout', () => { this.button.setTexture ( this.key ); } );
	};

}



