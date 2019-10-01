import { ISettings } from "../../models/setting.model";
import { checkedHomes, checkedRepair, checkedRooms } from "./setting.convector";

const initialState: ISettings = {
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
    },
    {
      id: 2,
      title: '2',
      check: false,
    },
    {
      id: 3,
      title: '3',
      check: false,
    },
    {
      id: 4,
      title: '4',
      check: false,
    },
    {
      id: 5,
      title: '5',
      check: false,
    },
  ],
  sliderValue: 0
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
        quantity: quantityData
      }
    }
    case "SLIDER_CHANGE": {
      return {
        ...state,
        sliderValue: action.value
      }
    }
    default:
      return state
  }
}