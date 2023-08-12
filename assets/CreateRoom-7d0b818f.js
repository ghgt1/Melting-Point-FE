import{s as n,u as p,j as e,r as m,L as x}from"./index-590e0a99.js";import{R as f}from"./RectangleBtn-9197aa2b.js";import{u as d,T as u}from"./useTooltip-ea81c0b1.js";import{c as h}from"./charWithHat-84fe79eb.js";import{C as y,i as g}from"./querykey-87bb2f4e.js";import{u as C}from"./useQuery-7e63b949.js";import{m as R}from"./motion-bc0354a1.js";const j=n.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`,E=n.h2`
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin-top: 73.45px;
`,T=n.img`
  width: 180px;
  margin-top: 70px;
`,U=n.p`
  font-size: 18px;
  color: #ffffff;
  margin-top: 70px;
  text-align: center;
`,v=n.p`
  font-size: 20px;
  color: #ffffff;
  margin: 18px 0 115px 0;
  text-decoration: underline;
  cursor: pointer;
`,w=t=>s=>{s.persist();const o=document.createElement("textarea");document.body.appendChild(o),o.value=t,o.select(),document.execCommand("copy"),document.body.removeChild(o)},L="melting-points.netlify.app",b=t=>`${L}/explain/${t}`,S=async()=>{try{return(await g.get("/user-url")).data}catch(t){throw console.error("요청중 에러가 발생하였습니다:",t),t}},O=()=>C([y],()=>S(),{onError:t=>{console.error("Query 처리중 에러가 발생하였습니다:",t)},refetchOnWindowFocus:!1});function N(){const{toolTip:t,setTooltipVisible:s}=d(),o=p(),{data:r}=O(),i=b(r||""),a=l=>{r&&w(`http://${i}`)(l),s()},c=()=>{o(`/explain/${r}`)};return e.jsx(R.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:e.jsx(j,{children:e.jsxs(m.Suspense,{fallback:e.jsx(x,{onlySpinner:!0}),children:[e.jsx(E,{children:"우리 팀의 방이 생성되었어요"}),e.jsx(T,{src:h,alt:"메인이미지"}),e.jsx(U,{children:r?i:" "}),e.jsx(v,{onClick:a,children:"복사해서 팀원에게 공유하기"}),t&&e.jsx(u,{children:"URL이 클립보드에 복사되었습니다"}),e.jsx(f,{text:"입장할게요",onClick:c})]})})})}export{N as default};
