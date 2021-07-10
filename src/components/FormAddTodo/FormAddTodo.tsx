import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { TodoContext } from "../../contexts/ListTodoContext/ListTodoContext";

const useStyle = makeStyles(() => ({
  wrapForm: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },

  textField: {
    width: "52%",
  },
}));

function FormAddTodo() {
  const valueContext = useContext(TodoContext);
  const { addListTodo } = valueContext;
  const classes = useStyle();
  const [text, setText] = useState("");
  const onChangeInput = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    if (text && text.trim()) {
      addListTodo({
        id: Math.random() * 100000000,
        title: text,
        isCompleted: false,
        isEditting: false,
      });
    }
    setText("");
  };
  return (
    <div className={classes.wrapForm}>
      <TextField
        value={text}
        onChange={onChangeInput}
        className={classes.textField}
        placeholder="Thêm công việc"
      />
      <Button
        onClick={() => handleClick()}
        variant="contained"
        color="primary"
        size="small"
      >
        Add
      </Button>
    </div>
  );
}

export default FormAddTodo;
