var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpaceHipster;
(function (SpaceHipster) {
    var Boot = (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            _super.apply(this, arguments);
        }
        //setting game configuration and loading the assets for the loading screen
        Boot.prototype.preload = function () {
            //assets we'll use in the loading screen
            this.load.image(SpaceHipster.ImageName.Logo.toString(), 'assets/images/logo.png');
            this.load.image(SpaceHipster.ImageName.Preloadbar.toString(), 'assets/images/preloader-bar.png');
        };
        Boot.prototype.create = function () {
            //loading screen will have a white background
            this.game.stage.backgroundColor = '#fff';
            //scaling options
            this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
            this.scale.minWidth = 240;
            this.scale.minHeight = 170;
            this.scale.maxWidth = 2880;
            this.scale.maxHeight = 1920;
            //have the game centered horizontally
            this.scale.pageAlignHorizontally = true;
            //physics system for movement
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.game.state.start('Preload');
        };
        return Boot;
    }(Phaser.State));
    SpaceHipster.Boot = Boot;
})(SpaceHipster || (SpaceHipster = {}));
//# sourceMappingURL=Boot.js.map