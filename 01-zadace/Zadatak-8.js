function usporedi (a1, a2) {
return Object.keys(a1).toString() === Object.keys(a2).toString();
}

let a = {a: 1, b: 2, c: 3}
let b = {a: 321, b: 3, c: 1}


console.log(usporedi(a,b));