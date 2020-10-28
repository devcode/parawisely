import { EKSPLORASI_ERROR, GET_EKSPLORASI } from '../actions/types';

const initialState = {
  eksplorasi: [],
  place: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_EKSPLORASI:
      return {
        ...state,
        eksplorasi: payload.data,
        loading: false,
      };
    case EKSPLORASI_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
