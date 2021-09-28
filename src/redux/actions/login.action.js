import { api, APIS } from "../../config";
import {
  LOGIN,
  LOGOUT,
  PASSWORD,
  USER,
  CHANGE_PASSWORD,
  FORGET_PASSWORD,
  RESET_PASSWORD,
} from ".";

export function loginAction(body, callback, toast) {
  return async function (dispatch) {
    let res;
    try {
      dispatch({ type: LOGIN.LOADING });
      res = await api(APIS.login, "POST", body);

      const { success, data, message } = res.data;
      // console.log("@#@3232", data);

      if (success) {
        dispatch({ type: LOGIN.SUCCESS });
        dispatch({ type: USER.SUCCESS, payload: data });
        callback && callback(data.data.token, "SUPERADMIN");

        toast({
          message: data.message,
          type: "success",
        });
      } else {
        dispatch({ type: LOGIN.ERROR });
        toast({
          message: message,
          type: "error",
        });
      }
    } catch ({ message }) {
      dispatch({ type: LOGIN.ERROR });
      toast({
        message: `Login Failed!!`,
        type: "error",
      });
      console.error(message);
      return 0;
    }
  };
}

export function logoutAction(callback, toast) {
  return async function (dispatch) {
    let res;
    try {
      dispatch({ type: LOGOUT.LOADING });
      res = await api(APIS.logout);

      const { success, data, message } = res.data;

      console.log("ressss", res.data);
      if (success) {
        dispatch({ type: LOGOUT.SUCCESS });
        callback && callback();
        toast({
          message: data.message,
          type: "success",
        });
      } else {
        dispatch({ type: LOGOUT.ERROR });
        toast({
          message: data.message,
          type: "error",
        });
      }
    } catch ({ message }) {
      dispatch({ type: LOGOUT.ERROR });
      toast({
        message: `Logout Failed!!`,
        type: "error",
      });
      console.error(message);
      return 0;
    }
  };
}

export function passwordAction(body, modalCloseHandler, toast) {
  return async function (dispatch) {
    let res;
    try {
      dispatch({ type: PASSWORD.LOADING });
      res = await api(APIS.change, "PATCH", body);

      const { success, data } = res.data;

      if (success) {
        dispatch({ type: PASSWORD.SUCCESS });
        toast({ message: "Password Changed Successfully", type: "success" });
        modalCloseHandler();
      } else {
        dispatch({ type: PASSWORD.ERROR });
        toast({ message: data.message, type: "error" });
      }
    } catch ({ message }) {
      dispatch({ type: PASSWORD.ERROR });
      console.error(message);
      toast({ message: "Error Changing Password", type: "error" });
      return 0;
    }
  };
}

export function changePassword(body, toast, successCallback) {
  return async function (dispatch) {
    let res;
    try {
      dispatch({ type: CHANGE_PASSWORD.LOADING });

      res = await api(`${APIS.forget}`, "PATCH", body);

      const { success, data } = res.data;

      if (success) {
        dispatch({ type: CHANGE_PASSWORD.SUCCESS });

        !!toast && toast({ message: data.message, type: "success" });
        successCallback && successCallback();
      } else {
        dispatch({ type: CHANGE_PASSWORD.ERROR });
        !!toast && toast({ message: res.data.message, type: "error" });
      }
    } catch ({ message }) {
      dispatch({ type: CHANGE_PASSWORD.ERROR });
      !!toast && toast({ message: res.data.message, type: "error" });
      console.error(message);
      return 0;
    }
  };
}

export function forgetPassword(body, toast, successCallback) {
  return async function (dispatch) {
    let res;
    try {
      dispatch({ type: FORGET_PASSWORD.LOADING });

      res = await api(`${APIS.forgot}`, "POST", body);

      const { success, data } = res.data;

      if (success) {
        dispatch({ type: FORGET_PASSWORD.SUCCESS });

        !!toast && toast({ message: data.message, type: "success" });
        successCallback && successCallback();
      } else {
        dispatch({ type: FORGET_PASSWORD.ERROR });
        !!toast && toast({ message: res.data.message, type: "error" });
      }
    } catch ({ message }) {
      dispatch({ type: FORGET_PASSWORD.ERROR });
      !!toast && toast({ message: res.data.message, type: "error" });
      console.error(message);
      return 0;
    }
  };
}

export function resetPassword(body, toast, successCallback) {
  return async function (dispatch) {
    let res;
    try {
      dispatch({ type: RESET_PASSWORD.LOADING });

      res = await api(`${APIS.forgot}`, "PATCH", body);

      const { success, data } = res.data;

      if (success) {
        dispatch({ type: RESET_PASSWORD.SUCCESS });

        !!toast && toast({ message: data.message, type: "success" });
        successCallback && successCallback();
      } else {
        dispatch({ type: RESET_PASSWORD.ERROR });
        !!toast && toast({ message: res.data.message, type: "error" });
      }
    } catch ({ message }) {
      dispatch({ type: RESET_PASSWORD.ERROR });
      !!toast && toast({ message: res.data.message, type: "error" });
      console.error(message);
      return 0;
    }
  };
}
