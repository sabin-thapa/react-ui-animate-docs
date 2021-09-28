import { api, APIS, TABLE_LIMIT } from "../../config";
import {
  BUILDING_LIST,
  BUILDING_DETAIL,
  ADD_BUILDING,
  EDIT_BUILDING,
  DELETE_BUILDING,
  BUILDING_VIEWER,
  ADD_BUILDING_VIEWER,
  UPDATE_VIEWER,
  ALL_BUILDING_LIST,
} from ".";

export function getBuildingListAction(page = 1) {
  return async function (dispatch) {
    let res;
    try {
      if (page === 1) {
        dispatch({ type: BUILDING_LIST.CLEAR });
      }

      dispatch({ type: BUILDING_LIST.LOADING });
      res = await api(`${APIS.building}?page=${page}&limit=${TABLE_LIMIT}`);

      const { success, data } = res.data;

      if (success) {
        dispatch({ type: BUILDING_LIST.SUCCESS, payload: data.data });
      } else {
        dispatch({ type: BUILDING_LIST.ERROR });
      }
    } catch ({ message }) {
      dispatch({ type: BUILDING_LIST.ERROR });
      console.error(message);
      return 0;
    }
  };
}

export function getAllBuildingListAction() {
  return async function (dispatch) {
    let res;
    try {
      dispatch({ type: ALL_BUILDING_LIST.LOADING });
      res = await api(`${APIS.building}`);

      const { success, data } = res.data;
      if (success) {
        dispatch({ type: ALL_BUILDING_LIST.SUCCESS, payload: data.data });
      } else {
        dispatch({ type: ALL_BUILDING_LIST.ERROR });
      }
    } catch ({ message }) {
      dispatch({ type: ALL_BUILDING_LIST.ERROR });
      console.error(message);
      return 0;
    }
  };
}

export function getBuildingDetailAction(id = 1) {
  return async function (dispatch) {
    let res;
    try {
      dispatch({ type: BUILDING_DETAIL.LOADING });
      res = await api(`${APIS.building}/${id}`);

      const { success, data } = res.data;

      if (success) {
        dispatch({ type: BUILDING_DETAIL.SUCCESS, payload: data.data });
      } else {
        dispatch({ type: BUILDING_DETAIL.ERROR });
      }
    } catch ({ message }) {
      dispatch({ type: BUILDING_DETAIL.ERROR });
      console.error(message);
      return 0;
    }
  };
}

export function addBuildingAction(formData, callback, toast) {
  return async function (dispatch) {
    let res;
    try {
      dispatch({ type: ADD_BUILDING.LOADING });
      res = await api(APIS.building, "POST", formData, { file: true });

      const { success, data, message } = res.data;
      console.log("@#@3232", res.data);

      if (success) {
        dispatch({ type: ADD_BUILDING.SUCCESS });
        callback && callback();
        toast({
          message: data.message,
          type: "success",
        });
      } else {
        dispatch({ type: ADD_BUILDING.ERROR });
        data.length > 0 &&
          data.map(({ message }) =>
            toast({
              message: message,
              type: "error",
            }),
          );
      }
    } catch ({ message }) {
      dispatch({ type: ADD_BUILDING.ERROR });
      toast({
        message: `Adding Failed`,
        type: "error",
      });
      console.error(message);
      return 0;
    }
  };
}

// export function editBuildingAction(id, formData, callback, toast,removedImage) {
//   return async function (dispatch) {
//     let res;
//     try {
//       dispatch({ type: EDIT_BUILDING.LOADING });
//       res = await api(`${APIS.building}/${id}`, "PATCH", formData, {
//         file: true,
//       });

//       const { success, data, message } = res.data;

//       if (success) {
//         // if(removedImage.length>0){

//         // }

//         dispatch({ type: EDIT_BUILDING.SUCCESS });
//         callback && callback();
//         toast({
//           message: data.message,
//           type: "success",
//         });

//       } else {
//         dispatch({ type: EDIT_BUILDING.ERROR });
//         toast({
//           message: message,
//           type: "error",
//         });
//       }
//     } catch ({ message }) {
//       dispatch({ type: EDIT_BUILDING.ERROR });
//       toast({
//         message: `Editing Failed`,
//         type: "error",
//       });
//       console.error(message);
//       return 0;
//     }
//   };
// }

