

namespace SpaceHipster {

    export class Boot extends Phaser.State {

        // setting game configuration and loading the assets for the loading screen
        preload(): void {
            // assets we'll use in the loading screen
            this.load.image(ImageName.Logo.toString(), "assets/images/logo.png");
            this.load.image(ImageName.Preloadbar.toString(), "assets/images/preloader-bar.png");
        }

        create() {
            // loading screen will have a white background
            this.game.stage.backgroundColor = "#fff";

            // scaling options
            this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
            this.scale.minWidth = 240;
            this.scale.minHeight = 170;
            this.scale.maxWidth = 2880;
            this.scale.maxHeight = 1920;

            // have the game centered horizontally
            this.scale.pageAlignHorizontally = true;

            // physics system for movement
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            this.game.state.start("Preload");
        }
    }
}
