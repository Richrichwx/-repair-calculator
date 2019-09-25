export interface ISetting {
  repairs: IRepairs[],
  typeHouse: ITypeHouse[],
  quantity: IQuantity[]
}

export interface  IRepairs {
  id: number
  title: string
}

export interface  ITypeHouse {
  id: number
  title: string
}

export interface  IQuantity {
  id: number,
  title: string
}
