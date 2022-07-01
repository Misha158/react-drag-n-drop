import axios from "axios";
import { BASE_URL } from "../../API/const";

export const onAddNewColumnHandler = ({
  data,
  inputValue,
  setData,
  setShowForm,
  setInputValue,
}) => {
  if (!inputValue) {
    return;
  }
  const columnOrderIds = data.columnOrder.map((columnId) =>
    Number(columnId.split("-")[1])
  );
  const newColumnOrderId = Math.max(...columnOrderIds) + 1;
  const newColumnOrders = [...data.columnOrder, `column-${newColumnOrderId}`];

  const columns = {
    ...data.columns,
    [`column-${newColumnOrderId}`]: {
      id: `column-${newColumnOrderId}`,
      title: inputValue,
      taskIds: [],
    },
  };

  const newData = {
    columns,
    columnOrder: [...newColumnOrders],
    tasks: { ...data.tasks },
  };

  axios.post(`${BASE_URL}/update`, newData);

  setData(newData);
  setShowForm(false);
  setInputValue("");
};
