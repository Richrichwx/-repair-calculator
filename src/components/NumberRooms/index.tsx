import React  from 'react';
import { checkedCommon } from "../../store/setting/setting.сonveyor";

interface IProps  {
  roomsButton: HandlerDispatch;
  quantity: any[],
}

const NumberRooms = (props: IProps) => {

  const roomButton = (id: number, price: any) => {
    const quantityData = checkedCommon(id)(props.quantity);
    props.roomsButton(quantityData, price);
  };

  return (
    <div>
      <p className={"heading"}>Колличество комнат</p>
      <div className={"room-items"}>
        {props.quantity.map((room: any) => {
          return (
            <div key={room.id}
                 onClick={() => roomButton(room.id, room.price)}>
              {room.check === true ? (
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
  )
};


export default NumberRooms;