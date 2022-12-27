

var button = document.getElementById("BtnSbt");
button.disabled = true;
var input1 = document.getElementById("n1");
var input2 = document.getElementById("n2");


function enable(){
    var nmr1 = input1.value;
    var nmr2 = input2.value;

    console.log(nmr1 + " " + nmr2);

    if(nmr1 != "" && nmr2 != "") {
       
        button.disabled = false;
    }
    else  {
        
        button.disabled = true;
    }
}

addEventListener("change", enable);


