import { combineReducers } from 'redux';
import setting from '../../store/setting';

export const createRootReducer = () =>
  combineReducers({
    setting
  });

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;
