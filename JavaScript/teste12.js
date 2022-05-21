function somar (n1, n2){
    return n1 + n2;
}

function subtrair(n1, n2){
    return n1 - n2;
}

function multiplicar (n1, n2){
    return n1 * n2;
}

function dividir (n1, n2){
    return n1 / n2;
}

async function calculos(){
    let a = 45
    let b = 55
    var soma = await somar (a, b)
    var subtracao = subtrair (a, b)
    var multiplicacao = multiplicar(a, b)
    var divisao = dividir(a, b)
    console.log("Soma: ", soma)
    console.log("Subtração:", subtracao)
    console.log("Divisão: ", divisao)
    console.log("Multiplicação: ", multiplicacao)
}