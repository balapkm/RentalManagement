import types from '../reducers/types';

/**
 * Load Catalog
 * @param {*} data 
 */
export function loadTasks() {
    return {
        type: types.LOAD_TASKS
    }
}

/**
 * Load Users
 * @param {*} data 
 */
export function loadUsers() {
    return {
        type: types.LOAD_USERS
    }
}

/**
 * Load Users
 * @param {*} data 
 */
 export function addTasks(data) {
    return {
        type: types.ADD_TASKS,
        payload: data
    }
}

/**
 * getTask
 * @param {*} data 
 */
 export function getTask(id) {
    return {
        type: types.GET_TASK,
        payload: id
    }
}

export function updateTask(data) {
    return {
        type: types.UPDATE_TASK,
        payload: data
    }
}

export function deleteTask(id) {
    return {
        type: types.DELETE_TASK,
        payload: id
    }
}