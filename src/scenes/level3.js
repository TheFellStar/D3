class Level3 extends Phaser.Scene {
    constructor() {
        super('level3');
    }
    create(){
        this.add.text(this.w, this.w, "you are in level3", {color: "#000000"})
        let pause3 = this.add.text(1800, 50, "___\n___\n___\n", {color: "#000000"})
        pause3.setInteractive();
        pause3.on('pointerdown', () => {
            this.scene.launch('pauseMenu3');
            this.scene.pause();
        })
    }
}

class PauseMenu3 extends Phaser.Scene {
    constructor() {
        super('pauseMenu3');
    }
    create(){
        this.add.text(620, 340, "Game Paused", {color: "#000000"}).setFontSize(100);
        let resume3 = this.add.text(840, 440, "Resume", {color: "#000000"}).setFontSize(50);
        resume3.setInteractive();
        resume3.on('pointerdown', () => {
            this.scene.resume('level3');
            this.scene.stop();
        })

        let select3 = this.add.text(760, 500, "Level Select", {color: "#000000"}).setFontSize(50);
        select3.setInteractive();
        select3.on('pointerdown', () => {
            this.scene.stop('level3');
            this.scene.start('levelSelect');
        })

        let m3 = this.add.text(870, 560, "Menu", {color: "#000000"}).setFontSize(50);
        m3.setInteractive();
        m3.on('pointerdown', () => {
            this.scene.stop('level3');
            this.scene.start('menu');
        })
    }
}