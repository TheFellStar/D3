class Level2 extends Phaser.Scene {
    constructor() {
        super('level2');
    }
    create(){
        this.add.text(this.w, this.w, "you are in level2", {color: "#000000"});
        let pause2 = this.add.text(1800, 50, "___\n___\n___\n", {color: "#000000"})
        pause2.setInteractive();
        pause2.on('pointerdown', () => {
            this.scene.launch('pauseMenu2');
            this.scene.pause();
        })
    }
}

class PauseMenu2 extends Phaser.Scene {
    constructor() {
        super('pauseMenu2');
    }
    create(){
        this.add.text(620, 340, "Game Paused", {color: "#000000"}).setFontSize(100);
        let resume2 = this.add.text(840, 440, "Resume", {color: "#000000"}).setFontSize(50);
        resume2.setInteractive();
        resume2.on('pointerdown', () => {
            this.scene.resume('level2');
            this.scene.stop();
        })

        let select2 = this.add.text(760, 500, "Level Select", {color: "#000000"}).setFontSize(50);
        select2.setInteractive();
        select2.on('pointerdown', () => {
            this.scene.stop('level2');
            this.scene.start('levelSelect');
        })

        let m2 = this.add.text(870, 560, "Menu", {color: "#000000"}).setFontSize(50);
        m2.setInteractive();
        m2.on('pointerdown', () => {
            this.scene.stop('level2');
            this.scene.start('menu');
        })
    }
}