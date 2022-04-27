import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { RiErrorWarningFill } from 'react-icons/ri';
import { AiFillCloseCircle } from 'react-icons/ai';

function LoginModal({ loginModalHandler }) {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputs;
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const idInput = e => {
    setInputs({ ...inputs, email: e.target.value });
    let regEmail =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    !regEmail.test(email) ? setEmailErr(false) : setEmailErr(false);
    // !regEmail.test(email) ? setEmailErr(true) : setEmailErr(false);
  };

  const passwordInput = e => {
    setInputs({ ...inputs, password: e.target.value });
    let regPassword = /(?=.*\d)(?=.*[a-zA-ZS]).{8,20}/;
    !regPassword.test(password) ? setPasswordErr(false) : setPasswordErr(false);
    // !regPassword.test(password) ? setPasswordErr(true) : setPasswordErr(false);
  };

  const errHandler = () => {
    if (email === '' || password === '') {
      !email ? setEmailErr(true) : setEmailErr(false);
      !password ? setPasswordErr(true) : setPasswordErr(false);
      return;
    }
  };
  const postLogin = () => {
    console.log(1);
    console.log(email);
    console.log(password);
    errHandler();
    fetch('http://localhost:8000/user/signin', {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.accessToken) {
          localStorage.setItem('token', res.accessToken);
        } else {
          console.log('에러발생 : ', res.message);
        }
      });
    // .then(res => {
    //   if (res.status === 200) {
    //     return;
    //   } else if (res.status === 409) {
    //     alert('아이디와 비밀번호를 확인해주세요 :)');
    //     return res.json();
    //   }
    //     console.log('에러메세지: ', res.message);
    //   } else return res.json();
    // })
  };

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
              <Input placeholder="이메일" onChange={idInput} />
              {emailErr && (
                <ErrBox>
                  <RiErrorWarningFill fontSize={20} />
                  <ErrText>이메일이 필요합니다.</ErrText>
                </ErrBox>
              )}
              <Input
                placeholder="비밀번호"
                type="password"
                onChange={passwordInput}
              />
              {passwordErr && (
                <>
                  <ErrBox>
                    <RiErrorWarningFill fontSize={20} />
                    <ErrText>비밀번호를 확인하세요.</ErrText>
                  </ErrBox>
                  <ErrBox>
                    <AiFillCloseCircle />
                    <ErrText>최소 8자</ErrText>
                  </ErrBox>
                  <ErrBox>
                    <AiFillCloseCircle />
                    <ErrText>영문, 숫자가 모두 포함되어야 합니다.</ErrText>
                  </ErrBox>
                </>
              )}
              <CountinueBtn onClick={postLogin}>로그인</CountinueBtn>
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
  top: 500px;
} 50% {
  opacity: 0.8;
} 100% {
  opacity: 1;
  top: -20px;
}`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: hidden;
  outline: 0;
  box-shadow: 2px 2px 10px #dddddd;
  cursor: default;

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
  font-size: 0.9rem;
  cursor: pointer;
`;

const Tittle = styled.div`
  font-size: 1.1rem;
  padding-left: 230px;
  font-weight: 700;
  color: black;
`;

const ContentsWrapper = styled.div`
  padding: 40px 20px;
`;

const Text = styled.div`
  &:first-child {
    padding-bottom: 40px;
    font-size: 1.3rem;
    font-weight: 600;
    color: black;
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
  border: 1px solid black;
  font-size: 0.9em;
  color: black;
  ${BtnLayout}

  &: hover {
    background: rgb(247, 247, 247);
  }
`;

const BtnText = styled.p`
  padding-right: 180px;
`;

const Input = styled.input`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  padding: 20px 40px;
  border-radius: 10px;
  border: 1px solid gray;

  &: focus {
    outline-color: black;
  }

  ${props => {
    const selected = props.red;
    return css`
      &: focus {
        outline-color: ${selected};
      }
    `;
  }}
`;

const styledText = css`
  font-size: 12px;
`;

const ErrBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  color: rgb(193, 53, 21);
  ${styledText}
`;

const ErrText = styled.div`
  padding-left: 5px;
`;

export default LoginModal;
