namespace SpaceHipster {

    export class Preload extends Phaser.State {

        private splash: Phaser.Sprite;
        private preloadBar: Phaser.Sprite;

        preload() {
            //show loading screen
            this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, ImageName.Logo.toString());
            this.splash.anchor.setTo(0.5);

            this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, ImageName.Preloadbar);
            this.preloadBar.anchor.setTo(0.5);

            this.load.setPreloadSprite(this.preloadBar);

            //load game assets
            this.load.image(ImageName.Space.toString(), 'assets/images/space.png');
            this.load.image(ImageName.Rock.toString(), 'assets/images/rock.png');
            this.load.spritesheet(ImageName.Playership.toString(), 'assets/images/player.png', 12, 12);
            this.load.spritesheet(ImageName.Power.toString(), 'assets/images/power.png', 12, 12);
            this.load.image(ImageName.PlayerParticle.toString(), 'assets/images/player-particle.png');
            this.load.audio('collect', 'assets/audio/collect.ogg');
            this.load.audio('explosion', 'assets/audio/explosion.ogg');
        }

        create() {
            this.game.state.start('MainMenu');
        }
    }
}