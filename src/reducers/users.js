// users reducer
export default function users(state, action) {
  switch (action.type) {
    case 'USERS_FETCH_LIST_SUCCESS':
      const users = Array.isArray(action.users) ? action.users : []
      return {
        ...state,
        mapById: users.reduce((acc, user) => ({ ...acc, [user.ID]: user }), {}),
        orderId: users.map(user => user.ID)
      }
      break;

    case 'USER_FETCH':
      return { ...state }
      break;

    case 'USER_FETCH_SUCCESS':
      const user = action.user
      return {
        ...state,
        mapById: {
          ...state.mapById,
          [user.ID]: user
        }
      }
      break;

    case 'USER_DELETE_SUCCESS':
      const removed = action.user

      return {
        ...state,
        mapById: {
          ...state.mapById,
          [removed.ID]: {
            ...removed,
            isRemoved: true
          }
        }
      }
      break;

    case 'USER_CREATE_SUCCESS':
      const created = action.user

      return {
        ...state,
        mapById: {
          ...state.mapById,
          [created.ID]: {
            ...created
          }
        },
        orderId: [created.ID, ...state.orderId]
      }
      break;
      
    // initial state
    default:
      return state || {
        mapById: {},
        orderId: []
      };
  }
}