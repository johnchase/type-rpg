// import NPC1 from "./images/characters/people/npc1.png";
// import SHADOW from "./images/characters/shadow.png";
import { OverworldMap } from "./OverworldMap";

export class Overworld {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D | null;
  map: OverworldMap | null;

  constructor(canvasName: string = "game-canvas") {
    this.canvas = document.querySelector(canvasName) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d");
    this.map = null;
  }

  startGameLoop() {
    const step = () => {
      //Clear off the canvas
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);

      //Draw Lower layer
      this.map?.drawLowerImage(this.ctx);

      //Draw Game Objects
      // Object.values(this.map?.gameObjects).forEach((object) => {
      //   // object.x += 0.02;
      //   object.sprite.draw(this.ctx);
      // });

      //Draw Upper layer
      this.map?.drawUpperImage(this.ctx);

      requestAnimationFrame(() => {
        step();
      });
    };
    step();
  }

  init() {
    this.map = new OverworldMap();
    // this.map = new OverworldMap(window.OverworldMaps.Kitchen);
    this.startGameLoop();
  }
}
