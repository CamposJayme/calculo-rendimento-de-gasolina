function calcular() {
    var valor_litro = document.getElementById('valor-litro')
    var km_litro = document.getElementById('km-litro')
    var distancia = document.getElementById('km')
    var res = document.getElementById('res')
    var res1 = Number(valor_litro.value)
    var res2 = Number(km_litro.value)
    var res3 = Number(distancia.value)
    var calculo_final = (res3 / res2) * res1
    /* Cálculo:
     1. (Distância a percorrer) / (Km / Litro) = Total de litros necessário 
     2. (Total de litros necessário) * Valor do combústivel (R$ / Litro) = Valor total gasto */
    res.innerHTML = `O valor necessário a ser gasto com combustível é de R$${calculo_final.toFixed(2)}.`
}

//Recarregar a página
const btn = document.querySelector("#refresh")

btn.addEventListener("click", () => {
    location.reload()
})