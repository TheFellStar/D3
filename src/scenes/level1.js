class Level1 extends Phaser.Scene {
    constructor() {
        super('level1');
    }
    create(){
        this.add.text(this.w, this.w, "you are in level1", {color: "#000000"})
        let pause1 = this.add.text(1800, 50, "___\n___\n___\n", {color: "#000000"})
        pause1.setInteractive();
        pause1.on('pointerdown', () => {
            this.scene.launch('pauseMenu1');
            this.scene.pause();
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