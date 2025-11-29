// STEP 2: Wrap the entire contents of speakHello.js inside of an IIFE
(function(window) {
  
  // STEP 3: Create an object, called 'helloSpeaker' to which you will attach
  // the "speak" method and which you will expose to the global context
  var helloSpeaker = {};

  // STEP 4: Attach the "speak" method to the helloSpeaker object
  var speakWord = "Hello";
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose the 'helloSpeaker' object to the global scope
  window.helloSpeaker = helloSpeaker;

})(window);