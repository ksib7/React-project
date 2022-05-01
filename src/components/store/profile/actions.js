export const CHECKBOX_PROFILE = "PROFILE::CHECKBOX_PROFILE";
export const CHANGE_NAME = "PROFILE::CHANGE_NAME";

export const checkboxProfile = () => ({
  type: CHECKBOX_PROFILE,
});

export const changeName = (name) => ({
  type: CHANGE_NAME,
  name,
});
