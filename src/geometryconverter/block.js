import ms from '../../index';

function block(feature) {
  //var direction, width;
  const points = feature.geometry.coordinates;

  const geometry1 = [points[0], points[1]];  
  const midpoint = ms.geometry.pointBetween(points[0], points[1], 0.5);
  const angle = ms.geometry.bearingBetween(points[2], midpoint);

  const p1 = ms.geometry.pointBetween(points[2], midpoint, 0.48);
  const p2 = ms.geometry.pointBetween(points[2], midpoint, 0.52);

  const line1 = [points[2], p1];
  const line2 = [p2, midpoint];
  

  const geometry = { type: "MultiLineString", coordinates: [geometry1, line1, line2] };

  const annotations = {
    geometry: {
      type: "Point",
      coordinates: ms.geometry.pointBetween(
        midpoint,
        points[2],
        0.5
      )
    },
    properties: { text: "B", angle: angle + 90, align: 'center'  }
  };
  return { geometry: geometry, annotations: [annotations] };
}

export default block;
