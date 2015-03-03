(function(){
	
	var data =  [{ 	question: "When is new year",
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
	var playerAnswer ;
	var score = 0;

	var form = document.getElementById("content");
	var q = document.getElementById("qustion");
	var allChoice = form.getElementsByTagName("label");
	form.addEventListener("submit", change,false);



	function change(e){
		e.preventDefault();
		if(counter < data.length){
			q.textContent  = data[counter].question;
			for(var i=0; i<4; i++){
				allChoice[i].textContent = data[counter].choices[i];
			}
			for(var i=0; i<4; i++){
				if( form.elements[i].checked){
					playerAnswer = i;
					break;
				}
			}
			counter++;
			if (playerAnswer == data[counter].answer){
				score++;
			}		
		}else {
			q.textContent  = "Your total score is "+score;
		}
	}

}());