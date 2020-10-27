import {
  GET_PLACE,
  GET_EKSPLORASI,
  GET_TYPE_PLACE,
  GET_WISATA_DAERAH,
  WISATA_DAERAH_ERROR,
  EKSPLORASI_ERROR,
  TYPE_PLACE_ERROR,
  GET_PLACE_BYTYPE,
} from '../actions/types';

const initialState = {
  places: [],
  typePlace: [],
  eksplorasi: [],
  error: {},
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TYPE_PLACE:
      return {
        ...state,
        typePlace: payload,
        loading: false,
      };
    case GET_PLACE:
      return {
        ...state,
        places: payload,
        loading: false,
      };
    case GET_PLACE_BYTYPE:
      return {
        ...state,
        places: payload,
      };
    case GET_WISATA_DAERAH:
      return {
        ...state,
        wisataDaerah: payload,
        loading: false,
      };
    case GET_EKSPLORASI:
      return {
        ...state,
        eksplorasi: payload,
        loading: false,
      };

    case WISATA_DAERAH_ERROR:
    case EKSPLORASI_ERROR:
    case TYPE_PLACE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
