// alert("connected");

//color array - will become random eventually
var colorsArr = genRando(6);

//incorporates all cube class divs from document into one var
var cubes = document.querySelectorAll(".cube");
//setting up initial value for color to be used as target
var initialSel = randoColor();
//tageted through span id (not class) colorSel
var colorSelect = document.querySelector("#colorSel");
//display span - for correct incorrect (replaces alert)
var msgDisplay = document.querySelector('#displayMSG');
var h1 = document.querySelector("h1");

colorSelect.textContent = initialSel;
//loop through arrays of divs (cubes) adding intial color values and click listeners
for(var i = 0; i < cubes.length; i++){
	//add initial colors to cubes
	cubes[i].style.backgroundColor = colorsArr[i];
	//add click listeners to cubes
	cubes[i].addEventListener('click', function(){
		//identify color of clicked cube and compare it to initialSel
		//fading for incorrect choices and recoloring all cubes for correct choice
		clickedCube = this.style.backgroundColor;
		if(clickedCube === initialSel){
			msgDisplay.textContent = 'Congratulations, you are Correct!';
			colorChange(clickedCube);
			h1.style.backgroundColor = clickedCube;
			
		} else{
			this.style.background = "#383636";
			//new reporting for inc
			msgDisplay.textContent = 'Sorry, Try Again.';
		}

	});
}

// function to change all cubes color upon correct guess
function colorChange(color){
	for(var i = 0; i < cubes.length; i++){
		cubes[i].style.backgroundColor = color;
	}
}

//random color generator usdes floor math funtion to seed element position in colorArr
//assigned to intialSet
function randoColor(){
	var rando = Math.floor(Math.random() * colorsArr.length);
	return colorsArr[rando];
}

//random color array generator
//appends array with randomly generated output from randomC (RGB formatted string with random int seedings 0-255)
function genRando(numb){
	var randArr = []
	for(var i = 0; i < numb; i++){
		randArr.push(randomC())
	}

	return randArr;
}

//interior function for color generator
//random seeds for each rgb element based on 0-255
function randomC(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}
