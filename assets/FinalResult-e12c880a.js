import{s as i,a as h,u as g,r as s,j as e,L as f}from"./index-5b0f04c0.js";import{l as y,i as j}from"./querykey-12d6ec52.js";import{u as w}from"./useQuery-3cddce02.js";import{u as S}from"./postNextGame-63c6992d.js";import{N as v}from"./NextBtn-f94526ae.js";import{M as b,r as c,a as C,b as E,c as N}from"./roomCharBlue-2f28d0c3.js";import{M as k}from"./MeltShow-4cb52bad.js";import{m as F}from"./motion-735ca126.js";import"./useMutation-c5339b3b.js";const M=i.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  margin: 0 24px;
  padding-bottom: 115px;
`,R=i.p`
  height: 33px;
  font-size: 22px;
  font-weight: bold;
  margin-top: 32px;
`,L=i.p`
  margin-top: 6px;
  height: 22px;
  color: #838383;
`,T=i.div`
  margin-top: 23px;
  width: 327px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 11px;
  column-gap: 16px;
`,_=i.div`
  width: 158px;
  height: 252px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`,B=i.div`
  background-color: #242b3a;
  border-radius: 10px;
  height: 32px;
  width: 158px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  margin-top: 10px;
`,G=async r=>{try{return(await j.get(`/mbti/final/${r}`)).data}catch(n){throw console.error("요청중 에러가 발생하였습니다:",n),n}},I=r=>w([y],()=>G(r),{onError:n=>{console.error("Query 처리중 에러가 발생하였습니다:",n)}});function K(){const{token:r}=h(),n=g(),[l,m]=s.useState(!1),{data:o}=I(r||" "),{mutate:p}=S(r||" "),x=t=>{switch(t){case 1:return c;case 2:return N;case 3:return E;case 4:return C;default:return c}};s.useEffect(()=>{const t=new EventSource("https://ice.wishu.site/events");return t.onmessage=d=>{const a=JSON.parse(d.data);a.url===r&&a.status&&(m(!0),setTimeout(()=>{n("/")},3e3))},()=>{t.close()}},[]);const u=()=>{p()};return e.jsx(e.Fragment,{children:l?e.jsx(k,{id:4}):e.jsx(F.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:e.jsx(M,{children:e.jsxs(s.Suspense,{fallback:e.jsx(f,{onlySpinner:!0}),children:[e.jsx(R,{children:"우리 팀원을 소개합니다!"}),e.jsx(L,{children:"팀원들에 대해 많이 알게 되셨나요?"}),e.jsx(T,{children:o==null?void 0:o.map(t=>e.jsxs(_,{children:[e.jsx(b,{name:t.nickname,src:x(t.img_id)}),e.jsx(B,{children:t.mbti})]},t.nickname))}),e.jsx(v,{onClick:u,text:"마무리 할게요!"})]})})})})}export{K as default};
