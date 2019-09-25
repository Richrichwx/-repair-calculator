import React, { useState } from 'react';
import { connect } from "react-redux";
import { RootState } from "../../core/reducers";
import { editRepairs } from "../../store/setting/setting.action";
import Slider from "../Slider";
import { ISetting } from "../../models/setting.model";


interface IProps extends StoreProps, DispatchProps {

}

interface DispatchProps {
  editRepairs: HandlerDispatch;
}

interface StoreProps {
  repairs?: any ,
  typeHouse?: any,
  quantity: any
}

const Setting = (props: IProps) => {
  return (
    <div className={"setting"}>
      <div className={"settingContent"}>
        <div className={"settingCommon settingLeft"}>
          <p className={"heading"}>Расчет ремонта</p>
          {props.repairs.map((name: any) => {
            return (
              <div key={name.id} className={"wrapperInput"}>
                <input className={"settingList"} type="radio" id={"nameBox"}/>
                <label htmlFor="nameBox">{name.title}</label>
              </div>
            )
          })}
        </div>
        <div className={"settingCommon settingRight"}>
          <div>
            <p className={"heading"}>Тип дома</p>
            {props.typeHouse.map((home: any) => {
              return (
                <div key={home.id} className={"wrapperInput"}>
                  <input className={"settingList"} type="radio" id={"homeBox"}/>
                  <label htmlFor="homeBox">{home.title}</label>
                </div>
              )
            })}
          </div>
          <div>
            <p className={"heading"}>Колличество комнат</p>
            <div className={"roomItems"}>
              {props.quantity.map((room: any) => {
                return (
                  <div key={room.id} className={"roomItem"}>
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
  editRepairs,
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);