import { eventConstants } from '../constants';
import axios from "../helpers/axios";

export const GetEvents = (eventType,limit,startDate,endDate) => {
  return async (dispatch) => {
    dispatch({ type: eventConstants.GET_EVENT_REQUEST });
    const res = await axios.post(`/admin-get-events`,{eventType,limit,startDate,endDate}).catch((err) => {
      console.log(err.response)
      const { message } = err.response.data;
      dispatch({
        type: eventConstants.GET_EVENT_FAILURE,
        payload: {
          message,
        },
      });
    })
    if (res.status === 200) {
      const { data } = res.data;
      dispatch({
        type: eventConstants.GET_EVENT_SUCCESS,
        payload: {
          data,
        },
      });
    }
  };
};

