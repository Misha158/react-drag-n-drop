import axios from "axios";
import { BASE_URL } from "../../API/const";

export const onDeleteColumn = ({ column, setData, data }) => {
  const newOrderColumns = data.columnOrder.filter(
    (currentColumn) => currentColumn !== column.id
  );

  const newColumns = { ...data.columns };

  delete newColumns[column.id];

  const newData = {
    columns: newColumns,
    columnOrder: [...newOrderColumns],
    tasks: { ...data.tasks },
  };

  axios.post(`${BASE_URL}/update`, newData);

  setData(newData);
};
