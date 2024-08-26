import { SET_USER, CLEAR_USER, UPDATE_USER_PROFILE } from './userActionTypes';
import { User } from './userTypes';

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userReducer = (
  state = initialState,
  action: { type: string; payload?: Partial<User> }
): UserState => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
          ? { ...(state.user as User), ...action.payload } // 기존 user 객체와 payload를 병합
          : state.user, // payload가 없으면 기존 상태 유지
      };
    case CLEAR_USER:
      return initialState;
    case UPDATE_USER_PROFILE:
      return {
        ...state,
        user: state.user ? { ...state.user, ...action.payload } : state.user,
      };
    default:
      return state;
  }
};

export default userReducer;
