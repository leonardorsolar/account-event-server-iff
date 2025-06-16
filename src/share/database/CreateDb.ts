const createTrigger = function () {
  return (
    "CREATE TRIGGER create_contaBancaria \n" +
    "AFTER INSERT ON user \n" +
    "FOR EACH ROW \n" +
    "BEGIN \n" +
    "  INSERT INTO contaBancaria (numero, proprietario, saldo) \n" +
    "  VALUES ((SELECT numero +1 FROM contaBancaria ORDER BY id DESC limit 1), NEW.name, 0); \n" +
    "END;\n"
  );
};

const createVetDataTable = () => {
  return ` CREATE TABLE IF NOT EXISTS VetData(
    id VARCHAR(36) PRIMARY KEY,
    species VARCHAR(255) NOT NULL,
    tutorName VARCHAR(255) NOT NULL,
    patientName VARCHAR(255) NOT NULL,
    animalIdentification VARCHAR(255),
    anamnese TEXT,
    physicalExam TEXT,
    exam TEXT
  ) ENGINE=INNODB;
  `;
};

const createAllTables = {
  createVetDataTable: createVetDataTable(),
};

// const createTrigger = function () {
//   return "CREATE TRIGGER create_contaBancaria \n" +
//       "AFTER INSERT ON user \n" +
//       "FOR EACH ROW \n" +
//       "BEGIN \n" +
//       "  INSERT INTO contaBancaria (numero, proprietario, saldo) \n" +
//       "  VALUES ((SELECT numero +1 FROM contaBancaria ORDER BY id DESC limit 1), NEW.name, 0); \n" +
//       "END;\n";
// };

export { createAllTables };
