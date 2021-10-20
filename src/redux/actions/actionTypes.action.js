import { createActionSet } from "../../helpers";

export const LOGIN = createActionSet("LOGIN");
export const LOGOUT = createActionSet("LOGOUT");
export const PASSWORD = createActionSet("PASSWORD");
export const USER = createActionSet("USER");
export const EDIT_USER_INFO = createActionSet("EDIT_USER_INFO");
export const RESET_PASSWORD = createActionSet("RESET_PASSWORD");

export const FORGET_PASSWORD = createActionSet("FORGET_PASSWORD");
export const CHANGE_PASSWORD = createActionSet("CHANGE_PASSWORD");

export const BUILDING_LIST = createActionSet("BUILDING_LIST");
export const ALL_BUILDING_LIST = createActionSet("ALL_BUILDING_LIST");
export const BUILDING_DETAIL = createActionSet("BUILDING_DETAIL");
export const ADD_BUILDING = createActionSet("ADD_BUILDING");
export const EDIT_BUILDING = createActionSet("EDIT_BUILDING");
export const DELETE_BUILDING = createActionSet("DELETE_BUILDING");
export const BUILDING_VIEWER = createActionSet("BUILDING_VIEWER");
export const ADD_BUILDING_VIEWER = createActionSet("ADD_BUILDING_VIEWER");
export const UPDATE_VIEWER = createActionSet("UPDATE_VIEWER");

export const USER_WORKER_LIST = createActionSet("USER_WORKER_LIST");
export const USER_DETAIL = createActionSet("USER_DETAIL");

export const SET_SUBHEADING_LINKS = createActionSet("SET_SUBHEADING_LINKS");
export const GET_SUBHEADING_LINKS = createActionSet("GET_SUBHEADING_LINKS");
