import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function UserToggle({
  openToggle,
  loginModalHandler,
  signupModalHandler,
  setOpenToggle,
  toggleHandler,
}) {
  const outSection = useRef();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const goToReservation = () => {
    navigate('/reservation');
  };

  const goToManagingPage = () => {
    navigate('/management');
  };

  const logOut = () => {
    localStorage.removeItem('token');
    toggleHandler();
    window.location.reload();
  };

  useEffect(() => {
    window.addEventListener('mousedown', onClickOutSection);
    return () => {
      window.removeEventListener('mousedown', onClickOutSection);
    };
  });

  const onClickOutSection = ({ target }) => {
    if (openToggle.display === 'block' && !outSection.current.contains(target))
      setOpenToggle({ display: 'none' });
  };

  function LoginToggle() {
    return (
      <ToggleBox style={openToggle} ref={outSection}>
        <ToggleList>위시리스트</ToggleList>
        <ToggleList onClick={goToReservation}>예약관리</ToggleList>
        <ToggleList onClick={goToManagingPage}>숙소관리</ToggleList>
        <ToggleList onClick={logOut}>로그아웃</ToggleList>
        <ToggleList>도움말</ToggleList>
      </ToggleBox>
    );
  }

  function LogOutToggle() {
    return (
      <ToggleBox style={openToggle} ref={outSection}>
        <ToggleList
          onClick={() => {
            signupModalHandler('none');
          }}
        >
          회원가입
        </ToggleList>
        <ToggleList
          onClick={() => {
            loginModalHandler('none');
          }}
        >
          로그인
        </ToggleList>
        <ToggleList onClick={loginModalHandler}>숙소호스트 되기</ToggleList>
        <ToggleList>도움말</ToggleList>
      </ToggleBox>
    );
  }

  return <div>{token ? <LoginToggle /> : <LogOutToggle />}</div>;
}

const ToggleBox = styled.div`
  position: absolute;
  width: 15rem;
  background-color: #ffffff;
  border-radius: 10px;
  list-style: none;
  box-shadow: 1px 1px 2px #dddddd;
  z-index: 999;
`;

const ToggleList = styled.li`
  margin: 10px 0;
  padding: 15px;
  font-size: 14px;
  color: black;

  &:hover {
    background-color: rgb(247, 247, 247);
    cursor: pointer;
  }

  &:first-child {
    font-weight: 600;
  }

  &:nth-child(2) {
    border-bottom: 1px solid lightgray;
  }
`;

export default UserToggle;
