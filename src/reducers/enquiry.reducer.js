import { enquiryConstants } from '../constants';

const initState = {
    message: null,
    error: null,
    data: null,
};

const EnquiryReducer = (state = initState, action) => {
    switch (action.type) {
        case enquiryConstants.add_ENQUIRY_SUCCESS: {
            state = {
                ...state,
                data: action.payload.data,
            };
            break;
        }
        case enquiryConstants.ADD_ENQUIRY_FAILURE: {
            state = {
                ...state,
                error: action.payload.error,
            };
            break;
        }
        default: {
            state = {
                ...state,
            };
        }
    }
    return state;
};

export default EnquiryReducer;
