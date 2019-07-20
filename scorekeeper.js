var p1c = document.querySelector("#p1");
var p2c = document.querySelector("#p2");
var p1dis = document.querySelector("#p1sc");
var p2dis = document.querySelector("#p2sc");
var forreset = document.querySelector("#reset");
//var p2light = document.querySelector(".p2colo");
var numinput = document.querySelector("input");
var limit = document.querySelector("#gamelimit");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1c.addEventListener("click", function(){
	if (!gameOver){p1Score++;
		if (p1Score === winningScore){
			
			p1dis.classList.add("winner");
			gameOver = true;
		}
	p1dis.textContent = p1Score;}
	else{
		alert("Game Over! Now Result is ---> 1 of you won and one of you lose    :p");
	}
	
});
p2c.addEventListener("click", function(){
	if (!gameOver){p2Score++;
		if(p2Score === winningScore){
			p2dis.classList.add("winner");
			gameOver = true;

		}
	p2dis.textContent = p2Score;}
	else{
		alert("Game Over! Now Result is ---> 1 of you won and one of you lose     :p");
	}
	
});
forreset.addEventListener("click",function(){
	//alert("reset clicked!");
	reset();
});
function reset(){
	p1dis.classList.remove("winner");
	p2dis.classList.remove("winner");
	p1Score = 0;
	p2Score = 0;
	p1dis.textContent = p1Score;
	p2dis.textContent = p2Score;
	gameOver = false;
}
numinput.addEventListener("change", function(){
	var nwe = Number(this.value);
	limit.textContent = nwe;
	winningScore = nwe;
	reset();
})