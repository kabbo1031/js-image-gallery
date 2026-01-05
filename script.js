const viewer = document.getElementById('viewer');
const full = document.getElementById('full');

function view(src){
  full.src = src;
  viewer.style.display = 'flex';
}

function closeView(){
  viewer.style.display = 'none';
}
