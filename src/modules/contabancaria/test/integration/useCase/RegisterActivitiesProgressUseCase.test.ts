// import MySQLConnectionAdapter from "../../../../../shared/infra/database/MySQLConnectionAdapter";
// import ActivityInputRepositoryDatabase from "../../../../activityInput/repos/implementations/ActivityInputRepositoryDatabase";
// import RegisterActivityInputUseCase from "../../../../activityInput/useCase/registerActivityInput/RegisterActivityInputUseCase";
// import ActivitiesProgressRepositoryDatabase from "../../../repos/implementations/ActivitiesProgressRepositoryDatabase";
// import RegisterActivitiesProgressUseCase from "../../../useCase/registerActivitiesProgress/RegisterActivitiesProgressUseCase";

// let connection: MySQLConnectionAdapter;

// beforeEach(function () {
//   connection = new MySQLConnectionAdapter()
//   connection.setInstance("fazenda_premium_demo");
//   connection.setNomeBD("fazenda_premium_demo");
//   //console.log(connection)
// });

// describe("Application: usecase RegisterActivitiesProgressUseCase", () => {
//   test("Deve registar um usuário no sistema", async () => {
//     //Give(dado que)
//     const activitiesProgressRepository = new ActivitiesProgressRepositoryDatabase(connection)
//     const registerActivitiesProgressUseCase = new RegisterActivitiesProgressUseCase(activitiesProgressRepository)
//     //await userRepository.clean();
//     //DTO
//     const request = {
//       id_user: "1",
//       id_activity: "1",
//       name_activity: "Entrada",
//       progress: "A_FAZER",
//       planning: "realized",
//       updated_at: new Date(),
//     };
//     //When (quando acontecer algo)
//     const output = await registerActivitiesProgressUseCase.execute(request);
//     console.log(output)
//     if (output.isRight) {
//       expect(output.isRight).toBeTruthy();
//     } else {
//       expect(output.isLeft).toBeTruthy();
//     }
//   });

//   // test("Deve retornar um erro", async () => {
//   //   //Give(dado que)
//   //   //await userRepository.clean();
//   //   //When (quando acontecer algo)
//   //   //DTO
//   //   const request = {
//   //     name: "",
//   //     email: "leo01@gmail.com",
//   //     password: "123456",
//   //     role: 'user',
//   //   };
//   //   const output = await createUserUseCase.execute(request);
//   //   //console.log(output.value)
//   //   const error = output.get as AppError;
//   //   expect(error.message).toEqual("Opss. O nome digitado  é inválido");
//   // });
// });

// afterEach(async function () {
//   await connection.close();
// });
