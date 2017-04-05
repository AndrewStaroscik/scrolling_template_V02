import gL from '../gL';
import scrollPosUpdate from './scrollPosUpdate';

// from functs folder
import setTxtPos from '../functs/setTxtPos';
import makeRangeAndDomain from '../functs/makeRangeAndDomain';
import getTxtInfo from '../functs/getTxtInfo';
import makeTransitionsArray from '../functs/makeTransitionsArray';

import * as d3 from 'd3';

let populate_gL = {};

populate_gL.initial = function() {

  if (gL.mainW < 550) {
    gL.illustrationWidth = 310;
    gL.illustrationHeight = 310;
  }

  gL.globalScale = 1; // use this to adjust whole scale of any canvas elements

  gL.fadeInfo = {
    parent: {},
    top: {}
  }; // populated in the txt.init function

  gL.canvas01 = {}; 
  gL.canvas01.el = document.getElementById('canvas01');
  gL.canvas01.ctx = gL.canvas01.el.getContext('2d');
  gL.canvas01.w = gL.canvas01.el.offsetWidth;
  gL.canvas01.h = gL.canvas01.el.offsetHeight;

  //console.log(`w: ${gL.canvas01.el.offsetWidth}, h: ${gL.canvas01.el.offsetHeight}`);

  scrollPosUpdate()

  gL.moveTxt = 0;
  gL.fadeDivHt = 225;
  setTxtPos();

  gL.textEls = getTxtInfo();

  gL.canvas01Elements = [
  {
    desc: 'background',
    type: 'rect',
    uId: 'bkgrnd_bx',
    x: {val: 0}, 
    y: {val: 0}, 
    w: {val: gL.canvas01.w},
    h: {val: gL.canvas01.h}, 
    toFill: 1,
    toStroke: 1,
    lineWidth: {val: 4},
    fillColorR: {val: 255},
    fillColorG: {val: 250},
    fillColorB: {val: 205},
    fillColorA: {val: 1},
    strokeColorR: {val: 0},
    strokeColorG: {val: 128},
    strokeColorB: {val: 0},
    strokeColorA: {val: 1},
    globalAlpha: {val: 1},
    scales: [
      {
        type: 'fillColorR',
        makeInt: 1,
        floor: 0,
        ciel: 255,
        vOffset:            [   0,    -50],
        rangeSteps:         [ 255,    138],
        domainPoints:       [   0, 't005'],
        transitionDuration: [   0,    250],
      },
      {
        type: 'fillColorG',
        makeInt: 1,
        floor: 0,
        ciel: 255,
        vOffset:            [   0,    -50],
        rangeSteps:         [ 250,     43],
        domainPoints:       [   0, 't005'],
        transitionDuration: [   0,    250],
      },
      {
        type: 'fillColorB',
        makeInt: 1,
        floor: 0,
        ciel: 255,
        vOffset:            [   0,    -50],
        rangeSteps:         [ 205,    226],
        domainPoints:       [   0, 't005'],
        transitionDuration: [   0,    250],
      }
    ]
  },
  {
    desc: 'green square appears at start',
    type: 'rect',
    uId: 'grnsq',
    x: {val: 50}, 
    y: {val: 50}, 
    w: {val: 65},
    h: {val: 65}, 
    toFill: 1,
    toStroke: 1,
    lineWidth: {val: 1},
    fillColorR: {val: 32},
    fillColorG: {val: 178},
    fillColorB: {val: 170},
    fillColorA: {val: 1},
    strokeColorR: {val: 72},
    strokeColorG: {val: 61},
    strokeColorB: {val: 139},
    strokeColorA: {val: 1},
    globalAlpha: {val: 1},
    scales: [
      {
        type: 'globalAlpha',
        makeInt: 0,
        floor: 0,
        ciel: 1,
        vOffset:            [ 0, -220,   -20],  
        rangeSteps:         [ 0,     1,     0],
        domainPoints:       [ 0,'t002','t006'],
        transitionDuration: [ 0,   10,   10],
      },
      {
        type: 'x',
        makeInt: 0,
        floor: 0,
        ciel: 1000,
        vOffset:            [  0,  -200,   -200,   -250],
        rangeSteps:         [ 50,   200,     45,    100],
        domainPoints:       [  0,'t003', 't004', 't006'],
        transitionDuration: [  0,   100,     75,    100],
      },
      {
        type: 'y',
        makeInt: 0,
        floor: 0,
        ciel: 1000,
        vOffset:            [ 0,  -150,   -150,   -250],
        rangeSteps:         [50,   100,     50,    100],
        domainPoints:       [ 0,'t003', 't004', 't006'],
        transitionDuration: [ 0,   100,     75,    100],
      },
      {
        type: 'h',
        makeInt: 0,
        floor: 0,
        ciel: 1000,
        vOffset:            [ 0,  -100],
        rangeSteps:         [65,     0],
        domainPoints:       [ 0,'t006'],
        transitionDuration: [ 0,    50],
      },
      {
        type: 'w',
        makeInt: 0,
        floor: 0,
        ciel: 1000,
        vOffset:            [ 0,  -100],
        rangeSteps:         [65,     0],
        domainPoints:       [ 0,'t006'],
        transitionDuration: [ 0,    50],
      }

    ]
  }




  ];


  

  

  // scales for d3 controls
  gL.scales = {}

  gL.scales.txtFadeIn = { // used for all scrolling in text. 
    opacity: d3.scaleLinear()
      .range([0.2, 0.2, 1, 1])
      .domain([0, 25, 125, 9999])
  };

  //console.log('after populate gL is:')
  //console.log(gL)

}; // end populate_gL.initial method

populate_gL.makeTransitionsArray = function() { // needs to run after text verPos's are calculated

  gL.canvas01Transitions = makeTransitionsArray(gL.canvas01Elements, gL.textEls);  
}

export default populate_gL;