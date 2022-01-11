import { TYPES } from "./Types";
export const SetSelectedUser = (user) => {
  return {
    type: TYPES.SET_SELECTED_USER,
    user: user,
  };
};
export const SetSelectedPosition = (position) => {
  return {
    type: TYPES.SET_SELECTED_POSITION,
    position: position,
  };
};
export const EditUser = (user) => {
  return {
    type: TYPES.EDIT_USER,
    payload: user,
  };
};
export const EditPosition = (position) => {
  return {
    type: TYPES.EDIT_POSITION,
    payload: position,
  };
};
export const AddUser = (newUser) => {
  return {
    type: TYPES.ADD_USER,
    newUser: newUser,
  };
};
export const AddPosition = (newPosition) => {
  return {
    type: TYPES.ADD_POSITION,
    newPosition: newPosition,
  };
};
export const DeleteUser = (id) => {
  return {
    type: TYPES.DELETE_USER,
    id: id,
  };
};
export const DeletePosition = (id) => {
  return {
    type: TYPES.DELETE_POSITION,
    id: id,
  };
};
