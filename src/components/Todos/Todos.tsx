import { Card, CardContent, CardHeader } from "@material-ui/core";
import React, { useContext } from "react";
import { TodoContext } from "../../contexts/ListTodoContext/ListTodoContext";
import FormAddTodo from "../FormAddTodo/FormAddTodo";
import TodoItemCpn from "../TodoItem/TodoItem";
function Todos() {
  const valueContext = useContext(TodoContext);
  const {
    todoState: { listTodo },
  } = valueContext;
  const renderListTodo = () => {
    let xhtml = null;
    if (listTodo.length > 0) {
      xhtml = listTodo.map((item) => <TodoItemCpn key={item.id} item={item} />);
    }
    return xhtml;
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "100px 0",
      }}
    >
      <Card style={{ width: 500 }}>
        <CardHeader title="My Todo" component="span"></CardHeader>
        <FormAddTodo />
        <CardContent>{renderListTodo()}</CardContent>
      </Card>
    </div>
  );
}

export default Todos;
