let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let buttonArray= Array.from(buttons);
let string ="";
buttonArray.forEach(function(btn){
    btn.addEventListener('click',(event)=>{
        if(event.target.innerHTML=="Del"){
            string=string.substring(0,string.length-1);
            display.value=string;
        }
        else if (event.target.innerHTML=="C"){
            string="";
            display.value=string;
        }
        else if(event.target.innerHTML=="="){
            string=eval(string);
            display.value=string;
        }
        else{
            string+= event.target.innerHTML;
            display.value=string;
        }
    })
})