import { takeLatest, takeEvery } from "redux-saga";
import { fork } from "redux-saga/effects";
import { usersFetchList, fetchUser, usersDelete } from "./users";

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'USERS_FETCH_LIST', usersFetchList),
    fork(takeEvery, 'USER_FETCH', fetchUser)
  ];
}
