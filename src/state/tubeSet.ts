import { Color } from "../components/WaterTube";
import Stack from "./stack";

export default class TubeSet {
  tubes: Stack[] = [];
  initialValues: Color[][] = [];
  tubeSize: number = 0;
  tubeCount: number = 0;
  constructor(size: number, count: number, initialValues: Color[][]) {
    this.tubeSize = size;
    this.tubeCount = count;
    this.initialValues = initialValues;
    for (let i = 0; i < this.tubeCount; i++) {
      this.tubes.push(new Stack(this.tubeSize, i.toString(), initialValues[i]));
    }
  }

  public reset() {
    this.tubes.forEach((tube, i) => {
      tube.resetStack(this.initialValues[i]);
    });
    return this;
  }

  public isSorted() {
    for (let i = 0; i < this.tubes.length; i++) {
      const tube = this.tubes[i].stack;
      if(tube.length !== 0 && tube.length !== this.tubeSize) {
        return false;
      }
      for (let j = 0; j < tube.length; j++) {
        if(tube[j] !== tube[0]) {
          return false;
        }
      }
    }
    return true;
  }
}