import Rectangle from './../src/js/rectangle.js';

describe('Rectangle', () => {

  test('should correctly create a rectangle object with four lengths', () => {
    const rectangle = new Rectangle(2, 2, 5, 5);
    expect(rectangle.side1).toEqual(2);
    expect(rectangle.side2).toEqual(2);
    expect(rectangle.side3).toEqual(5);
    expect(rectangle.side4).toEqual(5);
  });
});