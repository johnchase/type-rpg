import HERO from "./images/characters/people/hero.png";
import SHADOW from "./images/characters/shadow.png";
import { Hero } from "./interfaces/hero";

export class Sprite {
  image: HTMLImageElement;
  isLoaded: boolean = true;
  config: Hero;
  useShadow: Boolean = true;
  isShadowLoaded: Boolean = false;
  shadow: any;

  constructor(config: Hero) {
    this.config = config;
    this.config.src = config.src || HERO;
    this.image = new Image();
    this.shadow = new Image();

    this.image.src = config.src;
    this.image.onload = () => {
      this.isLoaded = true;
    };

    if (this.useShadow) {
      this.shadow.src = SHADOW;
    }
    this.shadow.onload = () => {
      this.isShadowLoaded = true;
    };
    // this.animations = config.animations || {
    //   idleDown: [[0, 0]],
    //   walkDown: [
    //     [0, 0],
    //     [0, 0],
    //     [0, 0],
    //     [0, 0],
    //   ],
    // };
    // this.currentAnimation = config.currentAnimation;
    // this.currentAnimationFrame = 0;
    // this.gameObject = config.gameObject;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const x = this.config.x * 16 - 8;
    const y = this.config.y * 16 - 18;

    this.isShadowLoaded && ctx.drawImage(this.shadow, x, y);
    this.isLoaded && ctx.drawImage(this.image, 0, 0, 32, 32, x, y, 32, 32);
  }
}
