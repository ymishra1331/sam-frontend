import {bannerConstants} from '../constants';

const initState = {
    message:null,
    error:null,
    data:null,
    allbanners:null,
};

const BannerReducer = (state = initState, action) => {
    switch (action.type) {
        case bannerConstants.GET_BANNERS_SUCCESS: {
            state={
                ...state,
                allbanners: action.payload.data
            }
            break;
        }
        case bannerConstants.GET_BANNERS_FAILURE: {
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

export default BannerReducer