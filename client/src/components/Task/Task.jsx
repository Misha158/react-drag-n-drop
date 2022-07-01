import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  Container,
  IconCancel,
  WrapperIconDelete,
  WrapperTask,
} from "./styled";
import { icons } from "../icons";
import axios from "axios";
import { BASE_URL } from "../../API/const";

export const Task = ({ task, index, data, setData, column }) => {
  async function onDelete() {
    const newData = { ...data };
    delete newData.tasks[task.id];

    const newTaskIds = data.columns[column.id].taskIds.filter(
      (taskCurrent) => taskCurrent !== task.id
    );

    const newState = {
      ...newData,
      columns: {
        ...newData.columns,
        [column.id]: {
          ...newData.columns[column.id],
          taskIds: newTaskIds,
        },
      },
    };

    const newDataFromBack = await axios.post(`${BASE_URL}/update`, newState);

    setData(newDataFromBack.data);
  }

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <WrapperTask>
            <div>{task.content}</div>
            <WrapperIconDelete onClick={onDelete}>
              <IconCancel>{icons.cancel}</IconCancel>
            </WrapperIconDelete>
          </WrapperTask>
        </Container>
      )}
    </Draggable>
  );
};
