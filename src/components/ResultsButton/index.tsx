import React from 'react';
import { commonDiscount, commonResultFunc, periodSum } from "../../store/setting/setting.сonveyor";
import { ISettings } from "../../models/setting.model";

interface IProps  {
  totalAmountFunc: HandlerDispatch;
  totalDiscountFunc: HandlerDispatch,
  periodResult: HandlerDispatch;
  setting: ISettings
}

const ResultsButton = (props: IProps) => {

  const resultBtn = () => {
    const totalPayload = commonResultFunc(props.setting.flat)(props.setting.price)(props.setting.coefficientActive);
    props.totalAmountFunc(totalPayload);
    const discountPayload = commonDiscount(totalPayload)(props.setting.discount);
    props.totalDiscountFunc(discountPayload);
    const periodPayload = periodSum(totalPayload);
    props.periodResult(periodPayload);
  };

  return (
    <div>
      <button className={"sendingCommon calculateButton"} onClick={resultBtn}>Рассчитать</button>
    </div>
  )
};

export default ResultsButton;