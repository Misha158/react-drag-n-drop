import React from "react";
import { WrapperStyled, InputStyled, Button, ButtonConfirm } from "./styled";

export const FormAdd = ({
  showForm,
  setShowForm,
  inputValue,
  setInputValue,
  onClick,
  isAddColumn,
}) => {
  const onClickBtn = () => {
    setShowForm(true);
  };

  const onInputChange = (e) => setInputValue(e.target.value);

  return showForm ? (
    <WrapperStyled>
      <InputStyled
        value={inputValue}
        onChange={onInputChange}
        placeholder="Что сделать?"
        $isAddColumn={isAddColumn}
        autoFocus={true}
      />
      <ButtonConfirm onClick={onClick}>Click</ButtonConfirm>
    </WrapperStyled>
  ) : (
    <Button $isAddColumn={isAddColumn} onClick={onClickBtn}>
      Add new ticket
    </Button>
  );
};
