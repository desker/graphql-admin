import { call, put } from "redux-saga/effects";
import usersApi from "../api/users";

export function* usersFetchList(action) {
  const data = yield call(usersApi.getList);

  yield put({
    type: 'USERS_FETCH_LIST_SUCCESS',
    users: data.Users,
  });
}

export function* fetchUser(action) {
  
  const data = yield call(usersApi.getUser, action.id);

  yield put({
    type: 'USER_FETCH_SUCCESS',
    user: data.User,
  });
}

export function* deleteUser(action) {
  const data = yield call(usersApi.deleteUser, action.id);

  yield put({
    type: 'USER_DELETE_SUCCESS',
    user: data.DeleteUser,
  });
}

export function* createUser(action) {
  const data = yield call(usersApi.createUser, { login: action.login });

  yield put({
    type: 'USER_CREATE_SUCCESS',
    user: data.CreateUser,
  });
}

// // add/edit a user
// export function* usersAddEdit(action) {
//   // call the api to add/edit the user
//   yield call(ApiUsers.addEdit);
//   //return action.callbackError("Some error");   // show an error when the API fails

//   // update the state by adding/editing the user
//   yield put({
//     type: action.user.id ? 'USERS_EDIT_SAVE' : 'USERS_ADD_SAVE',
//     user: action.user,
//   });

//   // success
//   action.callbackSuccess();
// }

// // delete a user
// export function* usersDelete(action) {
//   // call the api to delete the user
//   yield call(ApiUsers.delete);

//   // update the state by removing the user
//   yield put({
//     type: 'USERS_DELETE_SAVE',
//     user_id: action.user_id,
//   });
// }
