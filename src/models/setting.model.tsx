export interface ISettings {
  repairs: ISetting[],
  typeHouse: ISetting[],
  quantity: ISetting[],
  sliderValue: number
}

export interface ISetting {
  id: number,
  title: string,
  check: boolean
}

