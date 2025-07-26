import { enquiryConstants } from '../constants';
import axios from "../helpers/axios";

export const adminCreateEnquiry = (enquiryObj) => {

  return async (dispatch) => {
    dispatch({ type: enquiryConstants.ADD_ENQUIRY_REQUEST });
    try {
      const res = await axios.post(`/admin-add-enquiry`, enquiryObj);
      if (res.status === 200) {
        const { data } = res.data;
        dispatch({
          type: enquiryConstants.ADD_ENQUIRY_SUCCESS,
          payload: {
            data,
            message: "Enquiry Created Successfully"
          },
        });
      }
    } catch (error) {
      console.log(error.response);
      const { message } = error.response.data;
      dispatch({
        type: enquiryConstants.ADD_ENQUIRY_FAILURE,
        payload: {
          message,
        },
      });
    }
  };
};


