import { CHANGE_NAME, CHECKBOX_PROFILE, CHANGE_AUTH } from "./actions";

const initialState = {
  visible: true,
  name: "Default name",
  auth: false,
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

    case CHANGE_AUTH: {
      return {
        ...state,
        auth: !state.auth,
      };
    }

    default:
      return state;
  }
};
