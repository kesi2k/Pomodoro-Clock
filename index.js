$(document).ready(function() {

  var session = Number(session_length.innerHTML);
  var break_ = Number(break_length.innerHTML);
  var state = 0; // Determines if clock is running or not by switching bet two variables

  //Decrease value of break length

  var breakDecButton = document.getElementById("breakDec");
  breakDecButton.addEventListener("click", function() {
    if (break_ <= 1) {
      break_ = 1;
    } else {
      break_ = break_ - 1
      break_length.innerHTML = break_;
    }
  });

  //Increase value of break length
  var breakIncButton = document.getElementById("breakInc");
  breakIncButton.addEventListener("click", function() {
    if (break_ >= 15) {
      break_ = 15;
    } else {
      break_ = 1 + break_;
      break_length.innerHTML = break_;
    }

  });

  //Decrease session length
  var sessionDecButton = document.getElementById("session_Dec");

  sessionDecButton.addEventListener("click", function() {
    if (session <= 5) {
      session = 5
    } else {
      session = session - 1;
      session_length.innerHTML = session;
      text.innerHTML = session + ":" + "00";
    }

  });

  //Increase session length
  var sessionIncButton = document.getElementById("session_Inc");
  sessionIncButton.addEventListener("click", function() {
    if (session >= 60) {
      session = 60
    } else {
      session = session + 1
      session_length.innerHTML = session;
      text.innerHTML = session + ":" + "00";
    }
  });

  //Start countdown for session
  var startButton = document.getElementById('start');

  startButton.addEventListener("click", function() {

    // Toggle buttons so they cant be adjusted  
    $("body").css('background-color', '#C1E1A6');
    $("#left_side, #right_side, #start, #startBr ").addClass("hidden");
    $("#reset").removeClass("hidden");

    var clockTime = session * 60;
    var start_ = setInterval(function() {

      // Reset button. Right now, it only pauses   
      var resetBut = document.getElementById("reset");

      resetBut.addEventListener("click", function() {
        $("body").css('background-color', '#FFF056');
        $("#left_side, #right_side, #start, #startBr ").removeClass("hidden");
        $("#reset").addClass("hidden");

        clearInterval(start_);
        text.innerHTML = session_length.innerHTML + ":00"
      });

      clockTime = clockTime - 1;
      var mins = Math.floor(clockTime / 60)
      var secs = clockTime - (mins * 60)
      if (secs < 10) {
        text.innerHTML = mins + ":" + "0" + secs;
      } else {
        text.innerHTML = mins + ":" + secs;
      }
      if (clockTime < 1) {
        clearInterval(start_);
      }
    }, 1000)
  })

  //Start countdown for break

  var breakButt = document.getElementById("startBr");

  breakButt.addEventListener("click", function() {

    $("body").css("background-color", "#D9853B");
    // Hides buttons so they cant be adjusted while timer is running  
    $("#left_side, #right_side, #start, #startBr ").addClass("hidden");
    $("#reset").removeClass("hidden");

    var break_le = break_ * 60

    var go_ = setInterval(function() {

      var resetBut = document.getElementById("reset");

      resetBut.addEventListener("click", function() {
        $("body").css('background-color', '#FFF056');
        $("#left_side, #right_side, #start, #startBr ").removeClass("hidden");
        $("#reset").addClass("hidden");

        clearInterval(go_);
        text.innerHTML = session_length.innerHTML + ":00"
      });

      break_le = break_le - 1;
      var mins = Math.floor(break_le / 60);
      var secs = break_le - (mins * 60);
      if (break_le < 1) {
        clearInterval(go_);
        text.innerHTML = "Break over";
      }
      if (secs < 10) {
        text.innerHTML = mins + ":" + "0" + secs;
      } else {
        text.innerHTML = mins + ":" + secs;
      }
    }, 1000)

  });


});