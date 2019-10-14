import React from 'react';
import { ISettings } from "../../models/setting.model";

interface IProps {
  settingResult: ISettings
}

const Results = (props: IProps) => {
  const rub = 'рубл.';
  return (
    <div className={"resultsInfo"}>
      <div className={"info"}>
        <div>Цена:<span>
          {props.settingResult.totalAmount} {rub}
        </span></div>
      </div>
      <div className={"info"}>
        <div>Скидка:<span>
          {props.settingResult.totalDiscount} {rub}
        </span>
        </div>
      </div>
    </div>
  )
};

export default Results;