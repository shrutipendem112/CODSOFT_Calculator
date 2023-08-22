let result = document.getElementById("input");

function calculate(num){
    result.value += num;
}

function clrinput(){
    result.value = " ";
}
function del(){
    result.value = result.value.slice(0, -1);
}
function Result(){
    try{
        result.value = eval(result.value);
    }
    catch(e){
        alert("Invalid input");
    }
}