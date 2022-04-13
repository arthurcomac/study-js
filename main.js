/*
    será feito uma simples plataforma que irá converter
    graus Celsius em Fahrenheit e ao cotrario tambem.

    formula de Fahrenheit = (F - 32) * 5/9
    formula de Celsius = (C * 9/5 + 32)

    1. uma function que irá encontrar 'c' e 'f' para os graus, caso não encontre
    ira imprimir uma mensagem para corrigir

    2. cria uma variavel para guardar a formula de conversão
    e outra para concatenar com a letra 'C' de celsius


*/
function fahrenheitToCelsius(Degree) {
    const updateDegree = Number(Degree.toUpperCase().replace("F", ""));
    let celsius = (updateDegree - 32) * 5/9;
    return `${celsius}C`;
}

function celsiusToFahrenheit(Degree) {
    const updateDegree = Number(Degree.toUpperCase().replace("C", ""));
    let fahrenheit = (updateDegree * 9/5 + 32);
    return `${fahrenheit}F`;
}

function transformDegree(Degree) {
    const CelsiusExist = Degree.toUpperCase().includes('C')
    const FahrenheitExist = Degree.toUpperCase().includes('F')

    if (!CelsiusExist && !FahrenheitExist) {
        console.log("Grau não identificado, insira um 'C' ou 'F' para continuar.");
        throw new error("Grau não identificado, insira um 'C' ou 'F' para continuar.");
    }

    // de fahrenheit para celsius
    if (FahrenheitExist) {
        const result = fahrenheitToCelsius(Degree);
        console.log(result);
        return result;
    }

    //celsius para fahrenheit
    if (CelsiusExist) {
        const result = celsiusToFahrenheit(Degree);
        console.log(result);
        return result;
    }
}

/*try{
    console.log(transformDegree())
}
catch (error) {
    console.log(error.message)
}

*/