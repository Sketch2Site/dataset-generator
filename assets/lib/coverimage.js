function generateCoverImage() {
  /** change site title to easily highlight what generator is currently linked */
  document.title = "Cover Image | Dataset Generator";

  /**
   * Offset from the margins for the diagram
   */
  const offset = {
    outerBox: {
      x: 10 + entropy(100),
      y: 10 + entropy(100),
    },

    leftLine: {
      x: entropy(5),
      y: entropy(5),
    },

    rightLine: {
      x: entropy(5),
      y: entropy(5),
    },
  };

  /**
   * Dimensions of the drawings
   */
  const dimension = {
    outerBox: {
      width: 1000,
      height: 350 + swingEntropy(30),
    },
  };

  /**
   * outer box for navbar component
   */
  svg.appendChild(
    rc.polygon(dimensionTransform([offset.outerBox], dimension.outerBox), {
      stroke: "gray",
      fill: "rgba(255,255,255,0.6)",
      fillStyle: "solid",
      roughness: 2 + entropy(2),
      strokeWidth: 2 + entropy(3),
    })
  );

  /**
   * left line
   */
  const figureDimensions = [
    offset.outerBox.x + swingEntropy(10),
    offset.outerBox.y + swingEntropy(10),
    offset.outerBox.x + dimension.outerBox.width + swingEntropy(20),
    offset.outerBox.y + dimension.outerBox.height + swingEntropy(20),
  ];
  svg.appendChild(
    rc.line(
      figureDimensions[0],
      figureDimensions[1],
      figureDimensions[2],
      figureDimensions[3],
      {
        stroke: "gray",
        fill: "rgba(255,255,255,0.6)",
        fillStyle: "solid",
        roughness: 1 + entropy(2),
        strokeWidth: 4 + swingEntropy(2),
      }
    )
  );

  /** publish data to webpage */
  const padding = 15;
  publishDimensions({
    xMin: figureDimensions[0] > padding ? figureDimensions[0] - padding : 0,
    yMin: figureDimensions[1] > padding ? figureDimensions[1] - padding : 0,
    xMax: figureDimensions[2] + padding + 10,
    yMax: figureDimensions[3] + padding + 10,
    label: "cover_image",
  });

  //   uncomment the following lines to view a red line to view what ml model would see
  //   svg.appendChild(
  //     rc.line(
  //       figureDimensions[0] > padding ? figureDimensions[0] - padding : 0,
  //       figureDimensions[1] > padding ? figureDimensions[1] - padding : 0,
  //       figureDimensions[2] + padding + 10,
  //       figureDimensions[3] + padding + 10,
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
