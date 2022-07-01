import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isDragging ? "lightgreen" : "white")};
`;

export const WrapperIconDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 20px;
  height: 20px;
  cursor: pointer;
  padding: 5px 5px 5px 0px;
`;

export const WrapperTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconCancel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7px;
  height: 7px;
`;
