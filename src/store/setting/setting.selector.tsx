import { createSelector } from 'reselect';
import { prop, propOr } from 'ramda';

import { ISetting } from "../../models/setting.model";
import { RootState, SettingState } from "../../core/reducers";


type Selector = (state: RootState) => SettingState;

export const setting: Selector = prop('setting');

export const flatSelector = createSelector<RootState, SettingState, ISetting[]>(
  [setting],
  propOr(null, 'flat')
);