import React, { useState } from 'react';
import { connect } from "react-redux";
import { RootState } from "../../core/reducers";
import { homesChange, repairsChange, roomsButton } from "../../store/setting/setting.action";
import SliderArea from "../Slider";
import { ISetting } from "../../models/setting.model";

interface IProps extends StoreProps, DispatchProps {

}

interface DispatchProps {
  repairsChange: HandlerDispatch;
  homesChange: HandlerDispatch;
  roomsButton: HandlerDispatch;
}

interface StoreProps {
  repairs: ISetting[],
  typeHouse: ISetting[],
  quantity: ISetting[]
}

const Setting = (props: IProps) => {
  const [repairs, setRepairs] = useState(1);
  const [homes, setHomes] = useState(1);
  const [rooms, setRooms] = useState(1);

  const repairsChangeInput = (id: number) => {
    setRepairs(id);
    props.repairsChange(id)
  };

  const homeChangeInput = (id: number) => {
    setHomes(id);
    props.homesChange(id)
  };

  const roomButton = (id: number) => {
    setRooms(id);
    props.roomsButton(id)
  };

  return (
    <div className={"setting"}>
      <div className={"setting-content"}>
        <div className={"setting-common setting-content_left"}>
          <p className={"heading"}>Расчет ремонта</p>
          {props.repairs.map((repair: any) => {
            return (
              <div key={repair.id} className={"wrapper-input"}>
                <label>
                  <input className={"setting-list"} type="radio" id={"name-box"} checked={repairs === repair.id}
                         onChange={() => repairsChangeInput(repair.id)}/>
                  {repair.title}
                </label>
              </div>
            )
          })}
        </div>
        <div className={"setting-common setting-content_right"}>
          <div>
            <p className={"heading"}>Тип дома</p>
            {props.typeHouse.map((home: any, homeId: number) => {
              return (
                <div key={homeId} className={"wrapper-input"}>
                  <label htmlFor="home-box">
                    <input className={"setting-list"} type="radio" id={"home-box"} checked={homes === home.id}
                           onChange={() => homeChangeInput(home.id)}/>
                    {home.title}
                  </label>
                </div>
              )
            })}
          </div>
          <div>
            <p className={"heading"}>Колличество комнат</p>
            <div className={"room-items"}>
              {props.quantity.map((room: any, roomId: number) => {
                return (
                  <div key={roomId}
                       onClick={() => roomButton(room.id)}>
                    {rooms === room.id ? (
                      <div className={"room-items_checked"}>
                        {room.title}
                      </div>
                    ) : (
                      <div className={"room-items_item "}>
                        {room.title}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={"slider-container"}>
        <SliderArea/>
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
  homesChange,
  roomsButton
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);