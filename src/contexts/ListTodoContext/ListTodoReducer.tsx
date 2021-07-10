import { TodoItem } from "./ListTodoContext";

export interface ListTodoState {
  listTodo: TodoItem[];
  itemEditting: TodoItem;
}

type TypeAction =
  | { type: "ADD_LIST"; payload: TodoItem }
  | { type: "DELETE_ITEM"; payload: TodoItem }
  | { type: "EDIT_ITEM"; payload: TodoItem }
  | { type: "EDIT_COMPLETED"; payload: TodoItem };
function ListTodoReducer(
  state: ListTodoState,
  action: TypeAction
): ListTodoState {
  switch (action.type) {
    case "ADD_LIST": {
      const { listTodo } = state;
      const newItem = action.payload;
      const newList = [newItem].concat(listTodo);
      return {
        ...state,
        listTodo: newList,
      };
    }
    case "DELETE_ITEM": {
      const deleteItem = action.payload;
      const newList = state.listTodo.filter(
        (item) => item.id !== deleteItem.id
      );
      return {
        ...state,
        listTodo: newList,
      };
    }
    case "EDIT_ITEM": {
      const editItem = action.payload;
      const { itemEditting } = state;
      return {
        ...state,
        itemEditting: { ...editItem },
      };
    }
    case "EDIT_COMPLETED": {
      const itemEdit = action.payload;
      const { listTodo } = state;
      const index = listTodo.findIndex((item) => item.id === itemEdit.id);
      const newList = [
        ...listTodo.slice(0, index),
        { ...itemEdit },
        ...listTodo.slice(index + 1),
      ];
      return {
        ...state,
        listTodo: newList,
      };
    }
    default:
      return state;
  }
}

export default ListTodoReducer;
