import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // `thunk` import를 수정했습니다.
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // 기본적으로 localStorage를 사용합니다.
import userReducer from './userReducer';

// persist 설정
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userState'], // userState만 persist합니다.
};

// rootReducer 정의
const rootReducer = combineReducers({
  userState: userReducer,
});

// persistReducer를 통해 rootReducer를 persist 가능하게 만듭니다.
const persistedReducer = persistReducer(persistConfig, rootReducer);

// rootState 타입 정의
export type RootState = ReturnType<typeof rootReducer>;

// 스토어 생성 시 persistedReducer 사용
const store = createStore(persistedReducer, applyMiddleware(thunk));

// persistor 생성
export const persistor = persistStore(store);

export default store;
