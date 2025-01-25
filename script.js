const dev ={
    name: 'Abu Hurayra',
    age: 23,
    location :'Punjab',
    Skill : 'Java Script'
};
const name = 'Who are you';
const input =document.getElementById('input-box');
const btn = document.getElementById('btn-cl');
const message =  document.getElementById('message');

btn.addEventListener('click',function(){
const inputvalue = input.value.trim();
if (inputvalue === name){
message.textContent=`My name is ${dev.name} and my age is ${dev.age} I am a skilled ${dev.Skill} Develeper My location is ${dev.location}`
} else{
message.textContent= 'Please Ask Correct answer'
}
}) 
