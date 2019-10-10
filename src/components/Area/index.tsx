import React  from 'react';

interface IProps  {
  flatChange: HandlerDispatch;
  flat: number,
}

const Area = (props: IProps) => {

  const changeFlat = (e: any) => {
    props.flatChange(e.currentTarget.value);
  };

  return (
    <div>
      <p className={"heading heading-flat"}>Площадь квартиры</p>
      <div className={"flat-container"}>
        <div className={"wrapper-flat"}>
          <div className={"flat-meter"}>{props.flat}м²</div>
          <input type="range" className={"range"} min={10} max={150}
                  value={props.flat} step="1" onChange={changeFlat}/>
        </div>
      </div>
    </div>
  )
};


export default Area;