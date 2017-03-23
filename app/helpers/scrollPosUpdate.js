// this updates gL and sets up the illustration to update based on scroll position. 

import gL from '../gL';



let scrollPosUpdate = function() {

  // control scroll response from here
  gL.mainFrameInfo.topPos = gL.mainDiv.getBoundingClientRect().top;
  gL.mainFrameInfo.botPos = gL.mainDiv.getBoundingClientRect().bottom;
  gL.mainFrameInfo.height = gL.mainDiv.getBoundingClientRect().height;
  gL.mainFrameInfo.left = gL.mainDiv.getBoundingClientRect().left;
  gL.mainFrameInfo.right = gL.mainDiv.getBoundingClientRect().right;
  gL.mainFrameInfo.width = gL.mainDiv.getBoundingClientRect().width;
  gL.viewHt = document.documentElement.clientHeight;
  gL.viewWt = document.documentElement.clientWidth;
  gL.botEdge = gL.mainFrameInfo.botPos - gL.viewHt;

};

export default scrollPosUpdate;
