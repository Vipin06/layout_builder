import { DARK_MODE } from "./Type";

export const handledarkMode = (e) => async (dispatch) => {
  localStorage.setItem("darkmode", e);
  dispatch({
    type: DARK_MODE,
    payload: e,
  });
};