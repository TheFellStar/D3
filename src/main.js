let config = {
    type: Phaser.AUTO,
    width: 700,
    height: 700,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scene: [ Menu ],
}

let game = new Phaser.Game(config);

let centerX = game.config.width/2;
let widthSpacer = game.config.width/5;
let halfHeight = game.config.height/2;
let swap = null;
let cursors = null;