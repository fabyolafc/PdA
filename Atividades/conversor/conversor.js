/* Esse código é um conversor de unidades simples. Ele permite transformar valores entre quilômetros e milhas, celsius e fahrenheit, ou quilos e libras. Você informa o valor, a unidade de origem e a unidade de destino, e o programa calcula e mostra o resultado no console com duas casas decimais. Caso a conversão não seja suportada, ele avisa que não é possível realizar. É uma forma prática de ver rapidamente diferentes tipos de conversões. */

function converter(valor, origem, destino) {
  let resultado;

  // Condições de conversão
  if (origem === "km" && destino === "milhas") {
    resultado = valor * 0.621371;
  } else if (origem === "milhas" && destino === "km") {
    resultado = valor / 0.621371;
  } else if (origem === "celsius" && destino === "fahrenheit") {
    resultado = (valor * 9) / 5 + 32;
  } else if (origem === "fahrenheit" && destino === "celsius") {
    resultado = ((valor - 32) * 5) / 9;
  } else if (origem === "kg" && destino === "libras") {
    resultado = valor * 2.20462;
  } else if (origem === "libras" && destino === "kg") {
    resultado = valor / 2.20462;
  } else {
    console.log(`Conversão de "${origem}" para "${destino}" não é suportada.`);
    return;
  }

  console.log(`${valor} ${origem} = ${resultado.toFixed(2)} ${destino}`);
}

// Exemplos de uso:
converter(25, "km", "milhas");
converter(100, "celsius", "fahrenheit");
converter(70, "kg", "libras");
