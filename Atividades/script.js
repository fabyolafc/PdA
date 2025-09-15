let listaDeCompras = ['Maçã', 'Pão', 'Leite'];

// 1. Seu primeiro desafio é adicionar 'Ovos' no FINAL da lista.
//    Resultado esperado: ['Maçã', 'Pão', 'Leite', 'Ovos']
listaDeCompras.push('Ovos');

// 2. Agora, adicione 'Manteiga' no INÍCIO da lista.
//    Resultado esperado: ['Manteiga', 'Maçã', 'Pão', 'Leite', 'Ovos']
listaDeCompras.unshift('Manteiga');

// 3. Você percebeu que não precisa mais de 'Leite'. Remova-o da lista.
//    Use o splice!
//    Resultado esperado: ['Manteiga', 'Maçã', 'Pão', 'Ovos']
listaDeCompras.splice(3, 1);

// 4. O pão já foi comprado! Remova o ÚLTIMO item da lista, mas guarde-o em uma variável chamada 'itemComprado'.
//    Resultado esperado: listaDeCompras -> ['Manteiga', 'Maçã', 'Pão'], itemComprado -> 'Ovos'
let itemComprado = listaDeCompras.pop();

// 5. O primeiro item da lista é o próximo a ser pego. Remova-o e guarde-o na variável 'proximoItem'.
//    Resultado esperado: listaDeCompras -> 
//['Maçã', 'Pão'], proximoItem -> "manteiga"
let proximoItem = listaDeCompras.shift();

// 6. Finalmente, imprima no console:
console.log('Lista de Compras:', listaDeCompras);
console.log('Item Comprado:', itemComprado);
console.log('Próximo Item:', proximoItem);  