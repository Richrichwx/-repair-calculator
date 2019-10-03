import { ISettings } from "../../models/setting.model";
import { checkedHomes, checkedRepair, checkedRooms } from "./setting.convector";

const initialState: ISettings = {
  repairs: [
    {
      id: 1,
      title: 'Косметический',
      check: false,
      coefficient: 1
    },
    {
      id: 2,
      title: 'Капитальный',
      check: false,
      coefficient: 1.67
    },
    {
      id: 3,
      title: 'Под ключ',
      check: false,
      coefficient: 1.84
    },
    {
      id: 4,
      title: 'Дизайнерский',
      check: false,
      coefficient: 2.4
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
      priceSmall: 3000,
      priceLarge: 2500
    },
    {
      id: 2,
      title: '2',
      check: false,
      priceSmall: 2950,
      priceLarge: 2450
    },
    {
      id: 3,
      title: '3',
      check: false,
      priceSmall: 2900,
      priceLarge: 2400
    },
    {
      id: 4,
      title: '4',
      check: false,
      priceSmall: 2850,
      priceLarge: 2350
    },
    {
      id: 5,
      title: '5',
      check: false,
      priceSmall: 2800,
      priceLarge: 2300
    },
  ],
  flat: 0,
};

export default function (state: ISettings = initialState, action: any) {

  const repairsData = checkedRepair(action.id)(state.repairs);
  const homesData = checkedHomes(action.id)(state.typeHouse);
  const quantityData = checkedRooms(action.id)(state.quantity);

  switch (action.type) {
    case "REPAIRS_CHANGE": {
      return {
        ...state,
        repairs: repairsData
      }
    }
    case "HOMES_CHANGE": {
      return {
        ...state,
        typeHouse: homesData
      }
    }
    case "ROOMS_BUTTON": {
      return {
        ...state,
        quantity: quantityData,
      }
    }
    case "FLAT_CHANGE": {
      return {
        ...state,
        flat: action.flat
      }
    }
    default:
      return state
  }
}