import React from 'react';
import { Link } from 'react-router-dom';
import CounterValue from './Component/Counter';
import CounterValue2 from './Component/Counter2';
import {
  Text1,
  Container,
  Container2,
  Wrapper,
  Header,
  Footer,
  Body,
  GuestCount,
  PetCount,
  Text2,
} from './Hosting4Styled';

export default function Hosting4({ onChange, resultChoice }) {
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <img src="/images/로고화이트.png" />
        </Link>
        <Text1>
          숙소에서 맞이할 최대
          <br />
          인원수를 알려주세요.
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
          <GuestCount>
            <Text2>게스트</Text2>
            <CounterValue onChange={onChange} />
          </GuestCount>
          <PetCount>
            <Text2>반려동물</Text2>
            <CounterValue2 onChange={onChange} />
          </PetCount>
        </Body>
        <Footer />
      </Container2>
    </Wrapper>
  );
}
