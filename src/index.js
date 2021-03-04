
exports.min = function min (array) {
  var res = 0;
  if (array !== undefined && array.length>0){
    res = array[0];
    for (var i=0; i<array.length; i++)
      res = array[i] < res ? array[i] : res;
  }
  return res;
}

exports.max = function max (array) {
  var res = 0;
  if (array !== undefined && array.length>0){
    res = array[0];
    for (var i=0; i<array.length; i++)
      res = array[i] > res ? array[i] : res;
  }
  return res;
}

exports.avg = function avg (array) {
  var res = 0;
  if (array !== undefined && array.length>0){
    for (var i=0; i<array.length; i++)
      res += array[i];
    res /= array.length;
  }
  return res;
}
