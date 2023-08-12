import{s,r as p,a as v,u as E,j as e,A as S}from"./index-5b0f04c0.js";import{c as q}from"./charWithHat-2099a171.js";import{N}from"./NextBtn-f94526ae.js";import{M as k}from"./MeltShow-4cb52bad.js";import{u as C}from"./postNextGame-63c6992d.js";import{d as I,i as Q}from"./querykey-12d6ec52.js";import{u as F}from"./useMutation-c5339b3b.js";import{m as r}from"./motion-735ca126.js";const P="/IceBreakers-FE/assets/question1-b8db9310.png",T="/IceBreakers-FE/assets/question2-6d9d07a8.png",B="/IceBreakers-FE/assets/question3-5f7a406a.png",M="/IceBreakers-FE/assets/question4-ce6fd310.png",_=s.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  margin: 0 24px;
  padding-bottom: 115px;
`,$=s.div`
  display: flex;
  gap: 15px;
  margin-top: 56px;
  align-items: center;
`,z=s.p`
  white-space: pre-line;
  height: 60px;
  font-size: 22px;
  line-height: 30px;
  font-weight: 600;
`,A=s.img`
  width: 87px;
`,a=s.div`
  margin-top: 28px;
  background: linear-gradient(152.16deg, #002b78, #050d1e);
  border-radius: 15px;
  width: 327px;
  height: 445px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
`,o=s.div`
  margin-top: 46px;
  width: 95px;
  height: 30px;
  border-radius: 15px;
  padding: 10px;
  font-size: 18px;
  font-weight: 600;
  background-color: #3163cf;
  display: flex;
  justify-content: center;
  align-items: center;
`,c=s.p`
  font-weight: 600;
  line-height: 34px;
  font-size: 22px;
  white-space: pre-line;
  margin-top: 20px;
  text-align: center;
  height: 102px;
  display: flex;
  align-items: center;
`,x=s.img`
  margin-top: 35px;
  width: 230px;
  height: 188px;
`,H=t=>{switch(t){case 1:return"첫";case 2:return"두";case 3:return"세";case 4:return"네";default:return"첫"}},O=async t=>{try{return(await Q.patch("/public-question/public-question",t)).data}catch(i){throw console.error("요청중 에러가 발생하였습니다:",i),i}},D=t=>F([I],()=>O(t),{onError:i=>{console.error("Query 처리중 에러가 발생하였습니다:",i)}});function V(){const[t,i]=p.useState(1),[u,h]=p.useState(!1),{token:n,userId:m}=v(),g=E(),{mutate:j}=C(n||" "),{mutate:f}=D({question_id:t,url:n||" "}),y=()=>{t===4?j():f()};return p.useEffect(()=>{const l=new EventSource("https://ice.wishu.site/events");return l.onmessage=w=>{const d=JSON.parse(w.data);d.url===n&&d.status&&(t===4?(h(!0),setTimeout(()=>{g(`/game/balance/${m}/${n}/1`)},3e3)):i(b=>b+1))},()=>{l.close()}},[t]),e.jsx(e.Fragment,{children:u?e.jsx(k,{id:2}):e.jsxs(_,{children:[e.jsxs($,{children:[e.jsxs(z,{children:[`${H(t)}번째 질문이에요!`,e.jsx("br",{}),"자유롭게 대화 해 볼까요?"]}),e.jsx(A,{src:q,alt:"마스코트 이미지"})]}),e.jsx(S,{children:e.jsxs(e.Fragment,{children:[t===1&&e.jsx(r.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:e.jsxs(a,{children:[e.jsx(o,{children:"1/4"}),e.jsxs(c,{children:["가장 최근에 본",e.jsx("br",{}),"영화는 무엇인가요?"]}),e.jsx(x,{src:P,alt:"질문 이미지"})]})}),t===2&&e.jsx(r.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:e.jsxs(a,{children:[e.jsx(o,{children:"2/4"}),e.jsxs(c,{children:["일하면서 음악을 즐겨듣나요?",e.jsx("br",{}),"듣는다면 어떤 종류의",e.jsx("br",{}),"음악을 듣나요?"]}),e.jsx(x,{src:T,alt:"질문 이미지"})]})}),t===3&&e.jsx(r.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:e.jsxs(a,{children:[e.jsx(o,{children:"3/4"}),e.jsxs(c,{children:["현재 노트북 배경화면은",e.jsx("br",{}),"무엇인가요?"]}),e.jsx(x,{src:B,alt:"질문 이미지"})]})}),t===4&&e.jsx(r.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:e.jsxs(a,{children:[e.jsx(o,{children:"4/4"}),e.jsxs(c,{children:["내일 세상이 멸망한다면",e.jsx("br",{}),"무엇을 하고싶나요?"]}),e.jsx(x,{src:M,alt:"질문 이미지"})]})})]})}),e.jsx(N,{text:t===4?"다음 게임 할래요!":"다음",onClick:y})]})})}export{V as default};
