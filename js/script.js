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
	var score = 0;
	var newUser = {};
	newUser.playerAnswer = [0];
	var bt = document.getElementsByTagName("button");
	var form = document.getElementById("content");
	var q = document.getElementById("qustion");
	var allChoice = form.getElementsByTagName("label");
	q.textContent  = "Welcome click next to start";
	form.addEventListener("submit", change,false);
	bt[0].addEventListener("click", reg,false);
	bt[1].addEventListener("click", log,false);
	bt[2].addEventListener("click", back,false);
	bt[3].addEventListener("click", save,false);

	function reg(e){
		newUser.userName = prompt("pick a username");
		newUser.passwords = prompt("pick a password");
		createUser(newUser);
	}

	function createUser(newUser){
		var name = newUser.userName;
		localStorage.name = JSON.stringify(newUser);
	}

	function log(e){
		var user = {};
		user.userName = prompt("your username");
		user.passwords = prompt("your password");
		if (logUser(user)){
			var showuser = document.getElementById("user");
			showuser.textContent = user.userName;
		}else{
			alert("wrong user name or password!");
		}
	}
	function logUser(user){
		var name = user.userName
		if(localStorage.name != null){
			var test = JSON.parse(localStorage.name);
			if(test.passwords == user.passwords){
				newUser = JSON.parse(localStorage.name);
				console.log(newUser.playerAnswer);
				return true;
			}
		}
		return false;			
	}

	function save(e){
		if (newUser != undefined){
			var name = newUser.userName;
			localStorage.name = JSON.stringify(newUser);
			console.log(newUser.playerAnswer);
		}
	}

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
			console.log(counter, newUser.playerAnswer);
			if(newUser.playerAnswer[counter] !=null)	{
				form.elements[newUser.playerAnswer[counter]].checked = true;
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
						if (counter > newUser.playerAnswer.length){
							newUser.playerAnswer.push(i);
							console.log(1);
						}else {
							newUser.playerAnswer[counter-1] = i;
							console.log(2);
						}
						break;
					}
					if(i==4){
						back();
					}
				}
			}	
			console.log(counter, newUser.playerAnswer);
			for(var i=0; i<4; i++){
				form.elements[i].checked = false;
			}
			if(newUser.playerAnswer[counter] != null){
				form.elements[newUser.playerAnswer[counter]].checked = true;
			}
		}else if(counter == data.length -1){
			counter++;
			for(var i=0; i<4; i++){
					if( form.elements[i].checked){
						if (counter > newUser.playerAnswer.length){
							newUser.playerAnswer.push(i);
							console.log(1);
						}else {
							newUser.playerAnswer[counter-1] = i;
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
				if (newUser.playerAnswer[i] == data[i].answer){
					score++;
				}
			}
			q.textContent  = "Your total score is "+score;
			for(var i=0; i<4; i++){
				allChoice[i].textContent = "";
			}
			console.log(counter, newUser.playerAnswer);
		}
	}

}());