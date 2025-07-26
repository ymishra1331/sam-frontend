import {brandConstants} from '../constants';

const initState = {
    message:null,
    error:null,
    data:null,
    allbrands:null,
    alldinebrands:null
};

const BrandReducer = (state = initState, action) => {
    switch (action.type) {
        case brandConstants.GET_BRAND_SUCCESS: {
            state={
                ...state,
                allbrands: action.payload.data
            }
            break;
        }
        case brandConstants.GET_BRAND_FAILURE: {
            state = {
                ...state,
                error: action.payload.error
            }
            break;
        }
        case brandConstants.GET_DINE_BRAND_FAILURE: {
            state = {
                ...state,
                error: action.payload.error
            }
            break;
        }
        case brandConstants.GET_DINE_BRAND_SUCCESS:{
            state = {
                ...state,
                alldinebrands: action.payload.data
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

export default BrandReducer