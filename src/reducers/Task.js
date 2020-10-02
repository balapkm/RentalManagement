import initialState from '../store/state';
import types from './types';

const TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_CATALOG:
        case types.LOAD_USERS:
        case types.GET_TASK:
            state = {
                ...state,
                loading : true
            }
            break;
        case types.TASKS_RECEIVED:
            state = {
                ...state,
                loading : false,
                tasks: action.payload
            }
            break;
        case types.TASK_RECEIVED:
            state = {
                ...state,
                loading : false,
                task: action.payload
            }
            break;
        case types.USERS_RECEIVED:
            state = {
                ...state,
                loading : false,
                users: action.payload
            }
            break;
        
        default:
            break;
    }

    return state;
}

export default TaskReducer;