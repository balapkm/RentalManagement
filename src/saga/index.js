import { put, takeLatest, all } from 'redux-saga/effects';
import { getCatalog } from "../services/CatalogServices";
import types from "../reducers/types";

function* fetchData() {
    const json = yield getCatalog();
    yield put({ type: types.CATALOG_RECEIVED, catalog: json.data.locations });
}

function* actionWatcher() {
    yield takeLatest(types.LOAD_CATALOG, fetchData)
}

export default function* rootSaga() {
   yield all([
    actionWatcher(),
   ]);
}