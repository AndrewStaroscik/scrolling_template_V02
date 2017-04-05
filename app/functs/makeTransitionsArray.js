import * as d3 from 'd3';

function makeRandDArrays(rngs, dmns, dur, vO, tList) {
  // fragile assumes all arrays passed in have no errors
  let rangeArray = [rngs[0]];
  let domainArray = [dmns[0]];
  for (let i = 1; i < rngs.length; i += 1) {

    rangeArray.push(rngs[i-1]);
    rangeArray.push(rngs[i]);

    let targetTxt = tList.find(txt => txt.id === dmns[i]);
    let targetTxtPos = targetTxt.vertPos;
    //console.log(targetTxtPos);

    domainArray.push(targetTxtPos - dur[i] + vO[i]);
    domainArray.push(targetTxtPos + vO[i]);


  }

  rangeArray.push(rngs[rngs.length-1]);
  domainArray.push(99999);

  return {range: rangeArray, domain: domainArray};


  // console.log(rangeArray);
  // console.log(domainArray);


}


const makeTransitionsArray = function(els, txtList) {
  //console.log(els);
  //console.log(txtList);

  let retArray = [];


  for (const el of els) {
    for (const scale of el.scales) {
      //console.log(scale);
      const randd = makeRandDArrays(scale.rangeSteps, scale.domainPoints, scale.transitionDuration, scale.vOffset, txtList);
      //console.log(randd)
      retArray.push({
        targetId: el.uId,
        targetParentObj: scale.type,
        targetVal: 'val',
        makeInt: scale.makeInt,
        floor: scale.floor,
        ciel: scale.ciel,
        scale: d3.scaleLinear() 
          .range(randd.range)
          .domain(randd.domain)
      })
    }
  }
  //console.log(retArray);
  return retArray;

}

export default makeTransitionsArray