import styled from 'styled-components';
import { FaStar, FaRegHeart } from 'react-icons/fa';

function Main() {
  return (
    <Wrapper>
      <div>
        <MainTitle>*명동역 도보5분* 123 Guesthouse Single room</MainTitle>
        <InfoWrapper>
          <BnbInfo>
            <div>
              <FaStar className="faStar" color="#ff385c" />
            </div>
            <span>4.61</span>·<span>후기 33개</span>·
            <span>중구, 서울, 한국</span>
          </BnbInfo>
          <div>
            <FaRegHeart className="icons" />
            <span>저장</span>
          </div>
        </InfoWrapper>
        <ImgWrapper>
          <MainImgBox>
            <img alt="main" src="/images/thump/home1.jpg" />
          </MainImgBox>
          <div>
            <MainImgBox>
              <img alt="main" src="./images/thump/home1.jpg" />
            </MainImgBox>
            <MainImgBox>
              <img alt="main" src="./images/thump/home1.jpg" />
            </MainImgBox>
          </div>
          <div>
            <MainImgBox>
              <img alt="main" src="/images/thump/home1.jpg" />
            </MainImgBox>
            <MainImgBox>
              <img alt="main" src="/images/thump/home1.jpg" />
            </MainImgBox>
          </div>
        </ImgWrapper>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  /* margin: 0 80px; */
`;

const MainTitle = styled.h1`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 15px;
  margin-bottom: 20px;

  & > div:last-child {
    display: flex;
    align-items: center;
    // border: 1px solid black;

    .icons {
      vertical-align: top;
      padding-bottom: 2px;
      // border: 1px solid black;
    }
    & > span {
      margin-left: 5px;
      vertical-align: bottom;
      // border: 1px solid black;
    }
  }
`;

const BnbInfo = styled.div`
  display: flex;
  align-items: center;

  span {
    margin: 0px 5px;
    vertical-align: bottom;
  }

  & > div {
    .faStar {
      color: #ff385c;
    }
  }
`;

const ImgWrapper = styled.section`
  display: flex;
  justify-content: center;
  border-radius: 20px;
  overflow: hidden;

  & > div {
    display: flex;
    flex-direction: column;
    width: 25%;
    margin-left: 5px;
    & > div:first-child {
      margin-bottom: 5px;
    }
    &:first-of-type {
      width: 50%;
      margin: 0px;
    }
  }
`;

const MainImgBox = styled.div`
  width: 100%;
  border-radius: 12px;

  img {
    width: 100%;
    height: 100%;
    &:hover {
      opacity: 0.8;
      transition: all 0.5s;
      cursor: pointer;
    }
  }
`;

export default Main;
