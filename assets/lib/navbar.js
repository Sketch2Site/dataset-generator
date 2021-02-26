function generateNavbar(offset) {
  svg.appendChild(
    rc.polygon(
      [
        [10, 10],
        [200, 10],
        [200, 100],
        [10, 100],
      ],
      {
        stroke: "gray",
        hachureAngle: 65,
        fill: "rgba(0,0,0,0.6)",
        roughness: 1,
        strokeWidth: 1,
      }
    )
  );
}
