class Level1 extends Phaser.Scene {
    constructor() {
        super('level1');
    }
    create(){
        this.add.text(this.w, this.w, "you are in level1")
    }
}