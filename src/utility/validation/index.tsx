export const required = (value: any) => value ? undefined : 'Обязательное поле';

export const maxLength = (max: any)=> (value:any) =>
  value && value.length > max ? `Должно быть ${max} символов или меньше` : undefined;

export const phoneNumber = (value: any) => {
  if(value && !/^(0|[1-9][0-9]{9})$/i.test(value)) {
    return 'Неверный номер телефона, 10 цифр'
  }
  return  undefined
};

export const email = (value:any) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Неверный адрес почты' : undefined;