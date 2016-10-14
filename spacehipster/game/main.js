/// <reference path="../node_modules/phaser/typescript/phaser.d.ts" />
var SpaceHipster;
(function (SpaceHipster) {
    var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');
    game.state.add('Boot', SpaceHipster.Boot);
    game.state.add('Preload', SpaceHipster.Preload);
    game.state.add('MainMenu', SpaceHipster.MainMenu);
    game.state.add('Game', SpaceHipster.Game);
    game.state.start('Boot');
})(SpaceHipster || (SpaceHipster = {}));
//# sourceMappingURL=main.js.map