import gL from '../gL';
import makeDiv from '../helpers/makeDiv';

// put all txt elements in this array
// will loop through them in 

// re writing this so that the text content is in the index div.

// idea here is to have the position determined by order, then step offset
// there is going to have to be some JS involved in determining the actual position, but that position 
// could then be used to stage the transitions by linking a particular transition to a particular text position.

// from the transition perspective, the numbers to determine animate in and out will be offsets from the txt order number it 
// is linked to.   

let txtElements = [
  {
    id: 't001',
    className: 'sctxt',
    desc: 'intro to cell cycle text',
    order: 1,
    stepOffset: 50,
    vertPos: 3000,


  },
  {
    id: 't002',
    className: 'sctxt',
    desc: 'intro to cell cycle text',
    order: 2,
    stepOffset: 300,
    vertPos: 3000,
  },
  {
    id: 't003',
    className: 'sctxt',
    desc: 'intro to cell cycle text',
    order: 3,
    stepOffset: 550,
    vertPos: 3000,
  },
  {
    id: 't004',
    className: 'sctxt',
    desc: 'intro to cell cycle text',
    order: 4,
    stepOffset: 300,
    vertPos: 3000,
  },
  {
    id: 't005',
    className: 'sctxt',
    desc: 'intro to cell cycle text',
    order: 5,
    stepOffset: 300,
    vertPos: 3000,
  },
  {
    id: 't006',
    className: 'sctxt',
    desc: 'intro to cell cycle text',
    order: 6,
    stepOffset: 300,
    vertPos: 3000,
  }
];

let setTxtHtAdj = function() {
  return (gL.txtOrient == 'side' ? 5 : parseInt(gL.canvas01.h, 10) + 40); // move text based on screen size and canvas width 
}

let scrollTxt = {

  txtElements: txtElements,

  init: function() {

    // Make the verPos of each element based on order and stepOffset
    let iMax = txtElements.length,
        posSum = 0,
        tmpEl, tmpElObj;


    let txtHeightAdj = setTxtHtAdj();

    


    // make and position fade div for text
    let fadeDivParent = makeDiv('fade-div-parent', 'fade-div-parent');
    let fadeDivTop = makeDiv('fade-div-top', 'fade-div-top');
    let fadeDivFade = makeDiv('fade-div-fade', 'fade-div-fade');

    gL.fadeInfo.top.height = gL.txtOrient == 'side' ? 5 : (45 + gL.canvas01.h);

    gL.fadeInfo.parent.left = gL.mainFrameInfo.left;
    gL.fadeInfo.parent.width =gL.mainFrameInfo.width;

    if (gL.mainFrameInfo.topPos > 0) {
      fadeDivParent.style.top = gL.mainFrameInfo.topPos + 'px';
      gL.fadeInfo.parent.top = gL.mainFrameInfo.topPos;

    } else if (gL.mainFrameInfo.botPos < fadeDivParent.offsetHeight) {
      fadeDivParent.style.top = (gL.mainFrameInfo.botPos - fadeDivParent.offsetHeight) + 'px';
      gL.fadeInfo.parent.top = (gL.mainFrameInfo.botPos - fadeDivParent.offsetHeight);
    }else {
      fadeDivParent.style.top = 0 + 'px';
      gL.fadeInfo.parent.top = 0;      
    }

    fadeDivTop.style.height = gL.fadeInfo.top.height + 'px';
    fadeDivParent.style.width = gL.fadeInfo.parent.width + 'px';
    fadeDivParent.style.left = gL.fadeInfo.parent.left + 'px';


    fadeDivParent.appendChild(fadeDivTop);
    fadeDivParent.appendChild(fadeDivFade);

    gL.mainDiv.appendChild(fadeDivParent); 



    for (let i = 0; i < iMax; i += 1) {
      tmpElObj = txtElements[i];
      tmpElObj.vertPos = posSum + tmpElObj.stepOffset;

      posSum = tmpElObj.vertPos;

      tmpEl = document.getElementById(tmpElObj.id);
      tmpEl.className += ' ' + tmpElObj.vertPos + 'p';
      tmpEl.style.top = (tmpElObj.vertPos + txtHeightAdj) + 'px';
      tmpEl.style.left = gL.txtLeftAdjust + 'px';

    }



    },

    update: function() {

      let txtHeightAdj = setTxtHtAdj(); // not always needed   
      let fadeDivParent = document.getElementById('fade-div-parent');
      let fadeDivTop = document.getElementById('fade-div-top');
      let cnvHt = gL.canvas01.el.offsetHeight;

      const currentFadeInfo = {
        top: gL.fadeInfo.parent.top,
        width: gL.fadeInfo.parent.width, 
        left: gL.fadeInfo.parent.left,
        height: gL.fadeInfo.top.height
      };

      const testFadeInfo = {
        top: parseFloat(fadeDivParent.style.top, 10),
        width: parseFloat(fadeDivParent.style.width, 10), 
        left: parseFloat(fadeDivParent.style.left, 10),
        height: parseFloat(fadeDivTop.style.height, 10)
      }

      if (gL.mainFrameInfo.topPos > 0) {
      testFadeInfo.top = gL.mainFrameInfo.topPos;

      } else if (gL.mainFrameInfo.botPos < fadeDivParent.offsetHeight) {
        testFadeInfo.top = (gL.mainFrameInfo.botPos - fadeDivParent.offsetHeight);

      } else {
      testFadeInfo.top = -5;      
      }


      testFadeInfo.height = gL.txtOrient == 'side' ? 5 : (45 + gL.canvas01.h);
      testFadeInfo.width = gL.mainFrameInfo.width
      testFadeInfo.left = gL.mainFrameInfo.left;


      if (testFadeInfo.top != currentFadeInfo.top) {
        fadeDivParent.style.top = testFadeInfo.top + 'px';
      }

      if (testFadeInfo.width != currentFadeInfo.width) {
        fadeDivParent.style.width = testFadeInfo.width + 'px';
      }

      if (testFadeInfo.left != currentFadeInfo.left) {
        fadeDivParent.style.left = testFadeInfo.left + 'px';
      }

      if (testFadeInfo.height != currentFadeInfo.height) {
        fadeDivTop.style.height = testFadeInfo.height + 'px';
      }




      // fade in txt based on scroll position
      let opAdj = 550; // the number of scroll pos before actual pos for fading in text.
      for (let i = 0; i < txtElements.length; i += 1) {
        let el = document.getElementById(txtElements[i].id);
        let elOpacityPosVal = gL.scales.txtFadeIn.opacity((-gL.mainFrameInfo.topPos < txtElements[i].vertPos - opAdj) ? 0 : -gL.mainFrameInfo.topPos - (txtElements[i].vertPos - opAdj));
        let tmpOpacity = gL.scales.txtFadeIn.opacity((-gL.mainFrameInfo.topPos < txtElements[i].vertPos - opAdj) ? 0 : -gL.mainFrameInfo.topPos - (txtElements[i].vertPos - opAdj));//-gL.mainFrameInfo.topPos < txtElements[i].vertPos - opAdj ? 0.2 : 1;
        
        if (gL.moveTxt == 1) {
          el.style.left = gL.txtLeftAdjust + 'px'; // move text as needed
          el.style.top = (el.vertPos + txtHeightAdj) + 'px';
        }

        if (el.style.opacity != tmpOpacity) {
          el.style.opacity = tmpOpacity;
        }

      }

      if (gL.moveTxt == 1) gL.moveTxt = 0; // reset to 0 if had been set to 1

    }

};

export default scrollTxt;