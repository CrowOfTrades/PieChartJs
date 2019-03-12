let num1 = document.getElementById("number1");
let num2 = document.getElementById("number2");
let num3 = document.getElementById("number3");
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");

 div1.style.setProperty("--value", num1.value)
 div2.style.setProperty("--value", num2.value)
  div3.style.setProperty("--value", num3.value)




$("#number1").bind('keyup', function (e) {
    div1.style.setProperty("--value", e.target.value);   
    updateValue(1,e.target.value);
    updateOver50(div1, e.target.value)
});

$("#number2").bind('keyup', function (e) {
    div2.style.setProperty("--value", e.target.value);   
    updateValue(2,e.target.value);
    updateOver50(div2, e.target.value);
});

$("#number3").bind('keyup', function (e) {
    div3.style.setProperty("--value", e.target.value);   
    updateOver50(div3, e.target.value);
});

$("#number1, #number2, #number3").bind('click', function(e){
    console.log(e)
});


function updateValue(n, v)
{
    if(n == 1)
    {
        div2.style.setProperty("--offset", parseInt(v));
        div3.style.setProperty("--offset", parseInt(div2.style.getPropertyValue("--offset")) + parseInt(div2.style.getPropertyValue("--value")));            
    }
   else if(n == 2)
        div3.style.setProperty("--offset", parseInt(div2.style.getPropertyValue("--offset")) + parseInt(v));  
}

function updateOver50(obj, v){
    if(v <= 50){
        obj.style.setProperty("--over50", 0);
    }
    else{
        obj.style.setProperty("--over50",1);
    }
}