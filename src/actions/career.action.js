import { careerConstants } from '../constants';
import axios from "../helpers/axios";

export const adminCreateCareer = (careerObj) => {
  const formData = new FormData();

  // Handle resume file
  if (careerObj["resume"]) {
    formData.append("resume", careerObj["resume"]);
  }

  // Append other fields
  for (const key in careerObj) {
    if (careerObj[key] !== undefined && key !== "resume") {
      formData.append(key, careerObj[key]);
    }
  }

  return async (dispatch) => {
    dispatch({ type: careerConstants.ADD_CAREER_REQUEST });
    try {
      const res = await axios.post(`/admin-add-career`, formData);
      if (res.status === 200) {
        const { data } = res.data;
        dispatch({
          type: careerConstants.ADD_CAREER_SUCCESS,
          payload: {
            data,
            message: "Career Created Successfully"
          },
        });
      }
    } catch (error) {
      console.log(error.response);
      const { message } = error.response.data;
      dispatch({
        type: careerConstants.ADD_CAREER_FAILURE,
        payload: {
          message,
        },
      });
    }
  };
};


