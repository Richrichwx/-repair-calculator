import React from 'react';

const Form = () => {
  return (
    <div className={"form"}>
      <div className={"formItems"}>
        <div>
          <input className={"formCommon formField"} type="text" placeholder={"Введите ваше имя"}/>
        </div>
        <div>
          <input className={"formCommon formField"} type="text" placeholder={"Введите номер телефона"}/>
        </div>
        <div className={"formCommon sending"}>
          <span>
            Отправить
          </span></div>
      </div>
    </div>
  )
};

export default Form;