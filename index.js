let btn = document.getElementById('Submit');
let text = document.getElementById('output');

let number = [Math.floor(Math.random() * 20)]

btn.addEventListener('click', function(){
  let input = document.getElementById('Users').value
  if (input == number){
       text.innerHTML = 'NATAG NAAN JUD SA BAHO O ❤'
  };

}) 
 

 