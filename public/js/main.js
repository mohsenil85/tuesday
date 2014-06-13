"use strict";
$(document).ready( function(){

  //globals
  var player1Score = 0;
  var player2Score = 0;

  //init score
  $('.player1-score').html(player1Score);
  $('.player2-score').html(player2Score);

  //create function to increment scores
  //note we have to have a way to link the click of the
  //button to the correct score...
  //could make this more generic, but for now will just have 
  //one call back per button, ie, 2 functions that essentially
  //do the same thing
  //
  //also note the copy-pasted line from above.  perhaps refactor?

  $('#player1-button').click(function(){
    player1Score++;
    $('.player1-score').html(player1Score);
  })

  //copypaste and change all occurances of '1' to '2'
  $('#player2-button').click(function(){
    player2Score++;
    $('.player2-score').html(player2Score);
  })

  //attatch some hover state listeners to the buttons to make them pretty
  //
  $('button')
  .mouseover(function(){
    $(this).animate({
      backgroundColor:"#dfdfdf"
    }, '100')
  })
  .mouseout(function(){
    $(this).animate({
      backgroundColor:"#ffffff"
    }, '100')

  })

});
