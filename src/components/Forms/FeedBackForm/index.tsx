import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { email, maxLength, phoneNumber, required } from '../../../utility/validation';
import { renderField } from "../FormControls";

const FeedBackForm = (props: any) => {
  const maxLength15 = maxLength(15);
  const { handleSubmit } = props;
  return (
    <div className={"feeBack-form"}>
      <form className={"form"} onSubmit={handleSubmit}>
        <Field name="username" type="text"
               component={renderField}
               label={"Введите ваше имя"}
               validate={[required, maxLength15]}
        />
        <Field name="email" type="email"
               component={renderField}
               label={"Введите e-mail"}
               validate={[required, email]}
        />
        <Field
          name="phone"
          type="number"
          component={renderField}
          label={"Введите номер телефона"}
          validate={[required, phoneNumber]}
        />
        <button className={"sending"} type="submit">Отправить</button>
      </form>
    </div>
  )
};


export default reduxForm({
  form: 'fieldValidationFeedBack',
})(FeedBackForm);