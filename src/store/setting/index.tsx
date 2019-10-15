import { ISettings } from "../../models/setting.model";

const initialState: ISettings = {
  repairs: [
    {
      id: 1,
      title: 'Косметический',
      check: false,
      coefficient: 1,
    },
    {
      id: 2,
      title: 'Капитальный',
      check: false,
      coefficient: 1.67,
    },
    {
      id: 3,
      title: 'Под ключ',
      check: true,
      coefficient: 1.84,
    },
    {
      id: 4,
      title: 'Дизайнерский',
      check: false,
      coefficient: 2.4,
    },
  ],
  typeHouse: [
    {
      id: 1,
      title: 'Новостройка',
      check: false,
    },
    {
      id: 2,
      title: 'Вторичка',
      check: false,
    },
  ],
  quantity: [
    {
      id: 1,
      title: '1',
      check: false,
      price: {
        small: 3000,
        large: 2500,
      },
    },
    {
      id: 2,
      title: '2',
      check: false,
      price: {
        small: 2950,
        large: 2450,
      },
    },
    {
      id: 3,
      title: '3',
      check: false,
      price: {
        small: 2900,
        large: 2400,
      },
    },
    {
      id: 4,
      title: '4',
      check: false,
      price: {
        small: 2850,
        large: 2350,
      },
    },
    {
      id: 5,
      title: '5',
      check: true,
      price: {
        small: 2800,
        large: 2300,
      },
    },
  ],
  flat: 120,
  coefficientActive: 1.84,
  price: {
    small: 2800,
    large: 2300,
  },
  totalAmount: 507840,
  discount: 0.11,
  totalDiscount: -55862.4,
  periodDefault: 50
};

export default function (state: ISettings = initialState, action: any) {
  switch (action.type) {
    case "REPAIRS_CHANGE": {
      return {
        ...state,
        repairs: action.dataRepairs,
        coefficientActive: action.coefficient,
      }
    }
    case "HOMES_CHANGE": {
      return {
        ...state,
        typeHouse: action.dataHomes,
      }
    }
    case "ROOMS_BUTTON": {
      return {
        ...state,
        quantity: action.dataRooms,
        price: action.price,
      }
    }
    case "FLAT_CHANGE": {
      return {
        ...state,
        flat: action.flat,
      }
    }
    case "TOTAL_AMOUNT_FUNC": {
      return {
        ...state,
        totalAmount: action.total,
      }
    }
    case "TOTAL_DISCOUNT_FUNC": {
      return {
        ...state,
        totalDiscount: action.discount,
      }
    }
    case "PERIOD_RESULT": {
      return {
        ...state,
        periodDefault: action.period,
      }
    }
    default:
      return state
  }
}