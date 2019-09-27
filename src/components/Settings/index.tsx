import React, { useState } from 'react';
import { connect } from "react-redux";
import { RootState } from "../../core/reducers";
import { repairsChange } from "../../store/setting/setting.action";
import Slider from "../Slider";

interface IProps extends StoreProps, DispatchProps {

}

interface DispatchProps {
  repairsChange: HandlerDispatch;
}

interface StoreProps {
  repairs: any[],
  typeHouse: any[],
  quantity: any[]
}

const Setting = (props: IProps) => {
  const [repairs, setRepairs] = useState(1);
  const handleChange = (id: number) => {
    setRepairs(id);
    props.repairsChange(id)
  };
  return (
    <div className={"setting"}>
      <div className={"settingContent"}>
        <div className={"settingCommon settingLeft"}>
          <p className={"heading"}>Расчет ремонта</p>
          {props.repairs.map((name: any) => {
            return (
              <div key={name.id} className={"wrapperInput"}>
                <label>
                  <input className={"settingList"} type="radio" id={"nameBox"} checked={repairs === name.id}
                         onChange={() => handleChange(name.id)}/>
                  {name.title}
                </label>
              </div>
            )
          })}
        </div>
        <div className={"settingCommon settingRight"}>
          <div>
            <p className={"heading"}>Тип дома</p>
            {props.typeHouse.map((home: any, homeId: number) => {
              return (
                <div key={homeId} className={"wrapperInput"}>
                  <input className={"settingList"} type="radio" id={"homeBox"}/>
                  <label htmlFor="homeBox">{home.title}</label>
                </div>
              )
            })}
          </div>
          <div>
            <p className={"heading"}>Колличество комнат</p>
            <div className={"roomItems"}>
              {props.quantity.map((room: any, roomId: number) => {
                return (
                  <div key={roomId} className={"roomItem"}>
                    {room.title}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={"sliderContainer"}>
        <Slider/>
      </div>
    </div>
  )
};

const mapStateToProps = (state: RootState) => {
  return {
    repairs: state.setting.repairs,
    typeHouse: state.setting.typeHouse,
    quantity: state.setting.quantity,
  }
};

const mapDispatchToProps = {
  repairsChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);