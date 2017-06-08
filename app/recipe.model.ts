export class Recipe {
  public cooked: boolean = false;
  constructor(public title: string, public ingredients: String[], public directions: string, public difficulty: number) {}
}
