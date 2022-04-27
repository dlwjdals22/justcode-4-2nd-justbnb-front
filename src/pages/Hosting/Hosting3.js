import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoLocationSharp } from 'react-icons/io5';
import styled from 'styled-components';

export default function Hosting3({ onChange, resultChoice }) {
  const container = useRef(null);

  useEffect(() => {
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    new window.kakao.maps.Map(container.current, options); //지도 생성 및 객체 리턴
    return () => {};
  }, []);

  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <img src="/images/로고화이트.png" />
        </Link>
        <Text1>숙소 위치는 어디인가요?</Text1>
      </Container>

      <Container2>
        <Header>
          <button className="help-button">도움말</button>
          <Link to="/">
            <button className="exit-button">나가기</button>
          </Link>
        </Header>
        <Body>
          <ButtonTextWrapper>
            <Icon>
              <IoLocationSharp />
            </Icon>
            <Text2 placeholder="주소를 입력하세요." />
          </ButtonTextWrapper>
          <Map style={{ width: '100%', height: '610px' }} ref={container} />
        </Body>
        <Footer>
          <p>뒤로</p>
          <button className="next-button">다음</button>
        </Footer>
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
  position: relative;
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
  /* min-height: 100vh; */
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const Header = styled.section`
  position: absolute;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  z-index: -1;
  .help-button {
    font-size: 12px;
    font-weight: 500;
    padding: 7px 15px;
    border-radius: 20px;
    margin-right: 15px;
    border: 1px solid rgba(155, 149, 167, 0);
    background-color: black;
    color: white;
  }
  .exit-button {
    font-size: 12px;
    font-weight: 500;
    padding: 7px 20px;
    border-radius: 20px;
    margin-right: 30px;
    border: 1px solid rgba(155, 149, 167, 0);
    background-color: black;
    color: white;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Body = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonTextWrapper = styled.button`
  position: absolute;
  z-index: 999;
  background-color: white;
  border-radius: 50px;
  border: 1px solid rgba(155, 149, 167, 0.44);
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  padding: 10px;
  box-shadow: 2px 1px 5px 7px rgba(0, 0, 0, 0.14);
  width: 75%;
  top: 11vw;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  margin-right: 10px;
  margin-left: 10px;
  font-size: 25px;
  margin-top: 5px;
`;

const Text2 = styled.textarea`
  margin-top: 1vw;
  margin-left: 1vw;
  width: 100%;
  font-size: 1vw;
  font-weight: bold;
  outline: none;
  border: none;
  resize: none;
  color: grey;
`;

const Map = styled.div`
  position: relative;
  z-index: -999;
  margin: 0;
`;

const Footer = styled.section`
  position: absolute;
  padding: 15px;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  border-top: 2px solid rgba(155, 149, 167, 0.2);
  p {
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
  }
`;
