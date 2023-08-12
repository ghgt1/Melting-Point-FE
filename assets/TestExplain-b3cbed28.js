import{s as e,r as m,u as d,a as f,j as t}from"./index-5b0f04c0.js";import{R as g}from"./RectangleBtn-f915a592.js";import{u as h,T as u}from"./useTooltip-2e1bd0d6.js";import{u as N}from"./useNickNameContext-2225cced.js";import{m as j}from"./motion-735ca126.js";const b=e.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`,k=e.h2`
  margin-top: 55px;
  white-space: pre-line;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  line-height: 33px;
`,T=e.img`
  margin-top: 35px;
  width: 260px;
  height: 211px;
`,y=e.p`
  margin-top: 92.5px;
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
`,E=e.input`
  text-align: center;
  margin-top: 13px;
  width: 147px;
  height: 25px;
  font-size: 16px;
  color: #838383;
  border-bottom: 1px solid #838383;
  padding-bottom: 6px;
  border-radius: 0;
  &::placeholder {
    font-size: 14px;
    text-align: center;
  }

  margin-bottom: 112px;
`,v="/IceBreakers-FE/assets/testExplain-337b5e06.png",w=/^[a-zA-Zㄱ-ㅣ가-힣0-9]{1,7}$/;function R(){const[i,o]=m.useState(""),{toolTip:s,setTooltipVisible:a}=h(),p=d(),{token:r}=f(),{setNickName:l}=N(),c=n=>{o(n.target.value)},x=()=>{w.test(i)?(l(i),p(`/test/${r}`)):a()};return t.jsx(j.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:t.jsxs(b,{children:[t.jsxs(k,{children:["먼저, ",t.jsx("br",{}),"간단한 테스트를 진행할거에요!"]}),t.jsx(T,{src:v,alt:"테스트 설명 이미지"}),t.jsx(y,{children:"닉네임을 설정해 주세요"}),t.jsx(E,{placeholder:"한글, 영문만 가능",value:i,onChange:c}),s&&t.jsx(u,{children:"닉네임은 특수문자 제외 1글자이상, 7글자 이하여야합니다."}),t.jsx(g,{text:"테스트 할게요",onClick:x})]})})}export{R as default};
