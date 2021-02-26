function generateNavbar(entropy) {
  const offset = {
    outerBox: {
      x: 10,
      y: 10,
    },

    leftLogo: {
      x: 10,
      y: 10,
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
    rc.polygon(
      [
        [offset.outerBox.x, offset.outerBox.y],
        [offset.outerBox.x + dimension.outerBox.width, offset.outerBox.y],

        [
          offset.outerBox.x + dimension.outerBox.width,
          offset.outerBox.y + dimension.outerBox.height,
        ],
        [offset.outerBox.x, offset.outerBox.y + dimension.outerBox.height],
      ],
      {
        stroke: "gray",
        fill: "rgba(255,255,255,0.6)",
        fillStyle: "solid",
        roughness: 1,
        strokeWidth: 2,
      }
    )
  );

  svg.appendChild(
    rc.polygon(
      [
        [
          offset.outerBox.x + offset.leftLogo.x,
          offset.outerBox.y + offset.leftLogo.y,
        ],
        [
          offset.outerBox.x + offset.leftLogo.x + dimension.leftLogo.width,
          offset.outerBox.y + offset.leftLogo.y,
        ],
        [
          offset.outerBox.x + offset.leftLogo.x + dimension.leftLogo.width,
          offset.outerBox.y + offset.leftLogo.y + dimension.leftLogo.height,
        ],
        [
          offset.outerBox.x + offset.leftLogo.x,
          offset.outerBox.y + offset.leftLogo.y + dimension.leftLogo.height,
        ],
      ],
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
