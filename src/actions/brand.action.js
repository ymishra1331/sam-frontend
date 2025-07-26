import { bannerConstants, brandConstants } from '../constants';
import axios from "../helpers/axios";

export const GetBrands = (limit,floor,keywords) => {
  return async (dispatch) => {
    dispatch({ type: brandConstants.GET_BRAND_REQUEST });
    const res = await axios.post(`/admin-get-filtered-brands`,{limit,floor,keywords}).catch((err) => {
      console.log(err.response)
      const { message } = err.response.data;
      dispatch({
        type: brandConstants.GET_BRAND_FAILURE,
        payload: {
          message,
        },
      });
    })
    if (res.status === 200) {
      const { data } = res.data;
      dispatch({
        type: brandConstants.GET_BRAND_SUCCESS,
        payload: {
          data,
        },
      });
    }
  };
};


export const GetDineBrands = (limit) => {
  return async (dispatch) => {
    dispatch({ type: brandConstants.GET_DINE_BRAND_REQUEST });
    const res = await axios.post(`/admin-get-dine-brand`,{limit}).catch((err) => {
      console.log(err.response)
      const { message } = err.response.data;
      dispatch({
        type: brandConstants.GET_DINE_BRAND_FAILURE,
        payload: {
          message,
        },
      });
    })
    if (res.status === 200) {
      const { data } = res.data;
      dispatch({
        type: brandConstants.GET_DINE_BRAND_SUCCESS,
        payload: {
          data,
        },
      });
    }
  };
};
