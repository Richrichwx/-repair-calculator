import React from 'react';
import { commonDiscount, commonResultFunc } from "../../store/setting/setting.convector";

interface IProps  {
  totalAmountFunc: HandlerDispatch;
  flat: number,
  price: any,
  discount: number,
  coefficientActive: number
}
const ResultsButton = (props: IProps) => {

  const resultBtn = () => {
    const totalPayload = commonResultFunc(props.flat)(props.price)(props.coefficientActive);
    const discountPayload = commonDiscount(totalPayload)(props.discount);
    props.totalAmountFunc(totalPayload, discountPayload);
  };

  return (
    <div>
      <button onClick={resultBtn}>Рассчитать</button>
    </div>
  )
};

export default ResultsButton;