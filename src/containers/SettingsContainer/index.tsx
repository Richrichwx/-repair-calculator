import React from 'react';
import { connect } from "react-redux";
import { RootState, settingSelector } from "../../core/reducers";
import {
  homesChange,
  repairsChange,
  roomsButton,
  flatChange,
} from "../../store/setting/setting.action";
import { ISettings } from "../../models/setting.model";
import Repairs from '../../components/Repairs/index';
import TypeHome from '../../components/TypeHome/index';
import NumberRooms from '../../components/NumberRooms/index';
import Area from "../../components/Area/index";

interface IProps extends StoreProps, DispatchProps {
}

interface DispatchProps {
  repairsChange: HandlerDispatch;
  homesChange: HandlerDispatch;
  roomsButton: HandlerDispatch;
  flatChange: HandlerDispatch;
}

interface StoreProps {
  setting: ISettings,
  flat: any
}

const SettingContainer = (props: IProps) => {
  return (
    <div className={"containerCommon setting"}>
      <div className={"contentCommon setting-content"}>
        <div className={"setting-common setting-content_left"}>
          <Repairs repairsChange={props.repairsChange} repairs={props.setting.repairs}/>
        </div>
        <div className={"setting-common setting-content_right"}>
          <div>
            <TypeHome homesChange={props.homesChange} typeHouse={props.setting.typeHouse}/>
          </div>
          <div>
            <NumberRooms roomsButton={props.roomsButton} quantity={props.setting.quantity}/>
          </div>
        </div>
      </div>
      <div className={"flat-container"}>
        <Area flatChange={props.flatChange} flat={props.flat}/>
      </div>
    </div>
  )
};

const mapStateToProps = (state: RootState) => {
  const { flatSelector } = settingSelector;
  return {
    setting: state.setting,
    flat: flatSelector(state)
}
};

const mapDispatchToProps = {
  repairsChange,
  homesChange,
  roomsButton,
  flatChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingContainer);