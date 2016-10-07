$(document).ready(function() {

    //create a nice message button NUMBER 1
$(function () {
  function niceMessage() {
    alert("This is a nice message!");
    $("body").append;
  }
  function createniceMessageButton() {
    var $btn = $('<button />', {
      type: 'button',
      text: 'Nice Message',
      id: 'btn_nice'
    }).click(niceMessage);
    return $btn;
  }
  $("body").append(createniceMessageButton());
});

//create alert box when html button is clicked NUMBER 2
$("#alertButton").click(function(){
  var field = document.getElementById("myTextBox").value;
    alert(field);
});

//mouseover and mouseout on div color NUMBER 3
$( "#color" ).mouseover(function() {
  this.style.backgroundColor = 'green'
    });
    
$( "#color" ).mouseout(function() {
    this.style.backgroundColor = 'transparent'
    });

//get random color on click NUMBER 4
$('#clickedText').click(function() {
   var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $('#clickedText').css('color', randomColorChange);
    });

//add div NUMBER 5
$('body').append('<div>');

//add name to span NUMBER 5 function createniceMessageButton() 
//add div
function nameDiv() {
    var $div = $('<div />', {
      type: 'div',
      id: 'divName'
    }).click(nameDiv);
    $("body").append($div);
    return $div;
    
}

function nameSpan () {
  var $span = $("<span />", {
    type: "span",
    text: "Rachel Eiting!!!!!!!",
    id: 'nameSpan',
  });
  return $span;
  }
  
//add button
$(function () {
  function nameMessage() {

    var div = nameDiv();
    $(div).append(nameSpan());
  }
  function createnameMessageButton() {
    var $btn = $('<button />', {
      type: 'button',
      text: 'What is my name',
      id: 'btn_nice'
    }).click(nameMessage);
    return $btn;
  }
  $("body").append(createnameMessageButton());
});

//NUMBER 6
//array of friends
var friends = ["Wayne", "Kwinn", "Connie", "Sarah", "Davida", "Bob", "Rob", "Job", "Amanda", "Josh"];

$("#friendsButton").click (function() {
   var aFriend = friends.pop();
  //  create a list item
  //  get the list of friends div
  //  add the list item to the list of friends div
  var li = $('<li/>');
  li.text(aFriend);
  var listOfFriends = $('#listFriends');
  listOfFriends.append(li);

});




});//end of document.ready







