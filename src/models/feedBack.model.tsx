export interface IFeedBack {
  form: IFeedBacks[],
}

interface IFeedBacks {
  username: string,
  email: string,
  phone: number[]
}