 type Nullable<T = any> = T | null;

type HandlerFunction<T = any, R = void> = (arg?: T, ...args: any[]) => R;

type HandlerDispatch<T = any> = HandlerFunction<T, Action>;

interface Action<T = any> {
  type: T;
}