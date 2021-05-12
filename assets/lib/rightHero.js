function generateRightHero() {
  /** change site title to easily highlight what generator is currently linked */
  document.title = "Right Hero | Dataset Generator";

  /**
   * Dimensions of the drawings
   */
  const dimension = {
    outerBox: {
      width: 400 + swingEntropy(50),
      height: 400 + swingEntropy(50),
    },

    textBlock: {
      width: 600 + swingEntropy(50),
    },
  };

  /**
   * Offset from the margins for the diagram
   */
  const offset = {
    outerBox: {
      x: dimension.textBlock.width + 100 + entropy(100),
      y: 50 + entropy(50),
    },

    image: {
      x: swingEntropy(10),
      y: swingEntropy(100),
    },

    leftLine: {
      x: entropy(5),
      y: entropy(5),
    },

    rightLine: {
      x: entropy(5),
      y: entropy(5),
    },

    textBlock: {
      x: 50,
      y: 75,
    },
  };

  /**
   * outer box for entire container component
   */
  const heroImageDimensions = dimensionTransform(
    [offset.outerBox],
    dimension.outerBox
  );
  svg.appendChild(
    rc.polygon(heroImageDimensions, {
      stroke: "red",
      fill: "rgba(255,255,255,0.6)",
      fillStyle: "solid",
      roughness: 2 + entropy(2),
      strokeWidth: 2 + entropy(3),
    })
  );

  /**
   * Coordinates for forming the crisscrossed diagonals
   */
  const lineCoordinates = [
    offset.outerBox.x + swingEntropy(20),
    offset.outerBox.y + swingEntropy(20),
    offset.outerBox.x + dimension.outerBox.width + swingEntropy(20),
    offset.outerBox.y + dimension.outerBox.height + swingEntropy(20),
  ];

  // left diagonal
  svg.appendChild(
    rc.line(
      lineCoordinates[0],
      lineCoordinates[1],
      lineCoordinates[2],
      lineCoordinates[3],
      {
        stroke: "black",
        fill: "rgba(255,255,255,0.6)",
        fillStyle: "solid",
        roughness: 1 + entropy(2),
        strokeWidth: 4 + swingEntropy(2),
      }
    )
  );

  // right diagonal
  svg.appendChild(
    rc.line(
      offset.outerBox.x + dimension.outerBox.width + swingEntropy(20),
      offset.outerBox.y + swingEntropy(20),
      offset.outerBox.x + swingEntropy(20),
      offset.outerBox.y + dimension.outerBox.height + swingEntropy(20),
      {
        stroke: "black",
        fill: "rgba(255,255,255,0.6)",
        fillStyle: "solid",
        roughness: 1 + entropy(2),
        strokeWidth: 4 + swingEntropy(2),
      }
    )
  );

  /**
   * Now add heading and paragraph illustrations
   *
   * represented by three horizontal lines
   */

  //   add heading line
  svg.appendChild(
    rc.line(
      offset.textBlock.x + swingEntropy(20),
      offset.outerBox.y + offset.textBlock.y,
      offset.textBlock.x + dimension.textBlock.width + swingEntropy(20),
      offset.outerBox.y + offset.textBlock.y,
      {
        stroke: "black",
        fill: "rgba(255,255,255,0.6)",
        fillStyle: "solid",
        roughness: 5 + entropy(2),
        strokeWidth: 20 + swingEntropy(2),
      }
    )
  );

  //   add content line 1
  svg.appendChild(
    rc.line(
      offset.textBlock.x + swingEntropy(20),
      offset.outerBox.y + 3 * offset.textBlock.y + swingEntropy(20),
      offset.textBlock.x + dimension.textBlock.width + swingEntropy(20),
      offset.outerBox.y + 3 * offset.textBlock.y + swingEntropy(20),
      {
        stroke: "black",
        fill: "rgba(255,255,255,0.6)",
        fillStyle: "solid",
        roughness: 1 + entropy(2),
        strokeWidth: 4 + swingEntropy(2),
      }
    )
  );

  //    add content line 2
  svg.appendChild(
    rc.line(
      offset.textBlock.x + swingEntropy(20),
      offset.outerBox.y + 3.5 * offset.textBlock.y + swingEntropy(20),
      offset.textBlock.x + dimension.textBlock.width + swingEntropy(20),
      offset.outerBox.y + 3.5 * offset.textBlock.y + swingEntropy(20),
      {
        stroke: "black",
        fill: "rgba(255,255,255,0.6)",
        fillStyle: "solid",
        roughness: 1 + entropy(2),
        strokeWidth: 4 + swingEntropy(2),
      }
    )
  );

  //   add content line 3
  svg.appendChild(
    rc.line(
      offset.textBlock.x + swingEntropy(20),
      offset.outerBox.y + 4 * offset.textBlock.y + swingEntropy(20),
      offset.textBlock.x + dimension.textBlock.width + swingEntropy(20),
      offset.outerBox.y + 4 * offset.textBlock.y + swingEntropy(20),
      {
        stroke: "black",
        fill: "rgba(255,255,255,0.6)",
        fillStyle: "solid",
        roughness: 1 + entropy(2),
        strokeWidth: 4 + swingEntropy(2),
      }
    )
  );

  /** publish data to webpage and drawing a bounded box */
  const boxDimensions = dimensionTransform(
    [
      {
        x: offset.textBlock.x > 15 ? offset.textBlock.x - 15 : 0,
        y: offset.outerBox.y > 15 ? offset.outerBox.y - 15 : 0,
      },
    ],
    {
      width: offset.outerBox.x + dimension.outerBox.width - 20,
      height: dimension.outerBox.height + 50,
    }
  );

  /**
   * uncomment the following lines to see the bounding box on canvas
   */
  svg.appendChild(
    rc.polygon(boxDimensions, {
      stroke: "red",
      fill: "rgba(192, 192, 192, 0.5)",
      fillStyle: "zigzag",
      roughness: 2,
      strokeWidth: 2,
    })
  );

  /** embed document labels into webpage */
  publishDimensions({
    xMin: Math.ceil(boxDimensions[0][0]),
    yMin: Math.ceil(boxDimensions[0][1]),
    xMax: Math.ceil(boxDimensions[2][0]),
    yMax: Math.ceil(boxDimensions[2][1]) + 15,
    label: "hero_right",
  });
}
