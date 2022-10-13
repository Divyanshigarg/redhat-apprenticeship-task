var rangeslider = document.getElementById("sliderRange");
var rangeslider1 = document.getElementById("sliderRange1");
var output = document.getElementById("demo");
var output1 = document.getElementById("demo1");
const divCreted=document.querySelector('.implement-js');
divCreted.innerHTML='';

var rangeslider2 = document.getElementById("sliderRange2");
var output2 = document.getElementById("demo2");
const update = (value, button) => {
  if (button == 0) output.innerText = value;
  else if (button == 1) {
    output1.innerText = value;
  } else {
    output2.innerText = value;
  }
};

let strDiv=`<option value="volvo">Volvo</option>`;

// Create a new XMLHttpRequest.
fetch('http://universities.hipolabs.com/search?country=India').then((response)=>response.json()).then((data)=>{

let optionStr='';
data.forEach(el => {
  console.log(el.name);
  optionStr=optionStr+`<option value="${el.name.toLowerCase()}">${el.name}</option>`
});

console.log("This is the option string");
console.log(optionStr);

let result=`College/University:</label>
<select name="Universities" id="universities">
  ${optionStr}
</select>`

divCreted.insertAdjacentHTML('beforeend',result);

})








