class Win1 extends Phaser.Scene {
    constructor(){
        super('win1');
    }
    create(){
        this.add.text(700, 340, "Congrats!", {color: "#000000"}).setFontSize(100);
        let next1 = this.add.text(790, 440, "Next Level", {color: "#000000"}).setFontSize(50);
        next1.setInteractive();
        next1.on('pointerdown', () => {
            this.scene.start('level2');
        })

        let wselect1 = this.add.text(760, 500, "Level Select", {color: "#000000"}).setFontSize(50);
        wselect1.setInteractive();
        wselect1.on('pointerdown', () => {
            this.scene.start('levelSelect');
        })

        let wm1 = this.add.text(870, 560, "Menu", {color: "#000000"}).setFontSize(50);
        wm1.setInteractive();
        wm1.on('pointerdown', () => {
            this.scene.start('menu');
        })
    }
}

class Win2 extends Phaser.Scene {
    constructor(){
        super('win2');
    }
    create(){
        this.add.text(700, 340, "Congrats!", {color: "#000000"}).setFontSize(100);
        let next2 = this.add.text(790, 440, "Next Level", {color: "#000000"}).setFontSize(50);
        next2.setInteractive();
        next2.on('pointerdown', () => {
            this.scene.start('level3');
        })

        let wselect2 = this.add.text(760, 500, "Level Select", {color: "#000000"}).setFontSize(50);
        wselect2.setInteractive();
        wselect2.on('pointerdown', () => {
            this.scene.start('levelSelect');
        })

        let wm2 = this.add.text(870, 560, "Menu", {color: "#000000"}).setFontSize(50);
        wm2.setInteractive();
        wm2.on('pointerdown', () => {
            this.scene.start('menu');
        })
    }
}

class Win3 extends Phaser.Scene {
    constructor(){
        super('win3');
    }
    create(){
        this.add.text(700, 340, "Congrats!", {color: "#000000"}).setFontSize(100);
        let next3 = this.add.text(790, 440, "Next Level", {color: "#000000"}).setFontSize(50);
        next3.setInteractive();
        next3.on('pointerdown', () => {
            this.scene.start('menu');
        })

        let wselect3 = this.add.text(760, 500, "Level Select", {color: "#000000"}).setFontSize(50);
        wselect3.setInteractive();
        wselect3.on('pointerdown', () => {
            this.scene.start('levelSelect');
        })

        let wm3 = this.add.text(870, 560, "Menu", {color: "#000000"}).setFontSize(50);
        wm3.setInteractive();
        wm3.on('pointerdown', () => {
            this.scene.start('menu');
        })
    }
}