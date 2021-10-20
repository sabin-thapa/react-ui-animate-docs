import { SET_SUBHEADING_LINKS } from "../actions";

const initalState = {
  list: [],
};

export function subHeadingReducer(state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_SUBHEADING_LINKS.CLEAR:
      return { ...state, list: [] };
    case SET_SUBHEADING_LINKS.SUCCESS:
      return { ...state, list: payload };

    default:
      return state;
  }
}
