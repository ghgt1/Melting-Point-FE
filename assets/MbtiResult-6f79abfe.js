import{j as t,d as y,e as k,f as S,h as v,s as c,a as N,u as w,r as x,L as C}from"./index-5b0f04c0.js";import{N as $}from"./NextBtn-f94526ae.js";import{C as h,r as g}from"./returnChar-5e05d573.js";import{h as B,i as E}from"./querykey-12d6ec52.js";import{u as T}from"./useQuery-3cddce02.js";import{u as _}from"./getMbtiOrder-46099cd9.js";import{u as R}from"./getRoomStatus-4143bdfa.js";import{u as I}from"./postNextGame-63c6992d.js";import{m as L}from"./motion-735ca126.js";import"./useMutation-c5339b3b.js";function O({isLast:s=!1,nickname:r,mbti:e,onClick:l}){return t.jsx(y,{children:t.jsxs(k,{children:[t.jsxs(S,{children:[`${r}님의 MBTI는`,t.jsx("br",{}),`${e}였습니다!`]}),t.jsx(v,{onClick:l,children:s?"다음 게임 할게요!":"다음 팀원 보기"})]})})}const z=async(s,r)=>{try{return(await E.get("/mbti/result",{params:{url:s,round_id:r}})).data}catch(e){throw console.error("요청중 에러가 발생하였습니다:",e),e}},P=(s,r)=>T([B],()=>z(s,r),{onError:e=>{console.error("Query 처리중 에러가 발생하였습니다:",e)}}),W=c.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  margin: 0 24px;
  padding-bottom: 115px;
`,G=c.p`
  margin-top: 46px;
  margin-bottom: 31.5px;
  height: 66px;
  text-align: center;
  white-space: pre-line;
  font-weight: bold;
  line-height: 33px;
  font-size: 22px;
`,Q=c.div`
  margin-top: 46px;
  width: 275px;
  height: 260px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`,J=c.div`
  display: flex;
  align-items: center;
  gap: 34px;
  border-radius: 15px;
  background-color: #1a1e27;
  width: 275px;
  height: 80px;
  padding: 10px 25px;
`,K=c.div`
  border-radius: 15px;
  background-color: #3163cf;
  width: 150px;
  height: 45px;
  font-weight: 600;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;function tt(){const{token:s,userId:r,number:e}=N(),l=w(),[f,m]=x.useState(!1),{data:o}=P(s||" ",Number(e||1)),{data:i}=_(s||" ",Number(e||1)),{data:a}=R(s||" "),{mutate:u}=I(s||" "),b=()=>{m(!0),u()},j=()=>{u()};return x.useEffect(()=>{const n=new EventSource("https://ice.wishu.site/events");let p=0;return n.onmessage=M=>{const d=JSON.parse(M.data);d.url===s&&d.status&&(p===0?(m(!0),p+=1):(a==null?void 0:a.userCount)===Number(e||1)?e&&l(`/game/final/result/${s}`):e&&l(`/game/mbti/${r}/${s}/${+e+1}`))},()=>{n.close()}},[e,a]),t.jsxs(L.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:[t.jsx(W,{children:t.jsxs(x.Suspense,{fallback:t.jsx(C,{onlySpinner:!0}),children:[t.jsxs(G,{children:["팀원들이 예상한",t.jsx("br",{}),`${i==null?void 0:i.nickname}님의 MBTI는?`]}),t.jsx(h,{text:(i==null?void 0:i.nickname)||" ",textSize:"20px",imgWidth:"167px",imgSrc:g((i==null?void 0:i.img_id)||1)}),t.jsx(Q,{children:o==null?void 0:o.user.map(n=>t.jsxs(J,{children:[t.jsx(h,{text:(n==null?void 0:n.nickname)||" ",textSize:"10px",imgWidth:"49px",imgSrc:g((n==null?void 0:n.img_id)||1)}),t.jsx(K,{children:n.choose_mbti})]},n.nickname))}),t.jsx($,{text:`${i==null?void 0:i.nickname}님의 MBTI는?`,onClick:b})]})}),f&&t.jsx(O,{nickname:(i==null?void 0:i.nickname)||" ",mbti:(o==null?void 0:o.user_mbti)||" ",onClick:j,isLast:(a==null?void 0:a.userCount)===Number(e||1)})]})}export{tt as default};
