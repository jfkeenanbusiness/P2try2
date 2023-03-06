$(function(){
    var $jittery = $('.jittery'),
        aText    = $jittery.text().split(''),
        letters = '';
    
    for(var i = 0; i < aText.length; i++){
      letters += '<span>'+aText[i]+'</span>';
    }
    
    $jittery.empty().append(letters);
    
    $.each($('span', $jittery), function(i){
      $(this).css('animation-delay', '-'+i+'70ms');
      span.textContent = character;
    });
  });










//   https://codepen.io/punkydrewster713/pen/zYKdywP

// var container = document.querySelector(".text");

// var speeds = {
//    pause: 500, //Higher number = longer delay
//    slow: 120,
//    normal: 90,
//    fast: 40,
//    superFast: 10
// };

// var textLines = [
//    { speed: speeds.slow, string: "Oh, hello!" },
//    { speed: speeds.pause, string: "", pause: true },
//    { speed: speeds.normal, string: "Have you seen my pet" },
//    { speed: speeds.fast, string: "frog", classes: ["green"] },
//    { speed: speeds.normal, string: "around?" }
// ];


// var characters = [];
// textLines.forEach((line, index) => {
//    if (index < textLines.length - 1) {
//       line.string += " "; //Add a space between lines
//    }

//    line.string.split("").forEach((character) => {
//       var span = document.createElement("span");
//       span.textContent = character;
//       container.appendChild(span);
//       characters.push({
//          span: span,
//          isSpace: character === " " && !line.pause,
//          delayAfter: line.speed,
//          classes: line.classes || []
//       });
//    });
// });

// function revealOneCharacter(list) {
//    var next = list.splice(0, 1)[0];
//    next.span.classList.add("revealed");
//    next.classes.forEach((c) => {
//       next.span.classList.add(c);
//    });
//    var delay = next.isSpace && !next.pause ? 0 : next.delayAfter;

//    if (list.length > 0) {
//       setTimeout(function () {
//          revealOneCharacter(list);
//       }, delay);
//    }
// }

// //Kick it off
// setTimeout(() => {
//    revealOneCharacter(characters);   
// }, 600)


var text = $('.jittery').val();

text = text.replace(/>.+[\r\n]+/g, function(a){
    return '<span class="quote">' + a + '</span>';
})

