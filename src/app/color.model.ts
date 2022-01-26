export class Color{
  r: number;
  g: number;
  b: number;
  a: number;

  constructor(r, g, b, a){
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  ToString(): string{
    return 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a + ')';
  }
}
