import { call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { loadSucces, loadFailure } from "./actions";

export function* load() {
  try {
    const response = yield call(api.get, "users/joatha/repos");
    yield put(loadSucces(response));
  } catch (err) {
    yield put(loadFailure());
  }
}
