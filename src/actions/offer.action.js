import { offerConstants } from '../constants';
import axios from "../helpers/axios";

export const GetOffers = (skip) => {
  return async (dispatch) => {
    dispatch({ type: offerConstants.GET_OFFER_REQUEST });
    const res = await axios.post(`/admin-get-offers`, { skip }).catch((err) => {
      console.log(err.response)
      const { message } = err.response.data;
      dispatch({
        type: offerConstants.GET_OFFER_FAILURE,
        payload: {
          message,
        },
      });
    })
    if (res.status === 200) {
      const { data } = res.data;
      dispatch({
        type: offerConstants.GET_OFFER_SUCCESS,
        payload: {
          data,
        },
      });
    }
  };
};

