// import DEMOLOWER from "./images/maps/DemoLower.png";
// import NPC1 from "./images/characters/people/npc1.png";
// import SHADOW from "./images/characters/shadow.png";

export class GameObject {
  sprite: Sprite;
  // src: Object = HERO;
  config: Hero;

  constructor(config: Hero) {
    this.config = config;
    // this.config.src = this.src
    this.sprite = new Sprite(this.config);
  }
}
