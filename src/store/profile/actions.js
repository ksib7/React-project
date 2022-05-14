export const CHECKBOX_PROFILE = "PROFILE::CHECKBOX_PROFILE";
export const CHANGE_NAME = "PROFILE::CHANGE_NAME";
export const CHANGE_AUTH = "PROFILE::CHANGE_AUTH";

export const checkboxProfile = () => ({
  type: CHECKBOX_PROFILE,
});

export const changeName = (name) => ({
  type: CHANGE_NAME,
  name,
});

export const changeAuth = () => ({
  type: CHANGE_AUTH,
});
