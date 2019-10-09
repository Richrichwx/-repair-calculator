import React, { useState } from 'react';

interface IProps  {
  flatChange: HandlerDispatch;
}

const Area = (props: IProps) => {
  const [flat, setFlat] = useState(0);

  const changeFlat = (e: any) => {
    setFlat(e.currentTarget.value);
    props.flatChange(e.currentTarget.value);
  };

  return (
    <div>
      <div className={"flat-container"}>
        <p className={"heading heading-flat"}>Площадь квартиры</p>
        <div className={"wrapper-flat"}>
          <input type="number" className={"flat-input"} value={flat} onChange={changeFlat}/>
          <div className={"flat-meter"}>м²</div>
        </div>
      </div>
    </div>
  )
};


export default Area;