class Level2 extends Phaser.Scene {
    constructor() {
        super('level2');
    }
    create(){
        this.add.text(this.w, this.w, "you are in level2")
    }
}