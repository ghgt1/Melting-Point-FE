import{s as n,u as h,a as g,j as r}from"./index-590e0a99.js";import{u as f}from"./useNickNameContext-98e153c6.js";import{u as d,T}from"./useTooltip-ea81c0b1.js";import{u as y,a as s}from"./testList-3148c0fc.js";import{N as j}from"./NextBtn-c819b2a1.js";import{P as w,i,G as k}from"./querykey-87bb2f4e.js";import{u as C}from"./useMutation-5fab2dc8.js";import{u as E}from"./useQuery-7e63b949.js";import{m as b}from"./motion-bc0354a1.js";const N=n.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  padding-bottom: 115px;
`,_=n.p`
  color: #838383;
  font-size: 16px;
  margin-top: 30px;
  height: 22px;
`,G=n.p`
  line-height: 30px;
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 4px;
  height: 60px;
  white-space: pre-line;
  text-align: center;
`,R=n.img`
  width: 280px;
  height: 400px;
  margin-top: 35px;
  margin-bottom: 30px;
`,S=n.p`
  line-height: 26px;
  margin: 0 32px;
  text-align: center;
  font-size: 16px;
  color: #c0c0c0;
  height: 52px;
  margin-top: 4px;
  margin-bottom: 50px;
`,v="/assets/charOrange-ed3aaf6f.png",O="/assets/charYellow-7a044e0b.png",$="/assets/charGreen-7a5000ee.png",a="/assets/charBlue-cd98447b.png",I=async e=>{try{return(await i.post("/user-url/check-in",e)).data}catch(t){throw console.error("요청중 에러가 발생하였습니다:",t),t}},P=e=>{const t=h();return C([w],()=>I(e),{onError:o=>{console.error("Query 처리중 에러가 발생하였습니다:",o)},onSuccess:o=>{t(`/game/${o.user_id}/${e.url}`)}})},Y=async e=>{try{return(await i.get(`/user-url/check-url/${e}`)).data}catch(t){throw console.error("요청중 에러가 발생하였습니다:",t),t}},z=e=>E([k],()=>Y(e),{onError:t=>{console.error("Query 처리중 에러가 발생하였습니다:",t)}});function F(){const{nickName:e}=f(),{result:t}=y(),{token:o}=g(),{toolTip:c,setTooltipVisible:l}=d(),{mutate:p}=P({img_id:s[t][0],nickname:e||" ",url:o||" "}),{data:m}=z(o||" "),u=()=>{m?p():l()},x=(()=>{switch(s[t][0]){case 1:return a;case 2:return v;case 3:return $;case 4:return O;default:return a}})();return r.jsx(b.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:r.jsxs(N,{children:[r.jsx(_,{children:"테스트가 완료되었어요"}),r.jsxs(G,{children:[`${e} 님은`,r.jsx("br",{}),`${s[t][1]}이네요!`]}),r.jsx(R,{src:x,alt:s[t][1]}),r.jsx(S,{children:s[t][2]}),r.jsx(j,{text:"다음",onClick:u}),c&&r.jsx(T,{children:"게임이 시작되어 입장이 불가능합니다"})]})})}export{F as default};