export function editBuildingAction(
  id,
  formData,
  callback,
  toast,
  removedImage,
) {
  return async function (dispatch) {
    let res;

    new Promise(async (resolve, reject) => {
      try {
        if (removedImage.length > 0) {
          res = await api(`${APIS.building}/image/${id}`, "DELETE", {
            index: removedImage,
          });
          const { success, data, message } = res.data;
          if (success) {
            resolve();
          } else {
            reject();
            dispatch({ type: EDIT_BUILDING.ERROR });
            toast({
              message: message,
              type: "error",
            });
          }
        } else {
          resolve();
        }
      } catch (e) {
        dispatch({ type: EDIT_BUILDING.ERROR });
        toast({
          message: "Editing Failed",
          type: "error",
        });
        console.log(e);
        reject();
      }
    }).then(async () => {
      res = await api(`${APIS.building}/${id}`, "PATCH", formData, {
        file: true,
      });
      const { success, data, message } = res.data;
      if (success) {
        dispatch({ type: EDIT_BUILDING.SUCCESS });
        callback && callback();
        toast({
          message: data.message,
          type: "success",
        });
      } else {
        dispatch({ type: EDIT_BUILDING.ERROR });
        toast({
          message: message,
          type: "error",
        });
      }
    });
  };
}

export function deleteBuildingAction(id, toast, page) {
  return async function (dispatch) {
    let res;
    try {
      dispatch({ type: DELETE_BUILDING.LOADING });
      res = await api(`${APIS.building}/delete/${id}`, "PATCH");

      const { success, data, message } = res.data;

      if (success) {
        dispatch({ type: DELETE_BUILDING.SUCCESS });
        dispatch(getBuildingListAction(page));
        toast({
          message: data.message,
          type: "success",
        });
      } else {
        dispatch({ type: DELETE_BUILDING.ERROR });
        toast({
          message: message,
          type: "error",
        });
      }
    } catch ({ message }) {
      dispatch({ type: DELETE_BUILDING.ERROR });
      toast({
        message: `DELETING Failed`,
        type: "error",
      });
      console.error(message);
      return 0;
    }
  };
}

export function getBuildingViewerAction(id, page = 1) {
  return async function (dispatch) {
    let res;
    try {
      dispatch({ type: BUILDING_VIEWER.LOADING });
      res = await api(
        `${APIS.building}/viewer/${id}?page=${page}&limit=${TABLE_LIMIT}`,
      );

      const { success, data } = res.data;

      if (success) {
        dispatch({ type: BUILDING_VIEWER.SUCCESS, payload: data.data });
      } else {
        dispatch({ type: BUILDING_VIEWER.ERROR });
      }
    } catch ({ message }) {
      dispatch({ type: BUILDING_VIEWER.ERROR });
      console.error(message);
      return 0;
    }
  };
}

export function addBuildingViewerAction(id, body, callback, toast) {
  return async function (dispatch) {
    let res;
    try {
      dispatch({ type: ADD_BUILDING_VIEWER.LOADING });
      res = await api(`${APIS.building}/viewer/${id}`, "POST", body);

      const { success, data, message } = res.data;

      if (success) {
        dispatch({ type: ADD_BUILDING_VIEWER.SUCCESS });
        callback && callback();
        toast({
          message: data.message,
          type: "success",
        });
      } else {
        dispatch({ type: ADD_BUILDING_VIEWER.ERROR });
        toast({
          message: message,
          type: "error",
        });
      }
    } catch ({ message }) {
      dispatch({ type: ADD_BUILDING_VIEWER.ERROR });
      toast({
        message: `Adding Failed`,
        type: "error",
      });
      console.error(message);
      return 0;
    }
  };
}

export function updateViewerAction(id, body, callback, toast) {
  return async function (dispatch) {
    let res;
    try {
      dispatch({ type: UPDATE_VIEWER.LOADING });
      res = await api(`${APIS.deactivateUser}/${id}`, "PATCH", body);

      const { success, data } = res.data;

      if (success) {
        dispatch({ type: UPDATE_VIEWER.SUCCESS });
        toast({
          message: "User status successfully changed",
          type: "success",
        });
        callback && callback();
      } else {
        dispatch({ type: UPDATE_VIEWER.ERROR });
        toast({ message: data.message, type: "error" });
      }
    } catch ({ message }) {
      dispatch({ type: UPDATE_VIEWER.ERROR });
      console.error(message);
      toast({ message: "Error changing user status", type: "error" });
      return 0;
    }
  };
}
