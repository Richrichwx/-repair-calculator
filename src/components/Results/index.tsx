import React from 'react';
import { ISettings } from "../../models/setting.model";

interface IProps {
  settingResult: ISettings
}

const Results = (props: IProps) => {
  const rub = 'рубл.';
  const day = 'дней';
  return (
    <div className={"resultsInfo"}>
      <div className={"info"}>
        <p>Цена:</p>
        <div className={"infoText"}>
          {props.settingResult.totalAmount}
          <span>{rub}</span>
        </div>
      </div>
      <div className={"info"}>
        <p>Скидка:</p>
        <div className={"infoText"}>
          -{props.settingResult.totalDiscount}
          <span>{rub}</span>
        </div>
      </div>
      <div className={"info"}>
        <p>Срок:</p>
        <div className={"infoText"}>
          {props.settingResult.periodDefault}
          <span>{day}</span>
        </div>
      </div>
    </div>
  )
};

export default Results;