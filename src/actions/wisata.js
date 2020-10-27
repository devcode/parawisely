import api from '../api/api';
import {
  GET_EKSPLORASI,
  GET_TYPE_PLACE,
  GET_WISATA_DAERAH,
  GET_PLACE,
  GET_PLACE_BYTYPE,
  EKSPLORASI_ERROR,
  PLACE_ERROR,
  WISATA_DAERAH_ERROR,
  TYPE_PLACE_ERROR,
  PLACE_BYTPE_ERROR,
} from './types';

export const getPlace = () => async dispatch => {
  try {
    const res = await api.get('/place');
    dispatch({
      type: GET_PLACE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PLACE_ERROR,
      payload: {
        msg: error.message,
      },
    });
  }
};

export const getPlaceByType = id => async dispatch => {
  try {
    const res = await api.get(`place/type/${id}`);
    dispatch({
      type: GET_PLACE_BYTYPE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PLACE_BYTPE_ERROR,
      payload: {
        msg: error.message,
      },
    });
  }
};

export const getTypePlace = () => async dispatch => {
  try {
    const res = await api.get('/type-place');
    dispatch({
      type: GET_TYPE_PLACE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: TYPE_PLACE_ERROR,
      payload: {
        msg: error.message,
      },
    });
  }
};

export const getEksplorasi = () => async dispatch => {
  try {
    const res = await api.get('/eksplorasi');
    dispatch({
      type: GET_EKSPLORASI,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: EKSPLORASI_ERROR,
      payload: {
        msg: error.message,
      },
    });
  }
};

export const getWisataDaerah = () => async dispatch => {
  try {
    const res = await api.get('/wisata-daerah');
    dispatch({
      type: GET_WISATA_DAERAH,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: WISATA_DAERAH_ERROR,
      payload: {
        msg: error.message,
      },
    });
  }
};
