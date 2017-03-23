import * as d3 from 'd3';
import gL from '../gL';

import makeDiv from '../helpers/makeDiv';

const illustration = {};


function updateContext(context) {

  let checkVal = (gL.hasOwnProperty('mainFrameInfo')) ? gL.mainFrameInfo.topPos : 0;

  let scrollPos = checkVal > 0 ? 0 : -checkVal;

  context.beginPath();
  context.rect(2, 2, gL.illustrationWidth - 4, gL.illustrationHeight - 4);
  context.fillStyle = 'rgba(225, 225, 225, 1)';
  context.fill();
  context.closePath();


  context.beginPath();
  context.rect(125, 25, gL.scales.redRect.w(scrollPos), 100);
  context.fillStyle = 'rgba(178, 34, 34, ' +  gL.scales.redRect.opacity(scrollPos) + ')';
  context.fill();
  context.closePath();

}





illustration.init = function() {
  let illustrationWrapper = makeDiv('illustration-wrapper', 'illustration-wrapper');

  illustrationWrapper.innerHTML = (`
    <canvas id='illustration-canvas' width='${gL.illustrationWidth}' height='${gL.illustrationHeight}'></canvas>
  `);

  gL.mainDiv.appendChild(illustrationWrapper);

  gL.illustrationWrapper = document.getElementById('illustration-wrapper');

  let illust = d3.select('#illustration-canvas');

  let context = illust.node().getContext("2d");

  updateContext(context, gL.mainDiv.getBoundingClientRect().top) // HACK to avoid an error







}; // end illustration.init;

illustration.update = function() {

  let illust = d3.select('#illustration-canvas');

  let context = illust.node().getContext("2d");

  context.clearRect(0, 0, gL.illustrationWidth, gL.illustrationHeight);

  updateContext(context, gL.mainFrameInfo.topPos)



}; // end illustration.update

export default illustration;