export interface ISettings {
  repairs: ISetting[],
  typeHouse: ISetting[],
  quantity: ISetting[],
  flat: number,
}

export interface ISetting {
  id: number,
  title: string,
  check: boolean,
  coefficient?: number,
  priceSmall?: number,
  priceLarge?: number,
}

