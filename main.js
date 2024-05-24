// store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

const handleKeyPress = (event) => {
  const targetKey = event.target.closest('.key');
  const targetBlackKey = event.target.closest('.black-key');

  // If the event target is a key or a black key
  if (targetKey || targetBlackKey) {
    const keyElement = targetKey || targetBlackKey;
    keyElement.style.backgroundColor = 'red';

    const audioElement = keyElement.querySelector('audio');
    if (audioElement) {
      audioElement.currentTime = 0;
      audioElement.play();
    }
  }
}

const handleKeyRelease = (event) => {
  const targetKey = event.target.closest('.key');
  const targetBlackKey = event.target.closest('.black-key');

  // If the event target is a key or a black key
  if (event.target.closest('.key') || event.target.closest('.black-key')) {
    const keyElement = targetKey || targetBlackKey;
    keyElement.style.backgroundColor = '';
  }
}

const keyStroke = (note) => {
  note.addEventListener('mousedown', handleKeyPress);
  note.addEventListener('mouseup', handleKeyRelease);
}

// loop that runs the array elements through the function
notes.forEach(note => keyStroke(note));

// store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');
let lastLyric = document.getElementById('column-optional');

// "hiding" all progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// event handler property and function for the first progress button
nextOne.onclick = function() {
  nextTwo.hidden = false;
  nextOne.hidden = true;
  document.getElementById('letter-note-five').innerHTML = 'G';
  document.getElementById('letter-note-six').innerHTML = 'F';
}

// event handler property and function for the second progress button
nextTwo.onclick = function() {
  nextThree.hidden = false;
  nextTwo.hidden = true;
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRI-';
  lastLyric.style.display = 'inline-block';
  document.getElementById('letter-note-three').innerHTML = 'C2';
  document.getElementById('letter-note-four').innerHTML = 'A';
  document.getElementById('letter-note-five').innerHTML = 'F';
  document.getElementById('letter-note-six').innerHTML = 'E';
}

// event handler property and function for the third progress button
nextThree.onclick = function() {
  startOver.hidden = false;
  nextThree.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'A#';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'A#';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'F';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'G';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'F';
  lastLyric.style.display = 'none';
}

// event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('word-six').innerHTML = 'YOU';
  document.getElementById('letter-note-six').innerHTML = 'C';
}