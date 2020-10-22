import imageNotFound from '../assets/ilustration/image-notfound.jpg';
const base_api = 'http://parawisely-backend.test/api';
const base_url = 'http://parawisely-backend.test/';

export const fetchAllPlace = async () => {
  const res = await fetch(base_api + '/place');
  return res.json();
};

export const getPlacebyType = async type => {
  const res = await fetch(base_api + '/type/' + type);
  return res.json();
};

export const getPlaceDetail = async slug => {
  const res = await fetch(base_api + '/place/' + slug);
  return res.json();
};

export const getDestinasiPilihan = async () => {
  const res = await fetch(base_api + '/destinasi-pilihan');
  return res.json();
};

export const getTypePlace = async () => {
  const res = await fetch(base_api + '/type-place');
  return res.json();
};

export const getImage = async path => {
  await fetch(base_url + '/backend/uploads/' + path, { method: 'HEAD' })
    .then(res => {
      if (res.ok) {
        return base_url + '/backend/uploads/' + path;
      } else {
        return imageNotFound;
      }
    })
    .catch(err => console.log('error: ', err));
};

export const getEksplorasi = async () => {
  const res = await fetch(base_api + '/eksplorasi');
  return res.json();
};

export const getPlaceByCategory = async category => {};
