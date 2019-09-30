import { always, compose, cond, equals, evolve, map, not, prop, T } from "ramda";

interface Repair {
  id: number,
  title: string,
  check: boolean
}

const rest = (item: Repair): Repair=> {
  item.check = false;
  return item;
};
type TransformRepairs = (id: number) => (item: Repair) => Repair;
const transformRepairs: TransformRepairs = (id: any) => (item: Repair): Repair =>
  compose<Repair, number, Repair>(
    cond([
      [equals(id), always(evolve({ check: not }, item))],
      [T, () => rest(item)],
    ]),
    prop('id') as any,
  )(item);

type CheckedRepair = (actionId: number) => any;
export const checkedRepair: CheckedRepair = (actionId: number) =>
  compose(map(transformRepairs(actionId)));

