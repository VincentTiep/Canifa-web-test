import { combineReducers } from "redux";

import listTask from "./listTask";
import taskTemporal from "./taskTemporal";
import selectItem from "./selectItem";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  listTask: listTask,
  taskTemporal: taskTemporal,
  selectItem: selectItem,
});

export default rootReducer;
