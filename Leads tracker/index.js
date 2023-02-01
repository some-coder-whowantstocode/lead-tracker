const inputbtn = document.querySelector("#input-btn");
let myleads = [];
const inputel = document.querySelector("#input-el");
const ulel = document.querySelector("#ul-el");
const deletebtn=document.querySelector("#delete-btn")





inputbtn.addEventListener(
    "click",
    function(){
        myleads.push(inputel.value);
        inputel.value="";
        localStorage.setItem("myleads",JSON.stringify(myleads));
        
        renderleads();
    //    console.log(localStorage.getItem("myleads"));
    }
)


const renderleads = () => {
    let listitems = "";
    for( let i = 0;i<myleads.length;i++){
        listitems +=`
        <li>
        <a target='_blank' href='${myleads[i]}'> ${myleads[i]}</a>
        </li>
        `; 
      
       
        // let element= document.createElement("li");
        
        // element.innerHTML = `
        //  ${myleads[i]}
       
        // `;
        
        // ulel.appendChild(element);
    }
    
    ulel.innerHTML= listitems;
    
    
}
// localStorage.setItem("name","rohit");
// console.log(localStorage.getItem("name"));
// localStorage.clear();
(
    function(){
       
    const leadsfromls= JSON.parse(localStorage.getItem("myleads"));
    if(leadsfromls){
        
        myleads=leadsfromls;
        renderleads();
    }
    else{

    }
}
)()

deletebtn.addEventListener(
    "dblclick",
    function(){
        localStorage.clear();
        myleads = "";
        renderleads();
    }
)