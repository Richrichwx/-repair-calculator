import React, { useState } from 'react';
import { Slider,Form, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { FormComponentProps } from 'antd/lib/form';
import { connect } from "react-redux";

interface IProps extends FormComponentProps {
}

const SliderArea = () => {
  const [value,setValue] = useState(300);

const changePrice = (value: any) => {
  setValue(value)
  };
  return (
    <div>
      <div className={"slider"}>
        <p className={"heading heading-flat"}>Площадь квартиры</p>
        <div className={"wrapper-slider"}>
          <div className={"slider-value"}>{value}</div>
          <Row>
            <Col span={12}>
              <Slider
                min={1}
                max={1000}
                onChange={changePrice}
                defaultValue={value}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
};

export default connect(null)(
  Form.create<IProps>()(SliderArea)
);