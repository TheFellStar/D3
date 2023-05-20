class Level2 extends Phaser.Scene {
    constructor() {
        super('level2');
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

        this.wallRight = this.walls.create(1795, 0, 'square').setOrigin(0);
		this.wallRight.scaleY = 500;
		this.wallRight.scaleX = 4;

        this.wall1 = this.walls.create(1525, 327, 'square').setOrigin(0);
        this.wall1.scaleY = 1;
        this.wall1.scaleX = 8.6;

        this.button = this.add.rectangle(1700, 450, 50, 50, 0x0000ff);
        this.physics.add.existing(this.button);

        this.box1 = this.boxes.create(centerX, 700, 'square').setOrigin(0);
        this.box1.scaleY = 4;
        this.box1.scaleX = 4;

        let pause1 = this.add.text(1800, 50, "___\n___\n___\n", {color: "#000000"})
        pause1.setInteractive();
        pause1.on('pointerdown', () => {
            this.scene.launch('pauseMenu2');
            this.scene.pause();
        })

        this.flag = this.add.image(1700, 250, 'flag');
        this.flag.setScale(.1);
        this.physics.add.existing(this.flag);

        this.ball = this.add.circle(300, 500, 50, 0x000000);
        this.physics.add.existing(this.ball);

        cursors = this.input.keyboard.createCursorKeys();
        reset = this.input.keyboard.addKey('R');
        reset.on('down', () => this.scene.start('level2'));
    }
    update(){
        this.physics.add.collider(this.ball, this.walls);
        this.physics.add.collider(this.ball, this.boxes);
        this.physics.add.collider(this.boxes, this.walls);
        this.physics.add.collider(this.boxes, this.boxes);
        this.physics.add.collider(this.boxes, this.blueWall);
        this.physics.add.collider(this.ball, this.blueWall);

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
            this.scene.start('win2');
        }
        if(this.physics.overlap(this.boxes, this.button)){
            this.blueWall.destroy();
        }
    }
}

class PauseMenu2 extends Phaser.Scene {
    constructor() {
        super('pauseMenu2');
    }
    create(){
        this.add.text(620, 340, "Game Paused", {color: "#ff0000"}).setFontSize(100);
        let resume2 = this.add.text(840, 440, "Resume", {color: "#ff0000"}).setFontSize(50);
        resume2.setInteractive();
        resume2.on('pointerdown', () => {
            this.scene.resume('level2');
            this.scene.stop();
        })

        let select2 = this.add.text(760, 500, "Level Select", {color: "#ff0000"}).setFontSize(50);
        select2.setInteractive();
        select2.on('pointerdown', () => {
            this.scene.stop('level2');
            this.scene.start('levelSelect');
        })

        let m2 = this.add.text(870, 560, "Menu", {color: "#ff0000"}).setFontSize(50);
        m2.setInteractive();
        m2.on('pointerdown', () => {
            this.scene.stop('level2');
            this.scene.start('menu');
        })
    }
}