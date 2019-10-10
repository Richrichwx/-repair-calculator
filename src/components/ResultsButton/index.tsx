import React from 'react';
import { commonDiscount, commonResultFunc } from "../../store/setting/setting.сonveyor";

interface IProps  {
  totalAmountFunc: HandlerDispatch;
  totalDiscountFunc: HandlerDispatch,
  flat: number,
  price: any,
  discount: number,
  coefficientActive: number
}
const ResultsButton = (props: IProps) => {

  const resultBtn = () => {
    const totalPayload = commonResultFunc(props.flat)(props.price)(props.coefficientActive);
    props.totalAmountFunc(totalPayload);
    const discountPayload = commonDiscount(totalPayload)(props.discount);
    props.totalDiscountFunc(discountPayload);
  };

  return (
    <div>
      <button onClick={resultBtn}>Рассчитать</button>
    </div>
  )
};

export default ResultsButton;