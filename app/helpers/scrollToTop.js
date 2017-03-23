import makeDiv from '../helpers/makeDiv';
import gL from '../gL';

let timeOut;


function scrollStep() {

  if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
    window.scrollBy(0, -50);
    timeOut=setTimeout(function() {
      scrollStep()
    },10);
  } else {
    clearTimeout(timeOut);
  }
};

const scrollToTop = function() {

  if (document.getElementById("scrollDiv")) return;

  

  let scrollDiv = makeDiv('scrollDiv', 'scrollDiv noselect');
  scrollDiv.innerHTML = '&uarr; Top';
  gL.mainDiv.appendChild(scrollDiv);

  scrollDiv.addEventListener('click', function() {
    scrollStep()
  });
}

export default scrollToTop;