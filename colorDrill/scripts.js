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

for(var i = 0; i < cubes.length; i++){
	cubes[i].style.backgroundColor = colorsArr[i];
}