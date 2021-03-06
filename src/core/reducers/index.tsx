import { combineReducers } from 'redux';
import setting, { settingSelector } from '../../store/setting';
import feedBack from '../../store/feedBack';
import { reducer as formReducer } from 'redux-form';

export const createRootReducer = () =>
  combineReducers({
    setting,
    feedBack,
    form: formReducer,
  });

export type RootState = ReturnType<ReturnType<typeof createRootReducer>>;

export type SettingState = RootState['setting'];

export { settingSelector };
