document.getElementById('revealButton').addEventListener('click', function () {
  const hiddenMessage = document.getElementById('hiddenMessage');
  hiddenMessage.classList.remove('hidden');
  this.style.display = 'none';
});