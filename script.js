const biodataDiri = document.getElementById('biodataDiri');
const biodataGame = document.getElementById('biodataGame');
const toDiri = document.getElementById('toDiri');
const toGame = document.getElementById('toGame');

toGame.addEventListener('click', () => {
  biodataDiri.classList.remove('aktif');
  biodataGame.classList.add('aktif');
  toDiri.classList.remove('active');
  toGame.classList.add('active');
});

toDiri.addEventListener('click', () => {
  biodataGame.classList.remove('aktif');
  biodataDiri.classList.add('aktif');
  toGame.classList.remove('active');
  toDiri.classList.add('active');
});