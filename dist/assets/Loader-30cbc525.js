import{ad as f,ak as B,aw as tt,ao as Be,an as Ge,t as nt,h as j,K as de,H as he,ax as ot,ay as Le,az as at,X as Ue,aA as Ve,V as H,aB as le,aC as ue,aD as it,aE as st,j as Xe,a as rt}from"./index-22e0b2bd.js";const ve=new j,He=new j,ct=new j;function lt(a,o,r){const e=ve.setFromMatrixPosition(a.matrixWorld);e.project(o);const P=r.width/2,E=r.height/2;return[e.x*P+P,-(e.y*E)+E]}function ut(a,o){const r=ve.setFromMatrixPosition(a.matrixWorld),e=He.setFromMatrixPosition(o.matrixWorld),P=r.sub(e),E=o.getWorldDirection(ct);return P.angleTo(E)>Math.PI/2}function dt(a,o,r,e){const P=ve.setFromMatrixPosition(a.matrixWorld),E=P.clone();E.project(o),r.setFromCamera(E,o);const T=r.intersectObjects(e,!0);if(T.length){const c=T[0].distance;return P.distanceTo(r.ray.origin)<c}return!0}function ht(a,o){if(o instanceof de)return o.zoom;if(o instanceof he){const r=ve.setFromMatrixPosition(a.matrixWorld),e=He.setFromMatrixPosition(o.matrixWorld),P=o.fov*Math.PI/180,E=r.distanceTo(e);return 1/(2*Math.tan(P/2)*E)}else return 1}function ft(a,o,r){if(o instanceof he||o instanceof de){const e=ve.setFromMatrixPosition(a.matrixWorld),P=He.setFromMatrixPosition(o.matrixWorld),E=e.distanceTo(P),T=(r[1]-r[0])/(o.far-o.near),c=r[1]-T*o.far;return Math.round(T*E+c)}}const ke=a=>Math.abs(a)<1e-10?0:a;function qe(a,o,r=""){let e="matrix3d(";for(let P=0;P!==16;P++)e+=ke(o[P]*a.elements[P])+(P!==15?",":")");return r+e}const mt=(a=>o=>qe(o,a))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),pt=(a=>(o,r)=>qe(o,a(r),"translate(-50%,-50%)"))(a=>[1/a,1/a,1/a,1,-1/a,-1/a,-1/a,-1,1/a,1/a,1/a,1,1,1,1,1]);function bt(a){return a&&typeof a=="object"&&"current"in a}const gt=f.forwardRef(({children:a,eps:o=.001,style:r,className:e,prepend:P,center:E,fullscreen:T,portal:c,distanceFactor:d,sprite:oe=!1,transform:l=!1,occlude:m,onOcclude:S,castShadow:Y,receiveShadow:N,material:_,geometry:R,zIndexRange:A=[16777271,0],calculatePosition:C=lt,as:z="div",wrapperClass:D,pointerEvents:g="auto",...u},G)=>{const{gl:L,camera:y,scene:h,size:v,raycaster:Re,events:ae,viewport:fe}=B(),[x]=f.useState(()=>document.createElement(z)),ie=f.useRef(),w=f.useRef(null),V=f.useRef(0),q=f.useRef([0,0]),Q=f.useRef(null),se=f.useRef(null),F=(c==null?void 0:c.current)||ae.connected||L.domElement.parentNode,k=f.useRef(null),re=f.useRef(!1),te=f.useMemo(()=>m&&m!=="blending"||Array.isArray(m)&&m.length&&bt(m[0]),[m]);f.useLayoutEffect(()=>{const O=L.domElement;m&&m==="blending"?(O.style.zIndex=`${Math.floor(A[0]/2)}`,O.style.position="absolute",O.style.pointerEvents="none"):(O.style.zIndex=null,O.style.position=null,O.style.pointerEvents=null)},[m]),f.useLayoutEffect(()=>{if(w.current){const O=ie.current=tt(x);if(h.updateMatrixWorld(),l)x.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const b=C(w.current,y,v);x.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${b[0]}px,${b[1]}px,0);transform-origin:0 0;`}return F&&(P?F.prepend(x):F.appendChild(x)),()=>{F&&F.removeChild(x),O.unmount()}}},[F,l]),f.useLayoutEffect(()=>{D&&(x.className=D)},[D]);const Me=f.useMemo(()=>l?{position:"absolute",top:0,left:0,width:v.width,height:v.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:E?"translate3d(-50%,-50%,0)":"none",...T&&{top:-v.height/2,left:-v.width/2,width:v.width,height:v.height},...r},[r,E,T,v,l]),Ce=f.useMemo(()=>({position:"absolute",pointerEvents:g}),[g]);f.useLayoutEffect(()=>{if(re.current=!1,l){var O;(O=ie.current)==null||O.render(f.createElement("div",{ref:Q,style:Me},f.createElement("div",{ref:se,style:Ce},f.createElement("div",{ref:G,className:e,style:r,children:a}))))}else{var b;(b=ie.current)==null||b.render(f.createElement("div",{ref:G,style:Me,className:e,children:a}))}});const J=f.useRef(!0);Be(O=>{if(w.current){y.updateMatrixWorld(),w.current.updateWorldMatrix(!0,!1);const b=l?q.current:C(w.current,y,v);if(l||Math.abs(V.current-y.zoom)>o||Math.abs(q.current[0]-b[0])>o||Math.abs(q.current[1]-b[1])>o){const W=ut(w.current,y);let I=!1;te&&(Array.isArray(m)?I=m.map(Z=>Z.current):m!=="blending"&&(I=[h]));const ne=J.current;if(I){const Z=dt(w.current,y,Re,I);J.current=Z&&!W}else J.current=!W;ne!==J.current&&(S?S(!J.current):x.style.display=J.current?"block":"none");const ce=Math.floor(A[0]/2),Te=m?te?[A[0],ce]:[ce-1,0]:A;if(x.style.zIndex=`${ft(w.current,y,Te)}`,l){const[Z,me]=[v.width/2,v.height/2],pe=y.projectionMatrix.elements[5]*me,{isOrthographicCamera:we,top:Oe,left:be,bottom:ge,right:je}=y,Ie=mt(y.matrixWorldInverse),Ne=we?`scale(${pe})translate(${ke(-(je+be)/2)}px,${ke((Oe+ge)/2)}px)`:`translateZ(${pe}px)`;let U=w.current.matrixWorld;oe&&(U=y.matrixWorldInverse.clone().transpose().copyPosition(U).scale(w.current.scale),U.elements[3]=U.elements[7]=U.elements[11]=0,U.elements[15]=1),x.style.width=v.width+"px",x.style.height=v.height+"px",x.style.perspective=we?"":`${pe}px`,Q.current&&se.current&&(Q.current.style.transform=`${Ne}${Ie}translate(${Z}px,${me}px)`,se.current.style.transform=pt(U,1/((d||10)/400)))}else{const Z=d===void 0?1:ht(w.current,y)*d;x.style.transform=`translate3d(${b[0]}px,${b[1]}px,0) scale(${Z})`}q.current=b,V.current=y.zoom}}if(!te&&k.current&&!re.current)if(l){if(Q.current){const b=Q.current.children[0];if(b!=null&&b.clientWidth&&b!=null&&b.clientHeight){const{isOrthographicCamera:W}=y;if(W||R)u.scale&&(Array.isArray(u.scale)?u.scale instanceof j?k.current.scale.copy(u.scale.clone().divideScalar(1)):k.current.scale.set(1/u.scale[0],1/u.scale[1],1/u.scale[2]):k.current.scale.setScalar(1/u.scale));else{const I=(d||10)/400,ne=b.clientWidth*I,ce=b.clientHeight*I;k.current.scale.set(ne,ce,1)}re.current=!0}}}else{const b=x.children[0];if(b!=null&&b.clientWidth&&b!=null&&b.clientHeight){const W=1/fe.factor,I=b.clientWidth*W,ne=b.clientHeight*W;k.current.scale.set(I,ne,1),re.current=!0}k.current.lookAt(O.camera.position)}});const xe=f.useMemo(()=>({vertexShader:l?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom" 
            is false. 
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;
            
            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[l]);return f.createElement("group",Ge({},u,{ref:w}),m&&!te&&f.createElement("mesh",{castShadow:Y,receiveShadow:N,ref:k},R||f.createElement("planeGeometry",null),_||f.createElement("shaderMaterial",{side:nt,vertexShader:xe.vertexShader,fragmentShader:xe.fragmentShader})))});let Ee=0;const yt=ot(a=>(Le.onStart=(o,r,e)=>{a({active:!0,item:o,loaded:r,total:e,progress:(r-Ee)/(e-Ee)*100})},Le.onLoad=()=>{a({active:!1})},Le.onError=o=>a(r=>({errors:[...r.errors,o]})),Le.onProgress=(o,r,e)=>{r===e&&(Ee=e),a({active:!0,item:o,loaded:r,total:e,progress:(r-Ee)/(e-Ee)*100||100})},{errors:[],active:!1,progress:0,item:"",loaded:0,total:0}));var Pt=Object.defineProperty,Et=(a,o,r)=>o in a?Pt(a,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[o]=r,i=(a,o,r)=>(Et(a,typeof o!="symbol"?o+"":o,r),r);const Se=new it,Ke=new st,vt=Math.cos(70*(Math.PI/180)),$e=(a,o)=>(a%o+o)%o;let Mt=class extends at{constructor(o,r){super(),i(this,"object"),i(this,"domElement"),i(this,"enabled",!0),i(this,"target",new j),i(this,"minDistance",0),i(this,"maxDistance",1/0),i(this,"minZoom",0),i(this,"maxZoom",1/0),i(this,"minPolarAngle",0),i(this,"maxPolarAngle",Math.PI),i(this,"minAzimuthAngle",-1/0),i(this,"maxAzimuthAngle",1/0),i(this,"enableDamping",!1),i(this,"dampingFactor",.05),i(this,"enableZoom",!0),i(this,"zoomSpeed",1),i(this,"enableRotate",!0),i(this,"rotateSpeed",1),i(this,"enablePan",!0),i(this,"panSpeed",1),i(this,"screenSpacePanning",!0),i(this,"keyPanSpeed",7),i(this,"zoomToCursor",!1),i(this,"autoRotate",!1),i(this,"autoRotateSpeed",2),i(this,"reverseOrbit",!1),i(this,"reverseHorizontalOrbit",!1),i(this,"reverseVerticalOrbit",!1),i(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),i(this,"mouseButtons",{LEFT:le.ROTATE,MIDDLE:le.DOLLY,RIGHT:le.PAN}),i(this,"touches",{ONE:ue.ROTATE,TWO:ue.DOLLY_PAN}),i(this,"target0"),i(this,"position0"),i(this,"zoom0"),i(this,"_domElementKeyEvents",null),i(this,"getPolarAngle"),i(this,"getAzimuthalAngle"),i(this,"setPolarAngle"),i(this,"setAzimuthalAngle"),i(this,"getDistance"),i(this,"listenToKeyEvents"),i(this,"stopListenToKeyEvents"),i(this,"saveState"),i(this,"reset"),i(this,"update"),i(this,"connect"),i(this,"dispose"),this.object=o,this.domElement=r,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>l.phi,this.getAzimuthalAngle=()=>l.theta,this.setPolarAngle=t=>{let n=$e(t,2*Math.PI),s=l.phi;s<0&&(s+=2*Math.PI),n<0&&(n+=2*Math.PI);let p=Math.abs(n-s);2*Math.PI-p<p&&(n<s?n+=2*Math.PI:s+=2*Math.PI),m.phi=n-s,e.update()},this.setAzimuthalAngle=t=>{let n=$e(t,2*Math.PI),s=l.theta;s<0&&(s+=2*Math.PI),n<0&&(n+=2*Math.PI);let p=Math.abs(n-s);2*Math.PI-p<p&&(n<s?n+=2*Math.PI:s+=2*Math.PI),m.theta=n-s,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=t=>{t.addEventListener("keydown",_e),this._domElementKeyEvents=t},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",_e),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(P),e.update(),d=c.NONE},this.update=(()=>{const t=new j,n=new j(0,1,0),s=new Ue().setFromUnitVectors(o.up,n),p=s.clone().invert(),M=new j,X=new Ue,ee=2*Math.PI;return function(){const Ze=e.object.position;s.setFromUnitVectors(o.up,n),p.copy(s).invert(),t.copy(Ze).sub(e.target),t.applyQuaternion(s),l.setFromVector3(t),e.autoRotate&&d===c.NONE&&fe(Re()),e.enableDamping?(l.theta+=m.theta*e.dampingFactor,l.phi+=m.phi*e.dampingFactor):(l.theta+=m.theta,l.phi+=m.phi);let K=e.minAzimuthAngle,$=e.maxAzimuthAngle;isFinite(K)&&isFinite($)&&(K<-Math.PI?K+=ee:K>Math.PI&&(K-=ee),$<-Math.PI?$+=ee:$>Math.PI&&($-=ee),K<=$?l.theta=Math.max(K,Math.min($,l.theta)):l.theta=l.theta>(K+$)/2?Math.max(K,l.theta):Math.min($,l.theta)),l.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,l.phi)),l.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(Y,e.dampingFactor):e.target.add(Y),e.zoomToCursor&&y||e.object.isOrthographicCamera?l.radius=F(l.radius):l.radius=F(l.radius*S),t.setFromSpherical(l),t.applyQuaternion(p),Ze.copy(e.target).add(t),e.object.lookAt(e.target),e.enableDamping===!0?(m.theta*=1-e.dampingFactor,m.phi*=1-e.dampingFactor,Y.multiplyScalar(1-e.dampingFactor)):(m.set(0,0,0),Y.set(0,0,0));let Ae=!1;if(e.zoomToCursor&&y){let ye=null;if(e.object instanceof he&&e.object.isPerspectiveCamera){const Pe=t.length();ye=F(Pe*S);const De=Pe-ye;e.object.position.addScaledVector(G,De),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const Pe=new j(L.x,L.y,0);Pe.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/S)),e.object.updateProjectionMatrix(),Ae=!0;const De=new j(L.x,L.y,0);De.unproject(e.object),e.object.position.sub(De).add(Pe),e.object.updateMatrixWorld(),ye=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;ye!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(ye).add(e.object.position):(Se.origin.copy(e.object.position),Se.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot(Se.direction))<vt?o.lookAt(e.target):(Ke.setFromNormalAndCoplanarPoint(e.object.up,e.target),Se.intersectPlane(Ke,e.target))))}else e.object instanceof de&&e.object.isOrthographicCamera&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/S)),e.object.updateProjectionMatrix(),Ae=!0);return S=1,y=!1,Ae||M.distanceToSquared(e.object.position)>oe||8*(1-X.dot(e.object.quaternion))>oe?(e.dispatchEvent(P),M.copy(e.object.position),X.copy(e.object.quaternion),Ae=!1,!0):!1}})(),this.connect=t=>{t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),e.domElement=t,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",Ye),e.domElement.addEventListener("pointerdown",Oe),e.domElement.addEventListener("pointercancel",je),e.domElement.addEventListener("wheel",U)},this.dispose=()=>{var t,n,s,p,M,X;(t=e.domElement)==null||t.removeEventListener("contextmenu",Ye),(n=e.domElement)==null||n.removeEventListener("pointerdown",Oe),(s=e.domElement)==null||s.removeEventListener("pointercancel",je),(p=e.domElement)==null||p.removeEventListener("wheel",U),(M=e.domElement)==null||M.ownerDocument.removeEventListener("pointermove",be),(X=e.domElement)==null||X.ownerDocument.removeEventListener("pointerup",ge),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",_e)};const e=this,P={type:"change"},E={type:"start"},T={type:"end"},c={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let d=c.NONE;const oe=1e-6,l=new Ve,m=new Ve;let S=1;const Y=new j,N=new H,_=new H,R=new H,A=new H,C=new H,z=new H,D=new H,g=new H,u=new H,G=new j,L=new H;let y=!1;const h=[],v={};function Re(){return 2*Math.PI/60/60*e.autoRotateSpeed}function ae(){return Math.pow(.95,e.zoomSpeed)}function fe(t){e.reverseOrbit||e.reverseHorizontalOrbit?m.theta+=t:m.theta-=t}function x(t){e.reverseOrbit||e.reverseVerticalOrbit?m.phi+=t:m.phi-=t}const ie=(()=>{const t=new j;return function(s,p){t.setFromMatrixColumn(p,0),t.multiplyScalar(-s),Y.add(t)}})(),w=(()=>{const t=new j;return function(s,p){e.screenSpacePanning===!0?t.setFromMatrixColumn(p,1):(t.setFromMatrixColumn(p,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(s),Y.add(t)}})(),V=(()=>{const t=new j;return function(s,p){const M=e.domElement;if(M&&e.object instanceof he&&e.object.isPerspectiveCamera){const X=e.object.position;t.copy(X).sub(e.target);let ee=t.length();ee*=Math.tan(e.object.fov/2*Math.PI/180),ie(2*s*ee/M.clientHeight,e.object.matrix),w(2*p*ee/M.clientHeight,e.object.matrix)}else M&&e.object instanceof de&&e.object.isOrthographicCamera?(ie(s*(e.object.right-e.object.left)/e.object.zoom/M.clientWidth,e.object.matrix),w(p*(e.object.top-e.object.bottom)/e.object.zoom/M.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function q(t){e.object instanceof he&&e.object.isPerspectiveCamera||e.object instanceof de&&e.object.isOrthographicCamera?S/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function Q(t){e.object instanceof he&&e.object.isPerspectiveCamera||e.object instanceof de&&e.object.isOrthographicCamera?S*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function se(t){if(!e.zoomToCursor||!e.domElement)return;y=!0;const n=e.domElement.getBoundingClientRect(),s=t.clientX-n.left,p=t.clientY-n.top,M=n.width,X=n.height;L.x=s/M*2-1,L.y=-(p/X)*2+1,G.set(L.x,L.y,1).unproject(e.object).sub(e.object.position).normalize()}function F(t){return Math.max(e.minDistance,Math.min(e.maxDistance,t))}function k(t){N.set(t.clientX,t.clientY)}function re(t){se(t),D.set(t.clientX,t.clientY)}function te(t){A.set(t.clientX,t.clientY)}function Me(t){_.set(t.clientX,t.clientY),R.subVectors(_,N).multiplyScalar(e.rotateSpeed);const n=e.domElement;n&&(fe(2*Math.PI*R.x/n.clientHeight),x(2*Math.PI*R.y/n.clientHeight)),N.copy(_),e.update()}function Ce(t){g.set(t.clientX,t.clientY),u.subVectors(g,D),u.y>0?q(ae()):u.y<0&&Q(ae()),D.copy(g),e.update()}function J(t){C.set(t.clientX,t.clientY),z.subVectors(C,A).multiplyScalar(e.panSpeed),V(z.x,z.y),A.copy(C),e.update()}function xe(t){se(t),t.deltaY<0?Q(ae()):t.deltaY>0&&q(ae()),e.update()}function O(t){let n=!1;switch(t.code){case e.keys.UP:V(0,e.keyPanSpeed),n=!0;break;case e.keys.BOTTOM:V(0,-e.keyPanSpeed),n=!0;break;case e.keys.LEFT:V(e.keyPanSpeed,0),n=!0;break;case e.keys.RIGHT:V(-e.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),e.update())}function b(){if(h.length==1)N.set(h[0].pageX,h[0].pageY);else{const t=.5*(h[0].pageX+h[1].pageX),n=.5*(h[0].pageY+h[1].pageY);N.set(t,n)}}function W(){if(h.length==1)A.set(h[0].pageX,h[0].pageY);else{const t=.5*(h[0].pageX+h[1].pageX),n=.5*(h[0].pageY+h[1].pageY);A.set(t,n)}}function I(){const t=h[0].pageX-h[1].pageX,n=h[0].pageY-h[1].pageY,s=Math.sqrt(t*t+n*n);D.set(0,s)}function ne(){e.enableZoom&&I(),e.enablePan&&W()}function ce(){e.enableZoom&&I(),e.enableRotate&&b()}function Te(t){if(h.length==1)_.set(t.pageX,t.pageY);else{const s=ze(t),p=.5*(t.pageX+s.x),M=.5*(t.pageY+s.y);_.set(p,M)}R.subVectors(_,N).multiplyScalar(e.rotateSpeed);const n=e.domElement;n&&(fe(2*Math.PI*R.x/n.clientHeight),x(2*Math.PI*R.y/n.clientHeight)),N.copy(_)}function Z(t){if(h.length==1)C.set(t.pageX,t.pageY);else{const n=ze(t),s=.5*(t.pageX+n.x),p=.5*(t.pageY+n.y);C.set(s,p)}z.subVectors(C,A).multiplyScalar(e.panSpeed),V(z.x,z.y),A.copy(C)}function me(t){const n=ze(t),s=t.pageX-n.x,p=t.pageY-n.y,M=Math.sqrt(s*s+p*p);g.set(0,M),u.set(0,Math.pow(g.y/D.y,e.zoomSpeed)),q(u.y),D.copy(g)}function pe(t){e.enableZoom&&me(t),e.enablePan&&Z(t)}function we(t){e.enableZoom&&me(t),e.enableRotate&&Te(t)}function Oe(t){var n,s;e.enabled!==!1&&(h.length===0&&((n=e.domElement)==null||n.ownerDocument.addEventListener("pointermove",be),(s=e.domElement)==null||s.ownerDocument.addEventListener("pointerup",ge)),et(t),t.pointerType==="touch"?Qe(t):Ie(t))}function be(t){e.enabled!==!1&&(t.pointerType==="touch"?Je(t):Ne(t))}function ge(t){var n,s,p;Fe(t),h.length===0&&((n=e.domElement)==null||n.releasePointerCapture(t.pointerId),(s=e.domElement)==null||s.ownerDocument.removeEventListener("pointermove",be),(p=e.domElement)==null||p.ownerDocument.removeEventListener("pointerup",ge)),e.dispatchEvent(T),d=c.NONE}function je(t){Fe(t)}function Ie(t){let n;switch(t.button){case 0:n=e.mouseButtons.LEFT;break;case 1:n=e.mouseButtons.MIDDLE;break;case 2:n=e.mouseButtons.RIGHT;break;default:n=-1}switch(n){case le.DOLLY:if(e.enableZoom===!1)return;re(t),d=c.DOLLY;break;case le.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;te(t),d=c.PAN}else{if(e.enableRotate===!1)return;k(t),d=c.ROTATE}break;case le.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;k(t),d=c.ROTATE}else{if(e.enablePan===!1)return;te(t),d=c.PAN}break;default:d=c.NONE}d!==c.NONE&&e.dispatchEvent(E)}function Ne(t){if(e.enabled!==!1)switch(d){case c.ROTATE:if(e.enableRotate===!1)return;Me(t);break;case c.DOLLY:if(e.enableZoom===!1)return;Ce(t);break;case c.PAN:if(e.enablePan===!1)return;J(t);break}}function U(t){e.enabled===!1||e.enableZoom===!1||d!==c.NONE&&d!==c.ROTATE||(t.preventDefault(),e.dispatchEvent(E),xe(t),e.dispatchEvent(T))}function _e(t){e.enabled===!1||e.enablePan===!1||O(t)}function Qe(t){switch(We(t),h.length){case 1:switch(e.touches.ONE){case ue.ROTATE:if(e.enableRotate===!1)return;b(),d=c.TOUCH_ROTATE;break;case ue.PAN:if(e.enablePan===!1)return;W(),d=c.TOUCH_PAN;break;default:d=c.NONE}break;case 2:switch(e.touches.TWO){case ue.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;ne(),d=c.TOUCH_DOLLY_PAN;break;case ue.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;ce(),d=c.TOUCH_DOLLY_ROTATE;break;default:d=c.NONE}break;default:d=c.NONE}d!==c.NONE&&e.dispatchEvent(E)}function Je(t){switch(We(t),d){case c.TOUCH_ROTATE:if(e.enableRotate===!1)return;Te(t),e.update();break;case c.TOUCH_PAN:if(e.enablePan===!1)return;Z(t),e.update();break;case c.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;pe(t),e.update();break;case c.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;we(t),e.update();break;default:d=c.NONE}}function Ye(t){e.enabled!==!1&&t.preventDefault()}function et(t){h.push(t)}function Fe(t){delete v[t.pointerId];for(let n=0;n<h.length;n++)if(h[n].pointerId==t.pointerId){h.splice(n,1);return}}function We(t){let n=v[t.pointerId];n===void 0&&(n=new H,v[t.pointerId]=n),n.set(t.pageX,t.pageY)}function ze(t){const n=t.pointerId===h[0].pointerId?h[1]:h[0];return v[n.pointerId]}r!==void 0&&this.connect(r),this.update()}};const Ot=f.forwardRef(({makeDefault:a,camera:o,regress:r,domElement:e,enableDamping:P=!0,keyEvents:E=!1,onChange:T,onStart:c,onEnd:d,...oe},l)=>{const m=B(u=>u.invalidate),S=B(u=>u.camera),Y=B(u=>u.gl),N=B(u=>u.events),_=B(u=>u.setEvents),R=B(u=>u.set),A=B(u=>u.get),C=B(u=>u.performance),z=o||S,D=e||N.connected||Y.domElement,g=f.useMemo(()=>new Mt(z),[z]);return Be(()=>{g.enabled&&g.update()},-1),f.useEffect(()=>(E&&g.connect(E===!0?D:E),g.connect(D),()=>void g.dispose()),[E,D,r,g,m]),f.useEffect(()=>{const u=y=>{m(),r&&C.regress(),T&&T(y)},G=y=>{c&&c(y)},L=y=>{d&&d(y)};return g.addEventListener("change",u),g.addEventListener("start",G),g.addEventListener("end",L),()=>{g.removeEventListener("start",G),g.removeEventListener("end",L),g.removeEventListener("change",u)}},[T,c,d,g,m,_]),f.useEffect(()=>{if(a){const u=A().controls;return R({controls:g}),()=>R({controls:u})}},[a,g]),f.createElement("primitive",Ge({ref:l,object:g,enableDamping:P},oe))}),jt=()=>{const{progress:a}=yt();return Xe(gt,{children:[rt("span",{className:"canvas-load"}),Xe("p",{style:{fontSize:14,color:"#f1f1f1",fontHeight:800,marginTop:40},children:[a.toFixed(2),"%"]})]})};export{jt as L,Ot as O};
//# sourceMappingURL=Loader-30cbc525.js.map
