export interface ISettings {
  repairs: ISetting[],
  typeHouse: ISetting[],
  quantity: ISetting[]
}

export interface ISetting {
  id: number,
  title: string,
  check: boolean
}

