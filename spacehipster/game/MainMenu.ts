namespace SpaceHipster {
    export class MainMenu extends Phaser.State {

        private highestScore: number = 0;
        private background: Phaser.TileSprite;

        init(score): void {
            let currentScore = score || 0;

            this.highestScore = Math.max(currentScore, this.highestScore);
        }

        create (): void {
            //show the space tile, repeated
            this.background = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, ImageName.Space.toString());

            //give it speed in x
            this.background.autoScroll(-20, 0);

            //start game text
            let text = "Tap to begin";
            let style = { font: "30px Arial", fill: "#fff", align: "center" };
            let t = this.game.add.text(this.game.width / 2, this.game.height / 2, text, style);
            t.anchor.set(0.5);

            //highest score
            text = "Highest score: " + this.highestScore;
            style = { font: "15px Arial", fill: "#fff", align: "center" };

            let h = this.game.add.text(this.game.width / 2, this.game.height / 2 + 50, text, style);
            h.anchor.set(0.5);
        }

        update(): void {
            if (this.game.input.activePointer.justPressed()) {
                this.game.state.start("Game");
            }
        }
    }
}