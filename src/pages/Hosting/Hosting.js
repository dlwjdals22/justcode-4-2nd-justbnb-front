import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// const Say = () => {
//   const [message, setMessage] = useState('');

//   const onClickEnter = () => setMessage('Enter');
//   const onClickLeave = () => setMessage('Leave');

//   const handleClick = (event) => {
//     const getStyleAttr = event.target.getAttribute("style");
//     const message = document.getElementById("message");
// };

export default function Hosting({ onChange, resultChoice }) {
  // const [color, setColor] = useState('');

  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <img src="/images/로고화이트.png" />
        </Link>
        <Text1>
          호스팅할 숙소 유형을
          <br />
          알려주세요.
        </Text1>
      </Container>

      <Container2>
        <Header>
          <button className="help-button">도움말</button>
          <Link to="/">
            <button className="exit-button">나가기</button>
          </Link>
        </Header>
        <Body>
          {/* <div onClickEnter={() => setIsClicking(true)} /> */}
          <Button id="1" onClick={e => onChange(e)} value="아파트">
            <div className="but-name">아파트</div>
            <div className="img-wrapper">
              <img src="/images/thump/home10.jpg" />
            </div>
          </Button>
          <Button id="1" onClick={e => onChange(e)} value="주택">
            <div className="but-name">주택</div>
            <div className="img-wrapper">
              <img src="/images/thump/home3.jpg" />
            </div>
          </Button>
          <Button id="1" onClick={e => onChange(e)} value="별채">
            <div className="but-name">별채</div>
            <div className="img-wrapper">
              <img src="/images/thump/home14.jpg" />
            </div>
          </Button>
          <Button id="1" onClick={e => onChange(e)} value="독특한 숙소">
            <div className="but-name">독특한 숙소</div>
            <div className="img-wrapper">
              <img src="/images/thump/home1.jpg" />
            </div>
          </Button>
        </Body>
        <Footer />
      </Container2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Container = styled.section`
  width: 50%;
  min-height: 100vh;
  background: rgb(217, 18, 100);
  background: linear-gradient(
    180deg,
    rgba(217, 18, 100, 0.9598214285714286) 0%,
    rgba(165, 4, 166, 1) 52%,
    rgba(55, 8, 159, 1) 100%
  );
  display: flex;
  align-items: center;
  line-height: 3.5em;
  img {
    width: 80px;
    height: 70px;
    position: absolute;
    top: 0;
    margin-top: 30px;
    margin-left: 40px;
  }
`;

const Text1 = styled.div`
  color: white;
  font-weight: 530;
  font-size: 48.5px;
  margin-left: 55px;
`;

const Container2 = styled.section`
  width: 50%;
  /* border: 5px solid green; */
  height: 80vh;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  z-index: 999;
`;

const Header = styled.section`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  .help-button {
    font-size: 12px;
    font-weight: 500;
    padding: 7px 15px;
    border-radius: 20px;
    margin-right: 15px;
    border: 1px solid rgba(155, 149, 167, 0);
    background-color: rgba(155, 149, 167, 0.1);
  }
  .exit-button {
    font-size: 12px;
    font-weight: 500;
    padding: 7px 20px;
    border-radius: 20px;
    margin-right: 30px;
    border: 1px solid rgba(155, 149, 167, 0);
    background-color: rgba(155, 149, 167, 0.1);
    &:hover {
      cursor: pointer;
    }
  }
`;

const Body = styled.section`
  width: 100%;
  display: flex;
  margin-top: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(155, 149, 167, 0.44);
  font-size: 17.5px;
  font-weight: 500;
  text-align: left;
  width: 65%;
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    outline: 1.5px solid black;
    cursor: pointer;
  }
  .img-wrapper {
    margin: 10px;
  }
  .but-name {
    margin-left: 18px;
  }
  img {
    width: 55px;
    height: 55px;
    border-radius: 5px;
    margin-top: 5px;
  }
`;

const Footer = styled.section`
  padding: 15px;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  /* border-top: 2px solid rgba(155, 149, 167, 0.2); */
  /* p {
    text-decoration: underline;
    font-size: 16px;
    font-weight: 500;
    margin-left: 30px;
  }
  .next-button {
    font-size: 16px;
    font-weight: 400;
    color: white;
    padding: 13px 23px;
    margin-right: 30px;
    border-radius: 8px;
    border: 1px solid rgba(155, 149, 167, 0.1);
    background-color: black;
  } */
`;
