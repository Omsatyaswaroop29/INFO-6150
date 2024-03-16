$(document).ready(() => {
  var process = 0;
  var interval = null;
  var startTime = null;
  var pauseTime = null;
  var pauseDuration = 0;

  $("#startStop").on("click", start);
  $("#reset").on("click", reset);

  function start() {
    if (process) {
      clearInterval(interval);
      pauseTime = new Date();
      process = 0;
      $("#startStop").text("START");
    } else {
      if (pauseTime === null) {
        startTime = new Date();
        interval = setInterval(count, 10);
        process = 1;
        $("#startStop").text("PAUSE");
      } else {
        pauseDuration += new Date() - pauseTime;
        interval = setInterval(count, 10);
        process = 1;
        $("#startStop").text("PAUSE");
      }
    }
  }

  function reset() {
    clearInterval(interval);
    pauseDuration = 0;
    startTime = null;
    pauseTime = null;
    process = 0;
    $("#span").text("00:00:00");
    $("#startStop").text("START");
  }

  function count() {
    var timeDuration = new Date(new Date() - startTime - pauseDuration);
    var hrs = timeDuration.getUTCHours();
    var mins = timeDuration.getUTCMinutes();
    var secs = timeDuration.getUTCSeconds();

    $("#span").text(
      zeroHandling(hrs, 2) + ":" + zeroHandling(mins, 2) + ":" + zeroHandling(secs, 2)
    );
  }

  function zeroHandling(val, num) {
    var zero = "";
    for (i = 0; i < num; i++) {
      zero += "0";
    }
    return (zero + val).slice(-num);
  }
});
