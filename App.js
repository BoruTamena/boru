// variable declaration
const bar= document.querySelector(".fa-bars");
const close=document.querySelector(".fa-window-close");
const Education=document.querySelector(".edu");
const eduDom= document.querySelector(".education");
const bgloader= document.querySelector(".loader_bg");
const expDom= document.querySelector(".experience");
const skillDom= document.querySelector(".skills");
const sdnav= document.querySelector(".nav-list");
const Exp=document.querySelector(".exp");
const skill=document.querySelector(".skill");
const list = document.querySelectorAll(".ab-list");


console.log(bar);
console.log(Education);
console.log(Exp);
console.log(skill);

bar.addEventListener("click",(e)=>{
   
    sdnav.classList.add("show");

})
close.addEventListener("click",(e)=>{
    sdnav.classList.remove("show");
})
class switching
{
 callOnclick()
 {
     for (var i=0;i<list.length;i++)
     {
        (function(x)
        {
            list[x].addEventListener("click",(event)=>{

                let value =event.target.innerText;
                console.log(value);
                 switch (value) {
                     case " EDUCATION":
                         {
                         eduDom.style.display="block";
                         expDom.style.display="none";
                         skillDom.style.display="none";
                         //event.target.style.backgroundColor="black";
                            break;
                         }
                         
                       
                    case "EXPERIENCE":
                        {
                            eduDom.style.display="none";
                            expDom.style.display="block";
                            skillDom.style.display="none";
                            break;
                        }
                      

                   case "SKILLS":
                       {

                        eduDom.style.display="none";
                            expDom.style.display="none";
                            skillDom.style.display="block";
                        break;
                       }
                      
                     default:
                         {
                            break;
                         }
                        
                 }
            })
      
        })(i)
           

     }
 

 }
}
window.addEventListener('load',(e)=>{
    
    bgloader.classList.add("hidden");
})

document.addEventListener("DOMContentLoaded",(event)=>
{
    const clss= new switching();
    clss.callOnclick(); 
})
