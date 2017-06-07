export class Recipe {
  public cooked: string = 'false';
  constructor(public title: string, public ingredients: String[], public directions: string, public difficulty: number) {}
}
