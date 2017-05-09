var asterisk = function(){
  var array =[];("*");
  }
  var looper = setInterval(function(){
    console.log(array.join(""));
    array.splice(0,1);
  }, 1000);
}

asterisk();


// array.pushterval is a function
// where setInterval takes a function and calls back.
// when set a variable
// var thing = setInterval (function(){
// 	(num==0)?clear setInterval(thing):""
// }, 1000);