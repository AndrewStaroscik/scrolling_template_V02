import gL from '../../gL';

import canvasParamSelector from '../../functs/canvasParamSelector';


function drawCanvas(gL) {
  let ctx = gL.canvas01.ctx;
  let gS = gL.globalScale;


  for (const el of gL.canvas01Elements) {

    ctx.globalAlpha = el.globalAlpha.val;
    //console.log(el.uId);
    ctx.beginPath();

    ctx.fillStyle = 'DarkSeaGreen';
    ctx.strokeStyle = 'LightSeaGreen';
  
    canvasParamSelector(gS, ctx, el);
    if (el.toFill === 1) {
      ctx.fillStyle = `rgba(${el.fillColorR.val},${el.fillColorG.val},${el.fillColorB.val},${el.fillColorA.val})`;
      ctx.fill();
    }
    if (el.toStroke === 1) {
      ctx.strokeStyle = `rgba(${el.strokeColorR.val},${el.strokeColorG.val},${el.strokeColorB.val},${el.strokeColorA.val})`;
      ctx.lineWidth = el.lineWidth * gS;
      ctx.stroke();
    }
    ctx.closePath()

    ctx.globalAlpha = 1;
  }

}

const canvas01 = {

  init: function() {

    // need to figure out of anything else needs to go here
    drawCanvas(gL);
    
  }, // end init function
  update: function() {

    const testSet = {};

    const actualSet = {
      top: gL.canvas01.el.offsetTop,
      left: gL.canvas01.el.offsetLeft,
      postiton: gL.canvas01.el.style.position
    };

    gL.canvas01.w = gL.canvas01.el.offsetWidth;
    gL.canvas01.h = gL.canvas01.el.offsetHeight;

    let cnvHt = gL.canvas01.el.offsetHeight;
    //debugger;
    // create the test set: 
    if (gL.mainFrameInfo.topPos > 0) { // top of frame is in view
      testSet.position = 'fixed';
      testSet.top = gL.mainFrameInfo.topPos + 30;
      testSet.left = gL.mainFrameInfo.left + 15;

    } else if (gL.mainFrameInfo.botPos < cnvHt + 60) { // bottom of frame is above bottom of screen
      testSet.position = 'fixed';
      //testSet.top = gL.mainFrameInfo.height - cnvHt - 30;
      testSet.top = gL.mainFrameInfo.botPos - cnvHt - 30;
      testSet.left = gL.mainFrameInfo.left + 15;
    } else { // top is above and bottom is below screen edges
      testSet.position = 'fixed';
      testSet.top = 30;
      testSet.left = gL.mainFrameInfo.left + 15;
    }

    // check positions against actual positions and change only if necessary
    if (testSet.top != actualSet.top) {
      gL.canvas01.el.style.top = testSet.top + 'px';
    }
    if (testSet.left != actualSet.left) {
      gL.canvas01.el.style.left = testSet.left + 'px';
    }
    if (testSet.position != actualSet.position) {
      gL.canvas01.el.style.position = testSet.position;
    }

    let currentObjParams = JSON.parse(JSON.stringify(gL.canvas01Elements));
    for(const chng of gL.canvas01Transitions) {
      //console.log(chng);
      let testVal = chng.scale(-gL.mainFrameInfo.topPos);

      if(chng.makeInt === 1) testVal = Math.round(testVal);
      testVal = testVal < chng.floor ? chng.floor : testVal;
      testVal = testVal > chng.ciel ? chng.floor : testVal;

      let targetObj = gL.canvas01Elements.find(el => el.uId === chng.targetId);
      let currentVal = targetObj[chng.targetParentObj][chng.targetVal];
      
        //console.log(testVal);
        //console.log(targetObj.uId);
        //console.log(currentVal);
        //console.log("")
      if (testVal !== currentVal) {
        targetObj[chng.targetParentObj][chng.targetVal] = testVal;
      }

    }
    gL.canvas01.ctx.clearRect(0,0,gL.canvas01.w*gL.globalScale * 10,gL.canvas01.h*gL.globalScale * 10);
    drawCanvas(gL);


  } // end update function

}; // end canvas01 obj

export default canvas01