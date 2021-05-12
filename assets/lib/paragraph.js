function generateParagraph() {
  /** change site title to easily highlight what generator is currently linked */
  document.title = "Paragraph | Dataset Generator";
  /**
   * Offset from the margins for the diagram
   */
  const offset = {
    outerBox: {
      x: 50,
      y: 30,
    },
  };

  /**
   * Dimensions of the drawings
   */
  const dimension = {
    line: {
      width: 1000,
    },
  };

  /**
   * Coordinates for forming the crisscrossed diagonals
   */
  const lineCoordinates = [
    offset.outerBox.x,
    offset.outerBox.y,
    offset.outerBox.x + dimension.line.width,
    offset.outerBox.y,
  ];

  /**
   * add four lines to depict paragraph icon
   */
  const line1 = [
    lineCoordinates[0] + swingEntropy(20),
    1 * lineCoordinates[1] + swingEntropy(20),
    lineCoordinates[2] + swingEntropy(20),
    1 * lineCoordinates[3] + swingEntropy(20),
  ];

  const line2 = [
    lineCoordinates[0] + swingEntropy(20),
    3 * lineCoordinates[1] + swingEntropy(20),
    lineCoordinates[2] + swingEntropy(20),
    3 * lineCoordinates[3] + swingEntropy(20),
  ];

  const line3 = [
    lineCoordinates[0] + swingEntropy(20),
    6 * lineCoordinates[1] + swingEntropy(20),
    lineCoordinates[2] + swingEntropy(20),
    6 * lineCoordinates[3] + swingEntropy(20),
  ];

  const line4 = [
    lineCoordinates[0] + swingEntropy(20),
    9 * lineCoordinates[1] + swingEntropy(20),
    lineCoordinates[2] + swingEntropy(20),
    9 * lineCoordinates[3] + swingEntropy(20),
  ];

  svg.appendChild(
    rc.line(...line1, {
      stroke: "black",
      fill: "rgba(255,255,255,0.6)",
      fillStyle: "solid",
      roughness: 1 + entropy(2),
      strokeWidth: 4 + swingEntropy(2),
    })
  );

  svg.appendChild(
    rc.line(...line2, {
      stroke: "black",
      fill: "rgba(255,255,255,0.6)",
      fillStyle: "solid",
      roughness: 1 + entropy(2),
      strokeWidth: 4 + swingEntropy(2),
    })
  );

  svg.appendChild(
    rc.line(...line3, {
      stroke: "black",
      fill: "rgba(255,255,255,0.6)",
      fillStyle: "solid",
      roughness: 1 + entropy(2),
      strokeWidth: 4 + swingEntropy(2),
    })
  );

  svg.appendChild(
    rc.line(...line4, {
      stroke: "black",
      fill: "rgba(255,255,255,0.6)",
      fillStyle: "solid",
      roughness: 1 + entropy(2),
      strokeWidth: 4 + swingEntropy(2),
    })
  );

  /** calculate coordinates of bounds */
  const minimumX = Math.min(line1[0], line2[0], line3[0], line4[0]);
  const minimumY = Math.min(line1[1], line2[1], line3[1], line4[1]);

  const boundCoordinates = {
    xMin: minimumX > 15 ? minimumX - 15 : 0,
    yMin: minimumY > 15 ? minimumY - 15 : 0,
    xMax: Math.max(line1[2], line2[2], line3[2], line4[2]) + 15,
    yMax: Math.max(line1[3], line2[3], line3[3], line4[3]) + 15,
    label: "paragraph",
  };

  /** embed document labels into webpage */
  publishDimensions(boundCoordinates);

  /**
   * uncomment the following lines to enable the bound line
   */
  //   svg.appendChild(
  //     rc.line(
  //       boundCoordinates.xMin,
  //       boundCoordinates.yMin,
  //       boundCoordinates.xMax,
  //       boundCoordinates.yMax,
  //       {
  //         stroke: "red",
  //         fill: "rgba(255,255,255,0.6)",
  //         fillStyle: "solid",
  //         roughness: 1 + entropy(2),
  //         strokeWidth: 4 + swingEntropy(2),
  //       }
  //     )
  //   );
}
