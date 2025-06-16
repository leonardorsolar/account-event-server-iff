// import MySQLConnectionAdapter from "../../../../../shared/infra/database/MySQLConnectionAdapter";
// import ActivitiesProgress from "../../../domain/ActivitiesProgress";
// import ActivitiesProgressRepositoryDatabase from "../../../repos/implementations/ActivitiesProgressRepositoryDatabase";

// let connection: MySQLConnectionAdapter;

// beforeEach(function () {
//   connection = new MySQLConnectionAdapter()
//   connection.setInstance("fazenda_premium_demo");
//   connection.setNomeBD("fazenda_premium_demo");
//   //console.log(connection)
// });

// const areas = [
//   {
//     "id": 1,
//     "id_property": 1,
//     "name": "Piquete01",
//     "label": "Piquete01",
//     "coordinates": "",
//     "zoom": "15",
//     "area": "10",
//     "measure": "hectares",
//     "address": "",
//     "description": null,
//     "image": ""
//     , "created_at": "2023-05-05T12:09:05.000Z",
//     "updated_at": "2023-05-05T12:09:05.000Z",
//     "areas_used": [],
//     "usedArea": 10
//   }
// ]

// describe("Infra: ActivitiesProgressRepositoryDatabase", () => {

//   test("Deve salvar um registro no banco", async () => {
//     //Give(dado que)
//     const dto = {
//       id_user: "1",
//       id_activity: "1",
//       name_activity: "Entrada",
//       progress: "A_FAZER",
//       planning: "realized",
//       updated_at: new Date(),
//     }
//     const activitiesProgressRepository = new ActivitiesProgressRepositoryDatabase(connection)
//     //await userRepository.clean();
//     //When (quando acontecer algo)
//     //DTO
//     let output = await activitiesProgressRepository.count();
//     output = output + 1
//     console.log(output)
//     const activitiesProgress: ActivitiesProgress = ActivitiesProgress.create(dto.id_user, dto.id_activity, dto.name_activity, dto.progress, dto.planning, dto.updated_at).getValue() as ActivitiesProgress;
//     console.log(activitiesProgress);
//     await activitiesProgressRepository.save(activitiesProgress);
//     let count = await activitiesProgressRepository.count();
//     // then
//     expect(output).toBe(count)
//   });

//   //   test("Deve salvar um registro no banco", async () => {
//   //     //Give(dado que)
//   //     const activityInputRepository = new ActivityInputRepositoryDatabase(connection)
//   //     //await userRepository.clean();
//   //     //When (quando acontecer algo)
//   //     //DTO
//   //     let output = await activityInputRepository.count();
//   //     //output = output + 1
//   //     console.log(output)
//   //     //ActivityInput(id_user, id_property, id_livestock, id_areamap, nameActivityObject, stage, nameBatch, numberAnimals, date_start, date_prev_exit, isDeleted, areas, id_group, created_at, updated_at, id)
//   //     const activity: ActivityInput = ActivityInput.create("1", "1", "1", ["1"], "Entrada", "active", "Lote Cria 23/013", "100", "2023-05-02", "2023-05-03", false, areas, "3").getValue() as ActivityInput;
//   //     await activityInputRepository.save2(activity, areas);
//   //     let count = await activityInputRepository.count();
//   //     // then
//   //     expect(output).toBe(count)
//   //   });
// });

// afterEach(async function () {
//   await connection.close();
// });
