import React, { useState } from "react";
import { Task } from "../Task/Task";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { FormAdd } from "../FormAdd/FormAdd";
import { onDeleteColumn as onDeleteColumnHandler } from "./onDeleteColumn";
import { Container, ContainerColumn, TaskList, Title } from "./styled";
import { icons } from "../icons";
import { IconCancel, WrapperIconDelete } from "../Task/styled";
import { onAddNewTaskHandler } from "../../helpers/helpers";

export const Column = ({ tasks, column, index, setData, data }) => {
  const [showForm, setShowForm] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onAddNewTask = () => {
    onAddNewTaskHandler({
      inputValue,
      column,
      setData,
      setShowForm,
      setInputValue,
      data,
    });
  };

  const onDeleteColumn = () => {
    onDeleteColumnHandler({
      column,
      setData,
      data,
    });
  };

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <ContainerColumn>
            <Title {...provided.dragHandleProps}>{column.title}</Title>
            <WrapperIconDelete onClick={onDeleteColumn}>
              <IconCancel>{icons.cancel}</IconCancel>
            </WrapperIconDelete>
          </ContainerColumn>

          <Droppable droppableId={column.id} type="task">
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {tasks.map((task, index) => (
                  <Task
                    key={task.id}
                    task={task}
                    index={index}
                    setData={setData}
                    data={data}
                    column={column}
                  />
                ))}
                {provided.placeholder}
                <FormAdd
                  showForm={showForm}
                  setShowForm={setShowForm}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                  onClick={onAddNewTask}
                />
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
};
