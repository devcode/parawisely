import api from '../api/api';
import { EKSPLORASI_ERROR, GET_EKSPLORASI } from './types';

export const getEksplor = () => async dispatch => {
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
        msg: error.response.statusText,
        status: error.repsonse.status,
      },
    });
  }
};
