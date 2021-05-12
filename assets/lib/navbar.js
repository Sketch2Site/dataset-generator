function generateNavbar() {
  /** change site title to easily highlight what generator is currently linked */
  document.title = "Navbar | Dataset Generator";

  /**
   * Offset from the margins for the diagram
   */
  const offset = {
    outerBox: {
      x: 10 + entropy(100),
      y: 10 + entropy(100),
    },

    leftLogo: {
      x: 15 + swingEntropy(5),
      y: 15 + swingEntropy(5),
    },

    rightLink1: {
      x: 860 + swingEntropy(30),
      y: 35 + swingEntropy(10),
    },

    rightLink2: {
      x: 860 - 100 - 50 + swingEntropy(30),
      y: 35 + swingEntropy(10),
    },

    rightLink3: {
      x: 860 - 100 - 50 - 100 - 50 + swingEntropy(30),
      y: 35 + swingEntropy(10),
    },
  };

  /**
   * Dimensions of the drawings
   */
  const dimension = {
    outerBox: {
      width: 1000,
      height: 70 + swingEntropy(20),
    },

    leftLogo: {
      width: 150 + swingEntropy(30),
      height: 40 + swingEntropy(10),
    },

    rightLink: {
      width: 100 + swingEntropy(20),
      height: 4 + swingEntropy(4),
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
   * inner logo box on the left
   */
  svg.appendChild(
    rc.polygon(
      dimensionTransform(
        [offset.outerBox, offset.leftLogo],
        dimension.leftLogo
      ),
      {
        stroke: "gray",
        fill: "rgba(255,255,255,0.6)",
        fillStyle: "solid",
        roughness: 1 + entropy(2),
        strokeWidth: 4 + swingEntropy(2),
      }
    )
  );

  /**
   * add link draawings to the right
   */
  svg.appendChild(
    rc.polygon(
      dimensionTransform(
        [offset.outerBox, offset.rightLink1],
        dimension.rightLink
      ),
      {
        stroke: "gray",
        fill: "rgba(255,255,255,0.6)",
        fillStyle: "solid",
        roughness: 2 + entropy(4),
        strokeWidth: 6 + swingEntropy(5),
      }
    )
  );

  svg.appendChild(
    rc.polygon(
      dimensionTransform(
        [offset.outerBox, offset.rightLink2],
        dimension.rightLink
      ),
      {
        stroke: "gray",
        fill: "rgba(255,255,255,0.6)",
        fillStyle: "solid",
        roughness: 2 + entropy(4),
        strokeWidth: 6 + swingEntropy(5),
      }
    )
  );

  svg.appendChild(
    rc.polygon(
      dimensionTransform(
        [offset.outerBox, offset.rightLink3],
        dimension.rightLink
      ),
      {
        stroke: "gray",
        fill: "rgba(255,255,255,0.6)",
        fillStyle: "solid",
        roughness: 2 + entropy(4),
        strokeWidth: 6 + swingEntropy(5),
      }
    )
  );

  /** publish data to webpage */
  const bound = dimensionTransform([offset.outerBox], dimension.outerBox);
  const padding = 10;
  publishDimensions({
    xMin: bound[0][0] > padding ? bound[0][0] - padding : 0,
    yMin: bound[0][1] > padding ? bound[0][1] - padding : 0,
    xMax: bound[2][0] + padding,
    yMax: bound[2][1] + padding,
    label: "navbar",
  });
}
