import { USER } from ".";
import { api, APIS } from "../../config";
import { getCookie, setCookie } from "../../helpers";
import { EDIT_USER_INFO, USER_WORKER_LIST, USER_DETAIL } from ".";

export function userAuthAction(loading, loginSuccess, loginFailure) {
  return async function (dispatch) {
    let res;
    try {
      if (!getCookie("token")) {
        return loading(false);
      }

      dispatch({ type: USER.LOADING });
      res = await api(APIS.user);

      const { success, data } = res.data;

      if (success) {
        dispatch({ type: USER.SUCCESS, payload: data });

        if (data.type === "success") {
          loginSuccess(data.data.user_details.role);
        } else {
          loginFailure();
        }

        loading(false);
      } else {
        dispatch({ type: USER.ERROR });
        loading(false);
      }
    } catch ({ message }) {
      dispatch({ type: USER.ERROR });
      loading(false);
      return 0;
    }
  };
}

export function userAuthLogoutAction(callback) {
  return async function () {
    let res;
    try {
      res = await api(APIS.logout);

      const { success } = res.data;

      if (success) {
        callback();
      }
    } catch ({ message }) {
      return 0;
    }
  };
}

export function editUserInfoAction(body, callback, toast) {
  return async function (dispatch) {
    let res;
    try {
      dispatch({ type: EDIT_USER_INFO.LOADING });
      res = await api(`${APIS.user}/profile`, "PATCH", body);

      const { success, data } = res.data;

      if (success) {
        dispatch({ type: EDIT_USER_INFO.SUCCESS });
        toast({
          message: "User status successfully changed",
          type: "success",
        });
        callback && callback();
      } else {
        dispatch({ type: EDIT_USER_INFO.ERROR });
        toast({ message: data.message, type: "error" });
      }
    } catch ({ message }) {
      dispatch({ type: EDIT_USER_INFO.ERROR });
      console.error(message);
      toast({ message: "Error changing user status", type: "error" });
      return 0;
    }
  };
}

export function getUserAction() {
  return async function (dispatch) {
    let res;
    try {
      res = await api(APIS.user);

      const { success, data } = res.data;

      if (success) {
        dispatch({ type: USER.SUCCESS, payload: data });
      } else {
        dispatch({ type: USER.ERROR });
      }
    } catch ({ message }) {
      dispatch({ type: USER.ERROR });

      return 0;
    }
  };
}
// same as getClientMyPeopleAction but not pagination
export function getWorkerAction() {
  return async function (dispatch) {
    let res;
    try {
      res = await api(`${APIS.user}/myworkers`);

      const { success, data } = res.data;

      if (success) {
        dispatch({ type: USER_WORKER_LIST.SUCCESS, payload: data.data });
      } else {
        dispatch({ type: USER_WORKER_LIST.ERROR });
      }
    } catch ({ message }) {
      dispatch({ type: USER_WORKER_LIST.ERROR });

      return 0;
    }
  };
}

//GET OTHER USER DETAILS

// export function getUserDetails(id) {
//   return async function (dispatch) {
//     let res;
//     try {
//       res = await api(`${APIS.user}/${id}`);

//       const { success, data } = res.data;

//       if (success) {
//         dispatch({ type: USER_DETAIL.SUCCESS, payload: data.data });
//       } else {
//         dispatch({ type: USER_DETAIL.ERROR });
//       }
//     } catch ({ message }) {
//       dispatch({ type: USER_DETAIL.ERROR });
//     }
//   };
// }

export function verifyUser(token, toast, callback) {
  return async function (dispatch) {
    let res;
    try {
      dispatch({ type: USER.CLEAR });
      dispatch({ type: USER.LOADING });

      res = await api(`${APIS.verify}?token=${token}`);

      const { success, data } = res.data;

      if (success) {
        dispatch({
          type: USER.SUCCESS,
          payload: data.data,
        });
        !!toast && toast({ message: data.message, type: "success" });

        // Store a token in cookie
        setTimeout(() => {
          !!data?.data?.token && setCookie("token", data.data.token);
          dispatch(getUserAction());
          callback && callback();
        }, 2000);
      } else {
        dispatch({ type: USER.ERROR });
        !!toast && toast({ message: res.data.message, type: "error" });
      }
    } catch ({ message }) {
      dispatch({ type: USER.ERROR });
      !!toast && toast({ message: res.data.message, type: "error" });
      console.error(message);
      return 0;
    }
  };
}
