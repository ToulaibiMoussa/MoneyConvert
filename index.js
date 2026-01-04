// Mes constantes

// Mes Options
const ariaryToEuro = document.getElementById('ariaryToEuro');
const euroToAriary = document.getElementById('euroToAriary');
const ariaryToKMF = document.getElementById('ariaryToKMF');
const KMFToAriary = document.getElementById('KMFToAriary');
const KMFToEuro = document.getElementById('KMFToEuro');
const EuroToKMF = document.getElementById('EuroToKMF');

// -----------------------------
const result = document.getElementById('result');
const number = document.getElementById('number');
const devise = document.getElementById('devise');
let temp;

function convert() {
    const val = devise.value;
    const amount = parseFloat(number.value);
    if (isNaN(amount)) {
        result.textContent = "Entrez un nombre valide.";
        return;
    }

    if (val === ariaryToEuro.value) {
        temp = amount * 0.0001859;
        result.textContent = temp.toFixed(4) + " €";
    } else if (val === euroToAriary.value) {
        temp = amount * 5378.03;
        result.textContent = temp.toFixed(3) + " Ariary";
    } else if (val === ariaryToKMF.value) {
        temp = amount * 0.0914773;
        result.textContent = temp.toFixed(4) + " KMF";
    } else if (val === KMFToAriary.value) {
        temp = amount * 10.9317;
        result.textContent = temp.toFixed(3) + " Ariary";
    } else if (val === KMFToEuro.value) {
        temp = amount * 0.00203265;
        result.textContent = temp.toFixed(4) + " €";
    } else if (val === EuroToKMF.value) {
        temp = amount * 491.968;
        result.textContent = temp.toFixed(3) + " KMF";
    } else {
        result.textContent = "Vous devez sélectionner la conversion";
    }
}

