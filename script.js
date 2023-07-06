const modal = document.getElementById('myModal');
const btn = document.getElementById('openModal');
const close = document.getElementById('close');

btn.onclick = function btn() {
  modal.style.display = 'block';
};

close.onclick = function close() {
  modal.style.display = 'none';
};

window.onclick = function window(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};