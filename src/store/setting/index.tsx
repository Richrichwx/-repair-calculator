import { ISetting } from "../../models/setting.model";
import { compose, cond, equals, always, evolve, not, T, prop, map } from "ramda";

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
      check: false,
    },
    {
      id: 1,
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
    { id: 4,
      title: '4',
      check: false,
    },
    { id: 5,
      title: '5',
      check: false,
    },
  ],
};



export default function (state: ISetting = initialState, action: any) {
  const rest = (item: any) => {
    item.check = false;
    return item;
  };

  const transformRepairs = (id: any) => (item: any) =>
    compose<any, number, any>(
      cond([
        [equals(id), always(evolve({ check: not }, item))],
        [T, () => rest(item)],
      ]),
      prop('id') as any,
    )(item);
  const checkedRepair = (actionId: any)  =>
    compose(map(transformRepairs(actionId)));

  const payload = checkedRepair(action.id)(state.repairs);
  let a = state.repairs.map((item: any) => {
      if (item.id === action.id) {
        item.check = true
      } else {
        item.check = false
      }
    });
  switch (action.type) {
    case "REPAIRS_CHANGE": {
      return {
        ...state,
        ...payload,
      }
    }
    default:
      return state
  }
}