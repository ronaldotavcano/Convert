// cotação de moedas do dia
const USD = 5.66
const EUR = 6.45
const GBP = 7.68

//obtendo elementos do formulário
const form = document.querySelector("form") 
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("Description")
// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "") //removemos o q nn é número
})

//capturando o evento de submit
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

// Função de conversão de moeda

function convertCurrency(amount, price, symbol) {
   try {
    // Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // adiciona a classe que exibe o footer
    footer.classList.add("show-result")
   } catch (error) {
    // remove a classe que exibe o footer
     console.log(error)
     footer.classList.remove("show-result")
     alert("Não foi possível converter. Tente novamente mais tarde.")
   }
}

function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}





