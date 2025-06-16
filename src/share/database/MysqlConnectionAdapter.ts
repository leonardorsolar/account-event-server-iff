import { createPool, Pool, PoolConnection } from "mysql2/promise";
import IConnection from "./IConnection";
import { createAllTables } from "./CreateDb";

//a classe  Database define uma conexão com o banco de dados e fornece o método query para executar consultas SQL.
export class MysqlConnectionAdapter implements IConnection {
  //private connection: Pool;
  connection: any;
  databaseName: string = "db-bank";

  constructor() {
    //A classe cria uma conexão com o banco de dados MySQL usando createPool do módulo mysql2/promise
    this.connection = createPool({
      host: "localhost",
      user: "root",
      password: "root",
      database: this.databaseName,
      connectionLimit: 10,
    });
    console.log(`Conexão estabelecida com o banco de dados ${this.databaseName}`);
  }

  async beginTransaction(): Promise<any> {
    //beginTransaction: Você pode usar a função getConnection para obter uma conexão e iniciar a transação.
    const connection = await this.connection.getConnection();
    await connection.beginTransaction();
    return connection;
  }

  async commit(conn: any): Promise<any> {
    //commit: Você pode usar o método commit na conexão para confirmar a transação.
    await conn.commit();
    conn.release();
  }

  async rollback(conn: any): Promise<any> {
    //rollback: Você pode usar o método rollback na conexão para reverter a transação.
    await conn.rollback();
    conn.release();
  }

  async createTablesDB(): Promise<any> {
    var tabelas_BD = await this.query(
      "SELECT CONCAT('{', GROUP_CONCAT('\"', table_name, '\":', '\"', table_name, '\"'), '}') AS tables FROM information_schema.tables WHERE table_schema = '" + "vet_ia" + "'",
      []
    );
    //console.log(tabelas_BD)
    tabelas_BD = JSON.parse(tabelas_BD[0].tables || "{}");
    //console.log(tabelas_BD);

    // corrigir aqui
    if (!tabelas_BD.VetData) {
      console.log("VetData");
      await this.query(createAllTables.createVetDataTable, []);
    }

    // this.query(createAllTables.createVetDataTable, []).then(() => {
    //   console.log("Tabela criado com sucesso.");
    // }).catch((err) => {
    //   console.error("[database] Erro ao criar o banco de dados:", err);
    // });

    return true;
  }

  //const [query] = await connection.execute("SELECT * FROM book");
  //const [query] = await connection.query("SELECT * FROM book", []);

  //O método query permite executar consultas SQL na conexão e o método close fecha a conexão com o banco de dados.
  query(statement: string, params: any): Promise<any> {
    return this.connection.query(statement, params);
  }

  //o método close é responsável por encerrar a conexão com o banco de dados
  async close(): Promise<void> {
    await this.connection.end();
    console.log(`*** Conexão encerrada com o banco de dados ${this.databaseName}***`);
  }
}
