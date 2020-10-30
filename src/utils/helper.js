export const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const showPosition = position => {
  return {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };
};

export const showErrorPosition = error => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return {
        error: 'User denied the request for Geolocation.',
      };
    case error.POSITION_UNAVAILABLE:
      return {
        error: 'Location information is unavailable.',
      };
    case error.TIMEOUT:
      return {
        error: 'The request to get user location timed out.',
      };
    case error.UNKNOWN_ERROR:
      return {
        error: 'An unknown error occurred.',
      };
    default:
      return {
        error: 'tidak tahu',
      };
  }
};

export const calculateMap = (lat, long) => {
  window.onload(e => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showErrorPosition);
    } else {
      return 'Geolocation is not supported by this browser.';
    }
  });
};
