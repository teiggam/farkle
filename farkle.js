var diceArr = [];

function initializeDice(){
	for(i = 0; i < 6; i++){
		diceArr[i] = {};
		diceArr[i].id = "die" + (i+1);
		diceArr[i].value = i + 1;
		diceArr[i].clicked = 0;
		console.log(diceArr[i]);
	}
}

/*Rolling dice values*/
function rollDice(){
	for(var j = 0; j < 6; j++){
		if(diceArr[j].clicked === 0){
			diceArr[j].value = Math.floor((Math.random() * 6) + 1);
			updateDiceImg(diceArr[j].value, diceArr[j].id);
			document.getElementById(diceArr[j].id).setAttribute("class", null);
		}
	}
}

/*Updating images of dice given values of rollDice*/
function updateDiceImg(value, id){
	var diceImage = "images/" + value + ".png";
	document.getElementById(id).setAttribute("src", diceImage);
	
}

function diceClick(diceData){

	console.log(diceData)
	var c = diceData.getAttribute("class");
	if(c == "disabled"){
		return;
	}

	else{
		var num = diceData.getAttribute("data-number");
		diceData.classList.toggle("transparent");
		if(diceArr[num].clicked === 0){
			diceArr[num].clicked = 1;
			if(!checkFor3OAK(diceData)){
				checkForOne(diceData);
				checkForFive(diceData);
			}
		}
		else{
			diceArr[num].clicked = 0;

		}
		console.log(diceArr);
		
	}		
}

function bankScore(){

	var rollScore = document.getElementById("roll-score").innerText;
	var bankScore = document.getElementById("bank").innerText;
	bankScore = Number(bankScore) + Number(rollScore);
	document.getElementById("bank").innerText = bankScore;
	document.getElementById("roll-score").innerText = "0";
	
	for(k=0; k<6; k++){
		if (diceArr[k].clicked === 1){
			diceArr[k].clicked = 0;
			document.getElementById(diceArr[k].id).setAttribute("class", null);

		}

		document.getElementById(diceArr[k].id).setAttribute("class", "disabled");
		console.log(diceArr[k].id);
	}

}

function resetScore(){
	document.getElementById("roll-score").innerText = "0";
	document.getElementById("bank").innerText = "0";
	bankScore();
}

function checkForOne(diceData){
	var num = diceData.getAttribute("data-number");
	if (diceArr[num].value === 1 ){

		var points = document.getElementById("roll-score").innerText;
		var newScore = Number(points) + 100;
		document.getElementById("roll-score").innerText= newScore;
	} 
}

function checkForFive(diceData){
	var num = diceData.getAttribute("data-number");
	if (diceArr[num].value === 5){
		var points = document.getElementById("roll-score").innerText;
		var newScore = Number(points) + 50;
		document.getElementById("roll-score").innerText= newScore;
	}
}

function checkFor3OAK(diceData){
	console.log(diceArr);
	let threeOne = diceArr.filter(n => n.value == 1);
	let threeTwo = diceArr.filter(n => n.value == 2);
	let threeThree = diceArr.filter(n => n.value == 3);
	let threeFour = diceArr.filter(n => n.value == 4);
	let threeFive = diceArr.filter(n => n.value == 5);
	let threeSix = diceArr.filter(n => n.value == 6);

	if(threeOne.length >= 3 )
	{
		var points = document.getElementById("roll-score").innerText;
		var newScore = Number(points) + 1000;
		document.getElementById("roll-score").innerText= newScore;
		return true;
	}
	else if (threeTwo.length >= 3 ){
		var points = document.getElementById("roll-score").innerText;
		var newScore = Number(points) + 200;
		document.getElementById("roll-score").innerText= newScore;
		return true;
	}
	else if (threeThree.length >= 3){
		var points = document.getElementById("roll-score").innerText;
		var newScore = Number(points) + 300;
		document.getElementById("roll-score").innerText= newScore;
		return true;
	}
	else if (threeFour.length >= 3){
		var points = document.getElementById("roll-score").innerText;
		var newScore = Number(points) + 400;
		document.getElementById("roll-score").innerText= newScore;
		return true;
	}
	else if (threeFive.length >= 3){
		var points = document.getElementById("roll-score").innerText;
		var newScore = Number(points) + 500;
		document.getElementById("roll-score").innerText= newScore;
		return true;
	}
	else if (threeSix.length >= 3){
		var points = document.getElementById("roll-score").innerText;
		var newScore = Number(points) + 600;
		document.getElementById("roll-score").innerText= newScore;
		return true;
	}
	else{
		return false;
	}
}
