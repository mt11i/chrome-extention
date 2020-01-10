var x = setInterval(function () {
  var date = new Date();
  var options = { hour12: true };
  document.getElementById("demo").innerHTML = date.toLocaleString('en-GB', options);


  /* Leave time calculator */
  var month = new Array(12);
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  
  var countDownDate;

  var today = new Date();
  var year = today.getFullYear();
  var day = today.getDate();
  var month = month[today.getMonth()];


  var days_left_date = new Date('Jan 31, 2020 18:00:00').getTime();
  if (today.getDay() == 6) {
    countDownDate = new Date(" " + month + " " + day + ", " + year + " 14:30:00").getTime();
  } else {
    countDownDate = new Date(" " + month + " " + day + ", " + year + " 17:30:00").getTime();
  }

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;
  var days_left = days_left_date - now;

  // Time calculations for days, hours, minutes and seconds
  var cdays_left = Math.floor(days_left / (1000 * 60 * 60 * 24));


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("time_left").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";


  var start_day = new Date(" " + month + "-" + day + "-" + year);
  var end_day = days_left_date;
  var startDate = new Date(start_day);
  var endDate = new Date(end_day);

  var totalSundays = 0;
  for (var i = startDate; i <= endDate;) {
    if (i.getDay() == 0) {
      totalSundays++;
    }
    i.setTime(i.getTime() + 1000 * 60 * 60 * 24);
  }
document.getElementById("time_left").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
(cdays_left > 0) ? document.getElementById("days_left").innerHTML = parseInt(cdays_left -totalSundays - 4) + "  <small>Days To GO. </small>" : '';













}, 1000);




