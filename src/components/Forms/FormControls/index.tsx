import React from 'react';

export const renderField = ({ input, label, type, meta: { touched, error, warning } }: any) => {
  const hasError = touched && error;
  return (
    <>
      {hasError ? (
        <>
          <input className={"form-field"} type="text" {...input} placeholder={label}/>
          <div className={"form-errors"}>
              <span className={"errors"}>
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
              </span>
          </div>
        </>
      ) : (
        <>
          <input className={"form-field"} type="text" {...input} placeholder={label}/>
        </>
      )}
    </>
  )
};