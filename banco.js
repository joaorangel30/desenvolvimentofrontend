const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const titular = { nome: 'João Silva', agencia: '0001', conta: '123456-7' };
let saldo = 1000;

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function menu() {
    console.log('1 - Dados da conta');
    console.log('2 - Consultar saldo');
    console.log('3 - Débito');
    console.log('4 - Crédito');
    console.log('0 - Sair');
    rl.question('Opção: ', tratarOpcao);
}

function tratarOpcao(opcao) {
    switch (opcao.trim()) {
        case '1':
            console.log(`${titular.nome} | Agência ${titular.agencia} | Conta ${titular.conta}`);
            menu();
            break;

        case '2':
            console.log(formatarMoeda(saldo));
            menu();
            break;

        case '3':
            rl.question('Valor: ', (valor) => {
                const v = parseFloat(valor.replace(',', '.'));
                if (isNaN(v) || v <= 0) console.log('Valor inválido.');
                else if (v > saldo) console.log('Saldo insuficiente.');
                else { saldo -= v; console.log(formatarMoeda(saldo)); }
                menu();
            });
            break;

        case '4':
            rl.question('Valor: ', (valor) => {
                const v = parseFloat(valor.replace(',', '.'));
                if (isNaN(v) || v <= 0) console.log('Valor inválido.');
                else { saldo += v; console.log(formatarMoeda(saldo)); }
                menu();
            });
            break;

        case '0':
            rl.close();
            break;

        default:
            console.log('Opção inválida.');
            menu();
    }
}

menu();