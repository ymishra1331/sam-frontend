import { careerConstants } from '../constants';

const initState = {
    message: null,
    error: null,
    data: null,
    allCareers: null,
};

const CareerReducer = (state = initState, action) => {
    switch (action.type) {
        case careerConstants.ADD_CAREER_SUCCESS: {
            state = {
                ...state,
                data: action.payload.data,
            };
            break;
        }
        case careerConstants.ADD_CAREER_FAILURE: {
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

export default CareerReducer;
