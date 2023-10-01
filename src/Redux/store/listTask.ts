import { TAction, TItemProp } from "../../types";

const initialState: Array<TItemProp> = [];

// Use the initialState as a default value
export default function appReducer(state = initialState, action: TAction) {
  switch (action.type) {
    //Add item to cart
    case "item/addItem": {
      const cloneState = JSON.parse(JSON.stringify(state));
      const item = JSON.stringify(action.payload);
      const stringCloneStateArr = cloneState.map((x: string) =>
        JSON.stringify(x)
      );

      stringCloneStateArr.includes(item)
        ? (state = stringCloneStateArr.map((x: string) =>
            x === item
              ? { ...JSON.parse(x), isQuantity: JSON.parse(x).isQuantity + 1 }
              : JSON.parse(x)
          ))
        : (state = [...stringCloneStateArr, item].map((x) => JSON.parse(x)));

      return state;
    }

    //Option delete Cart
    case "item/deleteItem": {
      const cloneState = JSON.parse(JSON.stringify(state));
      const item = JSON.stringify(action.payload);
      const stringCloneStateArr = cloneState.map((x: string) =>
        JSON.stringify(x)
      );

      state = stringCloneStateArr
        .filter((x: string) => x !== item)
        .map((x: string) => JSON.parse(x));
      return state;
    }

    //Delete item in Cart
    case "item/clickDeleteItem": {
      const cloneState = JSON.parse(JSON.stringify(state));
      const item = JSON.stringify(action.payload);
      const stringCloneStateArr = cloneState.map((x: string) =>
        JSON.stringify(x)
      );

      state = stringCloneStateArr.map((x: string) =>
        x === item
          ? {
              ...JSON.parse(x),
              isShowDelete: true,
            }
          : JSON.parse(x)
      );
      return state;
    }

    //Cancel delete item
    case "item/cancelDeleteItem": {
      const cloneState = JSON.parse(JSON.stringify(state));

      const item = JSON.stringify(action.payload);
      const stringCloneStateArr = cloneState.map((x: string) =>
        JSON.stringify(x)
      );

      state = stringCloneStateArr.map((x: string) =>
        x === item
          ? {
              ...JSON.parse(x),
              isShowDelete: false,
            }
          : JSON.parse(x)
      );
      return state;
    }

    //Add quantity for item
    case "item/addQtyItem": {
      const cloneState = JSON.parse(JSON.stringify(state));

      const item = JSON.stringify(action.payload);
      const stringCloneStateArr = cloneState.map((x: string) =>
        JSON.stringify(x)
      );

      state = stringCloneStateArr.map((x: string) =>
        x === item
          ? { ...JSON.parse(x), isQuantity: JSON.parse(x).isQuantity + 1 }
          : JSON.parse(x)
      );

      return state;
    }

    //Sub quantity for item
    case "item/subQtyItem": {
      const cloneState = JSON.parse(JSON.stringify(state));
      const item = JSON.stringify(action.payload);
      const stringCloneStateArr = cloneState.map((x: string) =>
        JSON.stringify(x)
      );

      state = stringCloneStateArr.map((x: string) =>
        x === item
          ? { ...JSON.parse(x), isQuantity: JSON.parse(x).isQuantity - 1 }
          : JSON.parse(x)
      );

      return state;
    }

    //Select item

    default:
      return state;
  }
}
