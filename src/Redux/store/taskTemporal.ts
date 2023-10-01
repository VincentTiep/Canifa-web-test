const initialState = "";

type TAction1 = { type: string; payload: string };

export default function appReducer(state = initialState, action: TAction1) {
  switch (action.type) {
    case "item/selectItem": {
      state = action.payload;
      return state;
    }
    case "item/searchItem": {
      state = action.payload;
      return state;
    }
    default:
      return state;
  }
}
