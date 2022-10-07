function djeljivstri(brojevi) {
    const result = [];

    for (const broj of brojevi) {
      if (broj % 3 == 0) {
        result.push(broj);
      }
    }
    return result;
}

const param = [3,6,9];
console.log("Brojevi djeljivi s 3: " + djeljivstri(param));


