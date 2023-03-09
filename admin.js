//storing the id in the variables such as  lightButton 
const lightButton = $('#lightButton');
const seatPositionRange = $('#seatPositionRange');
const lightRange = $('#lightRange');
const acTemperatureRange = $('#acTemperatureRange');

// Set initial values for the temperature and volume
let temperature = 20;
// let volume = 5;

/* Define the event handler functions
in j query the evenListener is replace by .on reducing the code being written 
event handler responds to a particular event such as click, input, key up etc
in response the event listener invlokes the function */

//in the functions below click and input event has been used to trigger the function 
lightButton.on('click', function lightSwitch() {
  if (lightButton.text() === 'On') { //textContent property sets,returns text content of the specified node, and all its descendants.
    lightButton.text('Off'); //the equivalent for text content in jquery is text 
    alert("On"); //textContent returns every element in the node. In contrast, innerText is aware of styling and won't return the text of "hidden" elements.
  } else {
    lightButton.text('Off');
    alert('On'); //alert has been used so that the user can be informed about the changes
  }
});

seatPositionRange.on('input', function seatRange() {
  rangeSeat = seatPositionRange.val();//the valueo of the seat range id element is stored in the range variable
  console.log(`Seat is  set to ${rangeSeat} degrees.`);
  alert(`Seat is  set to ${rangeSeat} degrees.`);
});

lightRange.on('input', function setLight() {
  rangeLight = lightRange.val();//the valueo of the light range id element is stored in the rangeLight variable
  console.log(`Light intensity is ${rangeLight} lumens`);
  alert(`Light intensity is ${rangeLight} lumens`);
});

acTemperatureRange.on('input', function setVolume() {
  temp = acTemperatureRange.val();
  console.log(`Temp set to ${temp} degree celcius`);
  alert(`Temp set to ${temp} degree celcius`);
});