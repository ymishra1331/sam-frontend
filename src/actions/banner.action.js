import { bannerConstants } from '../constants';
import axios from "../helpers/axios";

export const GetBanners = (skip) => {
  return async (dispatch) => {
    dispatch({ type: bannerConstants.GET_BANNERS_REQUEST });
    const res = await axios.post(`/admin-get-banners`, { skip }).catch((err) => {
      console.log(err.response)
      const { message } = err.response.data;
      dispatch({
        type: bannerConstants.GET_BANNERS_FAILURE,
        payload: {
          message,
        },
      });
    })
    if (res.status === 200) {
      const { data } = res.data;
      dispatch({
        type: bannerConstants.GET_BANNERS_SUCCESS,
        payload: {
          data,
        },
      });
    }
  };
};

