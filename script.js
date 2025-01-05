let is24HourFormat = false; 

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  if (!is24HourFormat) {
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    updateDigit('hour1', Math.floor(hours / 10));
    updateDigit('hour2', hours % 10);
    updateDigit('minute1', Math.floor(minutes / 10));
    updateDigit('minute2', minutes % 10);
    updateDigit('second1', Math.floor(seconds / 10));
    updateDigit('second2', seconds % 10);
  } else {
    hours = (hours < 10 ? '0' : '') + hours;
    updateDigit('hour1', hours[0]);
    updateDigit('hour2', hours[1]);
    updateDigit('minute1', Math.floor(minutes / 10));
    updateDigit('minute2', minutes % 10);
    updateDigit('second1', Math.floor(seconds / 10));
    updateDigit('second2', seconds % 10);
  }
}

function updateDigit(id, newValue) {
  const digit = document.getElementById(id);

  if (digit.textContent !== newValue.toString()) {
    digit.classList.add('flip');  
    setTimeout(() => {
      digit.textContent = newValue; 
      digit.classList.remove('flip');
    }, 400); 
  }
}
function toggleFormat() {
  is24HourFormat = !is24HourFormat;
  const toggleButton = document.getElementById('toggleFormat');
  if (is24HourFormat) {
    toggleButton.textContent = 'Switch to 12-Hour Format';
  } else {
    toggleButton.textContent = 'Switch to 24-Hour Format';
  }
}
setInterval(updateClock, 1000);
updateClock();
document.getElementById('toggleFormat').addEventListener('click', toggleFormat);