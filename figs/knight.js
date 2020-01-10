import Pair from '../aux/pair.js';
var King = {}

///////////
// Model //
///////////
function model(i, j) {
  return [
    new Pair(i+2, j+1),
    new Pair(i-2, j+1),
    new Pair(i-2, j-1),
    new Pair(i+2, j-1),
    new Pair(i+1, j+2),
    new Pair(i-1, j+2),
    new Pair(i-1, j-2),
    new Pair(i+1, j-2)
  ]
}

//////////
// View //
//////////


////////////////
// Controller //
////////////////
King.getFields = (i, j) => {
  var r = []
  model(i, j).map(f => {
    if (f.valid()) r.push(f)
  })
  return r;
}

export default King;