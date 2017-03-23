import gL from '../gL';
import scrollPosUpdate from './scrollPosUpdate';

import setTxtPos from '../functs/setTxtPos';

// a weakness of this right now is that it is focused on a single canvas
// need to think about how to expand it to adjust a series of canvases. 
// probably by registering them on a list and then making the code below run in a loop the length of an array of canvas elements. 

const viewResize = function() {
  
  gL.mainW = gL.mainDiv.offsetWidth;

  scrollPosUpdate();


  //let tmp = gL.mainDiv.getBoundingClientRect();
  //gL.leftEdge = tmp.left;


  
  if (gL.viewHt < 400) {
    gL.canvas01.el.style.width = (gL.viewHt * gL.globalScale) + 'px';
  } else {
    gL.canvas01.el.style.width = ((gL.mainDiv.offsetWidth > 400 ? 400 * 0.8 * gL.globalScale : gL.mainDiv.offsetWidth * 0.8 * gL.globalScale)) + 'px';
  } 

  gL.canvas01.w = parseInt(gL.canvas01.el.style.width, 10);
  gL.canvas01.h = parseInt(gL.canvas01.el.style.height, 10);

  setTxtPos()  // call this _after_ any adjustments to the canvas element



};

export default viewResize;