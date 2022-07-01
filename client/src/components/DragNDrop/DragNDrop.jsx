import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { GlobalStyle } from "./styled";
import { onDragHandler } from "../../helpers/onDragHandler";
import { ContainerColumn } from "../Column/ContainerColumn";
import axios from "axios";
import { BASE_URL } from "../../API/const";

export const DragNDrop = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const dataFromBack = await axios.get(`${BASE_URL}/board-tasks`);
    setData(dataFromBack.data[0]);
  }, []);

  const onDragEnd = (result) => {
    onDragHandler({ data, result, setData });
  };

  return (
    <>
      <GlobalStyle />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <ContainerColumn
              provided={provided}
              data={data}
              setData={setData}
            />
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};
