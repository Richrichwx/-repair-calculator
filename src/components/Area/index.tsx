import React from 'react';
import 'antd/dist/antd.css';
import { Slider, Row, Col, InputNumber } from 'antd';

interface IProps {

  flatChange: HandlerDispatch;
  flat: number,
}

const Area = (props: IProps) => {

  const changeFlat = (value: any) => {
    props.flatChange(value);
  };

  return (
    <div>
      <p className={"heading heading-flat"}>Площадь квартиры</p>
      <div className={"flat-container"}>
        <div className={"wrapper-flat"}>
          <Row>
            <Col span={4}>
              <InputNumber
                min={10}
                max={200}
                style={{ marginRight: 16 }}
                value={props.flat}
                onChange={changeFlat}
                formatter={value => `${value} м²`}
              />
            </Col>
            <Col span={12}>
              <Slider
                min={10}
                max={200}
                onChange={changeFlat}
                value={props.flat}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
};


export default Area;