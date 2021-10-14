window.onload = function () {
    let clickDivMinus = document.getElementById("click-div-minus");
    clickDivMinus.onclick = decrementClick;

    let clickDivPlus = document.getElementById("click-div-plus");
    clickDivPlus.onclick = incrementClick;

    let verifyBtn = document.getElementById("verify-button");
    verifyBtn.onclick = verifyCounter;

    let resetBtn = document.getElementById("reset-button");
    resetBtn.onclick = resetCounter;
}

var counterVal = 0;

incrementClick = function() {
    updateDisplay(++counterVal);
}

decrementClick = function() {
    updateDisplay(--counterVal);
}

verifyCounter = function() {
    if (counterVal <=0) {
      alert("Puoi fare di meglio! All'inizio ogni cambiamento può sembrare difficile. Leggi qualche consiglio qui sotto per trovare la giusta motivazione.")
    } else if (counterVal ==1) {
      alert("Bene! Hai risparmiato quasi 9 grammi di plastica! Con questa costanza in un anno risparmierai circa 3200 grammi di plasica.")
    } else if (counterVal ==2) {
      alert("Benissimo! Se continuerai a riempire almeno due volte al giorno la tua borraccia, rispermierai circa 6400 grammi di plastica all'anno. ")
    } else if (counterVal ==3) {
      alert("OTTIMO LAVORO! Grazie al tuo impegno, oggi hai risparmiato 35 grammi di plastica (una bottiglia da 1,5 litri). In un anno contribuirai a risparmiare circa 12800 grammi di plastica.")
    } else if (counterVal ==4) {
      alert("PERFETTO! Hai bevuto 2 litri di acqua oggi! Inoltre hai risparmiato 44 grammi di plastica e in un anno risparmierai circa 16000 grammi di plastica!")
    } else if (counterVal >=5) {
      alert("INCREDIBILE RISULTATO! Ma ricordati che è consigliabile bere circa 2 litri di acqua al giorno.")
    }
}

resetCounter = function() {
    counterVal = 0;
    updateDisplay(counterVal);
}

updateDisplay = function(val) {
    document.getElementById("counter-label").innerHTML = val;
}
