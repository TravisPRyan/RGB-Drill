// alert("connected");

//color array - will become random eventually
var colorsArr = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(255, 0, 255)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)"
]

//loop through cube divs and assign the color values from the colorsaArr to each div
var cubes = document.querySelectorAll(".cube");
//setting up initial value for color to be used as target
var initialSel = colorsArr[3];
//tageted through span id (not class) colorSel
var colorSelect = document.querySelector("#colorSel");
colorSelect.textContent = initialSel;

for(var i = 0; i < cubes.length; i++){
	//add initial colors to cubes
	cubes[i].style.backgroundColor = colorsArr[i];
	//add click listeners to cubes
	cubes[i].addEventListener('click', function(){
		//identify color of clicked cube and compare it to initialSel
		clickedCube = this.style.backgroundColor;
		if(clickedCube === initialSel){
			alert("CORRECT!");
		} else{
			alert("INCORRECT");
		}

	});
}