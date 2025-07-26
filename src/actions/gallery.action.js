import { galleryConstants } from '../constants';
import axios from "../helpers/axios";

export const GetGalleryImg = (page) => {
  return async (dispatch) => {
    dispatch({ type: galleryConstants.GET_GALLERY_IMG_REQUEST });
    const res = await axios.post(`/admin-get-gallery-img-frontend`, { page }).catch((err) => {
      console.log(err.response)
      const { message } = err.response.data;
      dispatch({
        type: galleryConstants.GET_GALLERY_IMG_FAILURE,
        payload: {
          message,
        },
      });
    })
    if (res.status === 200) {
      const { data } = res.data;
      dispatch({
        type: galleryConstants.GET_GALLERY_IMG_SUCCESS,
        payload: {
          data,
        },
      });
    }
  };
};

