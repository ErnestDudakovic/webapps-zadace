function pretvorbaVremena(broj) {
    var sati = broj / 60;
    var minute = broj % 60;
    return "Ovo je " + sati + " sata " +  "i " + minute + " minuta";
}

console.log(pretvorbaVremena(120));
