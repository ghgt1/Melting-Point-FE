import{s,r as p,a as v,u as S,j as t,A as q}from"./index-590e0a99.js";import{c as N}from"./charWithHat-84fe79eb.js";import{N as C}from"./NextBtn-c819b2a1.js";import{M as E}from"./MeltShow-6e828a5c.js";import{u as Q}from"./postNextGame-111ee742.js";import{d as P,i as T}from"./querykey-87bb2f4e.js";import{u as M}from"./useMutation-5fab2dc8.js";import{m as a}from"./motion-bc0354a1.js";const k="/assets/question1-b8db9310.png",I="/assets/question2-6d9d07a8.png",_="/assets/question3-5f7a406a.png",$="/assets/question4-ce6fd310.png",z=s.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  margin: 0 24px;
  padding-bottom: 115px;
`,A=s.div`
  display: flex;
  gap: 15px;
  margin-top: 56px;
  align-items: center;
`,F=s.p`
  white-space: pre-line;
  height: 60px;
  font-size: 22px;
  line-height: 30px;
  font-weight: 600;
`,H=s.img`
  width: 87px;
`,r=s.div`
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
`,O=e=>{switch(e){case 1:return"첫";case 2:return"두";case 3:return"세";case 4:return"네";default:return"첫"}},B=async e=>{try{return(await T.patch("/public-question/public-question",e)).data}catch(i){throw console.error("요청중 에러가 발생하였습니다:",i),i}},D=e=>M([P],()=>B(e),{onError:i=>{console.error("Query 처리중 에러가 발생하였습니다:",i)}});function V(){const[e,i]=p.useState(1),[u,h]=p.useState(!1),{token:n,userId:m}=v(),g=S(),{mutate:j}=Q(n||" "),{mutate:f}=D({question_id:e,url:n||" "}),y=()=>{e===4?j():f()};return p.useEffect(()=>{const l=new EventSource("https://ice.wishu.site/events");return l.onmessage=w=>{const d=JSON.parse(w.data);d.url===n&&d.status&&(e===4?(h(!0),setTimeout(()=>{g(`/game/balance/${m}/${n}/1`)},3e3)):i(b=>b+1))},()=>{l.close()}},[e]),t.jsx(t.Fragment,{children:u?t.jsx(E,{id:2}):t.jsxs(z,{children:[t.jsxs(A,{children:[t.jsxs(F,{children:[`${O(e)}번째 질문이에요!`,t.jsx("br",{}),"자유롭게 대화 해 볼까요?"]}),t.jsx(H,{src:N,alt:"마스코트 이미지"})]}),t.jsx(q,{children:t.jsxs(t.Fragment,{children:[e===1&&t.jsx(a.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:t.jsxs(r,{children:[t.jsx(o,{children:"1/4"}),t.jsxs(c,{children:["가장 최근에 본",t.jsx("br",{}),"영화는 무엇인가요?"]}),t.jsx(x,{src:k,alt:"질문 이미지"})]})}),e===2&&t.jsx(a.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:t.jsxs(r,{children:[t.jsx(o,{children:"2/4"}),t.jsxs(c,{children:["일하면서 음악을 즐겨듣나요?",t.jsx("br",{}),"듣는다면 어떤 종류의",t.jsx("br",{}),"음악을 듣나요?"]}),t.jsx(x,{src:I,alt:"질문 이미지"})]})}),e===3&&t.jsx(a.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:t.jsxs(r,{children:[t.jsx(o,{children:"3/4"}),t.jsxs(c,{children:["현재 노트북 배경화면은",t.jsx("br",{}),"무엇인가요?"]}),t.jsx(x,{src:_,alt:"질문 이미지"})]})}),e===4&&t.jsx(a.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:t.jsxs(r,{children:[t.jsx(o,{children:"4/4"}),t.jsxs(c,{children:["내일 세상이 멸망한다면",t.jsx("br",{}),"무엇을 하고싶나요?"]}),t.jsx(x,{src:$,alt:"질문 이미지"})]})})]})}),t.jsx(C,{text:e===4?"다음 게임 할래요!":"다음",onClick:y})]})})}export{V as default};
