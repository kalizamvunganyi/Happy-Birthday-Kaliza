 var arrivalDay = new Date("July 25, 2019 12:00:00");

function calculateTimeToArrival() {
  var now = new Date();
  var diff = arrivalDay - now;
  var realTime = diff / 86400000;

  var days = realTime.toString().split('.')[0];

  var hourDecimal = realTime.toString().split('.')[1];
  var convertHourDemical = `0.${hourDecimal}`;
  var fractionHourRemaining = parseFloat(convertHourDemical) * 24;
  var hours = fractionHourRemaining.toString().split('.')[0];

  var minuteDecimal = fractionHourRemaining.toString().split('.')[1];
  var convertMinuteDecimal = `0.${minuteDecimal}`;
  var fractionMinuteRemaining = parseFloat(convertMinuteDecimal) * 60;
  var minutes = fractionMinuteRemaining.toString().split('.')[0];

  var secondDecimal = fractionMinuteRemaining.toString().split('.')[1];
  var convertSecondDecimal = `0.${secondDecimal}`;
  var fractionSecondRemaining = parseFloat(convertSecondDecimal) * 60;
  var seconds = fractionSecondRemaining.toString().split('.')[0];

  updateTimeToArrival(days, hours, minutes, seconds);
}

function updateTimeToArrival(days, hours, minutes, seconds) {
  $('.days').text(days);
  $('.hours').text(hours);
  $('.minutes').text(minutes);
  $('.seconds').text(seconds);
}

setInterval(calculateTimeToArrival, 100);

var cardContainer = $('.card-container');
var submit = $('.submit-btn');

submit.on("click", appendToDo);


  function appendToDo() {
    var toDo = $('.name').val();





  cardContainer.append(`
    <p class="name-card"> <input type="checkbox"class="checkbox"> ${toDo} </p>
`);
var checkbox = $('.checkbox');
checkbox.on("click", remove)
function remove(){
  event.target.parentNode.remove();
}
  $('.name').val("");

}
