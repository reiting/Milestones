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
button.addEventListener('click', function() {
    var field = document.getElementById("myTextBox").value;
    alert(field);
});

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
        return color;
    };

    //should make random colors happen on click
    var clickedText = document.getElementById("clickedText");
    clickedText.onclick= function () {
        this.style.color = getRandomColor();
     
};

//button for name
var btn2 = document.createElement("button");
btn2.id = btn2;
btn2.innerHTML = "My name";
btn2.style.margin = '20px';
btn2.style.display = "inline";
document.body.appendChild(btn2);

//div
var myName = document.createElement("div");
myName.id = myName;
document.body.appendChild(myName);

//function
btn2.onclick = function () {
    var nameSpan = document.createElement('span');
    nameSpan.id = nameSpan;
    nameSpan.innerHTML = "Rachel Eiting";
document.getElementById(myName).appendChild(nameSpan);
}

//array of friends
var friends = ["Wayne", "Kwinn", "Connie", "Sarah", "Davida", "Bob", "Rob", "Job", "Amanda", "Josh"];
var friendButton = document.getElementById('friends');
friendButton.addEventListener('click', function() {
    aListOfFriends();
    // var newLI = document.createElement("LI");
    // displayFriendList = document.getElementById("listFriends");

});


//a function here that is going to do
// 1. pop or shift our friends list
// 2. displayFriendList = document.getElementById("listFriends");
// 3. newLI.appendChild(newContent);
// 4. displayFriendList.appendChild(newLI);
function aListOfFriends() {
    var aFriend = friends.pop();
    var newLI = document.createElement("LI");
    displayFriendList = document.getElementById("listFriends");
    newContent = document.createTextNode(aFriend);
    newLI.appendChild(newContent);
    displayFriendList.appendChild(newLI);

}





    
});



    
