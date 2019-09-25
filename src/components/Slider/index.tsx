import React from 'react';

const Slider = () => {
  return (
    <div className={"slider"}>
      <p className={"heading headingFlat"}>Площадь квартиры</p>
      <div className={"wrapperSlider"}>
        <div className={"centimeters"}>0м</div>
        <input type="range" className={"sliderInput"}  min="0" max="100" step="1" value="0"/>
      </div>
    </div>
  )
};

export default  Slider;