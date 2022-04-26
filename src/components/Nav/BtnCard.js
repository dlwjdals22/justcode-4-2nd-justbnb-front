import React, { useState } from 'react';
import styled from 'styled-components';

function BtnCard({ list, setCity }) {
  const [changeColor, setChangeColor] = useState();

  const colorChangeHandler = () => {
    !changeColor
      ? setChangeColor({
          background: `linear-gradient(
            to right,
            rgb(230, 30, 77) 0%,
            rgb(227, 28, 95) 50%,
            rgb(215, 4, 102) 100%
          )`,
          border: 'none',
          color: '#ffffff',
        })
      : setChangeColor();
  };

  const onClickBtn = () => {
    setCity(list.name);
    colorChangeHandler();
  };

  return (
    <BtnsWrapper>
      <BtnLayout onClick={onClickBtn} style={changeColor}>
        {list.name}
      </BtnLayout>
    </BtnsWrapper>
  );
}

const BtnLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    border: 2px solid rgb(227, 28, 95);
    background: #f7f7f7;
  }
`;

const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default BtnCard;
