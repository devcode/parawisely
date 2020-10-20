const APP_ENV = process.env.APP_ENV;
const base_api = 'http://parawisely-backend.test/api';

export const fetchAllPlace = async () => {
  const res = await fetch(base_api + '/travel-place');
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

export const getEksplorasi = async () => {
  const res = await fetch(base_api + '/eksplorasi');
  return res.json();
};

export const getPlaceByCategory = async category => {};
