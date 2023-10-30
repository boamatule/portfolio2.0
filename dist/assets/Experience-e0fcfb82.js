import{r as y,g as J,R as Q,j as x,F as X,a as p}from"./index-4c59d0be.js";import{b as Z}from"./index-f40733d9.js";import{s as W}from"./styles-bea25d13.js";import{e as ee}from"./index-0a214e1a.js";import{S as te,t as ne}from"./SectionWrapper-5f23e775.js";import{m as re}from"./motion-11d21ace.js";var D={exports:{}},ie="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ae=ie,oe=ae;function L(){}function U(){}U.resetWarningCache=L;var le=function(){function e(a,t,i,c,o,l){if(l!==oe){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function n(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:U,resetWarningCache:L};return r.PropTypes=r,r};D.exports=le();var q=D.exports,T={},B={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var n={}.hasOwnProperty;function r(){for(var a=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var c=typeof i;if(c==="string"||c==="number")a.push(i);else if(Array.isArray(i)){if(i.length){var o=r.apply(null,i);o&&a.push(o)}}else if(c==="object"){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){a.push(i.toString());continue}for(var l in i)n.call(i,l)&&i[l]&&a.push(l)}}}return a.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(B);var z=B.exports;T.__esModule=!0;T.default=void 0;var se=M(y),h=M(q),ce=M(z);function M(e){return e&&e.__esModule?e:{default:e}}const H=({animate:e=!0,className:n="",layout:r="2-columns",lineColor:a="#FFF",children:t})=>(typeof window=="object"&&document.documentElement.style.setProperty("--line-color",a),se.default.createElement("div",{className:(0,ce.default)(n,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":r==="2-columns","vertical-timeline--one-column-left":r==="1-column"||r==="1-column-left","vertical-timeline--one-column-right":r==="1-column-right"})},t));H.propTypes={children:h.default.oneOfType([h.default.arrayOf(h.default.node),h.default.node]).isRequired,className:h.default.string,animate:h.default.bool,layout:h.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:h.default.string};var ue=H;T.default=ue;var S={};function I(){return I=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},I.apply(this,arguments)}function de(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,R(e,n)}function R(e,n){return R=Object.setPrototypeOf||function(a,t){return a.__proto__=t,a},R(e,n)}function fe(e,n){if(e==null)return{};var r={},a=Object.keys(e),t,i;for(i=0;i<a.length;i++)t=a[i],!(n.indexOf(t)>=0)&&(r[t]=e[t]);return r}var C=new Map,w=new WeakMap,F=0,K=void 0;function pe(e){K=e}function me(e){return e?(w.has(e)||(F+=1,w.set(e,F.toString())),w.get(e)):"0"}function he(e){return Object.keys(e).sort().filter(function(n){return e[n]!==void 0}).map(function(n){return n+"_"+(n==="root"?me(e.root):e[n])}).toString()}function ve(e){var n=he(e),r=C.get(n);if(!r){var a=new Map,t,i=new IntersectionObserver(function(c){c.forEach(function(o){var l,u=o.isIntersecting&&t.some(function(d){return o.intersectionRatio>=d});e.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=u),(l=a.get(o.target))==null||l.forEach(function(d){d(u,o)})})},e);t=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:n,observer:i,elements:a},C.set(n,r)}return r}function P(e,n,r,a){if(r===void 0&&(r={}),a===void 0&&(a=K),typeof window.IntersectionObserver>"u"&&a!==void 0){var t=e.getBoundingClientRect();return n(a,{isIntersecting:a,target:e,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:t,intersectionRect:t,rootBounds:t}),function(){}}var i=ve(r),c=i.id,o=i.observer,l=i.elements,u=l.get(e)||[];return l.has(e)||l.set(e,u),u.push(n),o.observe(e),function(){u.splice(u.indexOf(n),1),u.length===0&&(l.delete(e),o.unobserve(e)),l.size===0&&(o.disconnect(),C.delete(c))}}var ye=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function A(e){return typeof e.children!="function"}var N=function(e){de(n,e);function n(a){var t;return t=e.call(this,a)||this,t.node=null,t._unobserveCb=null,t.handleNode=function(i){t.node&&(t.unobserve(),!i&&!t.props.triggerOnce&&!t.props.skip&&t.setState({inView:!!t.props.initialInView,entry:void 0})),t.node=i||null,t.observeNode()},t.handleChange=function(i,c){i&&t.props.triggerOnce&&t.unobserve(),A(t.props)||t.setState({inView:i,entry:c}),t.props.onChange&&t.props.onChange(i,c)},t.state={inView:!!a.initialInView,entry:void 0},t}var r=n.prototype;return r.componentDidUpdate=function(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())},r.componentWillUnmount=function(){this.unobserve(),this.node=null},r.observeNode=function(){if(!(!this.node||this.props.skip)){var t=this.props,i=t.threshold,c=t.root,o=t.rootMargin,l=t.trackVisibility,u=t.delay,d=t.fallbackInView;this._unobserveCb=P(this.node,this.handleChange,{threshold:i,root:c,rootMargin:o,trackVisibility:l,delay:u},d)}},r.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},r.render=function(){if(!A(this.props)){var t=this.state,i=t.inView,c=t.entry;return this.props.children({inView:i,entry:c,ref:this.handleNode})}var o=this.props,l=o.children,u=o.as,d=fe(o,ye);return y.createElement(u||"div",I({ref:this.handleNode},d),l)},n}(y.Component);N.displayName="InView";N.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};function ge(e){var n=e===void 0?{}:e,r=n.threshold,a=n.delay,t=n.trackVisibility,i=n.rootMargin,c=n.root,o=n.triggerOnce,l=n.skip,u=n.initialInView,d=n.fallbackInView,m=y.useRef(),b=y.useState({inView:!!u}),_=b[0],O=b[1],E=y.useCallback(function(g){m.current!==void 0&&(m.current(),m.current=void 0),!l&&g&&(m.current=P(g,function(k,$){O({inView:k,entry:$}),$.isIntersecting&&o&&m.current&&(m.current(),m.current=void 0)},{root:c,rootMargin:i,threshold:r,trackVisibility:t,delay:a},d))},[Array.isArray(r)?r.toString():r,c,i,o,l,t,d,a]);y.useEffect(function(){!m.current&&_.entry&&!o&&!l&&O({inView:!!u})});var f=[E,_.inView,_.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}const be=Object.freeze(Object.defineProperty({__proto__:null,InView:N,default:N,defaultFallbackInView:pe,observe:P,useInView:ge},Symbol.toStringTag,{value:"Module"})),_e=J(be);S.__esModule=!0;S.default=void 0;var v=j(y),s=j(q),V=j(z),Oe=_e;function j(e){return e&&e.__esModule?e:{default:e}}const Y=({children:e="",className:n="",contentArrowStyle:r=null,contentStyle:a=null,date:t="",dateClassName:i="",icon:c=null,iconClassName:o="",iconOnClick:l=null,onTimelineElementClick:u=null,iconStyle:d=null,id:m="",position:b="",style:_=null,textClassName:O="",intersectionObserverProps:E={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:f=!1})=>v.default.createElement(Oe.InView,E,({inView:g,ref:k})=>v.default.createElement("div",{ref:k,id:m,className:(0,V.default)(n,"vertical-timeline-element",{"vertical-timeline-element--left":b==="left","vertical-timeline-element--right":b==="right","vertical-timeline-element--no-children":e===""}),style:_},v.default.createElement(v.default.Fragment,null,v.default.createElement("span",{style:d,onClick:l,className:(0,V.default)(o,"vertical-timeline-element-icon",{"bounce-in":g||f,"is-hidden":!(g||f)})},c),v.default.createElement("div",{style:a,onClick:u,className:(0,V.default)(O,"vertical-timeline-element-content",{"bounce-in":g||f,"is-hidden":!(g||f)})},v.default.createElement("div",{style:r,className:"vertical-timeline-element-content-arrow"}),e,v.default.createElement("span",{className:(0,V.default)(i,"vertical-timeline-element-date")},t)))));Y.propTypes={children:s.default.oneOfType([s.default.arrayOf(s.default.node),s.default.node]),className:s.default.string,contentArrowStyle:s.default.shape({}),contentStyle:s.default.shape({}),date:s.default.node,dateClassName:s.default.string,icon:s.default.element,iconClassName:s.default.string,iconStyle:s.default.shape({}),iconOnClick:s.default.func,onTimelineElementClick:s.default.func,id:s.default.string,position:s.default.string,style:s.default.shape({}),textClassName:s.default.string,visible:s.default.bool,intersectionObserverProps:s.default.shape({root:s.default.object,rootMargin:s.default.string,threshold:s.default.number,triggerOnce:s.default.bool})};var we=Y;S.default=we;var G={VerticalTimeline:T.default,VerticalTimelineElement:S.default};const Ve=({experience:e})=>x(G.VerticalTimelineElement,{contentStyle:{background:"#1d1836",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  #232631"},date:e.date,iconStyle:{background:e.iconBg},icon:p("div",{className:"flex justify-center items-center w-full h-full ",children:p(Z.LazyLoadImage,{src:e.icon,alt:e.company_name,className:`w-[60%] h-[60%] 
          	object-contain`})}),children:[x("div",{children:[p("h3",{className:"text-wite text-[24px] font-bold",children:e.title}),p("p",{className:"text-secondary text-semibold text-[16px] style={{ margin: 0 }}",children:e.company_name})]}),p("ul",{className:"mt-5 list-desc ml-5 space-y-2",children:e.points.map((n,r)=>p("li",{className:"text-white-100 text-[14px] pl-1 tracking-wider",children:n},`experience-point-${r}`))})]}),xe=()=>x(X,{children:[x(re.div,{variants:ne(),children:[p("p",{className:W.sectionSubText,children:"What i have done so far"}),p("h2",{className:W.sectionHeadText,children:"Work Experience."})]}),p("div",{className:"mt-20 flex flex-col",children:p(G.VerticalTimeline,{children:ee.map((e,n)=>p(Ve,{experience:e},n))})})]}),Re=Q.memo(te(xe,"work"));export{Re as default};
