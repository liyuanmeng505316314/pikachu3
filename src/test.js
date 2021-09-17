import string  from './css'
let n =1
let t=20;
let i=1;
 function step(){
    if(n>=string.length) return 
    n+=1
    demo.innerHTML=string.substring(0,n)
    demo2.innerText=string.substring(0,n)
    demo2.scrollTo(0, 99999);
    btnPause.onclick=()=>{
        if(i%2!=0)clearTimeout(id)
        else step()
        i+=1
    },btnPlus.onclick=()=>{
        if(t>1.25)t/=2;
        else t=1
    },btnSubstraction.onclick=()=>{
        if(t<8) t*=2 
        else t=80
    }
    const id=setTimeout(step,t)
}
step()




