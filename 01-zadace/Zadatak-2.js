function provjeraBroja (broj) {
    if (Number(broj) < 100 || Number(broj) > 150000) {
        console.log(broj + " nije unutar [100,150000]");
    }
}

provjeraBroja(53);