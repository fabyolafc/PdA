// import readline from 'readline';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Digite seu nome: ', function cumprimentar(nome) {
//   console.log(`Olá, ${nome}! Seja bem-vindo(a)!`);
//   rl.close();
// });
const nomes_produtos = ['Camiseta', 'Calça', 'Tênis', 'Boné'];
const precos_produtos = [50, 120, 200, 30];
const produtos_vendidos = [20, 10, 25, 5];

// 1. Widget de Resumo Financeiro
let faturamento_total = 0;
let faturamento_por_produto = [];

for (let i = 0; i < nomes_produtos.length; i++) {
    const faturamento = precos_produtos[i] * produtos_vendidos[i];
    faturamento_por_produto.push({ nome: nomes_produtos[i], faturamento });
    faturamento_total += faturamento;
}

console.log('Resumo Financeiro:');
for (let i = 0; i < faturamento_por_produto.length; i++) {
    console.log(`- ${faturamento_por_produto[i].nome}: R$ ${faturamento_por_produto[i].faturamento.toFixed(2)}`);
}
console.log(`Faturamento total: R$ ${faturamento_total.toFixed(2)}\n`);

// 2. Widget de Produtos em Destaque
let soma_vendas = 0;
for (let i = 0; i < produtos_vendidos.length; i++) {
    soma_vendas += produtos_vendidos[i];
}
const media_vendas = soma_vendas / produtos_vendidos.length;

console.log('Produtos em Destaque (acima da média de vendas):');
for (let i = 0; i < nomes_produtos.length; i++) {
    if (produtos_vendidos[i] > media_vendas) {
        console.log(`- ${nomes_produtos[i]}`);
    }
}
