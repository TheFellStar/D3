class Level1 extends Phaser.Scene {
    constructor() {
        super('level1');
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('flag', 'flag.png');
    }
    create(){
        this.P1_VEL = 300;

        this.add.text(150, 150, "Press R to reset", {color: "#000000"}).setFontSize(50);

        this.walls = this.physics.add.group({
			immovable: true
		});

        this.boxes = this.physics.add.group();
		
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

        this.wallRight = this.walls.create(1795, 0, 'square').setOrigin(0);
		this.wallRight.scaleY = 500;
		this.wallRight.scaleX = 4;

        this.box1 = this.boxes.create(centerX, 200, 'square').setOrigin(0);
        this.box1.scaleY = 4;
        this.box1.scaleX = 4;

        this.box2 = this.boxes.create(centerX, 400, 'square').setOrigin(0);
        this.box2.scaleY = 4;
        this.box2.scaleX = 4;

        this.box3 = this.boxes.create(centerX, 600, 'square').setOrigin(0);
        this.box3.scaleY = 4;
        this.box3.scaleX = 4;

        this.box4 = this.boxes.create(centerX, 800, 'square').setOrigin(0);
        this.box4.scaleY = 4;
        this.box4.scaleX = 4;

        let pause1 = this.add.text(1800, 50, "___\n___\n___\n", {color: "#000000"})
        pause1.setInteractive();
        pause1.on('pointerdown', () => {
            this.scene.launch('pauseMenu1');
            this.scene.pause();
        })

        this.flag = this.add.image(1500, 500, 'flag');
        this.flag.setScale(0.1);
        this.physics.add.existing(this.flag);

        this.ball = this.add.circle(300, 500, 50, 0x000000);
        this.physics.add.existing(this.ball);

        cursors = this.input.keyboard.createCursorKeys();
        reset = this.input.keyboard.addKey('R');
        reset.on('down', () => this.scene.start('level1'));
    }
    update(){
        this.physics.add.collider(this.ball, this.walls);
        this.physics.add.collider(this.ball, this.boxes);
        this.physics.add.collider(this.boxes, this.walls);
        this.physics.add.collider(this.boxes, this.boxes);

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
            this.scene.start('level2');
        }
    }
}

class PauseMenu1 extends Phaser.Scene {
    constructor() {
        super('pauseMenu1');
    }
    create(){
        this.add.text(620, 340, "Game Paused", {color: "#ff0000"}).setFontSize(100);
        let resume1 = this.add.text(840, 440, "Resume", {color: "#ff0000"}).setFontSize(50);
        resume1.setInteractive();
        resume1.on('pointerdown', () => {
            this.scene.resume('level1');
            this.scene.stop();
        })

        let select1 = this.add.text(760, 500, "Level Select", {color: "#ff0000"}).setFontSize(50);
        select1.setInteractive();
        select1.on('pointerdown', () => {
            this.scene.stop('level1');
            this.scene.start('levelSelect');
        })

        let m1 = this.add.text(870, 560, "Menu", {color: "#ff0000"}).setFontSize(50);
        m1.setInteractive();
        m1.on('pointerdown', () => {
            this.scene.stop('level1');
            this.scene.start('menu');
        })
    }
}