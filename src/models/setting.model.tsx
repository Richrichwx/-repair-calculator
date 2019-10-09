export interface ISettings {
  repairs: ISetting[],
  typeHouse: ISetting[],
  quantity: ISetting[],
  flat: any,
  coefficientActive: number,
  price: any,
  totalAmount: number,
  discount: number,
  totalDiscount: number}

export interface ISetting {
  id: number,
  title: string,
  check: boolean,
  coefficient?: number,
  priceSmall?: number,
  priceLarge?: number,
  price?: {
    small: number,
    large: number
  },
}
