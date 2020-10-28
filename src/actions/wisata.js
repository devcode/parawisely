import api from '../api/api';
import {
  SEARCH,
  SEARCH_ERROR,
  PLACE_COMMENT_ERROR,
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
  PLACE_DETAIL_ERROR,
  GET_PLACE_DETAIL,
  ADD_COMMENT,
  ADD_COMMENT_ERROR,
  GET_PLACE_COMMENT,
} from './types';
import qs from 'querystring';
import { setAlert } from './alert';

export const getPlace = () => async dispatch => {
  try {
    const res = await api.get('/place');
    dispatch({
      type: GET_PLACE,
      payload: res.data.data,
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

export const getComment = placeId => async dispatch => {
  try {
    const res = await api.get(`/getComment/${placeId}`);
    dispatch({
      type: GET_PLACE_COMMENT,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: PLACE_COMMENT_ERROR,
      payload: {
        msg: error.message,
      },
    });
  }
};

export const addComment = value => async dispatch => {
  try {
    const data = qs.stringify(value);
    const res = await api.post(`/sendComment/`, data);
    dispatch({
      type: ADD_COMMENT,
      payload: res.data.data,
    });

    dispatch(setAlert('Berhasil', 'success', 5000));
  } catch (error) {
    dispatch({
      type: ADD_COMMENT_ERROR,
      payload: {
        msg: error.message,
      },
    });
    dispatch(setAlert(error.message, 'error', 5000));
  }
};

export const getPlaceDetail = slug => async dispatch => {
  try {
    const res = await api.get(`/place/${slug}`);

    dispatch({
      type: GET_PLACE_DETAIL,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: PLACE_DETAIL_ERROR,
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
      payload: res.data.data,
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
      payload: res.data.data,
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

export const WTF = payload => ({
  type: SEARCH,
  payload,
});

export const getSearch = value => async dispatch => {
  try {
    dispatch({
      type: SEARCH,
      payload: { value },
    });
  } catch (error) {
    dispatch({
      type: SEARCH_ERROR,
      payload: {
        msg: error.message,
      },
    });
  }
};
