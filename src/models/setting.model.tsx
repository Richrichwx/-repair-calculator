export interface ISetting {
  repairs: ISettings[],
  typeHouse: ISettings[],
  quantity: ISettings[]
}

interface ISettings {
  id: number,
  title: string,
  check: boolean
}

