var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SpaceHipster;
(function (SpaceHipster) {
    var MainMenu = (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            _super.apply(this, arguments);
            this.highestScore = 0;
        }
        MainMenu.prototype.init = function (score) {
            var score = score || 0;
            this.highestScore = Math.max(score, this.highestScore);
        };
        MainMenu.prototype.create = function () {
            //show the space tile, repeated
            this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, SpaceHipster.ImageName.Space.toString());
            //give it speed in x
            this.background.autoScroll(-20, 0);
            //start game text
            var text = "Tap to begin";
            var style = { font: "30px Arial", fill: "#fff", align: "center" };
            var t = this.game.add.text(this.game.width / 2, this.game.height / 2, text, style);
            t.anchor.set(0.5);
            //highest score
            text = "Highest score: " + this.highestScore;
            style = { font: "15px Arial", fill: "#fff", align: "center" };
            var h = this.game.add.text(this.game.width / 2, this.game.height / 2 + 50, text, style);
            h.anchor.set(0.5);
        };
        MainMenu.prototype.update = function () {
            if (this.game.input.activePointer.justPressed()) {
                this.game.state.start('Game');
            }
        };
        return MainMenu;
    }(Phaser.State));
    SpaceHipster.MainMenu = MainMenu;
})(SpaceHipster || (SpaceHipster = {}));
//# sourceMappingURL=MainMenu.js.map