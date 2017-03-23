import gL from '../gL';

import scrollPosUpdate from './scrollPosUpdate';






const scrll = {
  init: function() {
    scrollPosUpdate();

    //gL.topButton = document.getElementById('scrollDiv');
  }, 
  update: function() {
    scrollPosUpdate();



    
    // if (gL.mainFrameInfo.topPos < 0) {
    //   gL.topButton.style.visibility = 'visible';
    //   // gL.illustrationWrapper.style.position = 'fixed';
    //   // gL.illustrationWrapper.style.top = 50 + 'px';
    //   gL.illustrationWrapper.style.top = (10 + (-gL.mainFrameInfo.topPos)) + 'px';
    // } else {
    //   gL.topButton.style.visibility = 'hidden';
    //   // gL.illustrationWrapper.style.position = 'absolute';
    //   gL.illustrationWrapper.style.top = 10 + 'px';
    // }

    // if (gL.viewHt < gL.mainFrameInfo.botPos) {
    //   gL.topButton.style.top = (gL.viewHt - 50) + 'px';  
    // } else {
    //   gL.topButton.style.top = (gL.mainFrameInfo.botPos - 50) + 'px';  
    // }
    
    // //gL.topButton.style.bottom = (gL.mainFrameInfo.botPos) + 'px';
    // gL.topButton.style.left = (gL.mainFrameInfo.left + gL.mainFrameInfo.width - 125) + 'px';

    // if (gL.mainW < 550) {
    //   gL.illustrationWrapper.style.left = ((gL.mainW - gL.illustrationWidth)/2) + 'px';
    // } else {
    //   gL.illustrationWrapper.style.left = (10) + 'px';
    // }

    // console.log('mainW: ' + gL.mainW);

  }

};

export default scrll;