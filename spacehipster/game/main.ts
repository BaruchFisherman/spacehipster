/// <reference path="../node_modules/phaser/typescript/phaser.d.ts" />

namespace SpaceHipster {
    "use strict";

    let game: Phaser.Game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "");
    game.state.add("Boot", SpaceHipster.Boot);
    game.state.add("Preload", SpaceHipster.Preload);
    game.state.add("MainMenu", SpaceHipster.MainMenu);
    game.state.add("Game", SpaceHipster.Game);

    game.state.start("Boot");
}