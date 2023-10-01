import rootReducer from "../Redux/store";

export type TColors = {
  code: string;
  image: string;
  isCheck: boolean;
};

export interface TItemProp {
  category: string;
  code: string;
  colors: Array<TColors>;
  isShowDelete: boolean;
  isQuantity: number;
  name: string;
  price: number;
}

export const THideModalProp = (agu: boolean) => {
  return agu;
};

export type IRootState = ReturnType<typeof rootReducer>;

export type TAction = { type: string; payload: TItemProp };
