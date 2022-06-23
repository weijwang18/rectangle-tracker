import Rectangle from './../src/js/rectangle.js';

describe('Rectangle', () => {
  let reusableRectangle;

  beforeEach(() => {
    reusableRectangle = new Rectangle(2, 2, 5, 5);
  });
  test('should correctly create a rectangle object with four lengths', () => {
    expect(reusableRectangle.side1).toEqual(2);
    expect(reusableRectangle.side2).toEqual(2);
    expect(reusableRectangle.side3).toEqual(5);
    expect(reusableRectangle.side4).toEqual(5);
  });
  test('should tell us if it is a rectangle or not', () => {
    expect(reusableRectangle.checkType()).toEqual(true);
  });
});