// let listaDeCompras = ['Maçã', 'Pão', 'Leite'];

// // 1. Seu primeiro desafio é adicionar 'Ovos' no FINAL da lista.
// //    Resultado esperado: ['Maçã', 'Pão', 'Leite', 'Ovos']
// listaDeCompras.push('Ovos');

// // 2. Agora, adicione 'Manteiga' no INÍCIO da lista.
// //    Resultado esperado: ['Manteiga', 'Maçã', 'Pão', 'Leite', 'Ovos']
// listaDeCompras.unshift('Manteiga');

// // 3. Você percebeu que não precisa mais de 'Leite'. Remova-o da lista.
// //    Use o splice!
// //    Resultado esperado: ['Manteiga', 'Maçã', 'Pão', 'Ovos']
// listaDeCompras.splice(3, 1);

// // 4. O pão já foi comprado! Remova o ÚLTIMO item da lista, mas guarde-o em uma variável chamada 'itemComprado'.
// //    Resultado esperado: listaDeCompras -> ['Manteiga', 'Maçã', 'Pão'], itemComprado -> 'Ovos'
// let itemComprado = listaDeCompras.pop();

// // 5. O primeiro item da lista é o próximo a ser pego. Remova-o e guarde-o na variável 'proximoItem'.
// //    Resultado esperado: listaDeCompras -> 
// //['Maçã', 'Pão'], proximoItem -> "manteiga"
// let proximoItem = listaDeCompras.shift();

// // 6. Finalmente, imprima no console:
// console.log('Lista de Compras:', listaDeCompras);
// console.log('Item Comprado:', itemComprado);
// console.log('Próximo Item:', proximoItem);  

const catalogoLocadora = [
 { titulo: 'The Last of Us', desenvolvedora: 'Naughty Dog',
anoLancamento: 2013, preco: 30 },
 { titulo: 'God of War', desenvolvedora: 'Santa Monica Studio',
anoLancamento: 2018, preco: 35 },
 { titulo: 'Cyberpunk 2077', desenvolvedora: 'CD Projekt Red',
anoLancamento: 2020, preco: 40 }
];

function listarJogos(catalogo) {
    for (let i = 0; i < catalogo.length; i++) {
        const { titulo, desenvolvedora } = catalogo[i];
        console.log(`Titulo ${titulo} - Desenvolvedora: ${desenvolvedora}`);
    }
}

//listarJogos(catalogoLocadora);

function catalogoAtualizado(catalogo, ...elementos) {
        return [...catalogo, ...elementos];
}

const novoCatalogo = catalogoAtualizado(catalogoLocadora,
 { titulo: 'Red Dead Redemption 2', desenvolvedora: 'Rockstar Games',
 anoLancamento: 2018, preco: 45 }
);

console.log(novoCatalogo);

