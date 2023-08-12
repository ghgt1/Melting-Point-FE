import{s,a as N,u as B,r as m,j as e,L as E}from"./index-590e0a99.js";import{f as _,i as z}from"./querykey-87bb2f4e.js";import{u as P}from"./useQuery-7e63b949.js";import{N as A}from"./NextBtn-c819b2a1.js";import{C as u,r as f}from"./returnChar-00f6dc21.js";import{M as L}from"./MeltShow-6e828a5c.js";import{u as M}from"./postNextGame-111ee742.js";import{m as T}from"./motion-bc0354a1.js";import"./useMutation-5fab2dc8.js";const D=s.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  margin: 0 24px;
  padding-bottom: 115px;
`,R=s.div`
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
`,F=s.p`
  margin-top: 30px;
  height: 33px;
  font-size: 22px;
  font-weight: bold;
`,G=s.p`
  height: 22px;
  margin-top: 3px;
  color: #838383;
`,O=s.div`
  height: 422px;
  width: 327px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top: 45px;
`,j=s.div`
  border-radius: 15px;
  width: 327px;
  height: 205px;
  background-color: ${n=>n.$isCheck?"#3163cf":"#5978b9"};
  padding: 20px 0px;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
`,y=s.p`
  padding: 0 65px;
  font-size: 18px;
  font-weight: 600;
  word-break: keep-all;
`,b=s.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`,c=s.p`
  width: auto;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 6px;
`,S=s.div`
  margin-top: 20px;
  width: 327px;
  height: 60px;
  display: flex;
  gap: 9px;
  justify-content: center;
  align-items: center;
`,Q=async(n,o)=>{try{return(await z.get("/balance-game",{params:{url:n,balance_id:o}})).data}catch(i){throw console.error("요청중 에러가 발생하였습니다:",i),i}},W=(n,o)=>P([_],()=>Q(n,o),{onError:i=>{console.error("Query 처리중 에러가 발생하였습니다:",i)}}),x=n=>{const o=n.split(":"),i=o[0].trim(),a=parseFloat(o[1]);return[i,a]};function Z(){const{token:n,userId:o,number:i}=N(),a=B(),{data:t}=W(n||" ",Number(i||1)),{mutate:w}=M(n||" "),[k,v]=m.useState(!1),p=x((t==null?void 0:t.percent[0])||" ")[1],h=x((t==null?void 0:t.percent[0])||" ")[0],l=x((t==null?void 0:t.percent[1])||" ")[1],d=x((t==null?void 0:t.percent[1])||" ")[0],C=()=>{w()};return m.useEffect(()=>{const r=new EventSource("https://ice.wishu.site/events");return r.onmessage=$=>{const g=JSON.parse($.data);g.url===n&&g.status&&(Number(i)===4?(v(!0),setTimeout(()=>{a(`/game/mbti/${o}/${n}/1`)},3e3)):i&&a(`/game/balance/${o}/${n}/${+i+1}`))},()=>{r.close()}},[]),e.jsx(e.Fragment,{children:k?e.jsx(L,{id:3}):e.jsx(T.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:e.jsx(D,{children:e.jsxs(m.Suspense,{fallback:e.jsx(E,{onlySpinner:!0}),children:[e.jsx(R,{children:`${i}/4`}),e.jsx(F,{children:"자유롭게 논의해보세요"}),e.jsx(G,{children:"팀원들의 선택 결과에요"}),e.jsxs(O,{children:[e.jsxs(j,{$isCheck:p>l,children:[e.jsxs(b,{children:[e.jsx(c,{}),e.jsx(c,{children:"A."}),e.jsx(c,{children:`${p}%`})]}),e.jsx(y,{children:h}),e.jsx(S,{children:t==null?void 0:t.user.map(r=>{if(r.balance_type===h)return e.jsx(u,{text:r.nickname,textSize:"10px",imgWidth:"60px",imgSrc:f(r.img_id)},r.nickname)})})]}),e.jsxs(j,{$isCheck:l>p,children:[e.jsxs(b,{children:[e.jsx(c,{}),e.jsx(c,{children:"B."}),e.jsx(c,{children:`${l}%`})]}),e.jsx(y,{children:d}),e.jsx(S,{children:t==null?void 0:t.user.map(r=>{if(r.balance_type===d)return e.jsx(u,{text:r.nickname,textSize:"10px",imgWidth:"60px",imgSrc:f(r.img_id)},r.nickname)})})]})]}),e.jsx(A,{text:Number(i)===4?"다음 게임 할게요!":"다음",onClick:C})]})})})})}export{Z as default};
