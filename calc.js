const buttons = document.querySelectorAll("button");
const inputBox = document.getElementById("input");

let string = "";

// let arr = Array.from(buttons);
buttons.forEach(element => {
    element.addEventListener("click",(e) => {
        if(e.target.innerHTML == "="){
            string = eval(string);
            inputBox.value = string;  
        } 
        else if (e.target.innerHTML == "AC"){
            string = "";
            inputBox.value = string;
        } 
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0 , string.length - 1);
            inputBox.value = string;
        }
         else {
            string += e.target.innerHTML;
            inputBox.value = string;
        }
    })
});


