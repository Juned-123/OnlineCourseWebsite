var input=document.querySelector("input")
var button=document.querySelector("button")




button.addEventListener("click",()=>{
    console.log(input.value);
})


var flag=true

function showSolution(questionNumber) {

    const solution = document.querySelectorAll('.solution')[questionNumber - 1];
    if(flag){
    solution.style.display = 'block';
    flag=false
}
else{
    solution.style.display='none'
    flag=true
}
}