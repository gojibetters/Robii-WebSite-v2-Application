import sql from 'mssql';
import config from './configDB/configs.js';

export async function getForms(req, res) {
  sql.connect(config, async (err) => {
    if (err) res.status(503).send();
    const request = new sql.Request();
    const tableExists = await request.query(
      `SELECT 1 FROM sys.Tables WHERE Name = N'FORMULARIOS'`
    );

    if (!tableExists.recordset.length) {
      await request.query(
        `CREATE TABLE FORMULARIOS (NOME_USUARIO VARCHAR(30) NOT NULL, DATA_NASCIMENTO DATE NOT NULL, EMAIL VARCHAR(100) NOT NULL, DUVIDA VARCHAR(MAX)  ) `
      );
    }

    const query = `SELECT * from FORMULARIOS`;
    try {
      const result = await request.query(query);

      const forms = result.recordset.filter((obj) => !obj.ARQUIVADO);

      res.status(200).json(forms).send();
    } catch (e) {
      res.status(400).send();
    }
  });
}
