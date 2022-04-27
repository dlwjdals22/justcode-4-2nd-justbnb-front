import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

function Management() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [leftEndPoint, setLeftEndPoint] = useState('none'); // 왼쪽 버튼 활성화, 비활성화
  const [rightEndPoint, setRightEndPoint] = useState('auto'); // 오른쪽 버튼 활성화, 비활성화
  const [leftOpacity, setLeftOpacity] = useState('0.3'); // 왼쪽 버튼 투명도
  const [rightOpacity, setRightOpacity] = useState('1'); // 오른쪽 버튼 투명도

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const TOTAL_CARD = data2.length - 1;

  // left 버튼 클릭 시
  const LeftSlide = () => {
    // 첫 번째 슬라이드보다 하나 전에 버튼을 비활성화하기 위함.
    if (currentSlide === 1) {
      setLeftEndPoint('none');
      setRightEndPoint('auto');
      setLeftOpacity('0.3');
      setRightOpacity('1');
    }
    if (currentSlide === 0) {
      return;
    } else {
      setRightEndPoint('auto');
      setRightOpacity('1');
      setCurrentSlide(currentSlide - 1);
    }
    return;
  };

  // right 버튼 클릭 시
  const RightSlide = () => {
    // 마지막 슬라이드보다 하나 전에 버튼을 비활성화하기 위함.
    if (currentSlide >= TOTAL_CARD - 1) {
      setLeftEndPoint('auto');
      setRightEndPoint('none');
      setLeftOpacity('1');
      setRightOpacity('0.3');
    }
    if (currentSlide >= TOTAL_CARD) {
      return;
    } else {
      setLeftEndPoint('auto');
      setLeftOpacity('1');
      setCurrentSlide(currentSlide + 1);
    }
    return;
  };

  useEffect(() => {
    fetch('/data/hwseol/list.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    // fetch('/data/dlwjdals/management.json', {
    console.log(localStorage.getItem('token'));
    fetch('http://localhost:8000/reservation/host', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        accessToken: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        // setData2(data);
        console.log(data);
      });
  }, []);

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(calc(${
      (-150 / data2.length) * currentSlide
    }%))`;
  }, [currentSlide]);

  const ButtonLeft = styled.button`
    pointer-events: ${leftEndPoint};
    opacity: ${leftOpacity};
    position: relative;
    width: fit-content;
    height: fit-content;
    margin: auto;
    margin-right: 50px;
    padding: 20px;
    border-radius: 100px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `;

  const ButtonRight = styled.button`
    pointer-events: ${rightEndPoint};
    opacity: ${rightOpacity};
    position: relative;
    width: fit-content;
    height: fit-content;
    margin: auto;
    margin-left: 50px;
    padding: 20px;
    border-radius: 100px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `;

  return (
    <Body>
      <Banner>&nbsp;</Banner>
      <GuestCardWide>
        <BookingText>예약</BookingText>
        <AllBooking>모든 예약(0건)</AllBooking>
        <ManageButtons>
          <Button>현재 호스팅 중(0건)</Button>
          {/* <Button>체크인 예정(0건)</Button>
          <Button>체크아웃 예정(0건)</Button> */}
          <Button>예정(0건)</Button>
        </ManageButtons>
        <Accommodation>
          <Wrapper>
            <Slide ref={slideRef}>
              {/* 여기서부터 슬라이드 */}
              {data2.map((el, index) => {
                return (
                  <Card2 key={el.id}>
                    <Img2 src={el.imageUrl} alt="test" />
                    <CardDescription2>Guest : {el.guest}</CardDescription2>
                    <CardDescription2>
                      총 인원 : {el.total_members} 명
                    </CardDescription2>
                    <CardDescription2>
                      Check-In : {el.check_in}
                    </CardDescription2>
                    <CardDescription2>
                      Check-Out : {el.check_out}
                    </CardDescription2>
                    <CardDescription2>
                      숙소 이름 : {el.accommodations_name}
                    </CardDescription2>
                  </Card2>
                );
              })}
              {/* 여기까지 슬라이드 */}
            </Slide>
          </Wrapper>
        </Accommodation>
        <Buttons>
          <ButtonLeft onClick={LeftSlide}>&lt;</ButtonLeft>
          <ButtonRight onClick={RightSlide}>&gt;</ButtonRight>
        </Buttons>
      </GuestCardWide>
      <ManagementFooter>
        <TextAndTips>
          <Text>호스팅 관련 팁과 업데이트</Text>
          <Tips>
            {data.map((el, index) => {
              if (index <= 3) {
                return (
                  <Card key={el.id}>
                    <Img src={el.image} alt="test" />
                    <CardDescription>{el.name}</CardDescription>
                  </Card>
                );
              }
            })}
          </Tips>
        </TextAndTips>
      </ManagementFooter>
    </Body>
  );
}

export default Management;

const Body = styled.div`
  /* display: flex; */
`;

const Banner = styled.div`
  height: 10em;
  margin: 1em 0 2em 0;
  background: rgb(27, 0, 209);
  background: linear-gradient(
    90deg,
    rgba(27, 0, 209, 1) 0%,
    rgba(255, 0, 168, 1) 100%
  );
`;

const GuestCardWide = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 100em;
`;

const BookingText = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const AllBooking = styled.div`
  font-size: 15px;
  font-weight: bold;
  text-align: right;
  text-decoration: underline;
`;

const ManageButtons = styled.div`
  display: flex;
  /* flex-flow = wrap; */
  margin: 10px 0 30px 0;
`;

const Button = styled.div`
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  margin-right: 10px;
  padding: 15px;
`;

const ManagementFooter = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  margin-top: 100px;
  padding-bottom: 0px;
`;

const TextAndTips = styled.div`
  display: flex;
  margin: 0 7em;
  justify-content: flex-start;
  flex-direction: column;
`;

const Text = styled.div`
  color: white;
  text-align: left;
  font-size: 30px;
  font-weight: bold;
  margin-left: 3.7em;
  padding: 60px 0 20px 0;
`;

const Tips = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
  margin: 0 7em;
  padding: 20px 0px 60px 0px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  margin: 0 10px;
  overflow: hidden;
`;

const CardDescription = styled.div`
  color: white;
  padding: 30px 0px 50px 10px;
  background-color: rgba(100, 100, 100, 0.6);
  font-size: 20px;
`;

const Img = styled.img`
  min-width: 340px;
  height: 17em;
`;

const Accommodation = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  padding: 30px 17px;
`;

const Wrapper = styled.div`
  overflow: hidden;
`;

const Slide = styled.div`
  width: 100%;
  display: flex;
`;

const Card2 = styled.div`
  min-width: 300px;
  border-radius: 20px;
  margin: 0 2.8%;
  overflow: hidden;
  background-color: rgba(100, 100, 100, 1);
  padding-bottom: 10px;
`;

const CardDescription2 = styled.div`
  color: white;
  padding: 8px 0px 5px 10px;
  background-color: rgba(100, 100, 100, 1);
  font-size: 19px;
`;

const Img2 = styled.img`
  object-fit: cover;
  min-width: 340px;
  height: 16em;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
  margin-top: 30px;
`;
