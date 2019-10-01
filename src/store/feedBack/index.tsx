import { IFeedBack } from "../../models/feedBack.model";

const initialState: IFeedBack = {
  form: [
    {
      username: '',
      email: '',
      phone: [],
    },
  ],
};

export default function (state: IFeedBack = initialState, action: any) {
  switch (action.type) {
    case "NAME_FORM": {
      return {
        ...state,
        form: action.data,
      }
    }
    default:
      return state
  }
}