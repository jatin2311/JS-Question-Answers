// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

function slope(x1, y1, x2, y2) {
  let m = 0;
  m = (y2 - y1) / (x2 - x1);
  return m;
}
console.log(slope(2, 2, 6, 10));
