import {notificationConstants} from '../constants';

const initState = {
    message:null,
    error:null,
    data:null,
};

const NotificationReducer = (state = initState, action) => {
    switch (action.type) {
        case notificationConstants.CREATE_NOTIFICATION_SUCCESS: {
            state={
                ...state,
                message:"Notification Create Successfully"
            }
            break;
        }
        case notificationConstants.CREATE_NOTIFICATION_FAILURE: {
            state = {
                ...state,
                error: action.payload.error
            }
            break;
        }
        default: {
            state = {
                ...state
            }
        }
    }
    return state;
}

export default NotificationReducer