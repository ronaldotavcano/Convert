// cotação de moedas do dia
const USD = 5.66
const EUR = 6.45
const GBP = 7.68

//obtendo elementos do formulário
const form = document.querySelector("form") 
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")
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

    let total = amount * price

    if (isNaN(total)){
        return alert("Por favor, digite o valor corretamente")
    }
    // formatar o valor total
    total = formatCurrencyBRL(total).replace("R$", "")
    // Exibir o resultado total
    result.textContent = `${total} Reais`

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
    // Converte para número para utilizar o toLocaleString para formatar para BRL
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}





