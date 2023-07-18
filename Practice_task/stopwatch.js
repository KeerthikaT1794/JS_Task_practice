
let seconds = "00";
let hundreds = "00";
let interval;

//Start button click
function startTimer() {
    hundreds++

    if (hundreds > 9) {
        document.getElementById('hundreds').innerHTML = hundreds;
    }
    if (hundreds > 99) {
        seconds++
        document.getElementById('seconds').innerHTML = "0" + seconds;
        hundreds = 0;
        document.getElementById('hundreds').innerHTML = "0" + 0;;
    }
    if (seconds > 9) {
        document.getElementById('seconds').innerHTML = seconds;
    }
}

document.getElementById('button-start').onclick = function () {
    if (interval) {
        clearInterval(interval);
    }

    interval = setInterval(startTimer, 10);
}



document.getElementById('button-stop').onclick = function () {
    clearInterval(interval);
}



document.getElementById('button-reset').onclick = function () {
    clearInterval(interval)
    hundreds = "00";
    seconds = "00";
    document.getElementById('seconds').innerHTML = seconds;
    document.getElementById('hundreds').innerHTML = hundreds;
}