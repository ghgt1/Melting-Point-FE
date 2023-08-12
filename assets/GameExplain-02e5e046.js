import{s as e,a as c,u as x,r as l,j as t}from"./index-5b0f04c0.js";import{N as m}from"./NextBtn-f94526ae.js";import{m as g}from"./motion-735ca126.js";const h=e.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  padding-bottom: 115px;
`,d=e.p`
  margin-top: 50px;
  white-space: pre-line;
  height: 60px;
  font-size: 22px;
  line-height: 30px;
  font-weight: bold;
`,u=e.p`
  height: 22px;
  color: #838383;
`,f=e.img`
  margin-top: 35px;
  width: 260px;
  height: 450px;
`,j="/IceBreakers-FE/assets/gameExplain-7528b883.png";function b(){const{token:i,userId:s}=c(),a=x(),r=()=>{a(`/game/lobby/${s}/${i}`)};return l.useEffect(()=>{const n=new EventSource("https://ice.wishu.site/events");return n.onmessage=p=>{const o=JSON.parse(p.data);o.url===i&&o.status&&a(`/game/adjective/${s}/${i}`)},()=>{n.close()}},[]),t.jsx(g.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:t.jsxs(h,{children:[t.jsxs(d,{children:["우리 팀의 아이스브레이킹은",t.jsx("br",{}),"이렇게 진행될 예정이에요"]}),t.jsx(u,{children:"아직은 차가운 분위기를 녹여볼까요?"}),t.jsx(f,{src:j,alt:"게임 설명 이미지"}),t.jsx(m,{text:"시작할래요!",onClick:r})]})})}export{b as default};
