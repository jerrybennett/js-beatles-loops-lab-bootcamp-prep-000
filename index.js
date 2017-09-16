function theBeatlesPlay(musicians, instruments) {
  var arr = []
  for(var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i])
  }
  return arr
}

function johnLennonFacts(facts) {
  var newFacts = []
  var i = 0
  while(facts.length > i) {
    newFacts.push(facts[i] + '!!!')
    --facts.length
  }
  return newFacts
}
