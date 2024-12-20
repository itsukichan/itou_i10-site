declare module 'simple-parallax-js/vanilla' {
  export default class SimpleParallax {
    constructor(elements: NodeListOf<Element> | Element[], options?: {
      delay?: number;
      orientation?: string;
      scale?: number;
      overflow?: boolean;
      customContainer?: string;
      customWrapper?: string;
    });
  }
}
