import axios from "axios";

export const onDragHandler = async ({ data, setData, result }) => {
  const { destination, source, draggableId, type } = result;

  if (!destination) {
    return;
  }

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

  if (type === "column") {
    const newColumnOrder = Array.from(data.columnOrder);
    newColumnOrder.splice(source.index, 1);
    newColumnOrder.splice(destination.index, 0, draggableId);

    const newState = {
      ...data,
      columnOrder: newColumnOrder,
    };
    setData(newState);
    return;
  }

  const start = data.columns[source.droppableId];
  const finish = data.columns[destination.droppableId];

  if (start === finish) {
    const newTaskIds = Array.from(start.taskIds);

    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...start,
      taskIds: newTaskIds,
    };

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn,
      },
    };

    setData(newState);

    const newDataFromBack = await axios.post(
      "https://quiet-wildwood-70786.herokuapp.com/update",
      newState
    );

    return;
  }

  // Moving from one list to another
  const startTaskIds = Array.from(start.taskIds);
  startTaskIds.splice(source.index, 1);
  const newStart = {
    ...start,
    taskIds: startTaskIds,
  };

  const finishTaskIds = Array.from(finish.taskIds);
  finishTaskIds.splice(destination.index, 0, draggableId);
  const newFinish = {
    ...finish,
    taskIds: finishTaskIds,
  };

  const newState = {
    ...data,
    columns: {
      ...data.columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish,
    },
  };

  setData(newState);

  const newDataFromBack = await axios.post(
    "https://quiet-wildwood-70786.herokuapp.com/update",
    newState
  );
};
