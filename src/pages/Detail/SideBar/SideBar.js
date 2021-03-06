import { React, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import CalendarModal from './CalendarModal';
import SideBarHeadCount from './SideBarHeadCount';
import LoginModal from '../../../components/Modal/LoginModal';

import { FaStar, FaAngleDown } from 'react-icons/fa';

function InfoSideBar(props) {
  const {
    start,
    end,
    change,
    deleteDate,
    dateDiff,
    dateDeleted,
    charge,
    total_members,
    selected,
    token,
    location,
    login,
  } = props;

  // 모달 open 관리
  const [calendarModalOpen, setCalendarModalOpen] = useState(false);
  const [CountModalOpen, setCountModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleCalendarModalClose = e => {
    setCalendarModalOpen(false);
  };
  const handleCountModalClose = () => {
    setCountModalOpen(false);
  };
  const loginModalHandler = () => {
    !isLoginModalOpen ? setIsLoginModalOpen(true) : setIsLoginModalOpen(false);
  };

  // 캘린더 input
  const [checkInValue, setCheckInValue] = useState('');
  const [checkOutValue, setCheckOutValue] = useState('');

  const handleCheckInValue = useEffect(() => {
    !dateDeleted
      ? setCheckInValue('')
      : setCheckInValue(
          start
            ? `${start.getFullYear()}.${
                start.getMonth() + 1
              }.${start.getDate()}`
            : null
        );
  }, [start]);

  // checkInValue 초기값 할당 시 state 값이 바뀌지 않는 오류

  useEffect(() => {
    const newDate = new Date();
    setCheckInValue(
      `${newDate.getFullYear()}.${newDate.getMonth() + 1}.${newDate.getDate()}`
    );
  }, []);

  const handleCheckOutValue = useEffect(() => {
    !dateDeleted
      ? setCheckOutValue('')
      : setCheckOutValue(
          end
            ? `${end.getFullYear()}.${end.getMonth() + 1}.${end.getDate()}`
            : ''
        );
  }, [end]);
  // 인원 관리

  const [headCount, setHeadCount] = useState(1);
  const [petCount, setPetCount] = useState(false);

  const handleHeadCount = count => {
    setHeadCount(count);
  };

  let PORT = process.env.REACT_APP_PORT;

  // 예약 기능
  const postReservation = () => {
    fetch(`${PORT}/reservation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        accessToken: token,
        accommodationsId: location.state,
        checkIn: checkInValue,
        checkOut: checkOutValue,
        members: headCount,
      }),
    }).then(res => {
      res.json();
      if (res.status === 201) {
        alert('예약이 완료되었습니다.');
        console.log(res);
      } else if (res.status === 409) {
        alert('호스트는 예약할 수 없습니다.');
      }
    });
  };
  return (
    <Section>
      {isLoginModalOpen && <LoginModal loginModalHandler={loginModalHandler} />}
      <Wrapper>
        <Title>
          {end && charge
            ? `₩${charge.toLocaleString()} / 박`
            : `요금을 확인하려면 날짜를 입력하세요.`}
        </Title>
        <Text1>
          <div>
            <FaStar className="icons" color="#ff385c" />
          </div>
          <div>
            <span>4.61 · 후기 33개</span>
          </div>
        </Text1>
        {calendarModalOpen && (
          <CalendarModal
            selected={selected}
            open={calendarModalOpen}
            setCalendarModalOpen={setCalendarModalOpen}
            close={handleCalendarModalClose}
            start={start}
            end={end}
            change={change}
            dateDiff={dateDiff}
            deleteDate={deleteDate}
            dateDeleted={dateDeleted}
          />
        )}
        <Form>
          <InputWrapper>
            <CheckWrapper
              onClick={() => {
                setCalendarModalOpen(true);
              }}
              style={{
                border: calendarModalOpen ? '1px solid black' : null,
              }}
            >
              <CheckInput>
                <span>체크인</span>
                <Input
                  placeholder="날짜 추가"
                  defaultValue={checkInValue || ''}
                />
              </CheckInput>
              <CheckInput>
                <span>체크아웃</span>
                <Input
                  placeholder="날짜 추가"
                  defaultValue={checkOutValue || ''}
                />
              </CheckInput>
            </CheckWrapper>
            <Guest
              onClick={() => {
                setCountModalOpen(true);
              }}
            >
              <div>
                <span>인원</span>
                <span>{`게스트 ${headCount}명`}</span>
                <span>{petCount ? `, 반려동물` : ''}</span>
              </div>
              <FaAngleDown />
            </Guest>
          </InputWrapper>
          <SideBarHeadCount
            open={CountModalOpen}
            close={handleCountModalClose}
            setCountModalOpen={setCountModalOpen}
            headCount={headCount}
            petCount={petCount}
            setPetCount={setPetCount}
            handleHeadCount={handleHeadCount}
            total_members={total_members}
          />
          <Button
            type="button"
            disabled={
              checkInValue.length > 1 && checkOutValue.length > 1
                ? null
                : 'disabled'
            }
            onClick={() => {
              login ? postReservation() : setIsLoginModalOpen(true);
            }}
          >
            예약하기
          </Button>
        </Form>
        <div style={{ display: end ? 'block' : 'none' }}>
          <DetailPrice>
            <div>{charge && `₩${charge.toLocaleString()} x ${dateDiff}박`}</div>
            <div>{charge && `₩${(charge * dateDiff).toLocaleString()}`}</div>
          </DetailPrice>
          <AmountPrice>
            <div>총 합계</div>
            <div>{charge && `₩${(charge * dateDiff).toLocaleString()}`}</div>
          </AmountPrice>
        </div>
      </Wrapper>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;
  width: 40%;
  padding-left: 10%;
`;

const Wrapper = styled.section`
  position: sticky;
  top: 120px;
  padding: 20px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  height: 45px;
  font-size: 22px;
  margin-bottom: 8px;
`;

const Text1 = styled.div`
  display: flex;
  .icons {
    margin-right: 5px;
    font-size: 13px;
  }
  span {
    font-size: 14px;
    vertical-align: middle;
    font-weight: 500;
  }
`;

const Form = styled.form`
  margin-top: 20px;
`;

const InputWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const DetailPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  color: rgba(0, 0, 0, 0.8);
  font-size: 16px;
  div:first-child {
    text-decoration: underline;
  }
`;

const AmountPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 18px;
  font-weight: 500;
`;

const CheckWrapper = styled.div`
  display: flex;
`;

const CheckInput = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  width: 50%;
  &:first-child {
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }

  span {
    font-size: 12px;
    font-weight: 500;
    margin-left: 2px;
  }
`;

const Input = styled.input`
  outline: none;
  border: none;
  padding: 5px 0;
  &::placeholder {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Guest = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  span {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
  }
  span:first-child {
    display: block;
    padding: 5px 0;
    font-size: 12px;
    font-weight: 500;
    color: black;
  }
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 0;
  margin: 15px 0;
  border-radius: 10px;
  background-color: #e52454;
  color: white;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  &:disabled {
    background-color: #f7becc;
  }
`;

export default InfoSideBar;
