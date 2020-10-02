import { addTasks, deleteTask, getAllTasks, getAllUsers, getTask, updateTask } from "../services/TaskServices";
import { all, put, takeLatest } from 'redux-saga/effects';

import types from "../reducers/types";

function* getTasks() {
    const json = yield getAllTasks();
    yield put({ type: types.TASKS_RECEIVED, payload: json });
}

function* getUsers() {
    const json = yield getAllUsers();
    yield put({ type: types.USERS_RECEIVED, payload: Object.values(json) });
}

function* addTasksAction(action) {
    yield addTasks(action.payload);
}

function* updateTasksAction(action) {
    yield updateTask(action.payload);
}

function* deleteTasksAction(action) {
    yield deleteTask(action.payload);
}

function* getTaskAction(action) {
    const json = yield getTask(action.payload);
    yield put({ type: types.TASK_RECEIVED, payload: json.results });
}

function* actionWatcher() {
    yield takeLatest(types.LOAD_TASKS, getTasks)
    yield takeLatest(types.GET_TASK, getTaskAction)
    yield takeLatest(types.GET_TASK, getTask)
    yield takeLatest(types.LOAD_USERS, getUsers)
    yield takeLatest(types.ADD_TASKS, addTasksAction)
    yield takeLatest(types.UPDATE_TASK, updateTasksAction)
    yield takeLatest(types.DELETE_TASK, deleteTasksAction)
}

export default function* rootSaga() {
   yield all([
    actionWatcher(),
   ]);
}