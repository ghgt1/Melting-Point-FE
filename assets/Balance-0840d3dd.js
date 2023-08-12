import{s,a as w,u as C,r,j as e,L as S}from"./index-5b0f04c0.js";import{e as v,i as N}from"./querykey-12d6ec52.js";import{u as B}from"./useMutation-c5339b3b.js";import{N as E}from"./NextBtn-f94526ae.js";import{m as $}from"./motion-735ca126.js";const _="/IceBreakers-FE/assets/balanceChar-62fdb012.png",z=s.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  margin: 0 24px;
  padding-bottom: 115px;
`,L=s.div`
  margin-top: 46px;
  width: 80px;
  height: 30px;
  border-radius: 15px;
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  background-color: #3163cf;
  display: flex;
  justify-content: center;
  align-items: center;
`,p=s.p`
  margin-top: 18px;
  height: 66px;
  text-align: center;
  white-space: pre-line;
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
`,P=s.img`
  margin-top: 18px;
  width: 150px;
  height: 150px;
`,A=s.div`
  height: 270px;
  width: 327px;
  display: flex;
  flex-direction: column;
  row-gap: 11px;
  margin-top: 26px;
`,d=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  width: 327px;
  height: 130px;
  padding: 0 55px;
  background-color: ${n=>n.$isCheck?"#3163cf":"#5978b9"};
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  line-height: 24px;
  word-break: keep-all;
`,h=s.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 18px;
`,o=[["불편한 상사랑 점심마다 소고기","짱 편한 동료랑 점심마다 컵라면 종류 고정"],["브레인 팀에서 숨쉬듯 자괴감 느끼기","내가 팀 내 유일한 희망되기"],["연봉 2500 / 5시 칼퇴 / 퇴근 후 자유","연봉 6000 / 9시 야근 / 퇴근 후 연락"],["사이 안좋은 상사가 자기 이름으로 내기","저장 전 컴퓨터 꺼져서 날리기 (복구안됨)"]],F=async n=>{try{return(await N.post("/balance-game",n)).data}catch(i){throw console.error("요청중 에러가 발생하였습니다:",i),i}},I=n=>B([v],()=>F(n),{onError:i=>{console.error("Query 처리중 에러가 발생하였습니다:",i)}});function K(){const{token:n,userId:i,number:t}=w(),u=C(),[a,c]=r.useState(),[m,g]=r.useState(!1),{mutate:f}=I({url:n||" ",balance_id:Number(t||1),user_id:Number(i||1),type:a&&t&&o[+t-1][a-1]}),b=()=>{c(1)},j=()=>{c(2)},k=()=>{g(!0),f()};return r.useEffect(()=>{const l=new EventSource("https://ice.wishu.site/events");return l.onmessage=y=>{const x=JSON.parse(y.data);x.url===n&&x.status&&t&&u(`/game/balance/result/${i}/${n}/${+t}`)},()=>{l.close()}},[]),e.jsxs($.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:[e.jsxs(z,{children:[e.jsx(L,{children:`${t}/4`}),Number(t||1)===4?e.jsxs(p,{children:["피땀눈물 흘려 완성한 제안서",e.jsx("br",{}),"둘 중 하나를 선택한다면?"]}):e.jsxs(p,{children:["둘 중 하나를",e.jsx("br",{}),"선택해야 한다면?"]}),e.jsx(P,{src:_,alt:"밸런스게임 마스코트"}),e.jsxs(A,{children:[e.jsxs(d,{$isCheck:a===1,onClick:b,children:[e.jsx(h,{children:"A."}),t&&o[+t-1][0]]}),e.jsxs(d,{$isCheck:a===2,onClick:j,children:[e.jsx(h,{children:"B."}),t&&o[+t-1][1]]})]})]}),e.jsx(E,{text:"결과 볼게요!",onClick:k,isFinish:a===1||a===2}),m&&e.jsx(S,{})]})}export{K as default};
