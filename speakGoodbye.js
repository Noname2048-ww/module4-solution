// STEP 6: Wrap the entire contents of speakGoodbye.js inside of an IIFE
(function(window) {

  // STEP 7: Create an object, called 'byeSpeaker' to which you will attach
  // the "speak" method and which you will expose to the global context
  var byeSpeaker = {};

  // STEP 8: Attach the "speak" method to the byeSpeaker object
  var speakWord = "Good Bye";
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose the 'byeSpeaker' object to the global scope
  window.byeSpeaker = byeSpeaker;

})(window);