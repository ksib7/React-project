import { CHANGE_NAME, CHECKBOX_PROFILE } from "./actions";

const initialState = {
  visible: true,
  name: "Default name",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKBOX_PROFILE: {
      return {
        ...state,
        visible: !state.visible,
      };
    }

    case CHANGE_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }

    default:
      return state;
  }
};
