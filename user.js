//storing the id in the variables such as lockunlock button 
const lockUnlockButton = $('#lockUnlockButton');
const engineButton = $('#engineButton');
const temperatureRange = $('#temperatureRange');
const volumeRange = $('#volumeRange');

// Set initial values for the temperature and volume
let temperature = 20;
let volume = 5;

/* Define the event handler functions
in j query the evenListener is replace by .on reducing the code being written 
event handler responds to a particular event such as click, input, key up etc
in response the event listener invlokes the function */

//in the functions below click and input event has been used to trigger the function 
lockUnlockButton.on('click', function lockUnlockDoors() {
  if (lockUnlockButton.text() === 'Lock') { //textContent property sets,returns text content of the specified node, and all its descendants.
    lockUnlockButton.text('Unlock'); //the equivalent for text content in jquery is text 
    alert("lock"); //textContent returns every element in the node. In contrast, innerText is aware of styling and won't return the text of "hidden" elements.
  } else {
    lockUnlockButton.text('Lock');
    alert('unlock'); //alert has been used so that the user can be informed about the changes
  }
});

engineButton.on('click', function startStopEngine() {
  if (engineButton.text() === 'Start') {
    engineButton.text('Stop');
    alert('stop');
  } else {
    engineButton.text('Start');
    alert('start');
  }
});

temperatureRange.on('input', function setTemperature() {
  temperature = temperatureRange.val();//the valueo of the temp range id element is stored in the temp variable
  console.log(`Temperature set to ${temperature} degrees Celsius.`);
  alert(`Temperature set to ${temperature} degrees Celsius.`);
});

volumeRange.on('input', function setVolume() {
  volume = volumeRange.val();
  console.log(`Volume set to ${volume} out of 10.`);
  alert(`Volume set to ${volume} out of 10.`);
});
