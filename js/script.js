let amountElement = document.querySelector(".js-amount")
amountElement.focus();

let formElement = document.querySelector(".js-form")
let currencyElement = document.querySelector(".js-currency")
let resultElement = document.querySelector(".js-result")


document.querySelector(".js-buttonConvert")
document.querySelector(".js-buttonConvert").click();


let rateEUR = 4.70;
let rateUSD = 4.74;
let rateCHF = 4.76;
let rateHUF = 1.15;

formElement.addEventListener("submit", (Event) => {
    Event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "USD":
            result = amount / rateUSD;
            break;

        case "CHF":
            result = amount / rateCHF;
            break;

        case "HUF":
            result = amount / rateHUF;
            break;

    }
    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency} </strong>`;


});

formElement.addEventListener("reset", (event) => {
    resultElement.innerHTML = "";
  });
