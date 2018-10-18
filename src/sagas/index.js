import { takeLatest, takeEvery } from "redux-saga";
import { fork } from "redux-saga/effects";
import { usersFetchList, fetchUser, deleteUser, createUser } from "./users";

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'USERS_FETCH_LIST', usersFetchList),
    fork(takeEvery, 'USER_FETCH', fetchUser),
    fork(takeEvery, 'USER_DELETE', deleteUser),
    fork(takeEvery, 'USER_CREATE', createUser)
  ];
}
