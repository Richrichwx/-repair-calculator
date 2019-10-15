export const repairsChange = (dataRepairs: any,coefficient: number) => ({
  type: 'REPAIRS_CHANGE',
  dataRepairs,
  coefficient
});

export const homesChange = (dataHomes: any) => ({
  type: 'HOMES_CHANGE',
  dataHomes
});

export const roomsButton = (dataRooms: any, price: any) => ({
  type: 'ROOMS_BUTTON',
  dataRooms,
  price,
});

export const flatChange = (flat: number) => ({
  type: 'FLAT_CHANGE',
  flat
});

export const totalAmountFunc = (total: number) => ({
  type: 'TOTAL_AMOUNT_FUNC',
  total
});

export const totalDiscountFunc = ( discount: number) => ({
  type: 'TOTAL_DISCOUNT_FUNC',
  discount
});

export const periodResult = ( period: number) => ({
  type: 'PERIOD_RESULT',
  period
});


