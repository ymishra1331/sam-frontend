import {offerConstants} from '../constants';

const initState = {
    message:null,
    error:null,
    data:null,
    alloffers:null,
};

const OfferReducer = (state = initState, action) => {
    switch (action.type) {
        case offerConstants.GET_OFFER_SUCCESS: {
            state={
                ...state,
                alloffers: action.payload.data
            }
            break;
        }
        case offerConstants.GET_OFFER_FAILURE: {
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

export default OfferReducer