import {eventConstants} from '../constants';

const initState = {
    message:null,
    error:null,
    data:null,
    allevents:null,
};

const EventReducer = (state = initState, action) => {
    switch (action.type) {
        case eventConstants.GET_EVENT_SUCCESS: {
            state={
                ...state,
                allevents: action.payload.data
            }
            break;
        }
        case eventConstants.GET_EVENT_FAILURE: {
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

export default EventReducer