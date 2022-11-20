const amountElement = document.querySelector(".js-amount")
amountElement.focus();

const formElement = document.querySelector(".js-form")
const currencyElement = document.querySelector(".js-currency")
const resultElement = document.querySelector(".js-result")


document.querySelector(".js-buttonConvert")
document.querySelector(".js-buttonConvert").click();


const rateEUR = 4.70;
const rateUSD = 4.74;
const rateCHF = 4.76;
const rateHUF = 1.15;

formElement.addEventListener("submit", (Event) => {
    Event.preventDefault();

    const amount = +amountElement.value;
    const currency = currencyElement.value;
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
