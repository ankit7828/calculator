let string="";
let allButtons=document.querySelectorAll(".button");
allButtons.forEach((button) => {
    button.addEventListener("click",(e)=>{
        console.log(e.target);
        if(e.target.innerHTML== '='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML== 'AC'){
            string="";
            document.querySelector('input').value=string;
        }
        else{
            console.log(e.target);
            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
});



