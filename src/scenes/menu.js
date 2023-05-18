class Menu extends Phaser.Scene {
    constructor() {
        super('menu');
    }
    create() {
        this.cameras.main.setBackgroundColor("#ffffff");
        this.add.text(700, 240, " Sketch \nand Roll", {color: "#000000"}).setFontSize(100);
        this.add.text(800, 450, "Start Game", {color: "#000000"}).setFontSize(50);
        this.add.text(775, 515, "Level Select", {color: "#000000"}).setFontSize(50);
    }
}