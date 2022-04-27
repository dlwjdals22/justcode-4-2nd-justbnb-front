import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Hosting8({ onChange, resultChoice }) {
  const [textlength, setTextLength] = useState(0);

  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <img src="/images/로고화이트.png" />
        </Link>
        <Text1>숙소에 대해 설명해 주세요.</Text1>
      </Container>

      <Container2>
        <Header>
          <button className="help-button">도움말</button>
          <button className="exit-button">나가기</button>
        </Header>
        <Body>
          <TextAndInput>
            <Text2>숙소 설명 작성하기</Text2>
            <Input
              onKeyUp={e => setTextLength(e.target.value.length)}
              maxLength={499}
              placeholder="독특하면서도 가족이 머물기 적합한 이 곳에서 잊지 못할 추억을 만드세요."
            />
            <TextLength>{textlength} / 500</TextLength>
          </TextAndInput>
        </Body>
        <Footer />
      </Container2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
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
  /* position: absolute;
  top: 0; */
  /* border: 1px solid red; */
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
  }
`;

const Body = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

const TextAndInput = styled.div`
  /* width: fit-content;
  height: fit-content; */
  display: flex;
  flex-direction: column;
`;

const Text2 = styled.div`
  font-size: 1.5vw;
  font-weight: bold;
  margin: auto auto auto 0;
`;

const Input = styled.textarea`
  display: flex;
  margin: 1vw 0;
  padding: 1.5vw;
  font-size: 1vw;
  min-width: 30vw;

  max-width: 30vw;
  height: 20vh;
  max-height: 50vh;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  /* font-weight: bold; */
`;

const TextLength = styled.div`
  font-size: 1vw;
`;
