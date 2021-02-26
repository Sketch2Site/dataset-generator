function generateNavbar(entropy) {
  const offset = {
    outerBox: {
      x: 10,
      y: 10,
    },

    leftLogo: {
      x: 8,
      y: 8,
    },
  };

  const dimension = {
    outerBox: {
      width: 1000,
      height: 70,
    },

    leftLogo: {
      width: 150,
      height: 50,
    },
  };

  // outer box for navbar component
  svg.appendChild(
    rc.polygon(dimensionTransform([offset.outerBox], dimension.outerBox), {
      stroke: "gray",
      fill: "rgba(255,255,255,0.6)",
      fillStyle: "solid",
      roughness: 1,
      strokeWidth: 2,
    })
  );

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
        strokeWidth: 2,
      }
    )
  );
}
