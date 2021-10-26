document.addEventListener('keydown', (keyEvent) => {
  if (keyEvent.key == "j") {
    window.scroll(window.scrollX, window.scrollY + 100);
  } else if (keyEvent.key == "k") {
    window.scroll(window.scrollX, window.scrollY - 100);
  }
});

const parts = [
  [1, 'End'],
  [7 / 8, '⅞'],
  [5 / 6, '⅚'],
  [4 / 5, '⅘'],
  [3 / 4, '¾'],
  [2 / 3, '⅔'],
  [3 / 5, '⅗'],
  [1 / 2, '½'],
  [3 / 8, '⅜'],
  [1 / 3, '⅓'],
  [1 / 4, '¼'],
  [1 / 5, '⅕'],
  [1 / 6, '⅙'],
  [1 / 7, '⅐'],
  [1 / 8, '⅛'],
  [1 / 9, '⅑'],
  [1 / 10, '⅒'],
  [0, 'Start'],
]

document.addEventListener('scroll', function(scrollEvent) {
  const scrollPosition = window.scrollY;
  const innerHeight = window.innerHeight;
  const scrollHeight = document.body.scrollHeight - innerHeight;
  const ratio = scrollPosition / scrollHeight;

  if (ratio > 1) {
    ratio = 1;
  }

  document.getElementById('pages').textContent = 
    Math.ceil(scrollPosition / innerHeight) + ' of '
    + Math.ceil(scrollHeight / innerHeight) + ' p.';

  document.getElementById('percent').textContent = 
    (ratio * 100).toFixed(2) + ' %';

  var part = '';

  for (var i = 0; i < parts.length; i++) {
    const [currentRatio, text] = parts[i];
    if (ratio >= currentRatio) {
      part = text;
      break;
    }
  }
  document.getElementById('part').textContent = part;
});

function startTime() {
  var time = new Date().toLocaleTimeString().substring(0, 5);

  document.getElementById('time').textContent = time;
    
  setTimeout(function() {
    startTime()
  }, 500);
}

window.onload = startTime;

function addZero(number) {
  if (number > 10) {
    return '' + number;
  }
  return '0' + number;
}

function getDate() {
  today = new Date();
  return addZero(today.getDate())
    + '.' + addZero(today.getMonth())
    + '.' + today.getFullYear()
    + ' ' + addZero(today.getHours())
    + ':' + addZero(today.getMinutes());
}

function track() {
  event = '{'
    + '"type": "read", '
    + '"middle": "' + getDate() + '", '
    + '"title": "' + document.getElementById('title').innerHTML + '", '
    + '"to": "' + document.getElementById('percent').innerHTML + '"}'
  console.debug(event);
}
