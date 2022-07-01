import styled from "styled-components";

export const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: #ebecf0;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;

export const ContainerColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
`;

export const Title = styled.h3`
  width: 100%;
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isDraggingOver ? "skyblue" : "#ebecf0"};
`;

export const ContainerStyled = styled.div`
  display: flex;
  align-items: start;
`;
