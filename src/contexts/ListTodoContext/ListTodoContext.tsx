import React from "react";
import { useReducer } from "react";
import { ReactNode } from "react";
import { createContext } from "react";
import ListTodoReducer, { ListTodoState } from "./ListTodoReducer";
interface PropsType {
  children: ReactNode;
}
export interface TodoItem {
  id: number;
  title: string;
  isEditting: boolean;
  isCompleted: boolean;
}
interface ContextDataDefault {
  todoState: ListTodoState;
  addListTodo: (item: TodoItem) => void;
  deleteItem: (item: TodoItem) => void;
  setEditingItem: (item: TodoItem) => void;
  editCompleted: (item: TodoItem) => void;
}
const stateDefault: ListTodoState = {
  listTodo: [
    {
      id: 1,
      title: "Học lập trình",
      isEditting: false,
      isCompleted: false,
    },
  ],
  itemEditting: {
    id: 1000008,
    title: "",
    isEditting: false,
    isCompleted: false,
  },
};
export const TodoContext = createContext({} as ContextDataDefault);
function ListTodoContext({ children }: PropsType) {
  const [todoState, dispatch] = useReducer(ListTodoReducer, stateDefault);
  const addListTodo = (item: TodoItem) =>
    dispatch({ type: "ADD_LIST", payload: item });
  const deleteItem = (item: TodoItem) =>
    dispatch({ type: "DELETE_ITEM", payload: item });
  const setEditingItem = (item: TodoItem) =>
    dispatch({ type: "EDIT_ITEM", payload: item });
  const editCompleted = (item: TodoItem) =>
    dispatch({ type: "EDIT_COMPLETED", payload: item });
  const dataContext = {
    addListTodo,
    deleteItem,
    todoState,
    setEditingItem,
    editCompleted,
  };

  return (
    <TodoContext.Provider value={dataContext}>{children}</TodoContext.Provider>
  );
}

export default ListTodoContext;
