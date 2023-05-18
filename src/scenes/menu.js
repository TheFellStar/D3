class Menu extends Phaser.scene {
    constructor() {
        super('menu');
    }
    preload() {

    }
    create() {
        let title = this.add.text(this.w, this.w, "testing");
        title.setFontSize(this.s * 3);
    }
}