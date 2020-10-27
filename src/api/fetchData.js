import axios from 'axios';
import qs from 'querystring';
const base_api = process.env.REACT_APP_API_ENDPOINT;

export const getMap = async () => {
  const res = await fetch(base_api + '/map');
  return res.json();
};

export const getWisataDaerah = async () => {
  const res = await fetch(base_api + '/wisata-daerah');
  return res.json();
};

export const getAllPlace = async () => {
  const res = await fetch(base_api + '/place');
  return res.json();
};

export const getPlacebyType = async type => {
  const res = await fetch(base_api + '/type/' + type);
  return res.json();
};

export const createComment = async value => {
  let data = qs.stringify(value);
  let config = {
    method: 'POST',
    url: base_api + '/sendComment',
    data,
  };

  const res = await axios(config);
  return res.data;
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

export const getEksplorasi = async () => {
  const res = await fetch(base_api + '/eksplorasi');
  return res.json();
};

export const getPlaceByCategory = async category => {};
