import { ISetting } from "../../models/setting.model";

const initialState: ISetting = {
  repairs: [
    {
      id: 1,
      title: 'Косметический',
      check: false,
    },
    {
      id: 2,
      title: 'Капитальный',
      check: false,
    },
    {
      id: 3,
      title: 'Под ключ',
      check: false,
    },
    {
      id: 4,
      title: 'Дизайнерский',
      check: false,
    },
  ],
  typeHouse: [
    {
      id: 1,
      title: 'Новостройка',
      check: false
    },
    {
      id: 1,
      title: 'Вторичка',
      check: false
    },
  ],

  quantity: [
    {
      id: 1,
      title: '1',
      check: false
    },
    {
      id: 2,
      title: '2',
      check: false
    },
    {
      id: 3,
      title: '3',
      check: false
    },
    { id: 4,
      title: '4',
      check: false
    },
    { id: 5,
      title: '5',
      check: false
    },
  ],
};

export default function (state: ISetting = initialState, action: any) {
  switch (action.type) {
    case "REPAIRS_CHANGE": {
      return {
        ...state,
        ...state.repairs.map((item: any) => {
          if (item.id === action.id) {
            item.check = true
          } else {
            item.check = false
          }
        }),
      }
    }
    default:
      return state
  }
}