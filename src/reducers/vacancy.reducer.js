import { vacancyConstants} from '../constants';

const initState = {
    message:null,
    error:null,
    data:null,
    allvacancies:null,
};

const VacancyReducer = (state = initState, action) => {
    switch (action.type) {
        case vacancyConstants.GET_VACANCY_SUCCESS: {
            state={
                ...state,
                allvacancies: action.payload.data
            }
            break;
        }
        case vacancyConstants.GET_VACANCY_FAILURE: {
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

export default VacancyReducer