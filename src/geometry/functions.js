export const textRotation = (angle) => {
  if (angle >= 90) {
      if (angle <= 180) {
          return angle + 180;
      }
      if (angle <= 270) {
          return angle - 180;
      }
  }
  return angle;
};

export const getLatLong = (array) => {
    var latitudes = [];
    var longitudes = [];
  
    for (var i = 0; i < array[0].length; i++) {
      latitudes.push(array[0][i][0]);
      longitudes.push(array[0][i][1]);
    }
  
    return { latitudes, longitudes };
  };