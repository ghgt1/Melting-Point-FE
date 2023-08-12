import{s as a,a as h,u as d,r as i,j as e,L as g}from"./index-590e0a99.js";import{u as f}from"./getRoomStatus-4c843c97.js";import{M as y,r as c,a as j,b as v,c as b}from"./roomCharBlue-e1909e5f.js";import{N as w}from"./NextBtn-c819b2a1.js";import{a as C,i as R}from"./querykey-87bb2f4e.js";import{u as S}from"./useMutation-5fab2dc8.js";import{m as E}from"./motion-bc0354a1.js";import"./useQuery-7e63b949.js";const M=a.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
`,N=a.p`
  height: 30px;
  margin-top: 50px;
  font-size: 22px;
  font-weight: bold;
`,O=a.p`
  margin-top: 4px;
  height: 22px;
  color: #838383;
  text-align: center;
`,k=a.p`
  margin-top: 4px;
  line-height: 22px;
  white-space: pre-line;
  height: 44px;
  color: #838383;
  text-align: center;
  margin-bottom: 23px;
`,I=a.div`
  margin-top: 45px;
  width: 330px;
  height: 433px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 11px;
  column-gap: 11px;
  margin-bottom: 30px;
`,_=async t=>{try{return(await R.patch(`/user-url/status/${t}`)).data}catch(r){throw console.error("요청중 에러가 발생하였습니다:",r),r}},$=t=>S([C],()=>_(t),{onError:r=>{console.error("Query 처리중 에러가 발생하였습니다:",r)}}),B=t=>{switch(t){case 1:return c;case 2:return b;case 3:return v;case 4:return j;default:return c}};function H(){const{token:t,userId:r}=h(),m=d(),{data:n,refetch:p}=f(t||" "),{mutate:l}=$(t||" "),u=()=>{l()};return i.useEffect(()=>{const o=new EventSource("https://ice.wishu.site/events");return o.onmessage=x=>{const s=JSON.parse(x.data);s.url===t&&(s.status?m(`/game/adjective/${r}/${t}`):p())},()=>{o.close()}},[]),e.jsx(E.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:e.jsx(M,{children:e.jsxs(i.Suspense,{fallback:e.jsx(g,{onlySpinner:!0}),children:[e.jsx(N,{children:"다른 팀원을 기다리고 있어요"}),e.jsx(O,{children:"팀원이 모두 모이면 게임이 시작됩니다"}),e.jsx(I,{children:n==null?void 0:n.userInfo.map(o=>e.jsx(y,{src:B(o.img_id),name:o.nickname},o.id))}),e.jsxs(k,{children:["현재 버전에서는 최대 4명의 팀원까지",e.jsx("br",{})," 참여가 가능해요"]}),e.jsx(w,{text:"모두 모였어요!",onClick:u})]})})})}export{H as default};
