import{v as p,w as b,R as f,K as h,U as v,O as R,r as l}from"./index-590e0a99.js";import{u as M,s as y}from"./querykey-87bb2f4e.js";class m extends p{constructor(t,e){super(),this.client=t,this.setOptions(e),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var e;const r=this.options;this.options=this.client.defaultMutationOptions(t),b(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(e=this.currentMutation)==null||e.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const e={listeners:!0};t.type==="success"?e.onSuccess=!0:t.type==="error"&&(e.onError=!0),this.notify(e)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:f(),e={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=e}notify(t){h.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var e,r,u,s;(e=(r=this.mutateOptions).onSuccess)==null||e.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(u=(s=this.mutateOptions).onSettled)==null||u.call(s,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var i,o,n,a;(i=(o=this.mutateOptions).onError)==null||i.call(o,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(n=(a=this.mutateOptions).onSettled)==null||n.call(a,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(({listener:d})=>{d(this.currentResult)})})}}function S(c,t,e){const r=v(c,t,e),u=R({context:r.context}),[s]=l.useState(()=>new m(u,r));l.useEffect(()=>{s.setOptions(r)},[s,r]);const i=M(l.useCallback(n=>s.subscribe(h.batchCalls(n)),[s]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),o=l.useCallback((n,a)=>{s.mutate(n,a).catch(O)},[s]);if(i.error&&y(s.options.useErrorBoundary,[i.error]))throw i.error;return{...i,mutate:o,mutateAsync:i.mutate}}function O(){}export{S as u};
