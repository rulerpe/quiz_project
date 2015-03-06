(function(){
	
	var data =  [ 	
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
	var qustionLength = data.length;
	var counter = 0;
	var playerAnswer = [];
	var score = 0;

	var form = document.getElementById("content");
	var q = document.getElementById("qustion");
	var allChoice = form.getElementsByTagName("label");
	q.textContent  = "Welcome click next to start";
	form.addEventListener("submit", change,false);
	form.getElementsByTagName("button")[0].addEventListener("click", back,false);


	function back(e){
		counter--;
		q.textContent  = data[counter].question;
			for(var i=0; i<4; i++){
				allChoice[i].textContent = data[counter].choices[i];
			}
			for(var i=0; i<4; i++){
				form.elements[i].checked = false;
			}
			form.elements[playerAnswer[counter]].checked = true;	
				
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
				for(var i=0; i<4; i++){
					if( form.elements[i].checked){
						playerAnswer.push(i);
						break;
					}
				}
				if (playerAnswer[counter-1] == data[counter-1].answer){	
					score += 1;
				}
			}	
			for(var i=0; i<4; i++){
				form.elements[i].checked = false;
			}	
		}else {
			for(var i=0; i<4; i++){
					if( form.elements[i].checked){
						playerAnswer.push(i);
						break;
					}
				}
				if (playerAnswer[counter-1] == data[counter-1].answer){	
					score += 1;
				}
			q.textContent  = "Your total score is "+score;
			for(var i=0; i<4; i++){
				allChoice[i].textContent = "";
			}
		}
	}

}());