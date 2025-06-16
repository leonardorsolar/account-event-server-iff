// import axios from "axios";

// const dto = {
//   id_user: "1",
//   id_activity: "1",
//   name_activity: "Entrada",
//   progress: "A_FAZER",
//   planning: "realized",
//   updated_at: new Date(),
// }

// test("Deve testar a rota list", async function () {
//   const response = await axios({
//     url: "http://localhost:5001/api/v2/activitiesProgress/list",
//     method: "get",
//   });
//   const menssage = response.data;
//   //console.log(response.data.isSuccess);
//   //console.log(response.data)
//   console.log(response.data._value)
//   expect(response.data.isSuccess).toBeTruthy();
// });

// // test.skip("Deve testar a rota post para salvar um regsistro  ", async function () {
// //   await axios({
// //     url: "http://localhost:5001/api/v2/activityInput",
// //     method: "post",
// //     data: {
// //       id_user: "1",
// //       id_property: "1",
// //       id_livestock: "1",
// //       id_group: "3",
// //       id_areamap: "6",
// //       areamap_use: "2",
// //       activity: "Bovinocultura de Corte",
// //       name_activity: "Entrada",
// //       stage: "CRIA",
// //       nameBatch: "Lote Cria 23/01",
// //       numberAnimals: "100",
// //       date_start: "2023-05-02",
// //       date_prev_exit: "2023-05-03",
// //       isDeleted: false,
// //       progress: "a_fazer",
// //       planning: "realized",
// //     },
// //   })
// //     .then((response) => {
// //       console.log(response.data);
// //       return response.data;
// //     })
// //     .catch((error) => {
// //       //console.log("error");
// //       //console.log(error.message);
// //       expect(error.message).toBe("Request failed with status code 400");
// //     });
// // });

// // test("Deve testar a rota users list", async function () {
// //   const response = await axios({
// //     url: "http://localhost:5000/api/v1/users/list",
// //     method: "get",
// //   });
// //   const menssage = response.data;
// //   //console.log(response.data._value)
// //   console.log(response.data.isSuccess);
// //   expect(response.data.isSuccess).toBeTruthy();
// // });
