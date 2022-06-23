export default function Rectangle(side1, side2, side3, side4) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.side4 = side4;
}

Rectangle.prototype.ifRectangle = function (a, b, c, d) {
  if (a == b && a == c && a == d && c == d && b == c && b == d) return true;
  else if (a == b && c == d) return true;
  else if (a == d && c == b) return true;
  else if (a == c && d == b) return true;
  else return false;
};

Rectangle.prototype.checkType = function (a, b, c, d) {
  if (a == b && a == c && a == d && c == d && b == c && b == d) {
    return "Square";
  } else if ((a == b && c == d) || (a == d && c == b) || (a == c && d == b)) {
    return "Quadrilateral";
    //   } else {
    //     return "Trapizod";
  }
};
