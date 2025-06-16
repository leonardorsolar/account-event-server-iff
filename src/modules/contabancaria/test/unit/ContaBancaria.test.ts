// import ContaBancaria from "./ContaBancaria";

// const nome = "leonardo";
// const conta = new ContaBancaria(nome, 0);
// const now = new Date();

// test("Deve criar uma conta bancária com saldo zero", function () {
//   //Give(dado que)

//   //When (quando acontecer algo)
//   const saldo = conta.getSaldo();
//   //then (Então faça isso)
//   expect(saldo).toBe(0);
// });

// test("Deve ter um número com 3 dígitos que identifica exclusivamente a conta bancária", function () {
//   //Give(dado que)
//   //When (quando acontecer algo)
//   const numerConta = conta.numero;
//   //console.log(numerConta);
//   //then (Então faça isso)
//   expect(conta.numero).toBe("1234567890"); // O número deve ser igual ao númeroContaInicial
// });

// test("Deve ter uma cadeia de caracteres que armazena o nome ou os nomes dos proprietários", function () {
//   //Give(dado que)
//   //When (quando acontecer algo)
//   const numerConta = conta.proprietario;
//   //then (Então faça isso)
//   expect(numerConta).toBe("leonardo");
// });

// test("deve realizar um depósito com sucesso", function () {
//   //Give(dado que)
//   //When (quando acontecer algo)
//   conta.realizarDeposito(500, now, "Um amigo me pagou de volta");
//   //then (Então faça isso)
//   expect(conta.getSaldo()).toBe(500);
// });

// test("deve lançar uma exceção ao tentar depositar um valor negativo", function () {
//   //Give(dado que)
//   //When (quando acontecer algo)
//   // conta.realizarDeposito(-500);
//   //then (Então faça isso)
//   expect(() => {
//     conta.realizarDeposito(-500, now, "Um amigo me pagou de volta");
//   }).toThrowError("O valor do depósito deve ser positivo");
// });

// test("deve realizar um saque com sucesso", function () {
//   //Give(dado que)
//   //When (quando acontecer algo)
//   conta.realizarDeposito(500, now, "Um amigo me pagou de volta");
//   conta.realizarSaque(100, now, "Pagamento do aluguel");
//   //then (Então faça isso)
//   //console.log(conta);
//   //console.log(conta.saldo);
//   expect(conta.getSaldo()).toBe(900);
// });

// test("deve lançar uma exceção ao tentar sacar um valor negativo", function () {
//   //Give(dado que)
//   //When (quando acontecer algo)
//   // conta.realizarSaque(-500);
//   //then (Então faça isso)
//   expect(() => {
//     conta.realizarSaque(-500, now, "Pagamento do aluguel");
//   }).toThrowError("O valor do saque deve ser positivo");
// });

// test("deve lançar uma exceção ao tentar sacar mais do que o saldo disponível", function () {
//   //Give(dado que)
//   //When (quando acontecer algo)
//   // conta.realizarSaque(-500);
//   //then (Então faça isso)
//   expect(() => {
//     conta.realizarSaque(1500, now, "Saque de teste");
//   }).toThrowError("Fundos insuficientes para este saque");
// });

// //   it("deve lançar uma exceção ao tentar sacar mais do que o saldo disponível", () => {
// //     expect(() => {
// //       conta.realizarSaque(1500, new Date(), "Saque de teste");
// //     }).toThrowError("Fundos insuficientes para este saque");
// //   });

// //   it("deve gerar o histórico da conta corretamente", () => {
// //     const historico = conta.getHistoricoConta();
// //     expect(historico).toContain("Data\t\tValor\tSaldo\tNota\n");
// //     expect(historico).toContain("Saldo inicial");
// //   });
// // });
