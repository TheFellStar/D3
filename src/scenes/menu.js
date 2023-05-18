class Menu extends Phaser.Scene {
    constructor() {
        super('menu');
    }
    create() {
        this.cameras.main.setBackgroundColor("#ffffff");
        this.add.text(700, 240, " Sketch \nand Roll", {color: "#000000"}).setFontSize(100);
        let start = this.add.text(800, 450, "Start Game", {color: "#000000"}).setFontSize(50);
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
        this.cameras.main.setBackgroundColor("#ffffff");
        this.add.text(600, 240, "Level Select", {color: "#000000"}).setFontSize(100);
    }
}