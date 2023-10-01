import { TItemProp } from "../../types";

const initialState: TItemProp = {
  category: "",
  code: "",
  colors: [],
  isShowDelete: false,
  isQuantity: 0,
  name: "",
  price: 0,
};

type TAction1 = { type: string; payload: TItemProp };

export default function appReducer(state = initialState, action: TAction1) {
  switch (action.type) {
    case "item/selectItem": {
      state = action.payload;
      return state;
    }
    default:
      return state;
  }
}
