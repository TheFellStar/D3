let config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: true,
            debugBodyColor: 0xffffff
        }
    },
    backgroundColor: '#ffffff',
    scene: [ Menu, LevelSelect, Level1, Level2, Level3, PauseMenu1, PauseMenu2, PauseMenu3],
}

let game = new Phaser.Game(config);

let centerX = game.config.width/2;
let widthSpacer = game.config.width/5;
let halfHeight = game.config.height/2;
let swap = null;
let cursors = null;