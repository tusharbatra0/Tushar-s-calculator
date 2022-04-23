const numberOneElement=document.getElementById("numberOne");
const numberTwoElement=document.getElementById("numberTwo")
const answerElement=document.getElementById("answer");
const plusElement=document.getElementById("plus")
const minusElement=document.getElementById("minus")
const multiplyElement=document.getElementById("multiply")
const divideElement=document.getElementById("divide")
const clearElement=document.getElementById("clear")

plusElement.addEventListener("click",function(){
    answerElement.innerHTML=Number(numberOneElement.value)+Number(numberTwoElement.value)
})
minusElement.addEventListener("click",function(){
    answerElement.innerHTML=Number(numberOneElement.value)-Number(numberTwoElement.value)
})
multiplyElement.addEventListener("click",function(){
    answerElement.innerHTML=Number(numberOneElement.value)*Number(numberTwoElement.value)
})
divideElement.addEventListener("click",function(){
    answerElement.innerHTML=(Number(numberOneElement.value)/Number(numberTwoElement.value)).toFixed(2);
})
clearElement.addEventListener("click", function(){
    answerElement.innerHTML="";
    numberOneElement.value="";
    numberTwoElement.value="";
})