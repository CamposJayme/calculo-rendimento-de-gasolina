function calcular() {
    var valor_litro = document.getElementById('valor-litro')
    var km_litro = document.getElementById('km-litro')
    var distancia = document.getElementById('km')
    var res = document.getElementById('res')
    var res1 = Number(valor_litro.value)
    var res2 = Number(km_litro.value)
    var res3 = Number(distancia.value)
    var calculo_final = (res3 / res2) * res1
    res.innerHTML = `O valor necessário a ser gasto com combustível é de ${calculo_final}.`
}