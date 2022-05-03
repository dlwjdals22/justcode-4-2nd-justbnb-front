## Justbnb

<br />

<!-- <img width="950" alt="스크린샷 2022-04-15 오전 9 51 37" src="https://user-images.githubusercontent.com/97730865/163500832-e1ca0931-8e6b-44d3-a3b3-631c2bbbd625.png">

🎬 [Wetcha PEDIA 구현영상 보러 가기](https://www.youtube.com/watch?v=HkkZfwLtfis) -->

<br/>

## Introduction

<br/>

- 숙박 공유 서비스를 제공하는 Airbnb 클론 프로젝트
- 개발에 집중하기 위해서 디자인 / 기획 부분을 클론했습니다.
- 개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 백엔드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.
- 진행 기간 : 2022.04.18 ~ 2022.04.29 (12일)
- [Back-end GitHub 바로가기](https://github.com/wecode-bootcamp-korea/justcode-4-2nd-justbnb-back

<br/>


## DB Modeling

<br/>

![데이터 모델링](https://user-images.githubusercontent.com/97730865/166395690-0332907f-908e-47c1-8e6b-ffab901f04aa.png)


<br/>

## 담당자 별 구현 기능

<br/>

**[Front]**

<br/>

🧑‍💻 공민지

1. Detail Page UI 및 기능 
- useLocation 훅 사용해서 List page 각 List들과 연결
- 이미지 클릭 시 모달창 구현 후 이미지 배열 순서대로 렌더링
- 숙소 편의시설 fetch로 받아온 정보에 따라서 조건부 렌더링
- 모달 외부 영역 클릭 시 모달창 닫힘 구현

2. React DatePicker 라이브러리 사용 캘린더 구현
- 위시리스트 저장 유무에 따라서 텍스트, 아이콘 조건부 렌더링 구현
- 두 개의 캘린더 중에 하나에서라도 데이터 변화 발생 시 useState와 props를 이용해 연동될 수 있도록 기능 구현 
- 날짜 데이터 변화 발생 시 숙박 일수 및 가격 계산 후 렌더링

3. 카카오맵 API를 사용한 지도 기능 구현
- Fetch로 받아온 위도 경도를 사용해 숙소 위치를 마커로 나타내도록 구현 
- 이미지 마커에 마우스 hover 시 info window를 사용해 안내문이 나타나도록 구현 
- 마커 주변을 나타낼 수 있도록 커스텀 도형을 통해 구현
 
4. WishList 기능 구현
- 로컬 스토리지에 저장된 토큰 유무로 로그인 확인 후 로그아웃 상태 시 로그인 모달창이 띄워지도록 기능 구현 
- 위시리스트 저장 유무에 따라서 텍스트, 아이콘 조건부 렌더링 구현

5. 숙소 예약 기능 구현
- 로컬 스토리지에 저장된 토큰 유무로 로그인 확인 후 로그아웃 상태 시 로그인 모달창이 띄워지도록 기능 구현 
- 숙소 호스트와 게스트 계정이 동일할 시 예약이 불가능하도록 기능 구현


🧑‍💻 권지호

1. Header UI 및 기능 구현
- 스크롤 시 search UI 숨기기 에니메이션 & 헤더 레이아웃 로그인/로그아웃에 따라 조건부 렌더링
- 로그인/로그아웃에 따라 유저 토글 조건부 렌더링
- 로고 클릭 시 메인페이지로 라우팅
- 호스트 되기 클릭 시 로그인/비로그인에 따라 조건부 라우팅 (비로그인: 로그인모달창, 로그인: 호스팅페이지 라우팅)
- list & detail page header 검색시작하기 버튼 클릭 시 search UI 띄우는 기능

2. Search UI 및 기능 구현
- 위치, 체크인, 체크 아웃, 인원 및 반려동물 동반 여부 검색 기능
- 체크인, 체크아웃 달력 api 이용
- 각 영역에 마우스 hover 시 레이아웃 변화
- 외부 영역 클릭 시 토글 닫힘 구현

3. Login & signup Modal UI 및 기능 구현
- 회원가입/로그인 클릭 시 모달 팝업
- 회원가입  시 이메일 형식 여부 체크 / 비밀번호 유효성검사 정규표현식 적용
- 아이디/비밀번호 오류 시 예외처리
- 로그아웃 시 토큰 삭제
- signup & login api post fetch 연결

4. Footer UI 구현
- 반응형 구현

5. Main Page UI 및 기능 구현
- 서울, 대전, 대구, 부산,  제주도 List card 각 도시 리스트 페이지로 라우팅
- 호스팅에 관해 궁금하신 점이 있나요? 버튼 클릭 시 호스팅 페이지로 라우팅

6. Management Page UI 및 기능 구현
- guest registration list-api  get fetch 연결


🧑‍💻 김슬기

1. Hosting Page UI 및 기능 구현
- 호스팅 모든 step 기본 레이아웃 구현
- hosting layout 페이지와 호스팅페이지 연결 시 progress bar, 다음 버튼과 UI 이어지도록 구현
- 로고 / 나가기 버튼 누를 시 메인페이지와 라우팅

2. Hosting Page Step 1,2 UI 및 기능 구현
- 클릭 시 조건부 렌더링으로 옵션 한 개만 선택하도록 구현

3. Hosting Page Step 4 UI 및 기능 구현
- counter 컴포넌트 만들어서 최대 / 최소 / 기본인원 조건 걸기
- onClick 시 value값 실시간으로 바꾸고 적용하기
- 버튼 선택 시 opacity 사용해 선택 값 보이도록 구현

4. Hosting Page Step 5 UI 및 기능 구현
- 체크박스와 아이콘, 텍스트를 묶어 박스에 넣는 레이아웃 구현

4. Hosting Page Step 6 UI 및 기능 구현
- counter 컴포넌트 만들어 기본 값 조건 걸기
- onClick 시 value값 실시간으로 바꾸고 적용하기


🧑‍💻 설혜원

1. List Page UI 및 기능 구현
- 리스트 페이징 기능 구현
- 리스트 내 슬라이드 구현
- 리스트에 해당하는 지도 마커 구현
- 리스트에 해당하는 마커 영역값을 계산하여 영역별로 지도를 보여주도록 기능추가
- 지도 마커 오버레이 구현
- 검색하면 해당 검색조건에 해당하는 마커를 뿌려주도록 구현
- 지도를 움직이면 마커의 전체값이 뿌려지도록 구현
- 줌아웃 레벨이 13이 되면 리스트 레이아웃 변경되도록 구현(멀티 슬라이드 구현)
- 리스트 열고 닫기 기능 구현
- 리스트 내 객체의 좋아요 기능구현 / 로그인 안되어있을 시 좋아요 누르면 로그인 창 뜨도록 구현
- 지도를 움직이면 지도화면 내 보여지는 마커의 개수만큼 리스트에 보여지도록 구현
- 리스트에 커서를 가져다 대면 해당하는 마커의 색이 달라지도록 구현

2. Hosting UI 및 기능 
- progress바 기능 구현
- 다음버튼을 누르면 다음 폼으로 이동하는 기능 구현
- 각 폼마다 값을 onChange함수를 통해 resultChoice에 값이 들어가도록 구현


🧑‍💻 이정민

1. Reservation Page UI 구현 

2. Management Page UI 구현 및 기능 추가
- 슬라이드 기능 구현
- 슬라이드가 첫 번째 또는 마지막에 도달할 시 버튼 비활성화 구현

3. Hosting Page Step 3 UI 및 기능 구현
- 카카오맵 API 연동 및 구현
- 서울, 부산, 제주 도시버튼 클릭 시 해당 지역으로 맵 이동 구현
- 위도, 경도 정보 추출 및 다음 단계로 데이터 전달 구현
- 상세주소 정보 추출 및 다음 단계로 데이터 전달 구현

4. Hosting Page Step 5 UI 구현
- 마우스 hover 시 outline 변화 구현

5. Hosting Page Step 7, 8 UI 및 기능 구현
- 입력되는 글자 수 카운트 및 표시 구현

6. Hosting Page Step 9 UI 및 기능 구현
- 사진 여러 장 업로드 기능 구현
- 업로드된 사진들 미리보기 구현
- 업로드 시 opacity 속성을 이용한 UI 변경 구현
- ‘완료’ 시 alert 창 발생, 메인페이지 라우팅 구현

<br/>

**[Back]**

<br/>

🧑‍💻 이의택

1. User API
-유저 로그인 기능
-유저 회원가입 기능
-유저 검증 기능

2. Upload 기능
-S3 버킷 이미지 업로드 기능

3. 숙소 API
-호스트 숙소 등록 기능
-등록된 호스트 숙소 리스트 정보 전달 기능
-등록된 호스트 단일 숙소 정보 전달 기능
-등록된 호스트 단일 숙소 이미지 정보 전달 기능
-등록된 호스트 단일 숙소 편의시설 정보 전달 기능

4. 예약 API
-등록된 호스트 숙소 예약 기능
-호스트 숙소의 예약 현황 리스트 정보 전달 기능
-나의 숙소 예약 현황 리스트 정보 전달 기능

5. Wishlist API
-숙소 위시리스트 등록 기능
-등록된 호스트 숙소 리스트의 위시 정보 리스트 정보 전달 기능
-등록된 위시리스트 정보 전달 기능
-등록된 위시리스트 단일 삭제 기능

<br/>

## Members

<br/>

- 공민지 : [기술 블로그](https://velog.io/@minzyaaaaaa)
- 권지호 : [기술 블로그](https://xxziiko.tistory.com/)
- 김슬기 : [기술 블로그](https://velog.io/@sseul22)
- 설혜원 : [기술 블로그](https://velog.io/@shw779)
- 이의택 : [기술 블로그](https://velog.io/@wlsun)
- 이정민 : [기술 블로그](https://velog.io/@jml22)

   
<br/>

## Reference

<br/>

- 이 프로젝트는 [Airbnb](https://www.airbnb.co.kr/) 사이트를 참조하여 학습 목적으로 만들었습니다.
- 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
