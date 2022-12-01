const container = document.querySelector('.container')
const squares = document.getElementsByClassName('square')
const eraser = document.getElementsByClassName('eraser')[0]
const randomColorBtn = document.getElementsByClassName('randomColor')[0]
const sixteenBtn = document.getElementById('sixteen')
const thirtyBtn = document.getElementById('thirty')
const sixtyBtn = document.getElementById('sixty')


const resetBtn = document.querySelector('.reset')
resetBtn.addEventListener('click',() => location.reload());


function squaresCreator(numSquares, totalSquares) {
  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
  container.style.display = "grid";
  container.style.gridTemplateRows = `repeat(${numSquares}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${numSquares}, 1fr)`;
  for (let i = 0; i < totalSquares; i++) {
    const div = document.createElement('div')
    container.appendChild(div)
    div.classList.add('square');
  }
}


squaresCreator(16, 256);

function squareColor(backgroundColor){
  for (const square of squares) {
      square.addEventListener("mouseover", function color(square) {
      square.target.style.backgroundColor = backgroundColor;
  });
  }}

let bgColor = 'black';
squareColor(bgColor);


eraser.addEventListener("click", function(){
    bgColor = 'white' 
    return(squareColor(bgColor))
  });

  const colorArray = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
  ];

randomColorBtn.addEventListener("click", function(){
    bgColor = colorArray[Math.floor(Math.random() * colorArray.length)] 
    return(squareColor(bgColor))
});
        
(function() {
  // Bind Click event to the drop down navigation button
  document.querySelector('#nav-button').addEventListener('click', function() {
    /*  Toggle the CSS closed class which reduces the height of the UL thus 
        hiding all LI apart from the first */
    this.parentNode.parentNode.classList.toggle('closed')
  }, false);
})();

sixteenBtn.addEventListener("click", function(){
  return(squaresCreator(16, 256), squareColor(bgColor))
})

thirtyBtn.addEventListener("click", function(){
  return(squaresCreator(32, 1024), squareColor(bgColor))
})

sixtyBtn.addEventListener("click", function(){
  return(squaresCreator(64, 4096), squareColor(bgColor))
})

