import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

function LoginModal({ loginModalHandler }) {
  return (
    <div>
      <BackgroundModal>
        <ModalWrapper>
          <ModalInner>
            <HeadLine>
              <CloseBtn
                onClick={() => {
                  loginModalHandler('none');
                }}
              >
                X
              </CloseBtn>
              <Tittle>로그인</Tittle>
            </HeadLine>
            <ContentsWrapper>
              <Text>저스트비앤비에 오신 것을 환영합니다.</Text>
              <InputContainer>
                <Input placeholder="이메일" />
              </InputContainer>
              <InputContainer>
                <Input placeholder="비밀번호" />
              </InputContainer>
              <CountinueBtn>로그인</CountinueBtn>
              <Text2>또는</Text2>
              <BtnWrapper>
                <Btns>
                  <BsFacebook style={{ color: '#1877F1' }} fontSize={22} />
                  <BtnText>페이스북으로 로그인하기</BtnText>
                </Btns>
                <Btns>
                  <FcGoogle fontSize={22} />
                  <Text>구글로 로그인하기</Text>
                </Btns>
                <Btns>
                  <FaApple fontSize={22} />
                  <BtnText>Apple 계정으로 계속하기</BtnText>
                </Btns>
              </BtnWrapper>
            </ContentsWrapper>
          </ModalInner>
        </ModalWrapper>
      </BackgroundModal>
    </div>
  );
}

const BackgroundModal = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const move = keyframes`
0%{
  opacity: 0;
  top: 300px;
} 50% {
  opacity: 0.8;
} 100% {
  opacity: 1;
  top: -50px;
}`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;

  animation: ${move} 0.3s ease-in-out forwards;
`;

const ModalInner = styled.div`
  position: relative;
  top: 50%;
  width: 600px;
  margin: 0 auto;
  transform: translateY(-50%);
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
`;

const HeadLine = styled.div`
  display: felx;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const CloseBtn = styled.button`
  text-align: left;
  border: none;
  background-color: #ffffff;
  font-size: 0.9em;
  cursor: pointer;
`;

const Tittle = styled.div`
  font-size: 1.1em;
  padding-left: 230px;
  font-weight: 700;
`;

const ContentsWrapper = styled.div`
  padding: 40px 20px;
`;

const Text = styled.div`
  &:first-child {
    padding-bottom: 40px;
    font-size: 1.3em;
    font-weight: 600;
  }

  &:last-child {
    padding-right: 200px;
  }
`;

const BtnLayout = css`
  display: flex;
  margin-top: 15px;
  padding: 15px 20px;
  border-radius: 8px;
  cursor: pointer;
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid gray;
`;

const CountinueBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  ${BtnLayout};
`;

const Text2 = styled.div`
display: flex;
align-items: center;
  margin-top: 20px;
  color: gray;
  font-size: 0.7em;

  &:before{
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    margin-right: 16px;
    background-color: rgb(221,221,221);
  }
  
  &:after{
    content: "";
    display:block;
    width: 100%;
    height: 1px;
    margin-left: 16px;
    background-color: rgb(221,221,221);
  }

  }
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Btns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9em;
  border: 1px solid black;
  ${BtnLayout}

  &: hover {
    background: rgb(247, 247, 247);
  }
`;

const BtnText = styled.p`
  padding-right: 180px;
`;

const Input = styled.input`
  margin: 26px 12px 6px;
  border: none;

  &: focus {
    outline: none;
  }
`;

export default LoginModal;
