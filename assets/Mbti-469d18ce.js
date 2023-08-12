import{s as c,a as E,u as _,r,j as e,L as b}from"./index-590e0a99.js";import{N as T}from"./NextBtn-c819b2a1.js";import{C as I,r as B}from"./returnChar-00f6dc21.js";import{u as P}from"./getMbtiOrder-2e989732.js";import{g as F,i as J}from"./querykey-87bb2f4e.js";import{u as O}from"./useMutation-5fab2dc8.js";import{m as L}from"./motion-bc0354a1.js";import"./useQuery-7e63b949.js";const z=c.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  margin: 0 24px;
  padding-bottom: 115px;
`,C=c.p`
  margin-top: 46px;
  height: 66px;
  text-align: center;
  white-space: pre-line;
  font-weight: bold;
  line-height: 33px;
  font-size: 22px;
`,S=c.p`
  margin-top: 4px;
  color: #838383;
  height: 22px;
  margin-bottom: 10px;
`,R=c.div`
  margin-top: 69px;
  width: 327px;
  height: 230px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`,p=c.div`
  width: 327px;
  display: flex;
  gap: 7px;
`,n=c.div`
  background-color: ${i=>i.$isCheck?"#3163cf":"#242b3a"};
  border-radius: 15px;
  padding: 8px 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 49px;
`,D=async i=>{try{return(await J.post("/mbti",i)).data}catch(s){throw console.error("요청중 에러가 발생하였습니다:",s),s}},K=i=>O([F],()=>D(i),{onError:s=>{console.error("Query 처리중 에러가 발생하였습니다:",s)}});function V(){const{token:i,userId:s,number:o}=E(),y=_(),[$,v]=r.useState(!1),[l,d]=r.useState(""),[a,u]=r.useState(""),[x,m]=r.useState(""),[h,g]=r.useState(""),{data:t}=P(i||" ",Number(o||1)),{mutate:M}=K({url:i||" ",user_id:Number(s||1),round_id:Number(o||1),mbti:l+a+x+h,to_user_id:(t==null?void 0:t.user_id)||1}),j=Number(s||1)===(t==null?void 0:t.user_id),N=()=>{v(!0),M()};return r.useEffect(()=>{const k=new EventSource("https://ice.wishu.site/events");return k.onmessage=w=>{const f=JSON.parse(w.data);f.url===i&&f.status&&o&&y(`/game/mbti/result/${s}/${i}/${+o}`)},()=>{k.close()}},[]),e.jsxs(L.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},children:[e.jsx(z,{children:e.jsxs(r.Suspense,{fallback:e.jsx(b,{onlySpinner:!0}),children:[j?e.jsxs(C,{children:["나의 MBTI를",e.jsx("br",{}),"선택해주세요"]}):e.jsxs(C,{children:[`${t==null?void 0:t.nickname}의 MBTI를`,e.jsx("br",{}),"추측해보세요"]}),j?e.jsx(S,{children:"팀원들이 MBTI를 추측해줄거에요"}):e.jsx(S,{children:"중복선택은 불가능해요"}),e.jsx(I,{text:(t==null?void 0:t.nickname)||" ",textSize:"20px",imgWidth:"167px",imgSrc:B((t==null?void 0:t.img_id)||1)}),e.jsxs(R,{children:[e.jsxs(p,{children:[e.jsx(n,{$isCheck:l==="E",onClick:()=>{d("E")},children:"E"}),e.jsx(n,{$isCheck:l==="I",onClick:()=>{d("I")},children:"I"})]}),e.jsxs(p,{children:[e.jsx(n,{$isCheck:a==="N",onClick:()=>{u("N")},children:"N"}),e.jsx(n,{$isCheck:a==="S",onClick:()=>{u("S")},children:"S"})]}),e.jsxs(p,{children:[e.jsx(n,{$isCheck:x==="F",onClick:()=>{m("F")},children:"F"}),e.jsx(n,{$isCheck:x==="T",onClick:()=>{m("T")},children:"T"})]}),e.jsxs(p,{children:[e.jsx(n,{$isCheck:h==="P",onClick:()=>{g("P")},children:"P"}),e.jsx(n,{$isCheck:h==="J",onClick:()=>{g("J")},children:"J"})]})]})]})}),e.jsx(T,{text:"다음",onClick:N,isFinish:l.length===1&&a.length===1&&x.length===1&&h.length===1}),$&&e.jsx(b,{})]})}export{V as default};
