document.addEventListener("DOMContentLoaded", function() {
//create button
var btn = document.createElement("button");
var text = document.createTextNode("Click Me");
//causes alert message to pop up when clicking on button from JS
btn.addEventListener('click', clickMe);
    function clickMe() {
        window.alert("Hello");
    }

btn.style.margin = '20px';
btn.style.display = 'inline';
btn.appendChild(text);
document.body.appendChild(btn);

//causes alert message to pop up when clicking on button from HTML
function clickHere() {
    window.alert("Enter some text...");
}

//causes background color to change when mouseover and mouseout
document.getElementById("color").addEventListener("mouseover", mouseOver);
document.getElementById("color").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("color").style.backgroundColor = "red";
}

function mouseOut() {
    document.getElementById("color").style.backgroundColor = "transparent";
}

//gets random colors
 function getRandomColor() {
        //generate random color
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
    };

    //should make random colors happen on click
function clickedColor() {
    var newColor = getRandomColor()
    var p = document.getElementById("clickedText");
    p.style.color=newColor;
     
};

//adds name to div
function addName() {
    var span = document.createElement("span");
}

});