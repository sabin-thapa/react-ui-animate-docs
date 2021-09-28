import {
  ADD_BUILDING,
  BUILDING_DETAIL,
  BUILDING_LIST,
  DELETE_BUILDING,
  EDIT_BUILDING,
  BUILDING_VIEWER,
  USER,
  ADD_BUILDING_VIEWER,
  ALL_BUILDING_LIST,
} from "../actions";

const initalState = {
  allListloading: false,
  allList: [],

  listloading: false,
  list: [],
  totalCount: null,

  detail: null,
  detailloading: false,

  addLoading: false,
  editLoading: false,
  deleteLoading: false,

  viewerList: [],
  viewerLoading: false,
  viewerCount: null,

  addViewerLoading: false,
};

export function buildingReducer(state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case BUILDING_LIST.CLEAR:
      return { ...state, listloading: true, list: [], isLast: false };
    case BUILDING_LIST.LOADING:
      return { ...state, listloading: true, list: [] };
    case BUILDING_LIST.SUCCESS:
      return {
        ...state,
        listloading: false,
        list: payload.rows,
        totalCount: payload.total,
      };
    case BUILDING_LIST.ERROR:
      return { ...state, listloading: false };

    case ALL_BUILDING_LIST.LOADING:
      return { ...state, allListloading: true };
    case ALL_BUILDING_LIST.SUCCESS:
      return {
        ...state,
        allListloading: false,
        allList: payload,
      };
    case ALL_BUILDING_LIST.ERROR:
      return { ...state, allListloading: false };

    case BUILDING_DETAIL.LOADING:
      return { ...state, detailloading: true, detail: null };
    case BUILDING_DETAIL.SUCCESS:
      return {
        ...state,
        detailloading: false,
        detail: payload,
      };
    case BUILDING_DETAIL.ERROR:
      return { ...state, detailloading: false };

    case ADD_BUILDING.LOADING:
      return { ...state, addLoading: true };
    case ADD_BUILDING.SUCCESS:
      return {
        ...state,
        addLoading: false,
      };
    case ADD_BUILDING.ERROR:
      return { ...state, addLoading: false };

    case EDIT_BUILDING.LOADING:
      return { ...state, editLoading: true };
    case EDIT_BUILDING.SUCCESS:
      return {
        ...state,
        editLoading: false,
      };
    case EDIT_BUILDING.ERROR:
      return { ...state, editLoading: false };

    case DELETE_BUILDING.LOADING:
      return { ...state, deleteLoading: true };
    case DELETE_BUILDING.SUCCESS:
      return {
        ...state,
        deleteLoading: false,
      };
    case DELETE_BUILDING.ERROR:
      return { ...state, deleteLoading: false };

    case BUILDING_VIEWER.LOADING:
      return { ...state, viewerLoading: true, viewerList: [] };
    case BUILDING_VIEWER.SUCCESS:
      return {
        ...state,
        viewerLoading: false,
        viewerList: payload.rows,
        viewerCount: payload.total,
      };
    case BUILDING_VIEWER.ERROR:
      return { ...state, viewerLoading: false };

    case ADD_BUILDING_VIEWER.LOADING:
      return { ...state, addViewerLoading: true };
    case ADD_BUILDING_VIEWER.SUCCESS:
      return {
        ...state,
        addViewerLoading: false,
      };
    case ADD_BUILDING_VIEWER.ERROR:
      return { ...state, addViewerLoading: false };

    default:
      return state;
  }
}
