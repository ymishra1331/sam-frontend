import { notificationConstants} from '../constants';
import axios from "../helpers/axios";

export const CreateNotification = (obj) => {
  return async (dispatch) => {
    dispatch({ type: notificationConstants.CREATE_NOTIFICATION_REQUEST });
    const res = await axios.post(`/admin-create-notification`,{...obj}).catch((err) => {
      console.log(err.response)
      const { message } = err.response.data;
      dispatch({
        type: notificationConstants.CREATE_NOTIFICATION_FAILURE,
        payload: {
          message,
        },
      });
    })
    if (res.status === 200) {
      const { data } = res.data;
      dispatch({
        type: notificationConstants.CREATE_NOTIFICATION_SUCCESS,
        payload: {
          data,
        },
      });
    }
  };
};

