import { randomInt } from "crypto";
import { Color, ColorList } from "../components/WaterTube";

export const generateLevel = (colorCount: number, sectionCount: number): Color[][] => {
  let counter = [];
  let output: Color[][] = [];
  let colorSet = new Set<number>();
  for (let i = 0; i < colorCount; i++) {
    counter.push(sectionCount);
    output.push([]);
    colorSet.add(i);
  }
  output.push([]);
  output.push([]);
  for (let i = 0; i < colorCount; i++) {
    for (let j = 0; j < sectionCount; j++) {
      const randomColorIndex = getRandomItem(colorSet);
      counter[randomColorIndex] -= 1;
      if(counter[randomColorIndex] === 0) {
        colorSet.delete(randomColorIndex);
      }
      output[i].push(ColorList[randomColorIndex]);
    };
  }
  console.debug(output);
  return output;
}

function getRandomItem(set: Set<number>) {
  let items = Array.from(set);
  return items[Math.floor(Math.random() * items.length)];
}