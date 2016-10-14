var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpaceHipster;
(function (SpaceHipster) {
    var Preload = (function (_super) {
        __extends(Preload, _super);
        function Preload() {
            _super.apply(this, arguments);
        }
        Preload.prototype.preload = function () {
            //show loading screen
            this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, SpaceHipster.ImageName.Logo);
            this.splash.anchor.setTo(0.5);
            this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, SpaceHipster.ImageName.Preloadbar);
            this.preloadBar.anchor.setTo(0.5);
            this.load.setPreloadSprite(this.preloadBar);
            //load game assets
            this.load.image(SpaceHipster.ImageName.Space.toString(), 'assets/images/space.png');
            this.load.image(SpaceHipster.ImageName.Rock.toString(), 'assets/images/rock.png');
            this.load.spritesheet(SpaceHipster.ImageName.Playership.toString(), 'assets/images/player.png', 12, 12);
            this.load.spritesheet(SpaceHipster.ImageName.Power.toString(), 'assets/images/power.png', 12, 12);
            this.load.image(SpaceHipster.ImageName.PlayerParticle.toString(), 'assets/images/player-particle.png');
            this.load.audio('collect', 'assets/audio/collect.ogg');
            this.load.audio('explosion', 'assets/audio/explosion.ogg');
        };
        Preload.prototype.create = function () {
            this.game.state.start('MainMenu');
        };
        return Preload;
    }(Phaser.State));
    SpaceHipster.Preload = Preload;
})(SpaceHipster || (SpaceHipster = {}));
//# sourceMappingURL=Preload.js.map