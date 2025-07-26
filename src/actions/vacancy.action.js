import { vacancyConstants } from '../constants';
import axios from "../helpers/axios";

export const GetVacancies = () => {
  return async (dispatch) => {
    dispatch({ type: vacancyConstants.GET_VACANCY_REQUEST });
    const res = await axios.post(`/admin-get-vacancy`).catch((err) => {
      console.log(err.response)
      const { message } = err.response.data;
      dispatch({
        type: vacancyConstants.GET_VACANCY_FAILURE,
        payload: {
          message,
        },
      });
    })
    if (res.status === 200) {
      const { data } = res.data;
      dispatch({
        type: vacancyConstants.GET_VACANCY_SUCCESS,
        payload: {
          data,
        },
      });
    }
  };
};

