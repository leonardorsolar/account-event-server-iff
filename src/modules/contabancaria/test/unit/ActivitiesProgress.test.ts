// import ActivitiesProgress from "../../domain/ActivitiesProgress";

// describe("Domain: ActivitiesProgress", () => {
//   test("Deve registar um porgress para uma atividade", () => {
//     //Give(dado que))
//     const dto = {
//       id_user: "1",
//       id_activity: "1",
//       name_activity: "Entrada",
//       progress: "A_FAZER",
//       planning: "realized",
//       updated_at: new Date(),
//     }

//     //When (quando acontecer algo)
//     const activitiesProgress: ActivitiesProgress = ActivitiesProgress.create(dto.id_user, dto.id_activity, dto.name_activity, dto.progress, dto.planning, dto.updated_at).getValue() as ActivitiesProgress;
//     console.log(activitiesProgress);
//     //then (Então faça isso)
//     expect(activitiesProgress.name_activity.value).toBe("Entrada");
//     //expect(activity.name_activity.getActivity()).toBe("Entrada");
//   });

//   //return Result.fail<NameActivity>(`Opss... O nome ${name} é inválido`);
//   // Result {
//   //   isSuccess: false,
//   //   isFailure: true,
//   //   error: 'Opss. O nome digitado Ent é inválido',
//   //   _value: undefined
//   // }
//   // test("Não Deve criar um usuário inválido", () => {
//   //   //Give(dado que))
//   //   //When (quando acontecer algo)
//   //   const activity = ActivityInput.create("1", "1", "1", ["1", "2"], "Ent", "active", "Lote Cria 23/01", "100", "2023-05-02", "2023-05-03", false, ["piquete1", "piquete2"]);
//   //   //console.log(activity);
//   //   //console.log(activity.getErrorValue());
//   //   //console.log(activity.isFailure);
//   //   //then (Então faça isso)
//   //   expect(activity.getErrorValue()).toBe("Opss. O nome Ent é inválido");
//   //});
// });
