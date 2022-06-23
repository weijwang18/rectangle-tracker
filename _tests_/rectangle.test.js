import Rectangle from "./../src/js/rectangle.js";

describe("Rectangle", () => {
  test("should correctly create a rectangle object with four lengths", () => {
    const rectangle = new Rectangle(2, 2, 2, 2);
    expect(rectangle.side1).toEqual(2);
    expect(rectangle.side2).toEqual(2);
    expect(rectangle.side3).toEqual(2);
    expect(rectangle.side4).toEqual(2);
  });
  test("should tell us if it is a rectangle or not", () => {
    const rectangle = new Rectangle(2, 2, 2, 2);
    expect(rectangle.ifRectangle(2, 2, 2, 2)).toEqual(true);
  });
  test("Should tell us if it is a square", () => {
    const rectangle = new Rectangle(2, 2, 2, 2);
    expect(rectangle.checkType(2, 2, 2, 2)).toEqual("Square");
  });
  test("Should tell us if it is a quadrilateral", () => {
    const rectangle = new Rectangle(2, 3, 2, 3);
    expect(rectangle.checkType(2, 3, 2, 3)).toEqual("Quadrilateral");
  });
});
