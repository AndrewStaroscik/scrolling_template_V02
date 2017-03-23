import gL from '../gL';

// alters some parameters on the gL object
// put here because it is called from a couple of different places

const setTxtPos = function() {

  let tmp = gL.txtOrient;

  gL.txtOrient = (gL.viewHt > gL.canvas01.w) ? 'bottom' : 'side';
  
  if (gL.mainFrameInfo.width > 600) gL.txtOrient = 'side';
  gL.txtLeftAdjust = gL.txtOrient == 'side' ? parseInt(gL.canvas01.w, 10) + 20: 0;

  gL.moveTxt = tmp == gL.txtOrient ? 0 : 1;

};

export default setTxtPos;