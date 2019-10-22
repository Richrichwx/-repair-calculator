import { always, compose, cond, equals, evolve, map, multiply, prop, T, both, gte, lte, negate } from "ramda";
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
  let resultAmount = cond([
    [both(gte(99), lte(10)), always(multiply(flat)(price.small))],
    [both(gte(10), lte(0)), always(false)],
    [both(gte(200), lte(100)), always(multiply(flat)(price.large))],
    [T, () => 50],
  ])(flat);
  return multiply(resultAmount)(coefficient);
};

export const commonDiscount = (total: any) => (discount: number) => {
  return negate(multiply(total)(discount));
};

export const periodSum = (totalAmount: any) => {
  let results = cond([
    [both(gte(100000), lte(50000)), always(14)],
    [both(gte(150000), lte(100000)), always(21)],
    [both(gte(250000), lte(150000)), always(28)],
    [both(gte(350000), lte(250000)), always(30)],
    [both(gte(450000), lte(350000)), always(45)],
    [T, () => 50],
  ])(totalAmount);
  return results
};