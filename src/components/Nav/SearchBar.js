import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import SearchToggle from './SearchToggle';
import MembersToggle from './MembersToggle';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function SearchBar({ scrollPosition, updateScroll, flag }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const [isCheckIn, setIsCheckIn] = useState(true);
  const [isCheckOut, setIsCheckOut] = useState(true);

  const [city, setCity] = useState();
  const [count, setCount] = useState(0);
  const [haveAnimal, setHaveAnimal] = useState('');

  const [isSearchToggleOpen, setIsSearchToggleOpen] = useState(false);
  const [isMembersToggleOpen, setIsMembersToggleOpen] = useState(false);
  const navigate = useNavigate();

  const goToList = () => {
    if (!city || !startDate || !endDate || !count || !haveAnimal) return;
    navigate(`/list/${city}`, {
      state: {
        city: city,
        startDate: startDate,
        endDate: endDate,
        count: count,
        haveAnimal: haveAnimal,
      },
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  useEffect(() => {
    setEndDate(startDate);
  }, [startDate]);

  const onClickCheckIn = () => {
    setIsCheckIn(false);
    setIsMembersToggleOpen(false);
    setIsSearchToggleOpen(false);
  };

  const onClickCheckOut = () => {
    setIsCheckOut(false);
    setIsMembersToggleOpen(false);
    setIsSearchToggleOpen(false);
  };

  const searchToggleHandler = () => {
    if (!isSearchToggleOpen) {
      setIsSearchToggleOpen(true);
      setIsMembersToggleOpen(false);
    } else {
      setIsSearchToggleOpen(false);
    }
  };
  const membersToggleHandler = () => {
    if (!isMembersToggleOpen) {
      setIsMembersToggleOpen(true);
      setIsSearchToggleOpen(false);
    } else {
      setIsMembersToggleOpen(false);
    }
  };

  const ExampleCustomInput = ({ value, onClick }) => (
    <DateInput onClick={onClick}>{value}</DateInput>
  );

  return (
    <Container bgColor={flag === 'list' ? 'white' : 'black'}>
      {scrollPosition < 50 && (
        <SearchWrapper bgColor={flag === 'list' ? '#EBEBEB' : '#ffffff'}>
          <div>
            <SearchInner
              onClick={searchToggleHandler}
              bgColor={flag === 'list' ? '#EBEBEB' : '#ffffff'}
              hoverColor={flag === 'list' ? '#ffffff' : '#EBEBEB'}
            >
              <SearchKeyword>??????</SearchKeyword>
              {!city && <Text>????????? ????????????????</Text>}
              {city && <Text2>{city}</Text2>}
            </SearchInner>
            {isSearchToggleOpen && (
              <SearchToggle
                setCity={setCity}
                close={searchToggleHandler}
                isSearchToggleOpen={isSearchToggleOpen}
                setIsSearchToggleOpen={setIsSearchToggleOpen}
              />
            )}
          </div>
          <SearchInner
            onClick={onClickCheckIn}
            bgColor={flag === 'list' ? '#EBEBEB' : '#ffffff'}
            hoverColor={flag === 'list' ? '#ffffff' : '#EBEBEB'}
          >
            <SearchKeyword>?????????</SearchKeyword>
            {isCheckIn && <Text>?????? ??????</Text>}
            {!isCheckIn && (
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                dateFormat="MM??? dd???"
                minDate={new Date()}
                customInput={<ExampleCustomInput />}
              />
            )}
          </SearchInner>
          <SearchInner
            onClick={onClickCheckOut}
            bgColor={flag === 'list' ? '#EBEBEB' : '#ffffff'}
            hoverColor={flag === 'list' ? '#ffffff' : '#EBEBEB'}
          >
            <SearchKeyword>????????????</SearchKeyword>
            {isCheckOut && <Text>?????? ??????</Text>}
            {!isCheckOut && (
              <DatePicker
                selected={endDate}
                onChange={(date: Date) => setEndDate(date)}
                minDate={new Date()}
                dateFormat="MM??? dd???"
                customInput={<ExampleCustomInput />}
              />
            )}
          </SearchInner>
          <div>
            <SearchInner
              onClick={membersToggleHandler}
              bgColor={flag === 'list' ? '#EBEBEB' : '#ffffff'}
              hoverColor={flag === 'list' ? '#ffffff' : '#EBEBEB'}
            >
              <SearchKeyword>??????</SearchKeyword>
              {count === 0 && <Text>????????? ??????</Text>}
              {count > 0 && <Text2>{count} ???</Text2>}
              {haveAnimal === 'y' && <Text2>???????????? ??????</Text2>}
            </SearchInner>
            {isMembersToggleOpen && (
              <MembersToggle
                count={count}
                setCount={setCount}
                setHaveAnimal={setHaveAnimal}
                close={membersToggleHandler}
                isMembersToggleOpen={isMembersToggleOpen}
                setIsMembersToggleOpen={setIsMembersToggleOpen}
              />
            )}
          </div>
          <SearchBtns onClick={goToList}>
            <BiSearch fontSize={20} />
            <SearchKeyword2>??????</SearchKeyword2>
          </SearchBtns>
        </SearchWrapper>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: fixed;
  justify-content: center;

  top: -header.height;
  width: 100%;
  transition: top 0.3s;
  margin: 0 auto;
  background: ${props => props.bgColor};
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-right: 14px;
  background-color: ${props => props.bgColor};
  border-radius: 40px;
`;

const SearchInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 50px 15px 40px;
  background-color: ${props => props.bgColor};
  border-radius: 40px;
  &: hover {
    background: ${props => props.hoverColor};
    cursor: pointer;
  }
`;

const SearchBtns = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 15px;
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  color: #ffffff;
  border-radius: 40px;
  cursor: pointer;
`;

const Input = styled.input`
  border: 1px solid #ffffff;
`;

const Text = styled.div`
  padding-top: 3px;
  padding-right: 40px;
  font-size: 0.8rem;
  color: #838383;
`;

const Text2 = styled.div`
  padding-top: 5px;
  padding-right: 80px;
  font-size: 0.9rem;
`;
const SearchKeyword = styled.div`
  padding: 5px 0 5px;
  font-size: 0.9rem;
  font-weight: 600;
`;

const SearchKeyword2 = styled.div`
  padding-left: 5px;
  font-size: 1rem;
`;

const DateInput = styled.div`
  padding-right: 30px;
  font-size: 14px;
  font-weight: 500;
`;

export default SearchBar;
