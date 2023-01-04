
// Documents
const layerDiv = document.querySelector('.layer');
const layout = document.querySelector('.layout');
const haveWord = document.querySelector('.have-word span');
const word = document.querySelector('.random-word');
const inputField = document.querySelector('.input-word > input');
const time = document.querySelector('.time > span');
const score = document.querySelector('.score > span');
const statusInner = document.querySelector('.status');
inputField.focus();

// Arrays 
const randomWord = ['agree', 'machine', 'teeth'];
getRandomWord(randomWord, word);
haveWord.innerHTML = randomWord.length;

// Variables
let scoreUser = randomWord.length;

// Keyup In Input Field
inputField.addEventListener('keyup', () => {
  if (inputField.value.toUpperCase() == word.innerHTML.toUpperCase()) {
    randomWord.splice(randomWord.indexOf(word.innerHTML), 1);
    showData(randomWord);
    getRandomWord(randomWord, word);
    inputField.value = '';
    statusInner.innerHTML = 'Correct!!!';

    if (time.innerHTML !== '0') {
      score.innerHTML++;  
    }
    time.innerHTML = 3;
    haveWord.innerHTML--;
  }
})


window.setInterval(addOneOnTime, 1000)

// Function To Add One On Time
function addOneOnTime() {
  if (parseInt(time.innerHTML) > 0) {
    time.innerHTML--;
  }

  else if(time.innerHTML == 0) {
    statusInner.innerHTML = 'Game over!!!';
  }
}

// Function To Random Word 
function getRandomWord(array, word) {
  const randomWordOfList = array[Math.floor(Math.random() * array.length)];
  word.innerHTML = randomWordOfList;
  if (array.length == 0) {
    word.style.display = 'none';
  }
}

// Function To Show Data 
function showData(array) {
  if (array.length == 0) {
    layerDiv.style.display = 'block';
    layout.style.display = 'block';
    createDataUser(scoreUser, parseInt(score.innerHTML));
  }
}

// Function To Create Data User
function createDataUser(scoreUser, scoreFinish) {
  const progressUser = document.querySelector('.prog span');
  const preference = document.querySelector('.pref span');
  const answered = document.querySelector('.answered span');
  const notAnswered = document.querySelector('.not-answered span');

  progressUser.innerHTML = `${((scoreFinish + 1) * 100) / scoreUser}%`;
  let pro = parseInt(progressUser.innerHTML.slice(0, -1));

  (pro == 0)? preference.innerHTML = 'Very Bad!!' : false;
  (pro > 0 && pro <= 25)? preference.innerHTML = 'Bad!!' : false;
  (pro > 25 && pro <= 50)? preference.innerHTML = 'Good!!' : false;
  (pro > 50 && pro <= 75)? preference.innerHTML = 'Very Good!!' : false;
  (pro > 75 && pro <= 100)? preference.innerHTML = 'Excellent!!' : false;

  answered.innerHTML = scoreFinish + 1;
  notAnswered.innerHTML = scoreUser - (scoreFinish + 1);
}