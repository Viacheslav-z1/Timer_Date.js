window.addEventListener('DOMContentLoaded',function () {





  const deadline = '2022-09-10';


  function getTimeRemeaning(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date()),
      days = Math.floor((t / (1000 * 60 * 60 * 24))),
      hours = Math.floor((t / (1000 * 60 * 60) % 24)),
      minuts = Math.floor(((t / 1000 / 60) % 60)),
      seconds = Math.floor((t / 1000) % 60);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minuts': minuts,
      'seconds': seconds
    };
  }

  function getZero(num) {
    if (num > 0 && num < 10) {
      num = `0${num}`;
    } else if (num == 0) {
      num = `00`
    } else {
      num = num;
    }
    return num;
  }

  function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds");
    const b = setInterval(() => {
      updateClock();
    }, 1000);
    updateClock();
    function updateClock() {
      const t = getTimeRemeaning(endTime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minuts);
      seconds.innerHTML = getZero(t.seconds);
      if (t.total <= 0) {
        clearInterval(b);
        days.innerHTML = 0;
        hours.innerHTML = 0;
        minutes.innerHTML = 0;
        seconds.innerHTML = 0;
      }
    }
  }


  setClock('.timer', deadline);
  
})