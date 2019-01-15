var numberOfCubes = 9;
var colorsArr = [];
var initialSel;
var cubes = document.querySelectorAll(".cube");
var colorSelect = document.querySelector("#colorSel");
var msgDisplay = document.querySelector('#displayMSG');
var h1 = document.querySelector("h1");
var reseedBut = document.querySelector("#reseedBut");
var difButtons = document.querySelectorAll(".difficulty");

init();

function init(){
	//difficulty event listeners
	difficultySetUp();
	//cube event listeners
	cubeSetUp();
	
	reseed();
}

//generate/assign random colors depending on the number of cubes
function reseed(){
	colorsArr = genRando(numberOfCubes);
	//pick a new rando from ^^
	initialSel = randoColor();
	//change selection to new seeds
	colorSelect.textContent = initialSel;
	reseedBut.textContent = "Reseed Colors"
	msgDisplay.textContent = "";
	//associate new colors to cubes
	for(var i =0; i < cubes.length; i++ ){
		if(colorsArr[i]){
			cubes[i].style.display = "cube";
			cubes[i].style.backgroundColor = colorsArr[i];
		} else{
			cubes[i].style.display = "none";
		}
		
	}
	//returns header styling to original after press
	h1.style.backgroundColor = "rgb(226, 113, 60)";

}


reseedBut.addEventListener("click", function(){
	reseed();
});

function difficultySetUp(){
	//difficulty buttons event listener
	for(var i =0; i < difButtons.length; i++ ){
		difButtons[i].addEventListener("click", function(){
			difButtons[0].classList.remove("modeSel");
			difButtons[1].classList.remove("modeSel");
			this.classList.add("modeSel");
			//ternary operator instead of if/else (more concise)
			this.textContent === "Easy" ? numberOfCubes = 6: numberOfCubes = 9;

			reseed();
		});
	}
}

function cubeSetUp(){
	//loop through arrays of divs (cubes) adding intial color values and click listeners
	for(var i = 0; i < cubes.length; i++){
		//add click listeners to cubes
		cubes[i].addEventListener('click', function(){
			//identify color of clicked cube and compare it to initialSel
			//fading for incorrect choices and recoloring all cubes for correct choice
			var clickedCube = this.style.backgroundColor;
			if(clickedCube === initialSel){
				msgDisplay.textContent = 'Congratulations!';
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
