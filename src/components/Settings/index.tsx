import React, { useState } from 'react';
import { connect } from "react-redux";
import { RootState } from "../../core/reducers";
import {
  homesChange,
  repairsChange,
  roomsButton,
  flatChange, totalAmountFunc,
} from "../../store/setting/setting.action";
import {
  checkedCommon,
  commonDiscount,
  commonResultFunc,
} from "../../store/setting/setting.convector";
import { ISettings } from "../../models/setting.model";

interface IProps extends StoreProps, DispatchProps {
}

interface DispatchProps {
  repairsChange: HandlerDispatch;
  homesChange: HandlerDispatch;
  roomsButton: HandlerDispatch;
  flatChange: HandlerDispatch;
  totalAmountFunc: HandlerDispatch;
}

interface StoreProps {
  setting: ISettings,
}

const Setting = (props: IProps) => {
  const [repairs, setRepairs] = useState(1);
  const [homes, setHomes] = useState(1);
  const [rooms, setRooms] = useState(1);
  const [flat, setFlat] = useState(0);

  const repairsChangeInput = (id: number, coefficient: any) => {
    setRepairs(id);
    const repairsData = checkedCommon(id)(props.setting.repairs);
    props.repairsChange(repairsData, coefficient);
  };

  const homeChangeInput = (id: number) => {
    setHomes(id);
    const homesData = checkedCommon(id)(props.setting.typeHouse);
    props.homesChange(homesData)
  };

  const roomButton = (id: number, price: any) => {
    setRooms(id);
    const quantityData = checkedCommon(id)(props.setting.quantity);
    props.roomsButton(quantityData, price);
  };

  const changeFlat = (e: any) => {
    setFlat(e.currentTarget.value);
    props.flatChange(e.currentTarget.value);
  };

  const resultBtn = () => {
    const totalPayload = commonResultFunc(flat)(props.setting.price)(props.setting.coefficientActive);
    const discountPayload = commonDiscount(totalPayload)(props.setting.discount);
    props.totalAmountFunc(totalPayload, discountPayload);
  };

  return (
    <div className={"setting"}>
      <div className={"setting-content"}>
        <div className={"setting-common setting-content_left"}>
          <p className={"heading"}>Расчет ремонта</p>
          {props.setting.repairs.map((repair: any) => {
            return (
              <div key={repair.id} className={"wrapper-input"}>
                <label>
                  <input className={"setting-list"} type="radio" id={"name-box"} checked={repairs === repair.id}
                         onChange={() => repairsChangeInput(repair.id, repair.coefficient)}/>
                  {repair.title}
                </label>
              </div>
            )
          })}
        </div>
        <div className={"setting-common setting-content_right"}>
          <div>
            <p className={"heading"}>Тип дома</p>
            {props.setting.typeHouse.map((home: any, homeId: number) => {
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
              {props.setting.quantity.map((room: any, roomId: number) => {
                return (
                  <div key={roomId}
                       onClick={() => roomButton(room.id, room.price)}>
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
      <div className={"flat-container"}>
        <p className={"heading heading-flat"}>Площадь квартиры</p>
        <div className={"wrapper-flat"}>
          <input type="number" className={"flat-input"} value={flat} onChange={changeFlat}/>
          <div className={"flat-meter"}>м²</div>
        </div>
      </div>
      <div>
        <button onClick={resultBtn}>Рассчитать</button>
        <div>цена{props.setting.totalAmount}</div>
        <div>скидка{props.setting.totalDiscount}</div>
      </div>
    </div>

  )
};

const mapStateToProps = (state: RootState) => {
  return {
    setting: state.setting,
  }
};

const mapDispatchToProps = {
  repairsChange,
  homesChange,
  roomsButton,
  flatChange,
  totalAmountFunc,
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);