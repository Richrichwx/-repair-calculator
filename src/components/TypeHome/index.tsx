import React, { useState } from 'react';
import { checkedCommon } from "../../store/setting/setting.convector";

interface IProps  {
  homesChange: HandlerDispatch;
  typeHouse: any[],
}
const TypeHome = (props: IProps) => {
  const [homes, setHomes] = useState(0);

  const homeChangeInput = (id: number) => {
    setHomes(id);
    const homesData = checkedCommon(id)(props.typeHouse);
    props.homesChange(homesData)
  };
  return (
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
  )
};

export default TypeHome;