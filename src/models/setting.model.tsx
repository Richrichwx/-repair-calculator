export interface ISetting {
  repairs: ICommon[],
  typeHouse: ICommon[],
  quantity: ICommon[],
}

interface ICommons {
  id: number,
  title: string,
  check: boolean
}

type ICommon = ICommons[]