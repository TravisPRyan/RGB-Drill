// alert("connected");

//color array - will become random eventually
var colorsArr = [
	"rgb(204, 0, 0)",
	"rgb(255, 255, 102)",
	"rgb(0, 204, 153)",
	"rgb(0, 102, 0)",
	"rgb(0, 204, 255)",
	"rgb(0, 0, 102)"
]

//incorporates all cube class divs from document into one var
var cubes = document.querySelectorAll(".cube");
//setting up initial value for color to be used as target
var initialSel = randoColor();
//tageted through span id (not class) colorSel
var colorSelect = document.querySelector("#colorSel");
//display span - for correct incorrect (replaces alert)
var msgDisplay = document.querySelector('#displayMSG');

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
