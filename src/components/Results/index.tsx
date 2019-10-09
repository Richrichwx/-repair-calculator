import React from 'react';

interface IProps  {
  totalAmount: number,
  totalDiscount: number
}

const Results = (props: IProps) => {
  return (
    <div>
      <div>цена{props.totalAmount}</div>
      <div>скидка{props.totalDiscount}</div>
    </div>
  )
};

export default Results;