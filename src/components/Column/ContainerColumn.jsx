import React, { useState } from "react";
import { Column } from "./Column";
import { ContainerStyled } from "./styled";
import { FormAdd } from "../FormAdd/FormAdd";
import { onAddNewColumnHandler } from "./onAddNewColumn";

export const ContainerColumn = ({ provided, data, setData }) => {
  const [showForm, setShowForm] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onAddNewColumn = () => {
    onAddNewColumnHandler({
      data,
      inputValue,
      setData,
      setShowForm,
      setInputValue,
    });
  };

  return (
    <ContainerStyled {...provided.droppableProps} ref={provided.innerRef}>
      {data?.columnOrder?.length > 0 &&
        data.columnOrder.map((columnId, index) => {
          const column = data.columns[columnId];
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

          return (
            <Column
              key={column.id}
              column={column}
              tasks={tasks}
              index={index}
              data={data}
              setData={setData}
            />
          );
        })}
      {provided.placeholder}

      <FormAdd
        showForm={showForm}
        setShowForm={setShowForm}
        inputValue={inputValue}
        setInputValue={setInputValue}
        onClick={onAddNewColumn}
        isAddColumn={true}
      />
    </ContainerStyled>
  );
};
