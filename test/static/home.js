const myTimeout = setTimeout(myGreeting, 1000);   
let hello = document.getElementById("demo");
let i = 4;
function myGreeting() {
	if(i == 0){
    	hello.innerHTML = "hello";
    } else {
     i =  i - 1
     
  	hello.innerHTML = i;
  	setTimeout(myGreeting, 1000);   
    
    }
   
    
}

function myStopFunction() {
  clearTimeout(myTimeout);
}