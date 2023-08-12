import{s as n,u as h,a as g,j as r}from"./index-5b0f04c0.js";import{u as f}from"./useNickNameContext-2225cced.js";import{u as d,T}from"./useTooltip-2e1bd0d6.js";import{u as k,a as o}from"./testList-9cdf88d3.js";import{N as E}from"./NextBtn-f94526ae.js";import{P as y,i,G as j}from"./querykey-12d6ec52.js";import{u as w}from"./useMutation-c5339b3b.js";import{u as C}from"./useQuery-3cddce02.js";import{m as b}from"./motion-735ca126.js";const I=n.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  padding-bottom: 115px;
`,N=n.p`
  color: #838383;
  font-size: 16px;
  margin-top: 30px;
  height: 22px;
`,_=n.p`
  line-height: 30px;
  font-size: 22px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 4px;
  height: 60px;
  white-space: pre-line;
  text-align: center;
`,B=n.img`
  width: 280px;
  height: 400px;
  margin-top: 35px;
  margin-bottom: 30px;
`,G=n.p`
  line-height: 26px;
  margin: 0 32px;
  text-align: center;
  font-size: 16px;
  color: #c0c0c0;
  height: 52px;
  margin-top: 4px;
  margin-bottom: 50px;
`,R="/IceBreakers-FE/assets/charOrange-ed3aaf6f.png",S="/IceBreakers-FE/assets/charYellow-7a044e0b.png",v="/IceBreakers-FE/assets/charGreen-7a5000ee.png",a="/IceBreakers-FE/assets/charBlue-cd98447b.png",O=async t=>{try{return(await i.post("/user-url/check-in",t)).data}catch(e){throw console.error("요청중 에러가 발생하였습니다:",e),e}},$=t=>{const e=h();return w([y],()=>O(t),{onError:s=>{console.error("Query 처리중 에러가 발생하였습니다:",s)},onSuccess:s=>{e(`/game/${s.user_id}/${t.url}`)}})},F=async t=>{try{return(await i.get(`/user-url/check-url/${t}`)).data}catch(e){throw console.error("요청중 에러가 발생하였습니다:",e),e}},P=t=>C([j],()=>F(t),{onError:e=>{console.error("Query 처리중 에러가 발생하였습니다:",e)}});function q(){const{nickName:t}=f(),{result:e}=k(),{token:s}=g(),{toolTip:c,setTooltipVisible:l}=d(),{mutate:p}=$({img_id:o[e][0],nickname:t||" ",url:s||" "}),{data:m}=P(s||" "),u=()=>{m?p():l()},x=(()=>{switch(o[e][0]){case 1:return a;case 2:return R;case 3:return v;case 4:return S;default:return a}})();return r.jsx(b.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:r.jsxs(I,{children:[r.jsx(N,{children:"테스트가 완료되었어요"}),r.jsxs(_,{children:[`${t} 님은`,r.jsx("br",{}),`${o[e][1]}이네요!`]}),r.jsx(B,{src:x,alt:o[e][1]}),r.jsx(G,{children:o[e][2]}),r.jsx(E,{text:"다음",onClick:u}),c&&r.jsx(T,{children:"게임이 시작되어 입장이 불가능합니다"})]})})}export{q as default};
