// takes context and element and runs the proper render function 

// **** works as SIDE EFFECTS!!!!!

const canvasParamSelector = function(s, c, el) {
  if (el.type == 'rect') {
    c.rect(el.x.val * s, el.y.val * s, el.w.val * s, el.h.val * s);
    return;
  }

}

export default canvasParamSelector