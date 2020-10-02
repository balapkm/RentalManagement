import initialState from '../store/state';
import types from './types';

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_CATALOG:
            state = {
                ...state,
                loading : true
            }
            break;
        case types.CATALOG_RECEIVED:
            state = {
                ...state,
                loading: false,
                catalog: action.catalog
            }
            break;
        case types.SELECTED_CATALOG:
            state = {
                ...state,
                selectedBranch: action.branches,
                title: action.title
            }
            break;
        default:
            break;
    }

    return state;
}

export default catalogReducer;