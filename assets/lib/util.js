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

  paddings.forEach((padding) => {
    Object.keys(padding).forEach((key) => {
      if (key === "x") {
        x += padding["x"];
      } else if (key === "y") {
        y += padding["y"];
      }
    });
  });

  return { x, y };
}

function entropy(multiplier) {
  return Math.floor(Math.random() * multiplier);
}

function swingEntropy(multiplier) {
  return entropy(multiplier) - entropy(multiplier);
}

function verbose(x) {
  console.log(x);
}

function publishDimensions(o) {
  document.getElementById("xMin").value = o.xMin;
  document.getElementById("yMin").value = o.yMin;
  document.getElementById("xMax").value = o.xMax;
  document.getElementById("yMax").value = o.yMax;
  document.getElementById("label").value = o.label;
}
