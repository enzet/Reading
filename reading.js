document.addEventListener('keydown', (e) => {
  if (e.key == "j") {
    window.scroll(window.scrollX, window.scrollY + 100);
  } else if (e.key == "k") {
    window.scroll(window.scrollX, window.scrollY - 100);
  }
});

const parts = [
  [1, ''],
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
  [0, ''],
]

document.addEventListener('scroll', function(e) {
  const scrollPosition = window.scrollY;
  const innerHeight = window.innerHeight;
  const scrollHeight = document.body.scrollHeight - innerHeight;
  const rate = scrollPosition / scrollHeight;

  if (rate > 1) {
    rate = 1;
  }

  document.getElementById('pages').textContent = 
    Math.ceil(scrollPosition / innerHeight) + ' of '
    + Math.ceil(scrollHeight / innerHeight) + ' p.';

  document.getElementById('percent').textContent = 
    (rate * 100).toFixed(2) + ' %';

  var part = '';

  for (var i = 0; i < parts.length; i++) {
    [a, b] = parts[i];
    if (rate >= a) {
      part = b;
      break;
    }
  }
  document.getElementById('part').textContent = part;

});

function startTime() {
  var today = new Date();
  var time = today.toLocaleTimeString().substring(0, 5);

  document.getElementById('time').textContent = time;
    
  setTimeout(function() {
    startTime()
  }, 500);
}

window.onload = startTime;
