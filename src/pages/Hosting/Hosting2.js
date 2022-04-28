import React from 'react';
import styled from 'styled-components';

export default function Hosting2({ onChange, resultChoice }) {
  return (
    <Wrapper>
      <Container>
        <Text1>
          게스트가 머무르게 될 숙소의
          <br />
          종류가 무엇인가요?
        </Text1>
      </Container>

      <Container2>
        <Header>
          <button className="help-button">도움말</button>
          <button className="exit-button">나가기</button>
        </Header>
        <Body>
          <Button
            id="2"
            onClick={e => onChange(e)}
            value="공간 전체"
            style={{
              backgroundColor:
                resultChoice['2'] === '공간 전체'
                  ? 'rgba(155, 149, 167, 0.2)'
                  : 'white',
            }}
          >
            <div className="but-name">공간 전체</div>
          </Button>
          <Button
            id="2"
            onClick={e => onChange(e)}
            value="개인실"
            style={{
              backgroundColor:
                resultChoice['2'] === '개인실'
                  ? 'rgba(155, 149, 167, 0.2)'
                  : 'white',
            }}
          >
            <div className="but-name">개인실</div>
          </Button>
          <Button
            id="2"
            onClick={e => onChange(e)}
            value="다인실"
            style={{
              backgroundColor:
                resultChoice['2'] === '다인실'
                  ? 'rgba(155, 149, 167, 0.2)'
                  : 'white',
            }}
          >
            <div className="but-name">다인실</div>
          </Button>
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
`;

const Text1 = styled.div`
  color: white;
  font-weight: 530;
  font-size: 48.5px;
  margin-left: 55px;
`;

const Container2 = styled.section`
  width: 50%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
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
  }
`;

const Body = styled.section`
  width: 100%;
  display: flex;
  margin-top: 70px;
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
  .but-name {
    padding: 30px;
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
`;
