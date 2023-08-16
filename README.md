# 🧊 모두가 즐겁게 아이스브레이킹을 할 수 있는 서비스 녹는점(멜팅포인트) 🔥

### 🎇비사이드에서 진행한 308 포텐데이 해커톤 우승 프로젝트입니다🎈

![image](https://github.com/ghgt1/Melting-Point-FE/assets/35508595/c9b50114-f082-4318-adc6-7a72290cbcce)

- 멜팅포인트는 얼굴을 보지않더라도 팀원들과 가까워지고 협업을 잘 해낼 수 있도록 “아이스브레이킹“을 도와주는 서비스입니다!
- 우리팀만의 링크를 생성하고 나에게 맞는 캐릭터를 부여받고 서로를 알아갈 수 있는 게임을 통해 협업 능력을 상승시켜보아요!!
- 여러분들도 멜팅포인트를 통해 우리 팀만의 녹는점을 찾아보세요(로그인 없이 서비스 이용이 가능하니 참여해보세요!)
- 줌이나 구글미트를 통해 음성연결을 함께 하시면 더욱 재미있게 즐기실 수 있습니다
- 팀원이 함께 보는 페이지에서 ‘다음 게임 할게요!’ 등의 버튼은 한명만 누르셔도 모든 팀원의 페이지에 적용됩니다


## 배포주소

멜팅포인트를 [여기서](https://melting-point.vercel.app/) 즐길수 있습니다.

## 시연영상


https://github.com/ghgt1/Melting-Point-FE/assets/35508595/1d20630a-b05b-45cb-81c0-c2461076ce09


## 설치법

env 설정 필요

```shell
$ git clone {주소복사}
$ npm install
$ npm run dev
```

## 기간

- 2023/08/04 ~ 2023/08/13
- 리팩토링: 2023/08/16 ~ 진행중

## 사용 기술 스택

### FrontEnd

- Programming

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue) ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![Axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) 

- Deploy

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

- Etc

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) 


### BackEnd

- Programming

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

## 폴더구조
```
📦src
 ┣ 📂apis
 ┃ ┣ 📜axios.ts
 ┃ ┣ 📜getAdjectiveList.ts
 ┃ ┣ 📜getBalance.ts
 ┃ ┣ 📜getFinalResult.ts
 ┃ ┣ 📜getGameStart.ts
 ┃ ┣ 📜getMbtiOrder.ts
 ┃ ┣ 📜getMbtiResult.ts
 ┃ ┣ 📜getRoomStatus.ts
 ┃ ┣ 📜getRoomUrl.ts
 ┃ ┣ 📜patchNextQuestion.ts
 ┃ ┣ 📜patchRoomReady.ts
 ┃ ┣ 📜postAdjective.ts
 ┃ ┣ 📜postBalance.ts
 ┃ ┣ 📜postMbti.ts
 ┃ ┣ 📜postNextGame.ts
 ┃ ┗ 📜postRoomCheckIn.ts
 ┣ 📂assets
 ┃ ┣ 📜balanceChar.png
 ┃ ┣ 📜charBlue.png
 ┃ ┣ 📜charGreen.png
 ┃ ┣ 📜charOrange.png
 ┃ ┣ 📜charWithHat.png
 ┃ ┣ 📜charYellow.png
 ┃ ┣ 📜gameExplain.png
 ┃ ┣ 📜mainIgloo.png
 ┃ ┣ 📜meltImg1.png
 ┃ ┣ 📜meltImg2.png
 ┃ ┣ 📜meltImg3.png
 ┃ ┣ 📜meltImg4.png
 ┃ ┣ 📜question1.png
 ┃ ┣ 📜question2.png
 ┃ ┣ 📜question3.png
 ┃ ┣ 📜question4.png
 ┃ ┣ 📜roomCharBlue.png
 ┃ ┣ 📜roomCharGreen.png
 ┃ ┣ 📜roomCharOrange.png
 ┃ ┣ 📜roomCharYellow.png
 ┃ ┣ 📜singleCharBlue.png
 ┃ ┣ 📜singleCharGreen.png
 ┃ ┣ 📜singleCharOrange.png
 ┃ ┣ 📜singleCharYellow.png
 ┃ ┗ 📜testExplain.png
 ┣ 📂components
 ┃ ┣ 📂AnimateLayout
 ┃ ┃ ┗ 📜AnimateLayout.tsx
 ┃ ┣ 📂CardSlide
 ┃ ┃ ┣ 📜CardSlide.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂CharBlock
 ┃ ┃ ┣ 📜CharBlock.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂LoadingOverlay
 ┃ ┃ ┣ 📜LoadingOverlay.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂MbtiModal
 ┃ ┃ ┣ 📜MbtiModal.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂MeltShow
 ┃ ┃ ┣ 📜MeltShow.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂MemberImgCard
 ┃ ┃ ┣ 📜MemberImgCard.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂NextBtn
 ┃ ┃ ┣ 📜NextBtn.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂RectangleBtn
 ┃ ┃ ┣ 📜RectangleBtn.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂Tooltip
 ┃ ┃ ┣ 📜styles.ts
 ┃ ┃ ┗ 📜Tooltip.tsx
 ┃ ┗ 📜index.ts
 ┣ 📂constants
 ┃ ┣ 📜adjectiveList.ts
 ┃ ┣ 📜balanceList.ts
 ┃ ┣ 📜nicknamePattern.ts
 ┃ ┣ 📜querykey.ts
 ┃ ┣ 📜serviceUrl.ts
 ┃ ┗ 📜testList.ts
 ┣ 📂contexts
 ┃ ┣ 📜NickNameContextProvider.tsx
 ┃ ┗ 📜TestContextProvider.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useNickNameContext.ts
 ┃ ┣ 📜useTestContext.ts
 ┃ ┗ 📜useTooltip.ts
 ┣ 📂pages
 ┃ ┣ 📂Adjective
 ┃ ┃ ┣ 📜Adjective.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂AdjectiveResult
 ┃ ┃ ┣ 📜AdjectiveResult.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂Balance
 ┃ ┃ ┣ 📜Balance.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂BalanceResult
 ┃ ┃ ┣ 📜BalanceResult.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂CreateRoom
 ┃ ┃ ┣ 📜CreateRoom.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂FinalResult
 ┃ ┃ ┣ 📜FinalResult.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂GameExplain
 ┃ ┃ ┣ 📜GameExplain.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂GameLobby
 ┃ ┃ ┣ 📜GameLobby.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂Main
 ┃ ┃ ┣ 📜Main.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂Mbti
 ┃ ┃ ┣ 📜Mbti.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂MbtiResult
 ┃ ┃ ┣ 📜MbtiResult.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂Question
 ┃ ┃ ┣ 📜Question.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂TestExplain
 ┃ ┃ ┣ 📜styles.ts
 ┃ ┃ ┗ 📜TestExplain.tsx
 ┃ ┣ 📂TestPage
 ┃ ┃ ┣ 📜styles.ts
 ┃ ┃ ┗ 📜TestPage.tsx
 ┃ ┣ 📂TestResult
 ┃ ┃ ┣ 📜styles.ts
 ┃ ┃ ┗ 📜TestResult.tsx
 ┃ ┗ 📜index.ts
 ┣ 📂types
 ┃ ┣ 📜AdjectiveListDto.ts
 ┃ ┣ 📜BalanceResultDto.ts
 ┃ ┣ 📜FinalResultDto.ts
 ┃ ┣ 📜MbtiOrderDto.ts
 ┃ ┗ 📜MbtiResultDto.ts
 ┣ 📂utils
 ┃ ┣ 📜clipboardCopy.ts
 ┃ ┣ 📜createUrl.ts
 ┃ ┣ 📜pageCountConvert.ts
 ┃ ┣ 📜returnChar.ts
 ┃ ┗ 📜splitBalance.ts
 ┣ 📜App.tsx
 ┣ 📜GlobalStyle.tsx
 ┣ 📜index.tsx
 ┣ 📜Router.tsx
 ┗ 📜vite-env.d.ts
```

