import { ISetting } from "../../models/setting.model";

const initialState: ISetting = {
  repairs: [
    {
      id: 1,
      title: 'Косметический',
    },
    {
      id: 2,
      title: 'Капитальный',
    },
    {
      id: 3,
      title: 'Под ключ',
    },
    {
      id: 4,
      title: 'Дизайнерский',
    },
  ],
  typeHouse: [
    {
      id: 1,
      title: 'Новостройка',
    },
    {
      id: 1,
      title: 'Вторичка',
    },
  ],

  quantity: [
    {
      id: 1,
      title: '1',
    },
    { id: 2, title: '2' },
    {
      id: 3,
      title: '3',
    },
    { id: 4, title: '4' },
    { id: 5, title: '5' },
  ],
};

export default function (state: ISetting = initialState, action: any) {
  switch (action.type) {
    case "EDIT_REPAIRS": {
      return {
        ...state,
      }
    }
    default:
      return state
  }
}