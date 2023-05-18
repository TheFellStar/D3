class Level3 extends Phaser.Scene {
    constructor() {
        super('level3');
    }
    create(){
        this.add.text(this.w, this.w, "you are in level3")
    }
}