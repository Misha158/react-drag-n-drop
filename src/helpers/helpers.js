import axios from "axios";
import { BASE_URL } from "../API/const";

export const onAddNewTaskHandler = async ({
  inputValue,
  column,
  setData,
  setShowForm,
  setInputValue,
  data,
}) => {
  if (!inputValue) {
    return;
  }

  const makeArrayFromObject = Object.keys(data.tasks);
  const maxTaskId = Math.max(
    ...makeArrayFromObject.map((id) => +id.split("-")[1])
  );
  const formatTaskId = `task-${maxTaskId + 1}`;

  const newTasks = {
    ...data.tasks,
    [formatTaskId]: {
      id: formatTaskId,
      content: inputValue,
    },
  };
  const newTaskIdsInColumn = [...column.taskIds, formatTaskId];
  const newData = {
    ...data,
    tasks: newTasks,
    columns: {
      ...data.columns,
      [column.id]: {
        ...data.columns[column.id],
        taskIds: newTaskIdsInColumn,
      },
    },
  };

  const newDataFromBack = await axios.post(`${BASE_URL}/update`, newData);

  setData(newDataFromBack.data);
  setShowForm(false);
  setInputValue("");
};
