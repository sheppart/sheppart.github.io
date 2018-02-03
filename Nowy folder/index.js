var stanGry = '';
var kolkoCzyKrzyzyk = true
function zmien(){ 
  if( kolkoCzyKrzyzyk ){
    this.setAttribute("style", "background-image: url(obrazy/x.png)")
    this.removeEventListener( 'click', zmien )
    divs[9].setAttribute('style', 'background-image: url(obrazy/o.png); background-repeat: no-repeat; background-position: center;')
    kolkoCzyKrzyzyk = false;
  }
  else{
    this.setAttribute("style", "background-image: url(obrazy/o.png)");
    this.removeEventListener( 'click', zmien )
    divs[9].setAttribute('style', 'background-image: url(obrazy/x.png); background-repeat: no-repeat; background-position: center;')
    kolkoCzyKrzyzyk = true;
  }
  spr();
}
var divs = document.querySelectorAll('div.col-xs-4')
for(var i=0; i<divs.length-1; i++){
  divs[i].addEventListener( 'click', zmien )
}
divs[9].setAttribute('style', 'background-image: url(obrazy/x.png); background-repeat: no-repeat; background-position: center;')

function getA(){
   return this.getAttribute('style')
}

var tab = [9];
function spr(){
  for(let i=0; i<divs.length-1; i++){
    if(divs[i].hasAttribute('style')){
      tab[i] = divs[i].getAttribute('style') == "background-image: url(obrazy/o.png)" ? 'o' : 'x' ;
    }
  }

  if (tab[0]=='x' && tab[1]=='x' && tab[2]=='x' || tab[0]=='o' && tab[1]=='o' && tab[2]=='o') {
    divs[0].style.backgroundColor = 'red';
    divs[1].style.backgroundColor = 'red';
    divs[2].style.backgroundColor = 'red';
    stanGry = 'gameover'
  }
  else if (tab[3]=='x' && tab[4]=='x' && tab[5]=='x' || tab[3]=='o' && tab[4]=='o' && tab[5]=='o') {
    divs[3].style.backgroundColor = 'red';
    divs[4].style.backgroundColor = 'red';
    divs[5].style.backgroundColor = 'red';
    stanGry = 'gameover'
  }
  else if (tab[6]=='x' && tab[7]=='x' && tab[8]=='x' || tab[6]=='o' && tab[7]=='o' && tab[8]=='o') {
    divs[6].style.backgroundColor = 'red';
    divs[7].style.backgroundColor = 'red';
    divs[8].style.backgroundColor = 'red';
    stanGry = 'gameover'
  }
  else if (tab[0]=='x' && tab[3]=='x' && tab[6]=='x' || tab[0]=='o' && tab[3]=='o' && tab[6]=='o') {
    divs[0].style.backgroundColor = 'red';
    divs[3].style.backgroundColor = 'red';
    divs[6].style.backgroundColor = 'red';
    stanGry = 'gameover'
  }
  else if (tab[1]=='x' && tab[4]=='x' && tab[7]=='x' || tab[1]=='o' && tab[4]=='o' && tab[7]=='o') {
    divs[1].style.backgroundColor = 'red';
    divs[4].style.backgroundColor = 'red';
    divs[7].style.backgroundColor = 'red';
    stanGry = 'gameover'
  }
  else if (tab[2]=='x' && tab[5]=='x' && tab[8]=='x' || tab[2]=='o' && tab[5]=='o' && tab[8]=='o') {
    divs[2].style.backgroundColor = 'red';
    divs[5].style.backgroundColor = 'red';
    divs[8].style.backgroundColor = 'red';
    stanGry = 'gameover'
  }
  else if (tab[0]=='x' && tab[4]=='x' && tab[8]=='x' || tab[0]=='o' && tab[4]=='o' && tab[8]=='o') {
    divs[0].style.backgroundColor = 'red';
    divs[4].style.backgroundColor = 'red';
    divs[8].style.backgroundColor = 'red';
    stanGry = 'gameover'
  }
  else if (tab[6]=='x' && tab[4]=='x' && tab[2]=='x' || tab[6]=='o' && tab[4]=='o' && tab[2]=='o') {
    divs[6].style.backgroundColor = 'red';
    divs[4].style.backgroundColor = 'red';
    divs[2].style.backgroundColor = 'red';
    stanGry = 'gameover'
  }

  if(stanGry == 'gameover'){
    for(var i=0; i<divs.length-1; i++){
      divs[i].removeEventListener( 'click', zmien )
    }
  }
}

function reset(){
  for(var i=0; i<divs.length-1; i++){
    divs[i].removeAttribute('style', '')
    divs[i].addEventListener( 'click', zmien )
    tab[i] = '';
  }
  stanGry = '';
  kolkoCzyKrzyzyk = true;
}
