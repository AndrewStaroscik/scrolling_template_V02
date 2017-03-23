// Loops through the text info and returns the information needed to use
// the text elements to build range and domain arrays for transitions. 

import scrollTxt from '../components/txt';

const getTxtInfo = function() {
  return scrollTxt.txtElements;

}

export default getTxtInfo;