import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSwimmingPool } from 'react-icons/fa';
import { GiBarbecue } from 'react-icons/gi';
import { AiOutlineWifi } from 'react-icons/ai';
import { MdPersonalVideo } from 'react-icons/md';
import { FaParking } from 'react-icons/fa';
import { GiBathtub } from 'react-icons/gi';

export default function Hosting5({ onChange, resultChoice }) {
  console.log(resultChoice);
  const [convenience, setConvenience] = useState([]);

  // 조건문 사용 시 예시
  // function selectIcon(el) {
  //   if (el === 'FaSwimmingPool') {
  //     return <FaSwimmingPool />;
  //   } else if (el === 'GiBarbecue') {
  //     return <GiBarbecue />;
  //   }
  // }
  console.log('ddddd', resultChoice);

  useEffect(() => {
    fetch('/data/dlwjdals/hosting.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setConvenience(data);
      });
  }, []);

  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <img src="/images/로고화이트.png" />
        </Link>
        <Text1>
          숙소 편의시설 정보를 추가해
          <br />
          주세요.
        </Text1>
      </Container>

      <Container2>
        <Header>
          <button className="help-button">도움말</button>
          <button className="exit-button">나가기</button>
        </Header>
        <Body>
          <Text2>특별히 내세울만한 편의시설이 있나요?</Text2>
          <Convenience>
            {convenience.map((el, index) => (
              <ConvMap
                el={el}
                onChange={onChange}
                resultChoice={resultChoice}
                key={el.id}
              />
            ))}
          </Convenience>
        </Body>
        <Footer />
      </Container2>
    </Wrapper>
  );
}
function compareResult(resultChoice, el) {
  console.log(resultChoice);
  if (!resultChoice.hasOwnProperty(5)) return false;
  for (let i = 0; i < resultChoice[5].length; i++) {
    if (resultChoice[5][i] === el.convenience) {
      return 'on';
    }
  }
}
function ConvMap({ el, onChange, resultChoice }) {
  return (
    <Button>
      <div key={el.id}>
        <BoxWrapper>
          <TextAndIcon
            key={el.id}
            onClick={e => onChange(e)}
            id="5"
            value={el.convenience}
            type="checkbox"
            defaultChecked={compareResult(resultChoice, el)}
          />
          <Icon>{selectIcon(el.icon)}</Icon>
          <Text3>{el.convenience}</Text3>
        </BoxWrapper>
      </div>
    </Button>
  );
}
function selectIcon(el) {
  let result;
  switch (el) {
    case 'FaSwimmingPool':
      result = <FaSwimmingPool />;
      break;
    case 'GiBarbecue':
      result = <GiBarbecue />;
      break;
    case 'AiOutlineWifi':
      result = <AiOutlineWifi />;
      break;
    case 'MdPersonalVideo':
      result = <MdPersonalVideo />;
      break;
    case 'FaParking':
      result = <FaParking />;
      break;
    case 'GiBathtub':
      result = <GiBathtub />;
      break;
    default:
      break;
  }
  return result;
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
  min-height: 80vh;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Header = styled.section`
  /* position: absolute;
  top: 0; */
  /* border: 1px solid blue; */
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
  /* border: 1px solid blue; */
  /* padding: 55px; */
`;

const Text2 = styled.div`
  font-size: 22px;
  font-weight: 500;
  margin-left: 55px;
  margin-top: 40px;
`;

const Convenience = styled.div`
  /* border: 1px solid red; */
  padding: 20px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* grid-template-columns: repeat(3, 0fr); */
  margin: 10px 0;
  /* width: 100%; */
`;

const Button = styled.section`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(155, 149, 167, 0.44);
  text-align: left;
  padding: 25px;
  width: 30%;
  margin: 8px;
  /* display: flex; */
`;

const BoxWrapper = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextAndIcon = styled.input`
  &:hover {
    outline: 2px solid black;
    border-radius: 30px;
    /* outline-offset: -3px; */
    /* box-shadow: 0 0 0 2px #333 inset;*/
    cursor: pointer;
  }
  /* display: flex; */
  /* padding: 40px; */
  /* border: 1px solid rgba(0, 0, 0, 0.2); */
  /* border-radius: 25px; */
  margin: 15px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 30px;
`;

const Text3 = styled.div`
  font-size: 15px;
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
