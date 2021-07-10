import {
  TextField,
  Card,
  CardContent,
  IconButton,
  Typography,
  makeStyles,
  Box,
  Button,
} from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";
import React, { useContext, useState } from "react";
import {
  TodoContext,
  TodoItem,
} from "../../contexts/ListTodoContext/ListTodoContext";
const useStyle = makeStyles(() => ({
  CardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardItem: {
    padding: "0 10px",
    marginTop: "10px",
  },
  textEdit: {
    width: "63%",
  },
  butOk: {
    marginLeft: 30,
  },
}));

interface ItemProps {
  item: TodoItem;
}

function TodoItemCpn({ item }: ItemProps) {
  const classes = useStyle();
  const [editText, setEditText] = useState(item.title);
  const { title, id } = item;
  const valueContext = useContext(TodoContext);
  const {
    deleteItem,
    editCompleted,
    todoState: {
      itemEditting: { id: idEditting },
    },
    setEditingItem,
  } = valueContext;
  console.log(idEditting);

  const clickDeleteItem = () => {
    deleteItem(item);
  };
  const handleEditItem = () => {
    setEditingItem(item);
  };
  const onChangeEditText = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setEditText(e.target.value);
  };
  const handleClickEditText = () => {
    editCompleted({
      ...item,
      title: editText,
    });
    setEditingItem({
      ...item,
      id: item.id + Math.random() * 1000000,
    });
  };
  return (
    <Card className={classes.cardItem}>
      <CardContent className={classes.CardContent}>
        {id === idEditting ? (
          <TextField
            className={classes.textEdit}
            value={editText}
            onChange={onChangeEditText}
          />
        ) : (
          <Typography variant="subtitle1">{title}</Typography>
        )}
        {id === idEditting ? (
          <Button
            className={classes.butOk}
            onClick={() => handleClickEditText()}
            variant="contained"
            size="small"
            color="primary"
          >
            Xong
          </Button>
        ) : (
          <Box>
            <IconButton onClick={() => clickDeleteItem()} color="secondary">
              <DeleteOutline />
            </IconButton>
            <IconButton onClick={() => handleEditItem()} color="secondary">
              <EditIcon />
            </IconButton>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default TodoItemCpn;
