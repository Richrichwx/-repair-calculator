import React from 'react';
import { checkedCommon } from "../../store/setting/setting.сonveyor";


interface IProps  {
  repairsChange: HandlerDispatch;
  repairs: any[],
}

const Repairs = (props: IProps) => {

  const repairsChangeInput = (id: number, coefficient: any) => {
    const repairsData = checkedCommon(id)(props.repairs);
    props.repairsChange(repairsData, coefficient);
  };

  return (
    <div>
      <p className={"heading"}>Расчет ремонта</p>
      {props.repairs.map((repair: any) => {
        return (
          <div key={repair.id} className={"wrapper-input"}>
            <label>
              <input className={"setting-list"} type="radio" id={"name-box"} checked={repair.check === true}
                     onChange={() => repairsChangeInput(repair.id, repair.coefficient)}/>
              {repair.title}
            </label>
          </div>
        )
      })}
    </div>
  )
};

export default Repairs;