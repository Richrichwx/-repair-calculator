import { always, compose, cond, equals, evolve, map, multiply, prop, T } from "ramda";
import { ISetting } from "../../models/setting.model";

type Repair = ISetting;

type TransformRepairs = (id: number) => (item: Repair) => Repair;
const transformRepairs: TransformRepairs = (id: any) => (item: Repair) =>
  compose<any, number, any>(
    cond([
      [equals(id), always(evolve(
        {
          check: always(true),
        },
        item,
      ))],
      [T, () => evolve({ check: always(false) }, item)],
    ]),
    prop('id') as any,
  )(item);


export const checkedRepair = (actionId: any) =>
  compose(map(transformRepairs(actionId)));


export const checkedHomes = (actionId: any) =>
  compose(map(transformRepairs(actionId)));

export const checkedRooms = (actionId: any) =>
  compose(map(transformRepairs(actionId)));


export const commonResultFunc = (flat: number) => (price: any) => (coefficient: number) => {
  if (flat >= 10 && flat <= 99) {
    const result = multiply(flat)(price.small);
    return result * (coefficient);
  }
  else if (flat < 10) {
    return false
  }
  else {
    const result = multiply(flat)(price.large);
    return result * (coefficient)
  }
};

export const commonDiscount = (total: any) => (discount: number) => {
  return total * discount
};

