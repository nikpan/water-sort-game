import { Color } from "../components/WaterTube";

export class Stack {
  size: number = 0;
  stack: Color[] = [];
  name: string = '';
  constructor(size: number, name: string, initialValues?: Color[]) {
    this.size = size;
    this.name = name;
    if(initialValues !== null && initialValues !== undefined && (initialValues.length === size || initialValues.length == 0) ) {
      this.stack = [...initialValues];
    }
  }

  public resetStack(colors: Color[]) {
    if(colors === null || colors === undefined || (colors.length !== this.size && colors.length !== 0)) {
      return;
    }
    this.stack = [...colors];
  }
  
  public pop() {
    if(this.stack.length == 0) return null;
    return this.stack.pop();
  };

  public push(color: Color) {
    if(this.stack.length >= this.size) return -1;
    this.stack.push(color);
    return 1;
  }

  public peek() {
    if(this.stack.length == 0) return null;
    return this.stack[this.stack.length-1];
  }

  public isEmpty() {
    return this.stack.length == 0;
  }

  public isFull() {
    return this.stack.length == this.size;
  }
}

export default Stack;