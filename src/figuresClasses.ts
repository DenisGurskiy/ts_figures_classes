type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if ((a + b <= c)
      || (a + c <= b)
      || (b + c <= a)
      || (a <= 0)
      || (b <= 0)
      || (c <= 0)) {
      throw new Error('Triangle can\'t form');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return Math.round(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
      * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public r: number,
  ) {
    this.shape = 'circle';

    if (r <= 0) {
      throw new Error('Circle can\'t form');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.r * this.r * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    this.shape = 'rectangle';

    if ((a <= 0) || (b <= 0)) {
      throw new Error('Rectangle can\'t form');
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
