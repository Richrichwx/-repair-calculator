import React, { useState } from 'react';
import { checkedCommon } from "../../store/setting/setting.convector";

interface IProps  {
  repairsChange: HandlerDispatch;
  repairs: any[],
}

const Repairs = (props: IProps) => {
  const [repairs, setRepairs] = useState(3);

  const repairsChangeInput = (id: number, coefficient: any) => {
    setRepairs(id);
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
              <input className={"setting-list"} type="radio" id={"name-box"} checked={repairs === repair.id}
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