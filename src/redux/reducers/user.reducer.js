import { USER, USER_DETAIL, USER_WORKER_LIST } from "../actions";

const initalState = {
  loading: false,
  user: null,
  verificationSuccess: false,

  userWorkerList: [],
  userDetail: null,
};

export function userReducer(state = initalState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER.LOADING:
      return { ...state, loading: true, user: null };
    case USER.SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        verificationSuccess: true,
      };
    case USER.ERROR:
      return { ...state, loading: false, user: null };

    case USER_WORKER_LIST.LOADING:
      return { ...state, loading: true };
    case USER_WORKER_LIST.SUCCESS:
      return { ...state, loading: false, userWorkerList: payload.rows };
    case USER_WORKER_LIST.ERROR:
      return { ...state, loading: false };

    case USER_DETAIL.LOADING:
      return { ...state, loading: true };
    case USER_DETAIL.SUCCESS:
      return { ...state, loading: false, userDetail: payload };
    case USER_DETAIL.ERROR:
      return { ...state, loading: false };

    default:
      return state;
  }
}
