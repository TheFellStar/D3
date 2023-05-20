class Level3 extends Phaser.Scene {
    constructor() {
        super('level3');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('flag', 'flag.png');
    }
    create(){
        this.P1_VEL = 300;


        this.walls = this.physics.add.group({
			immovable: true
		});

        this.boxes = this.physics.add.group();

        this.buttons = this.physics.add.group();
		
		this.wallTop = this.walls.create(0, 0, 'square').setOrigin(0);
		this.wallTop.scaleY = 4;	// make it taaaaaaaall
		this.wallTop.scaleX = 500;
		this.wallTop.tint = 0x333333;

		this.wallBtm = this.walls.create(0, 980, 'square').setOrigin(0);
		this.wallBtm.scaleY = 4;
		this.wallBtm.scaleX = 500;
		this.wallBtm.tint = 0x333333;

        this.wallLeft = this.walls.create(0, 0, 'square').setOrigin(0);
		this.wallLeft.scaleY = 500;
		this.wallLeft.scaleX = 4;

        this.blueWall = this.add.rectangle(1550, 227, 50, 200, 0x0000ff);
        this.physics.add.existing(this.blueWall);
        this.blueWall.body.immovable = true;

        this.orangeWall = this.add.rectangle(1450, 227, 50, 200, 0xff4500);
        this.physics.add.existing(this.orangeWall);
        this.orangeWall.body.immovable = true;

        this.wallRight = this.walls.create(1795, 0, 'square').setOrigin(0);
		this.wallRight.scaleY = 500;
		this.wallRight.scaleX = 4;

        this.wall1 = this.walls.create(1425, 327, 'square').setOrigin(0);
        this.wall1.scaleY = 1;
        this.wall1.scaleX = 11.6;

        this.midWall = this.walls.create(centerX, 525, 'square').setOrigin(0);
        this.midWall.scaleY = 4;
        this.midWall.scaleX = 4;
        this.midWall.tint = 0xf03065;

        this.rightCorner = this.walls.create(1670, 800, 'square').setOrigin(0);
        this.rightCorner.scaleY = 5.7;
        this.rightCorner.scaleX = 4;
        this.rightCorner.tint = 0xf03065;

        this.leftCorner = this.walls.create(252, 127, 'square').setOrigin(0);
        this.leftCorner.scaleY = 7;
        this.leftCorner.scaleX = 4;
        this.leftCorner.tint = 0xf03065;

        this.idkWall = this.walls.create(125, 375, 'square').setOrigin(0);
        this.idkWall.scaleY = 4;
        this.idkWall.scaleX = 4;
        this.idkWall.tint = 0xf03065;

        this.button = this.add.rectangle(300, 450, 50, 50, 0x0000ff);
        this.physics.add.existing(this.button);

        this.orangeButton = this.add.rectangle(900, 550, 50, 50, 0xff4500);
        this.physics.add.existing(this.orangeButton);

        this.box1 = this.boxes.create(centerX, 750, 'square').setOrigin(0);
        this.box1.scaleY = 3;
        this.box1.scaleX = 3;

        this.box2 = this.boxes.create(285, 775, 'square').setOrigin(0);
        this.box2.scaleY = 3;
        this.box2.scaleX = 3;

        let pause1 = this.add.text(1800, 50, "___\n___\n___\n", {color: "#000000"})
        pause1.setInteractive();
        pause1.on('pointerdown', () => {
            this.scene.launch('pauseMenu3');
            this.scene.pause();
        })

        this.flag = this.add.image(1700, 250, 'flag');
        this.flag.setScale(.1);
        this.physics.add.existing(this.flag);

        this.ball = this.add.circle(500, 300, 50, 0x000000);
        this.physics.add.existing(this.ball);

        cursors = this.input.keyboard.createCursorKeys();
        reset = this.input.keyboard.addKey('R');
        reset.on('down', () => this.scene.start('level3'));
    }
    update(){
        this.physics.add.collider(this.ball, this.walls);
        this.physics.add.collider(this.ball, this.boxes);
        this.physics.add.collider(this.boxes, this.walls);
        this.physics.add.collider(this.boxes, this.boxes);
        this.physics.add.collider(this.boxes, this.blueWall);
        this.physics.add.collider(this.ball, this.blueWall);
        this.physics.add.collider(this.boxes, this.orangeWall);
        this.physics.add.collider(this.ball, this.orangeWall);

        if(cursors.up.isDown){
            this.ball.body.setVelocityY(-this.P1_VEL);
			this.ball.body.setVelocityX(0);
        }else if(cursors.down.isDown){
            this.ball.body.setVelocityY(this.P1_VEL);
			this.ball.body.setVelocityX(0);
        }else if(cursors.left.isDown) {
			this.ball.body.setVelocityX(-this.P1_VEL);
			this.ball.body.setVelocityY(0);
		} else if(cursors.right.isDown) {
			this.ball.body.setVelocityX(this.P1_VEL);
			this.ball.body.setVelocityY(0);
		} else {
			this.ball.body.setVelocityX(0);
			this.ball.body.setVelocityY(0);
        }

        if(this.physics.overlap(this.ball, this.flag)){
            this.scene.start('win3');
        }
        if(this.physics.overlap(this.boxes, this.button)){
            this.blueWall.destroy();
        }
        if(this.physics.overlap(this.boxes, this.orangeButton)){
            this.orangeWall.destroy();
        }
    }
}

class PauseMenu3 extends Phaser.Scene {
    constructor() {
        super('pauseMenu3');
    }
    create(){
        this.add.text(620, 340, "Game Paused", {color: "#ff0000"}).setFontSize(100);
        let resume3 = this.add.text(840, 440, "Resume", {color: "#ff0000"}).setFontSize(50);
        resume3.setInteractive();
        resume3.on('pointerdown', () => {
            this.scene.resume('level3');
            this.scene.stop();
        })

        let select3 = this.add.text(760, 500, "Level Select", {color: "#ff0000"}).setFontSize(50);
        select3.setInteractive();
        select3.on('pointerdown', () => {
            this.scene.stop('level3');
            this.scene.start('levelSelect');
        })

        let m3 = this.add.text(870, 560, "Menu", {color: "#ff0000"}).setFontSize(50);
        m3.setInteractive();
        m3.on('pointerdown', () => {
            this.scene.stop('level3');
            this.scene.start('menu');
        })
    }
}