(function(){
	
	var qustions =  [ 	
					{ question: "",
					choices: ["","","",""],
					answer: 1 },
					{ question: "When is new year",
					choices: ["March 1st","January 1st","Octorber 5th","June 30th"],
					answer: 1 },
					{ question: "Where is China",
					choices: ["Asia","North America","Africa","Eurpe"],
					answer: 0 },
					{ question: "Color of sky",
					choices: ["Red","Yellow","Pink","Blue"],
					answer: 3 }];

	localStorage.qustions = JSON.stringify(qustions);

	var data = JSON.parse(localStorage.qustions);

	var qustionLength = data.length;
	var counter = 0;
	var playerAnswer = [0];
	var score = 0;

	var form = document.getElementById("content");
	var q = document.getElementById("qustion");
	var allChoice = form.getElementsByTagName("label");
	q.textContent  = "Welcome click next to start";
	form.addEventListener("submit", change,false);
	form.getElementsByTagName("button")[0].addEventListener("click", back,false);


	function back(e){
		if(counter > 1){
			counter--;
			q.textContent  = data[counter].question;
			for(var i=0; i<4; i++){
				allChoice[i].textContent = data[counter].choices[i];
			}
			for(var i=0; i<4; i++){
				form.elements[i].checked = false;
			}
			console.log(counter, playerAnswer);
			if(playerAnswer[counter] !=null)	{
				form.elements[playerAnswer[counter]].checked = true;
			}

		}
			
				
	}

	function change(e){
		e.preventDefault();
		if(counter < data.length -1){
			counter++;
			q.textContent  = data[counter].question;
			for(var i=0; i<4; i++){
				allChoice[i].textContent = data[counter].choices[i];
			}
			if (counter!=0 ){
				for(var i=0; i<5; i++){
					if( form.elements[i].checked){
						if (counter > playerAnswer.length){
							playerAnswer.push(i);
							console.log(1);
						}else {
							playerAnswer[counter-1] = i;
							console.log(2);
						}
						break;
					}
					if(i==4){
						back();
					}
				}
			}	
			console.log(counter, playerAnswer);
			for(var i=0; i<4; i++){
				form.elements[i].checked = false;
			}
			if(playerAnswer[counter] !=null){
				form.elements[playerAnswer[counter]].checked = true;
			}
		}else if(counter == data.length -1){
			counter++;
			for(var i=0; i<4; i++){
					if( form.elements[i].checked){
						if (counter > playerAnswer.length){
							playerAnswer.push(i);
							console.log(1);
						}else {
							playerAnswer[counter-1] = i;
							console.log(2);
						}
						
						break;
					}
					if(i==4){
						back();
					}
			}
			score = 0;
			for (var i = 1, x = counter; i<x; i++){
				if (playerAnswer[i] == data[i].answer){
					score++;
				}
			}
			q.textContent  = "Your total score is "+score;
			for(var i=0; i<4; i++){
				allChoice[i].textContent = "";
			}
			console.log(counter, playerAnswer);
		}
	}

}());