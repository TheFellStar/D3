class Level1 extends Phaser.Scene {
    constructor() {
        super('level1');
    }
    create(){
        let ground=this.physics.add.sprite(200,150,"block");
        ground.displayWidth=100;
        ground.body.immovable = true;
        ground.body.allowGravity = false;

        let pause1 = this.add.text(1800, 50, "___\n___\n___\n", {color: "#000000"})
        pause1.setInteractive();
        pause1.on('pointerdown', () => {
            this.scene.launch('pauseMenu1');
            this.scene.pause();
        })

        let start1 = this.add.text(1700, 800, "Start!", {color: "#000000"}).setFontSize(50);
        start1.setInteractive();
        start1.on('pointerdown', () => {
            ground.destroy();
        })

        this.ball = this.add.circle(200, 50, 50, 0x000000);
        this.physics.add.existing(this.ball);

        this.physics.add.collider(this.ball, ground);
        this.ball.body.setBounce(0.7);
    }
    update(){
        if(this.ball.body.checkWorldBounds()){
            console.log("hello");
            this.scene.launch('fail1');
            this.scene.pause('level1');
        }
    }
}

class Fail1 extends Phaser.Scene {
    constructor(){
        super('fail1');
    }
    create(){
        this.add.text(750, 340, "Failed", {color: "#000000"}).setFontSize(100);
        let resume1 = this.add.text(840, 440, "Restart", {color: "#000000"}).setFontSize(50);
        resume1.setInteractive();
        resume1.on('pointerdown', () => {
            this.scene.stop();
            this.scene.stop('level1');
            this.scene.start('level1');
        })

        let select1 = this.add.text(760, 500, "Level Select", {color: "#000000"}).setFontSize(50);
        select1.setInteractive();
        select1.on('pointerdown', () => {
            this.scene.stop('level1');
            this.scene.start('levelSelect');
        })

        let m1 = this.add.text(870, 560, "Menu", {color: "#000000"}).setFontSize(50);
        m1.setInteractive();
        m1.on('pointerdown', () => {
            this.scene.stop('level1');
            this.scene.start('menu');
        })
    }
}

class PauseMenu1 extends Phaser.Scene {
    constructor() {
        super('pauseMenu1');
    }
    create(){
        this.add.text(620, 340, "Game Paused", {color: "#000000"}).setFontSize(100);
        let resume1 = this.add.text(840, 440, "Resume", {color: "#000000"}).setFontSize(50);
        resume1.setInteractive();
        resume1.on('pointerdown', () => {
            this.scene.resume('level1');
            this.scene.stop();
        })

        let select1 = this.add.text(760, 500, "Level Select", {color: "#000000"}).setFontSize(50);
        select1.setInteractive();
        select1.on('pointerdown', () => {
            this.scene.stop('level1');
            this.scene.start('levelSelect');
        })

        let m1 = this.add.text(870, 560, "Menu", {color: "#000000"}).setFontSize(50);
        m1.setInteractive();
        m1.on('pointerdown', () => {
            this.scene.stop('level1');
            this.scene.start('menu');
        })
    }
}