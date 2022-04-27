import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlinePicture } from 'react-icons/ai';

export default function Hosting6() {
  const [files, setFiles] = useState([]);

  const Upload = e => {
    const files = Array.from(e.target.files);
    // const files = e.target.files;
    const newFiles = files.map(file => {
      return URL.createObjectURL(file);
    });
    setFiles(newFiles);
  };

  const UploadCancel = e => {
    return setFiles(null);
  };

  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <img src="/images/로고화이트.png" />
        </Link>
        <Text1>
          이제 숙소 사진을 올릴
          <br />
          차례입니다.
        </Text1>
      </Container>

      <Container2>
        <Header>
          <button className="help-button">도움말</button>
          <button className="exit-button">나가기</button>
        </Header>
        <Body>
          {/* {console.log(files.length)} */}
          {files.length === 0 ? (
            <Line>
              <PictureIcon>
                <AiOutlinePicture />
              </PictureIcon>
              <Text2>멋진 숙소 사진을 올려주세요!</Text2>
              <Text3>최대 5장까지 업로드하실 수 있습니다.</Text3>
              <Label>
                <LabelDescription>사진 올리기</LabelDescription>
                <UploadImage
                  onChange={Upload}
                  type="file"
                  multiple="multiple"
                />
              </Label>
            </Line>
          ) : (
            <Line2>
              <Pictures>
                {files.map((file, index) => {
                  if (index < 5) {
                    // 5장을 넘기지 않게 하기 위해
                    return <Image key={null} src={file} />;
                  }
                })}
              </Pictures>
              {/* <Empty onChange={UploadCancel}>사진 비우기</Empty> */}
            </Line2>
          )}

          {/* -------------------------------------------------------------------- */}
          {/* <Line>
            <Pictures>
              {files.map((file, index) => {
                if (index < 5) {
                  // 5장을 넘기지 않게 하기 위해
                  return <Image key={null} src={file} />;
                }
              })}
            </Pictures>
            <PictureIcon>
              <AiOutlinePicture />
            </PictureIcon>
            <Text2>멋진 숙소 사진을 올려주세요!</Text2>
            <Text3>최대 5장까지 업로드하실 수 있습니다.</Text3>
            <UploadImage onChange={Upload} type="file" multiple="multiple" />
          </Line> */}
          {/* -------------------------------------------------------------------- */}
        </Body>
        {/* <Footer>
          <Prev to="/hosting/5">뒤로</Prev>
          <Next to="/hosting/7">다음</Next>
        </Footer> */}
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
  border-top: 2px solid rgba(155, 149, 167, 0.2);
`;

const Prev = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  margin-left: 30px;
`;

const Next = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
  color: white;
  padding: 13px 23px;
  margin-right: 30px;
  border-radius: 8px;
  border: 1px solid rgba(155, 149, 167, 0.1);
  background-color: black;
`;

const Line = styled.div`
  /* border: 1px dashed rgb(176, 176, 176) !important; */
  outline: 1px dashed rgb(176, 176, 176) !important;
  /* outline: 1px dashed black; */
  width: fit-content;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* padding: 350px 150px 0 150px; */
  padding: 12vw 5vw 1vw 5vw;
  margin: auto auto 7vw auto;
  overflow-y: auto;
`;

const Line2 = styled.div`
  /* outline: 1px dashed rgb(176, 176, 176) !important; */
  width: fit-content;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto auto 7vw auto;
  /* overflow-y: auto; */
`;

const PictureIcon = styled.div`
  font-size: 5vw;
`;

const Text2 = styled.div`
  font-size: 1.7vw;
  font-weight: bold;
`;

const Text3 = styled.div`
  font-size: 1.5vw;
  margin: 12px;
`;

const Text4 = styled.div`
  font-size: 1vw;
  font-weight: bold;
  margin-top: 7vw;
  margin-bottom: 3vw;
  text-decoration: underline;
  cursor: pointer;
`;

const UploadImage = styled.input`
  /* border: 1px solid red; */
  margin-top: 10px;
  width: 50%;
  pointer-events: none;
  opacity: 0;
`;

const Label = styled.label`
  width: 30%;
  border: 1px black solid;
  cursor: pointer;
  margin: 1vw 0 8vw 0;
`;

const LabelDescription = styled.div`
  position: absolute;
  margin: 0.5vw 1.3vw;
  font-weight: bold;
`;

const Image = styled.img`
  object-fit: cover;
  width: 90%;
  height: 10vw;
  margin: 5px;
`;

const Pictures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Empty = styled.button`
  font-size: 1vw;
`;
