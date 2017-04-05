import gL from './gL';
import populate_gL from './helpers/populate_gL';
import scrollPosUpdate from './helpers/scrollPosUpdate';

import makeDiv from './helpers/makeDiv';
import scrll from './helpers/scrll';
import scrollToTop from './helpers/scrollToTop';
import viewResize from './helpers/viewResize';
  

import txt from './components/txt';
import canvas01 from './components/canvasElements/canvas01';

require('./styles/main.styl');


let updateScroll = function() {
  scrll.update();
  txt.update();
  canvas01.update();
}

gL.mainDiv = document.getElementById('mainFrame');
gL.mainW = gL.mainDiv.offsetWidth;
gL.mainFrameInfo = {};

// place to add all gL parameters used later by other files
populate_gL.initial();
txt.init();
populate_gL.makeTransitionsArray();
canvas01.init();

// call both on load to make sure everything is formatted properly
updateScroll();
viewResize();


// on scroll listener... 
window.addEventListener('scroll', function() {
  updateScroll();
  //console.log(gL.mainFrameInfo.topPos);
  
});

window.addEventListener('resize', function() {
  viewResize();
  updateScroll();
});

