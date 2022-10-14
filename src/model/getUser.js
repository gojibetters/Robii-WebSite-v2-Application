import sql from 'mssql';
import config from './configDB/configs.js';

export async function getLoginUser(req, res) {
  const formData = {
    username: req.body.username,
    password: req.body.password,
  };

  sql.connect(config, async (err) => {
    if (err) res.status(503).send();
    const request = new sql.Request();
    const tableExists = await request.query(
      `SELECT 1 FROM sys.Tables WHERE Name = N'USERS'`
    );

    if (!tableExists.recordset.length) {
      await request.query(
        `CREATE TABLE USERS ( NOME_USUARIO VARCHAR(30) NOT NULL PRIMARY KEY, NIVEL_ACESSO VARCHAR(10) NOT NULL, SENHA VARCHAR(20) NOT NULL ) `
      );
    }

    const query = `SELECT * from USERS WHERE NOME_USUARIO = '${formData.username}'`;
    try {
      const result = await request.query(query);
      const passwordDatabase = result.recordset[0].SENHA;

      if (formData.password === passwordDatabase) {
        res.status(200).json(result.recordset[0]).send();
      }

      res.status(401).send();
    } catch (e) {
      res.status(400).send();
    }
  });
}
