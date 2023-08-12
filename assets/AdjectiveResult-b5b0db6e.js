import{s as i,a as h,u,r as c,j as e,L as g}from"./index-590e0a99.js";import{c as f}from"./charWithHat-84fe79eb.js";import{c as j,i as v}from"./querykey-87bb2f4e.js";import{u as y}from"./useQuery-7e63b949.js";import{C as w,r as S}from"./returnChar-00f6dc21.js";import{N as C}from"./NextBtn-c819b2a1.js";import{M as E}from"./MeltShow-6e828a5c.js";import{u as k}from"./postNextGame-111ee742.js";import{m as b}from"./motion-bc0354a1.js";import"./useMutation-5fab2dc8.js";const N=i.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  padding-bottom: 115px;
  margin: 0 24px;
`,T=i.div`
  display: flex;
  gap: 60px;
  margin-top: 56px;
  align-items: center;
`,A=i.p`
  white-space: pre-line;
  height: 60px;
  font-size: 22px;
  line-height: 30px;
  font-weight: 600;
`,L=i.img`
  width: 87px;
`,R=i.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 11px;
`,_=i.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 323px;
  height: 115px;
  padding: 10px;
  background-color: #242b3a;
  border-radius: 15px;
`,$=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 90px;
  row-gap: 6px;
  column-gap: 9px;
`,z=i.div`
  width: 97px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4f7fe5;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 600;
`,B=async t=>{try{return(await v.get(`/adjective-expression/list/${t}`)).data}catch(r){throw console.error("요청중 에러가 발생하였습니다:",r),r}},G=t=>y([j],()=>B(t),{onError:r=>{console.error("Query 처리중 에러가 발생하였습니다:",r)}});function K(){const{token:t,userId:r}=h(),{data:o}=G(t||" "),{mutate:p}=k(t||" "),x=u(),[l,d]=c.useState(!1),m=()=>{p()};return c.useEffect(()=>{const s=new EventSource("https://ice.wishu.site/events");return s.onmessage=a=>{const n=JSON.parse(a.data);n.url===t&&n.status&&(d(!0),setTimeout(()=>{x(`/game/question/${r}/${t}`)},3e3))},()=>{s.close()}},[]),e.jsx(e.Fragment,{children:l?e.jsx(E,{id:1}):e.jsx(b.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:e.jsx(N,{children:e.jsxs(c.Suspense,{fallback:e.jsx(g,{onlySpinner:!0}),children:[e.jsxs(T,{children:[e.jsxs(A,{children:["형용사를 통해서 ",e.jsx("br",{})," 나를 소개해보세요!"]}),e.jsx(L,{src:f,alt:"마스코트 이미지"})]}),e.jsx(R,{children:o==null?void 0:o.map(s=>e.jsxs(_,{children:[e.jsx(w,{text:s.nickname,imgSrc:S(s.img_id),imgWidth:"80px",textSize:"14px"}),e.jsx($,{children:s.expressions.map((a,n)=>e.jsx(z,{children:a},n))})]},s.nickname))}),e.jsx(C,{text:"다음 게임 할래요!",onClick:m})]})})})})}export{K as default};
