import { SET_SUBHEADING_LINKS } from ".";

export function setSubHeadingLinks(links) {
  return async function (dispatch) {
    dispatch({ type: SET_SUBHEADING_LINKS.CLEAR });
    dispatch({ type: SET_SUBHEADING_LINKS.SUCCESS, payload: links });
  };
}
