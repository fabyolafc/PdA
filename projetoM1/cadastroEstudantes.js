import readline from 'readline';

// Cria interface para ler e escrever no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array principal que armazena os estudantes
let estudantes = [];

/**
 * Valida e converte os dados de entrada
 * - nome não pode ser vazio
 * - idade deve ser > 0
 * - notas devem estar entre 0 e 10
 * Retorna array de notas convertidas para número ou false se inválido
 */
function validarDados(nome, idade, notas) {
    let notasNumeros = notas.split(",")
    /* ["6", "7", "6"] */

    notasNumeros = notasNumeros.map(nota => {
        return Number(nota);
    })
    /* [6, 7, 6] */

    for(let i = 0; i < notasNumeros.length; i++){
        if(isNaN(notasNumeros[i]) || notasNumeros[i] < 0 || notasNumeros[i] > 10) {
            console.log("Dados inválidos. Tente novamente.");
            return false;
        }
    }

    if (nome.trim().length > 0 && idade > 0) {
        console.log("Estudante cadastrado com sucesso!");
        return notasNumeros;
    } else {
        console.log("Dados inválidos. Tente novamente.");
        return false;
    }
}

// Lista todos os estudantes cadastrados
function listarEstudantes() {
    if (estudantes.length === 0) {
        console.log("Nenhum estudante cadastrado.");
    } else {
        estudantes.forEach(estudante => {
            console.log(`Nome: ${estudante.nome}, Idade: ${estudante.idade}, Notas: ${estudante.notas.join(' | ')}`);
        });
    }
}

// Busca estudantes pelo nome (busca parcial, sem diferenciar maiúsculas/minúsculas)
function buscarEstudante(nome) {
    const filtroEstudante = estudantes.filter(estudante => {
        return estudante.nome.toLowerCase().includes(nome.toLowerCase());
    })
    console.log("Estudantes encontrados:");
    filtroEstudante.forEach(estudante => {
        console.log(`Nome: ${estudante.nome}, Idade: ${estudante.idade}, Notas: ${estudante.notas.join(' | ')}`);
    })
    return filtroEstudante;
}

// Deleta estudante pelo nome (busca exata)
function deletarEstudante(nome) {
    const indice = estudantes.findIndex(estudante => estudante.nome.toLowerCase() === nome.toLowerCase());
    if (indice !== -1) {
        estudantes.splice(indice, 1);
        console.log(`Estudante ${nome} deletado com sucesso!`);
    } else {
        console.log(`Estudante ${nome} não encontrado.`);
    }
}

// Calcula e exibe a média de um estudante pelo nome
function mediaEstudante(nome) {
    const findEstudante = estudantes.find(estudante => {
        return estudante.nome.toLowerCase() === nome.toLowerCase();
    })
    if(findEstudante) {
        const total = findEstudante.notas.reduce((total, nota) => {
            return total + nota;
        }, 0);
        const media = total / findEstudante.notas.length;
        console.log(`A média do estudante ${nome} é ${media.toFixed(2)}`);
    } else {
        console.log(`Estudante ${nome} não encontrado.`)    
    }
}

// Calcula e exibe a média de toda a turma
function mediaTurma() {
    if (estudantes.length > 0) {
        let soma = 0;        // soma de todas as notas
        let qtdNotas = 0;    // quantidade total de notas

        estudantes.forEach(estudante => {
            estudante.notas.forEach(nota => {
                soma += nota;   // soma cada nota
                qtdNotas++;     // conta cada nota
            });
        });

        const media = soma / qtdNotas;
        console.log(`A média da Turma é ${media.toFixed(2)}`);
    } else {
        console.log("Nenhum estudante cadastrado.");
    }
      
}

// Encontra e exibe o estudante com a maior média
function estudanteMaiorMedia() {
    if (estudantes.length === 0) {
        console.log("Nenhum estudante cadastrado.");
        return;
    }

    let maiorMedia = 0;
    let nomeEstudante = "";

    estudantes.forEach(estudante => {
        const total = estudante.notas.reduce((total, nota) => (
            total + nota   
        ), 0);

        const media = total / estudante.notas.length;

        if (media > maiorMedia) {
            maiorMedia = media;
            nomeEstudante = estudante.nome;
        }
    });

    console.log(`O estudante com maior média é ${nomeEstudante} com média ${maiorMedia.toFixed(2)}`);
}

