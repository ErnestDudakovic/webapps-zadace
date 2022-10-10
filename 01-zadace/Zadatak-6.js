function provjera(broj) {  
    if (broj >= 0 && broj <= 1000 ) {
        let vis = 1;
        for (let i = 7; i <= broj; i += 7) {
            vis *= i;
    }
    console.log(vis);
}
else {
    console.log("Broj nije izmedu 0 i 1000")
}
}

provjera(23);