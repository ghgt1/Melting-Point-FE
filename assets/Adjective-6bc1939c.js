import{s as r,r as n,a as y,u as w,j as s,L as S}from"./index-5b0f04c0.js";import{u as b,T as E}from"./useTooltip-2e1bd0d6.js";import{N as k}from"./NextBtn-f94526ae.js";import{b as A,i as C}from"./querykey-12d6ec52.js";import{u as T}from"./useMutation-c5339b3b.js";import{m as N}from"./motion-735ca126.js";const $=r.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  padding-bottom: 100px;
`,_=r.p`
  height: 60px;
  margin-top: 50px;
  font-size: 22px;
  font-weight: 600;
  line-height: 30px;
  white-space: pre-line;
  text-align: center;
`,D=r.p`
  color: #838383;
  margin-top: 6px;
  margin-bottom: 40px;
  height: 44px;
`,I=r.div`
  width: 330px;
  height: 440px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 7px;
  column-gap: 11px;
`,L=r.div`
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  width: 160px;
  height: 45px;
  padding: 7.5px 58.5px;
  font-weight: 600;
  background-color: ${e=>e.$isChecked?"#3163cf":"#242b3a"};
`,O=[{id:1,expression:"꼼꼼한"},{id:2,expression:"솔직한"},{id:3,expression:"자신감 있는"},{id:4,expression:"사려깊은"},{id:5,expression:"신중한"},{id:6,expression:"쾌활한"},{id:7,expression:"침착한"},{id:8,expression:"내성적인"},{id:9,expression:"외향적인"},{id:10,expression:"긍정적인"},{id:11,expression:"열정적인"},{id:12,expression:"다정한"},{id:13,expression:"부지런한"},{id:14,expression:"정직한"},{id:15,expression:"즉흥적인"},{id:16,expression:"엉뚱한"}],P=async e=>{try{return(await C.post("/adjective-expression",e)).data}catch(i){throw console.error("요청중 에러가 발생하였습니다:",i),i}},B=e=>T([A],()=>P(e),{onError:i=>{console.error("Query 처리중 에러가 발생하였습니다:",i)}});function M(){const[e,i]=n.useState([]),[x,p]=n.useState(!1),[l,u]=n.useState(!1),{toolTip:h,setTooltipVisible:m}=b(),{token:c,userId:d}=y(),f=w(),{mutate:g}=B({url:c||" ",user_id:Number(d)||0,expression_id:e}),j=()=>{u(!0),g()},v=t=>{if(e.includes(t)){const o=e.filter(a=>a!==t);i(o)}else e.length===4?m():i([...e,t])};return n.useEffect(()=>{e.length>=1?p(!0):p(!1)},[e]),n.useEffect(()=>{const t=new EventSource("https://ice.wishu.site/events");return t.onmessage=o=>{const a=JSON.parse(o.data);a.url===c&&a.status&&f(`/game/adjective/result/${d}/${c}`)},()=>{t.close()}},[]),s.jsxs(N.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:[s.jsxs($,{children:[s.jsxs(_,{children:["나를 표현할 수 있는",s.jsx("br",{}),"형용사를 선택해주세요"]}),s.jsxs(D,{children:["최소 1가지이상을 선택해주세요",s.jsx("br",{}),"최대 4가지까지 선택이 가능해요"]}),s.jsx(I,{children:O.map((t,o)=>s.jsx(L,{$isChecked:e.includes(o+1),onClick:()=>{v(t.id)},children:t.expression},t.id))}),h&&s.jsx(E,{children:"형용사는 최소 1개에서 최대 4개까지 선택 가능해요"})]}),s.jsx(k,{text:"결과 볼게요!",onClick:j,isFinish:x}),l&&s.jsx(S,{})]})}export{M as default};
