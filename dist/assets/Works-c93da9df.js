import{j as a,aj as f,a as e}from"./index-459f2791.js";import{_ as x}from"./tilt-7e4c8c2c.js";import{b as o}from"./index-31e4ddcd.js";import{S as h,t as u,f as i}from"./SectionWrapper-01f96079.js";import{s as w}from"./styles-bea25d13.js";import{p as b}from"./index-50acd4fb.js";import{m as l}from"./motion-12239158.js";const g="/dist/assets/github.png",v="/dist/assets/globe.svg",y=({index:t,name:r,description:c,tags:n,image:d,source_code_link:m,source_deployed_link:p})=>e(l.div,{variants:i("up","spring",t*.5,.75),children:a(x,{options:{max:45,scale:1,speed:450},className:"w-full bg-tertiary rounded-2xl shadow-xl p-5 sm:w-[360px]",children:[a("div",{className:"relative w-full h-[230px]",children:[e("img",{src:d,alt:r,className:"w-full h-full object-cover rounded-2xl"}),a("div",{className:"absolute inset-0 flex flex-row justify-between m-3 card-img_hover items-end",children:[e("div",{className:"flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient",children:e("div",{onClick:()=>window.open(m,"_blank"),className:"black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer",children:e(o.LazyLoadImage,{src:g,alt:"source code",className:"w-1/2 h-1/2 object-contain"})})}),e("div",{className:"flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient",children:e("div",{onClick:()=>window.open(p,"_blank"),className:"black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer",children:e(o.LazyLoadImage,{src:v,alt:"deployed website",className:"w-1/2 h-1/2 object-contain"})})})]})]}),a("div",{className:"mt-5",children:[e("h3",{className:"mt-5 text-white font-bold text-[24px] dark:text-gray-400",children:r}),e("p",{className:"mt-2 text-sm text-secondary text-[14px] dark:text-gray-400",children:c})]}),e("div",{className:"mt-4 flex flex-wrap gap-2",children:n.map(s=>a("p",{className:`text-[14px] ${s.color}`,children:["#",s.name]},s.name))})]})}),N=()=>a(f,{children:[e(l.div,{variants:u(),children:e("h2",{className:`${w.sectionHeadText} dark:text-gray-400`,children:"Projects."})}),e("div",{className:"w-full flex",children:e(l.p,{variants:i("","",.1,1),className:"max-w-3full text-[17px] text-secondary leading-[30px] dark:text-gray-400",children:"I have worked on a few projects, some of which are open source and available on my GitHub. I am currently working on a few more projects which will be available on my GitHub soon."})}),e("div",{className:"mt-20 flex flex-wrap gap-7",children:b.map((t,r)=>e(y,{index:r,...t},`project-${r}`))})]}),H=h(N,"work");export{H as default};
//# sourceMappingURL=Works-c93da9df.js.map