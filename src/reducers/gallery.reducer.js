import {galleryConstants} from '../constants';

const initState = {
    message:null,
    error:null,
    data:null,
    allimages:null,
};

const GalleryReducer = (state = initState, action) => {
    switch (action.type) {
        case galleryConstants.GET_GALLERY_IMG_SUCCESS: {
            state={
                ...state,
                allimages: action.payload.data
            }
            break;
        }
        case galleryConstants.GET_GALLERY_IMG_FAILURE: {
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

export default GalleryReducer