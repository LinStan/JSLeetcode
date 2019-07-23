let a = new Map();
let b = [1, 2], c = [2, 1]
if (!a.has(b.sort((a, b) => { return a - b }))) {
  a.set(b, 1)
}
console.log(a)
console.log(a.has([2, 1]))
console.log(a.has(b))