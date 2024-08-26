import { SET_USER, CLEAR_USER, UPDATE_USER_PROFILE } from './userActionTypes';
import { User } from './userTypes';

export const setUser = (user: User) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};

export const updateUser = (updates: Partial<User>) => ({
  type: UPDATE_USER_PROFILE,
  payload: updates,
});
