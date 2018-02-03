const app = "I don't do much."
// 1 begins
var kittens = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendKitten(name){
kittens.push(name)
}
// 2 begins
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}
// 3 begins
function destructivelyRemoveFirstKitten(){
  kittens.shift()
}
// 4 begins
function appendKitten(name){
  [...kittens, name]
  return kittens;
}