## 주요 구현 사항

- 모바일 서비스를 우선적으로 생각한 GlobalStyle 설정
   + 웹뷰용 옵션들 추가(-webkit-tap-highlight-color, user-select, -webkit-touch-callout)
- `game`과 일반 서비스 를 구별하여 두개의 라우터 생성
  + 큰 도메인에서 구별되게 구현
- `React lazy`와 `Suspense`를 결합한 `CodeSplitting` 구현
  + 프로젝트가 게임 형식으로 구현되면서, 각 페이지의 로드에 빠른 로드와 반응성이 필요했음
  + 라우터단에서 React.lazy 적용. 초기 로딩 속도를 줄이고, 반응성을 향상 시킴
  + Suspense를 적용시켜서 fallback UI를 마련하여, 유저에게는 동적 import대한 정보를 상기시킴
- `React-Query`의 `Suspense`옵션과 각 컴포넌트 `Suspense`적용
  + React-Query의 queryClient에서 suspense사용을 허용
  + 각 페이지의 API 패칭에 대한 로드 처리를 로컬 suspense로 통일
- 사용자의 닉네임과 테스트 결과를 `Context`로 보관
  + 닉네임과 테스트 결과는 URL의 QueryParam을 통해서 저장하기 애매함
  + 따라서 해당 정보들은 React Context에 저장함으로써 전역적으로 접근가능하게 구현
  + Props Drilling 없이 효과적으로 정보들 공유 및 전달
  + useTextContext와 useNickNameContext로 컴포넌트단에서 쉽게 Context를 꺼내쓰도록 커스텀 훅 구현
- `Framer-Motion`의 `AnimatedPrensence` 전역 설정
  + motion.div를 각 로컬 컴포넌트에 적용함으로써 애니메이션을 페이지에 따라 커스텀하게 구현
- `SSE(Server-Sent-Events)`를 통한 게임 진행 구현
  + Polling방식과 TimeOut(20초)를 설정하여 게임을 진행하면, 한게임당 대략 600번(4명기준)의 API 콜 발생
  + 너무많은 API호출 횟수와, 필연적으로 설정해야 하는 Timeout으로 인해 Polling방식의 한계를 경험
  + 백엔드와 협의하에 SSE를 구현하여 모든 사용자가 준비됐을때 SSE를 수신하여 다음 게임, 문제로 넘어가게 구현
- `axios interceptor`를 통한 전역적인 axios response와 request에 대한 에러처리 구현
- `axios instance`를 통한 api 전역 엔드포인트 설정
- 다수의 Util 함수 작성으로 인한 코드 추상화 및 반복되는 코드 감소
- 서버에서 넘어오는 API 응답에 대한 Interface DTO 설정
- `vite.config.ts`에서 절대경로 설정 추가
- Component폴더와 Pages 폴더에서 index.ts를 이용한 `named-export`구현
- `Object.freeze`를 활용한 상수 객체들 불변화
    


## 리팩토링 진행

- `Object.freeze`를 활용한 상수 객체들 불변화
