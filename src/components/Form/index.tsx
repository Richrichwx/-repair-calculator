import React from 'react';

const Form = () => {
  return (
    <div className={"form"}>
      <div className={"form-items"}>
        <div>
          <input className={"form-common form-field"} type="text" placeholder={"Введите ваше имя"}/>
        </div>
        <div>
          <input className={"form-common form-field"} type="text" placeholder={"Введите номер телефона"}/>
        </div>
        <div className={"form-common sending"}>
          <span>
            Отправить
          </span></div>
      </div>
    </div>
  )
};

export default Form;