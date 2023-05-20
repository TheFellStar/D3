class Menu extends Phaser.Scene {
    constructor() {
        super('menu');
    }
    create() {
        this.add.text(765, 325, "Shapes", {color: "#000000"}).setFontSize(100);
        let start = this.add.text(800, 450, "Start Game", {color: "#000000"}).setFontSize(50);
        start.setInteractive();
        start.on('pointerdown', () => this.scene.start('level1'));

        let levels = this.add.text(775, 515, "Level Select", {color: "#000000"}).setFontSize(50);
        levels.setInteractive();
        levels.on('pointerdown', () => this.scene.start('levelSelect'));
    }
}

class LevelSelect extends Phaser.Scene {
    constructor(){
        super('levelSelect');
    }
    create(){
        this.add.text(600, 340, "Level Select", {color: "#000000"}).setFontSize(100);
        let level1 = this.add.text(830, 450, "Level 1", {color: "#000000"}).setFontSize(50);
        level1.setInteractive();
        level1.on('pointerdown', () => this.scene.start('level1'));

        let level2 = this.add.text(830, 515, "Level 2", {color: "#000000"}).setFontSize(50);
        level2.setInteractive();
        level2.on('pointerdown', () => this.scene.start('level2'));

        let level3 = this.add.text(830, 580, "Level 3", {color: "#000000"}).setFontSize(50);
        level3.setInteractive();
        level3.on('pointerdown', () => this.scene.start('level3'));
    }
}