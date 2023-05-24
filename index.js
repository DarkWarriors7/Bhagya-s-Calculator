let string = "";
let buttons= document.querySelectorAll('.btn');

Array.from(buttons).forEach((x)=>{
    x.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            if(string.includes("^")){
                string=string.replace("^","**");
            }
            if(string.includes("X")){
                string=string.replace("X","*");
            }
            string = eval(string);
            document.querySelector('input').value=string;
            
        }
        else if(e.target.innerHTML=='C'){
            string=""
            document.querySelector('input').value=string;
        }
        
        else{

            string=string+e.target.innerHTML;
            document.querySelector('input').value=string;
        }
        
    })
})
