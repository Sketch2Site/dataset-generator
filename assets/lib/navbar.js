function generateNavbar(entropy) {
  /**
   * Offset from the margins for the diagram
   */
  const offset = {
    outerBox: {
      x: 10,
      y: 10,
    },

    leftLogo: {
      x: 15,
      y: 15,
    },

    rightLink1: {
      x: 860,
      y: 35,
    },

    rightLink2: {
      x: 860 - 100 - 50,
      y: 35,
    },

    rightLink3: {
      x: 860 - 100 - 50 - 100 - 50,
      y: 35,
    },
  };

  /**
   * Dimensions of the drawings
   */
  const dimension = {
    outerBox: {
      width: 1000,
      height: 70,
    },

    leftLogo: {
      width: 150,
      height: 40,
    },

    rightLink: {
      width: 100,
      height: 4,
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
      roughness: 2,
      strokeWidth: 3,
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
        roughness: 1,
        strokeWidth: 4,
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
        roughness: 2,
        strokeWidth: 10,
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
        roughness: 2,
        strokeWidth: 10,
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
        roughness: 2,
        strokeWidth: 10,
      }
    )
  );
}
