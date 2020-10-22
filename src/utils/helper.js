import imageNotFound from '../assets/ilustration/image-notfound.jpg';
const BASE_URL = 'http://parawisely-backend.test';

export const checkimage = async path => {
  const result = await fetch(BASE_URL + '/backend/uploads/' + path);
  if (result.ok) {
    return result.status;
  }

  return result.ok;
};

export const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};
