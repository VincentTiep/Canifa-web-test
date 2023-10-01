import { TItemProp } from "../../types";

export const addItemAction = (payload: TItemProp) => ({
  type: "item/addItem",
  payload: payload,
});

export const deleteItemAction = (payload: TItemProp) => ({
  type: "item/deleteItem",
  payload: payload,
});

export const addQtyAction = (payload: TItemProp) => ({
  type: "item/addQtyItem",
  payload: payload,
});

export const subQtyAction = (payload: TItemProp) => ({
  type: "item/subQtyItem",
  payload: payload,
});
export const clickDeleteAction = (payload: TItemProp) => ({
  type: "item/clickDeleteItem",
  payload: payload,
});
export const cancelDeleteAction = (payload: TItemProp) => ({
  type: "item/cancelDeleteItem",
  payload: payload,
});

export const selectItemAction = (payload: TItemProp) => ({
  type: "item/selectItem",
  payload: payload,
});

export const searchItemAction = (payload: string) => ({
  type: "item/searchItem",
  payload: payload,
});
