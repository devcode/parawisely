const fetchFakeData = centerCoordinate => {
  const newFeaturesList = [];
  for (let i = 0; i < 20; i++) {
    const id = i;
    const { longitude, latitude } = getRandomCoordinate(centerCoordinate);
    newFeaturesList.push({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [longitude, latitude],
      },
      properties: {
        id,
        name: `Random Point #${id}`,
        description: `description for Random Point #${id}`,
      },
    });
  }

  return Promise.resolve({
    type: 'FeatureCollection',
    features: newFeaturesList,
  });
};

const getRandomCoordinate = ({ longitude: centerLon, latitude: centerLat }) => {
  const r = 0.025 * Math.sqrt(Math.random());
  const theta = Math.random() * 2 * Math.PI;
  const latitude = centerLat + r * Math.cos(theta);
  const longitude = centerLon + r * Math.sin(theta);
  return { longitude, latitude };
};

export default fetchFakeData;
