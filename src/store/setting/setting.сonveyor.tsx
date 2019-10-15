import { always, compose, cond, equals, evolve, map, multiply, prop, T} from "ramda";
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

export const checkedCommon = (actionId: any) =>
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

export const periodSum = (totalAmount: any) => {
  if(totalAmount > 50000 && totalAmount <=100000) {
    return 14
  }
  else if(totalAmount >= 100000 && totalAmount <=150000) {
    return 21
  }
  else if(totalAmount >= 150000 && totalAmount <=200000) {
    return 28
  }
  else if(totalAmount >= 200000 && totalAmount <= 250000) {
    return 28
  }
  else if(totalAmount >= 250000 && totalAmount <=350000) {
    return 30
  }
  else if(totalAmount >= 350000 && totalAmount <=450000) {
    return 45
  } else {
    return 50
  }
};



