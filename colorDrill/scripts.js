// alert("connected");
var numberOfCubes = 9;
//color array - will become random eventually
var colorsArr = genRando(numberOfCubes);
//incorporates all cube class divs from document into one var
var cubes = document.querySelectorAll(".cube");
//setting up initial value for color to be used as target
var initialSel = randoColor();
//tageted through span id (not class) colorSel
var colorSelect = document.querySelector("#colorSel");
//display span - for correct incorrect (replaces alert)
var msgDisplay = document.querySelector('#displayMSG');
var h1 = document.querySelector("h1");
var reseedBut = document.querySelector("#reseedBut");
var easyBut = document.querySelector("#easyBut");
var hardBut = document.querySelector("#hardBut");




//toggles styling for easy mode
easyBut.addEventListener("click", function(){
	easyBut.classList.add("modeSel");
	hardBut.classList.remove("modeSel");
	numberOfCubes = 6;
	colorsArr = genRando(numberOfCubes);
	initialSel = randoColor();
	colorSelect.textContent = initialSel;
	for(var i = 0; i < cubes.length; i++){
		if(colorsArr[i]){
			cubes[i].style.backgroundColor = colorsArr[i];
		} else {
			cubes[i].style.display = "none";
		}
	}
});
//toggles styling for hard mode
hardBut.addEventListener("click", function(){
	hardBut.classList.add("modeSel");
	easyBut.classList.remove("modeSel");
	numberOfCubes = 9;
	colorsArr = genRando(numberOfCubes);
	initialSel = randoColor();
	colorSelect.textContent = initialSel;
	for(var i = 6; i < cubes.length; i++){
		cubes[i].style.backgroundColor = colorsArr[i];
		cubes[i].style.display = "cube";
		}
});


reseedBut.addEventListener("click", function(){
	//generate new colors
	colorsArr = genRando(numberOfCubes);
	//pick a new rando from ^^
	initialSel = randoColor();
	//change selection to new seeds
	colorSelect.textContent = initialSel;
	//associate new colors to cubes
	for (var i =0; i < cubes.length; i++ ){
		cubes[i].style.backgroundColor = colorsArr[i];
	}
	//returns header styling to original after press
	h1.style.backgroundColor = "#383636";

});

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
			reseedBut.textContent = "New Game";
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
