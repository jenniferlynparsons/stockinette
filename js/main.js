var increase = document.getElementById("increase1"),
decrease = document.getElementById("decrease1"),
reset = document.getElementById("reset"),
leftCounter = document.getElementById("left-counter"),
rightCounter = document.getElementById("right-counter"),
leftControl = document.getElementById("left-controls"),
rightControl = document.getElementById("right-controls");


increase.addEventListener('click', function(){
	if(this.parentNode == leftControl){
		leftCounter.innerHTML+= 1;
	}else{
		rightCounter.innerHTML+= 1;
	}

}, false);

decrease.addEventListener('click', function(){
	if(this.parentNode == rightControl){
		leftCounter.innerHTML-= 1;
	}else{
		rightCounter.innerHTML-= 1;
	}

}, false);


reset.addEventListener('click',function(){
	leftCounter.innerHTML = 0;
	rightCounter.innerHTML = 0;
},false);

