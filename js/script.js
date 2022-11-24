{
const welcome = () => {
    console.log("Bonjour w kalkulatorze");
}

welcome();

const calculatesResult = (amount, currency) => {

        const rateEUR = 4.70;
        const rateUSD = 4.74;
        const rateCHF = 4.76;
        const rateHUF = 1.15;
        
        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "CHF":
                return amount / rateCHF;

            case "HUF":
                return amount / rateHUF;

        }
        
const updateResultText = (amount, result, currency) => {
const resultElement = document.querySelector(".js-result");
resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency} </strong>`;
    }

    document.querySelector(".js-buttonConvert")
    document.querySelector(".js-buttonConvert").click();

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount")
        amountElement.focus();

        const currencyElement = document.querySelector(".js-currency");
        

        const amount = +amountElement.value;
        const currency = currencyElement.value;
        const result = calculatesResult(amount, currency);

        
        
    });

    formElement.addEventListener("reset", (event) => {
        resultElement.innerHTML = "";
    });
    
}}
