// import { api, APIS, TABLE_LIMIT } from "../config";
// import { ADD_ADMIN, EDIT_ADMIN } from "./ActionTypes.action";
// import { getClientPeopleAction } from ".";

// export function addAdminAction(body, callback, toast) {
//   return async function (dispatch) {
//     let res;
//     try {
//       dispatch({ type: ADD_ADMIN.LOADING });
//       res = await api(APIS.register, "POST", body);

//       const { success, data, message } = res.data;

//       if (success) {
//         dispatch({ type: ADD_ADMIN.SUCCESS });
//         callback && callback();
//         toast({
//           message: data.message,
//           type: "success",
//         });
//       } else {
//         dispatch({ type: ADD_ADMIN.ERROR });
//         toast({
//           message: message,
//           type: "error",
//         });
//       }
//     } catch ({ message }) {
//       dispatch({ type: ADD_ADMIN.ERROR });
//       toast({
//         message: `Adding Failed`,
//         type: "error",
//       });
//       console.error(message);
//       return 0;
//     }
//   };
// }

// export function editAdminAction(id, body, callback, toast) {
//   return async function (dispatch) {
//     let res;
//     try {
//       dispatch({ type: EDIT_ADMIN.LOADING });
//       res = await api(`${APIS.userStatus}/${id}`, "PATCH", body);

//       const { success, data } = res.data;

//       if (success) {
//         dispatch({ type: EDIT_ADMIN.SUCCESS });
//         toast({
//           message: "Admin status successfully changed",
//           type: "success",
//         });
//         callback && callback();
//       } else {
//         dispatch({ type: EDIT_ADMIN.ERROR });
//         toast({ message: data.message, type: "error" });
//       }
//     } catch ({ message }) {
//       dispatch({ type: EDIT_ADMIN.ERROR });
//       console.error(message);
//       toast({ message: "Error changing admin status", type: "error" });
//       return 0;
//     }
//   };
// }
