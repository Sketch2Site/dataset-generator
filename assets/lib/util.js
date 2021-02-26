/**
 * Method to construct dimension array
 * @param {Array<{x:number, y:number}>} padding array of objects containing padding layers
 * @param {{width:number, height:number}} dimension object containing width and height of element
 */
function dimensionTransform(padding, dimension) {
  const offset = joinPaddings(padding);

  return [
    [offset.x, offset.y],
    [offset.x + dimension.width, offset.y],

    [offset.x + dimension.width, offset.y + dimension.height],
    [offset.x, offset.y + dimension.height],
  ];
}

/**
 * Method to join padding layers
 * @param {Array<{x:number, y:number}} paddings array of objects containing padding layers
 */
function joinPaddings(paddings) {
  let x = 0;
  let y = 0;

  Object.keys(paddings).forEach((key) => {
    if (key === "x") {
      x += paddings["x"];
    } else if (key === "y") {
      y += paddings["y"];
    }
  });

  return { x, y };
}
