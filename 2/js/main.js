const x = document.getElementById("main");
const y = x.getElementsByTagName("p");
const firstBtn = document.getElementById("btn-1");
const scndBtn = document.getElementById("btn-2");
const demo = document.getElementById("demo");

firstBtn.addEventListener('click', ()=> demo.innerHTML = 'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML)
scndBtn.addEventListener('click', ()=> demo.innerHTML = 'The second paragraph (index 1) inside "main" is: ' + y[1].innerHTML)






