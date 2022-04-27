import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Reservation() {
  const [data2, setData2] = useState([]);
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };

  useEffect(() => {
    fetch('http://localhost:8000/reservation/guest', {
      // fetch('/data/dlwjdals/reservation.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // setData2(data);
      });
  }, []);

  return (
    <Body>
      <Travel>여행</Travel>
      <Line />
      {/* 여기서부터 예약된 여행 있는 경우 */}
      {/* <ReservationList>
        {data2.map((el, index) => {
          return (
            <Card2 key={el.id}>
              <Img2 src={el.imageUrl} alt="test" />
              <CardDescription2>Check-In : {el.check_in}</CardDescription2>
              <CardDescription2>Check-Out : {el.check_out}</CardDescription2>
              <CardDescription2>
                총 인원 : {el.total_members} 명
              </CardDescription2>
              <CardDescription2>
                숙소 이름 : {el.accommodations_name}
              </CardDescription2>
            </Card2>
          );
        })}
      </ReservationList> */}
      {/* 여기까지 예약된 여행 있는 경우 */}
      {/* 여기서부터 예약된 여행 없는 경우 */}
      <NoReservation>
        <Text1>아직 예약된 여행이 없습니다!</Text1>
        <Text2>
          여행 가방에 쌓인 먼지를 털어내고 다음 여행 계획을 세워보세요.
        </Text2>
        <Text3 onClick={goToMain}>숙소 검색하기</Text3>
      </NoReservation>
      {/* 여기까지 예약된 여행 없는 경우 */}
      <Line />
      <Text4>예약 내역을 찾으실 수 없나요?&nbsp;</Text4>
      <Text5>도움말 센터 방문하기</Text5>
    </Body>
  );
}

export default Reservation;

const Body = styled.div`
  margin: 70px 120px;
`;

const Travel = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const Line = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  margin: 40px 0;
`;

const NoReservation = styled.div`
  margin: 10px 0;
`;

const ReservationList = styled.div`
  margin: 10px 0;
  display: flex;
`;

const Text1 = styled.div`
  font-size: 29px;
  font-weight: bolder;
`;

const Text2 = styled.div`
  font-size: 20px;
  margin: 25px 0;
`;

const Text3 = styled.div`
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 10px;
  width: fit-content;
  padding: 20px 30px;
  margin: 10px 0 70px 0px;
`;

const Text4 = styled.span`
  font-size: 20px;
  margin: 25px 0;
`;

const Text5 = styled.span`
  text-decoration: underline;
  font-size: 20px;
  font-weight: bold;
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
  width: 300px;
  height: 16em;
`;