// Lista estudantes aprovados (média >= 7)
function estudantesAprovados() {
    if (estudantes.length === 0) {
        console.log("Nenhum estudante cadastrado.");
        return;
    }

    const aprovados = []; 

    estudantes.forEach(estudante => {
        const total = estudante.notas.reduce((total, nota) => (
            total + nota  
        ), 0);

        const media = total / estudante.notas.length;

        if (media >= 7) {
            aprovados.push({ nome: estudante.nome, media });
        }
    });

    if (aprovados.length === 0) {
        console.log("Nenhum estudante aprovado.");
    } else {
        aprovados.forEach(e =>
            console.log(`Estudante aprovado: ${e.nome} com média ${e.media.toFixed(2)}`)
        );
    }
}

// Lista estudantes de recuperação (5 <= média < 6.9)
function estudantesRecuperacao() {
    if (estudantes.length === 0) {
        console.log("Nenhum estudante cadastrado.");
        return;
    }

    const recuperacao = [];

    estudantes.forEach(estudante => {
        const total = estudante.notas.reduce((total, nota) => (
            total + nota   
        ), 0);

        const media = total / estudante.notas.length;

        if (media >= 5 && media <= 6.9) {
            recuperacao.push({ nome: estudante.nome, media });
        }
    });

    if (recuperacao.length === 0) {
        console.log("Nenhum estudante de recuperação.");
    } else {
        recuperacao.forEach(e =>
            console.log(`Estudante de recuperação: ${e.nome} com média ${e.media.toFixed(2)}`)
        );
    }
}

// Lista estudantes reprovados (média < 5)
function estudantesReprovados() {
    if (estudantes.length === 0) {
        console.log("Nenhum estudante cadastrado.");
        return;
    }

    const reprovados = []; 

    estudantes.forEach(estudante => {
        const total = estudante.notas.reduce((total, nota) => (
            total + nota   
        ), 0);

        const media = total / estudante.notas.length;

        if (media < 5) {
            reprovados.push({ nome: estudante.nome, media });
        }
    });

    if (reprovados.length === 0) {
        console.log("Nenhum estudante reprovado.");
    } else {
        reprovados.forEach(e =>
            console.log(`Estudante reprovado: ${e.nome} com média ${e.media.toFixed(2)}`)
        );
    }
}

// Exibe o menu e trata as opções
function exibirMenu() {
    console.log("\nMenu:");
    console.log("1. Cadastrar Estudante");
    console.log("2. Listar Estudantes");
    console.log("3. Buscar Estudante");
    console.log("4. Deletar Estudante");
    console.log("5. Média do Estudante");
    console.log("6. Média da Turma");
    console.log("7. Estudante com maior média");
    console.log("8. Listar estudante aprovados");
    console.log("9. Listar estudante de recuperação");
    console.log("10. Listar estudante reprovados");
    console.log("11. Sair");

    rl.question('\nEscolha uma opção: ', opcao => {

        switch(opcao) {
            case "1":
                rl.question("Nome do estudante: ", nome => {
                    rl.question("Idade do estudante: ", idade => {
                    rl.question("Notas (separadas por vírgula): ", notas => {
                        const notasValidas = validarDados(nome, Number(idade), notas);
                        if (notasValidas) {
                            estudantes.push({nome, idade: Number(idade), notas: notasValidas});
                        }
                        exibirMenu();
                    });
                    });
                });
            break;

            case '2':
                listarEstudantes();
                exibirMenu();
            break;

            case '3':
                rl.question("Digite o nome do estudante que deseja buscar: ", nome => {
                    buscarEstudante(nome);
                    exibirMenu();
                })
            break;

            case '4':
                rl.question("Digite o nome do estudante que deseja deletar: ", nome => {
                    deletarEstudante(nome);    
                    exibirMenu();
                })
            break;

            case '5':
                rl.question("Digite o nome do estudante para calcular a média: ", nome => {
                    mediaEstudante(nome);
                    exibirMenu();
                })
            break;

            case '6':
                mediaTurma();
                exibirMenu();
            break;

            case '7':
                estudanteMaiorMedia();
                exibirMenu();
            break;

            case '8':
                estudantesAprovados();
                exibirMenu();
            break;

            case '9':
                estudantesRecuperacao();
                exibirMenu();
            break;

            case '10':
                estudantesReprovados();
                exibirMenu();
            break;

            case '11':
                console.log("Sair");
                rl.close()
            break;

            default:
                console.log("Opção inválida.");
                exibirMenu();
        }
    })
}

exibirMenu();

