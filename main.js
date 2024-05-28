// store the piano keys
const keyMap = {
  'a': 'c-key',
  'w': 'c-sharp-key',
  's': 'd-key',
  'e': 'd-sharp-key',
  'd': 'e-key',
  'f': 'f-key',
  't': 'f-sharp-key',
  'g': 'g-key',
  'y': 'g-sharp-key',
  'h': 'a-key',
  'u': 'a-sharp-key',
  'j': 'b-key',
  'k': 'high-c-key'
};

// Extract the piano key ids from the keyMap
const notes = Object.values(keyMap).map(key => document.getElementById(key));

const play = (audioElement) => {
  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }
}

// update background color of lyrics based on the pressed piano key
const updateLyricsColor = (keyElement) => {
  const pianoKey = keyElement.querySelector('.keynote, .black-keynote').innerHTML;

  if (pianoKey === document.getElementById('letter-note-optional').innerHTML && document.getElementById('word-six').style.background === 'green') {
    document.getElementById('word-optional').style.background = 'green';
    if (line4button.hidden === false) {
      line4button.onclick();
      resetLyricsColor();
    }
  } else if (pianoKey === document.getElementById('letter-note-six').innerHTML && document.getElementById('word-five').style.background === 'green') {
    document.getElementById('word-six').style.background = 'green';
    if (line3button.hidden === false) {
      line3button.onclick();
      resetLyricsColor();
    } else if (line2button.hidden === false) {
      line2button.onclick();
      resetLyricsColor();
    }
  } else if (pianoKey === document.getElementById('letter-note-five').innerHTML && document.getElementById('word-four').style.background === 'green') {
    document.getElementById('word-five').style.background = 'green';
  } else if (pianoKey === document.getElementById('letter-note-four').innerHTML && document.getElementById('word-three').style.background === 'green') {
    document.getElementById('word-four').style.background = 'green';
  } else if (pianoKey === document.getElementById('letter-note-three').innerHTML && document.getElementById('word-two').style.background === 'green') {
    document.getElementById('word-three').style.background = 'green';
  } else if (pianoKey === document.getElementById('letter-note-two').innerHTML && document.getElementById('word-one').style.background === 'green') {
    document.getElementById('word-two').style.background = 'green';
  } else if (pianoKey === document.getElementById('letter-note-one').innerHTML && document.getElementById('word-one').style.background === '') {
    document.getElementById('word-one').style.background = 'green';
  }
}

// reset background color of all lyrics
function resetLyricsColor() {
  document.getElementById('word-one').style.background = '';
  document.getElementById('word-two').style.background = '';
  document.getElementById('word-three').style.background = '';
  document.getElementById('word-four').style.background = '';
  document.getElementById('word-five').style.background = '';
  document.getElementById('word-six').style.background = '';
  document.getElementById('word-optional').style.background = '';
}

const handleMousePress = (event) => {
  const targetKey = event.target.closest('.key');
  const targetBlackKey = event.target.closest('.black-key');

  // If the event target is a key or a black key
  if (targetKey || targetBlackKey) {
    const keyElement = targetKey || targetBlackKey;
    keyElement.style.background = '#d8d8d8';

    updateLyricsColor(keyElement);

    const audioElement = keyElement.querySelector('audio');
    play(audioElement);
  }
}

const handleMouseRelease = (event) => {
  const targetKey = event.target.closest('.key');
  const targetBlackKey = event.target.closest('.black-key');

  // If the event target is a key or a black key
  if (event.target.closest('.key') || event.target.closest('.black-key')) {
    const keyElement = targetKey || targetBlackKey;
    keyElement.style.background = '';
  }
}

const handleKeyboardPress = (event) => {
  const pianoKeyId = keyMap[event.key.toLowerCase()];
  const pianoKey = document.getElementById(pianoKeyId);

  updateLyricsColor(pianoKey);

  if (pianoKey) {
    pianoKey.style.background = '#d8d8d8';
    const audioElement = pianoKey.querySelector('audio');
    play(audioElement);
  }
}

let handleKeyboardRelease = (event) => {
  const pianoKeyId = keyMap[event.key.toLowerCase()];
  const pianoKey = document.getElementById(pianoKeyId);

  if (pianoKey) {
    pianoKey.style.background = '';
  }
}

// mouse event listeners
const keyStroke = (note) => {
  note.addEventListener('mousedown', handleMousePress);
  note.addEventListener('mouseup', handleMouseRelease);
}

// loop that runs the array elements through the function
notes.forEach(note => keyStroke(note));

// keyboard event listeners
document.addEventListener('keydown', handleKeyboardPress);
document.addEventListener('keyup', handleKeyboardRelease);

// store the buttons that progress the user through the lyrics
let line2button = document.getElementById('line-2-button');
let line3button = document.getElementById('line-3-button');
let line4button = document.getElementById('line-4-button');
let resetButton = document.getElementById('reset-button');
let lastLyric = document.getElementById('column-optional');

// "hiding" all progress buttons, but the first one
line3button.hidden = true;
line4button.hidden = true;
resetButton.hidden = true;

// event handler property and function for the first progress button
line2button.onclick = function() {
  line2button.hidden = true;
  line3button.hidden = false;
  document.getElementById('letter-note-five').innerHTML = 'G';
  document.getElementById('letter-note-six').innerHTML = 'F';
}

// event handler property and function for the second progress button
line3button.onclick = function() {
  line3button.hidden = true;
  line4button.hidden = false;
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRI-';
  lastLyric.style.display = 'inline-block';
  document.getElementById('letter-note-three').innerHTML = 'K';
  document.getElementById('letter-note-four').innerHTML = 'H';
  document.getElementById('letter-note-five').innerHTML = 'F';
  document.getElementById('letter-note-six').innerHTML = 'D';
}

// event handler property and function for the third progress button
line4button.onclick = function() {
  line4button.hidden = true;
  resetButton.hidden = false;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'U';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'U';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'H';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'F';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'G';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'F';
  lastLyric.style.display = 'none';
}

// event handler property and function for the resetButton button
resetButton.onclick = function() {
  resetButton.hidden = true;
  line2button.hidden = false;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'A';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'A';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'S';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'A';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'F';
  document.getElementById('word-six').innerHTML = 'YOU';
  document.getElementById('letter-note-six').innerHTML = 'D';
  resetLyricsColor();
}