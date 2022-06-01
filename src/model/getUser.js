import sql from 'mssql';
import config from './configDB/configs.js';

export async function getLoginUser(req, res) {
  const formData = {
    email: req.params.email,
    password: req.params.password,
  };

  sql.connect(config, async (err) => {
    if (err) res.status(503).send();
    const request = new sql.Request();
    const tableExists = await request.query(
      `SELECT 1 FROM sys.Tables WHERE Name = N'USERS'`
    );

    if (!tableExists.recordset.length) {
      await request.query(
        `CREATE TABLE USERS (NAME VARCHAR(30) NOT NULL, LASTNAME VARCHAR(100) NOT NULL, EMAIL VARCHAR(100) NOT NULL PRIMARY KEY, TELEFONE VARCHAR(14) NOT NULL, PASSWORD VARCHAR(100) NOT NULL)`
      );
    }

    const query = `SELECT * from USERS WHERE EMAIL = '${formData.email}'`;

    try {
      const result = await request.query(query);
      const passwordDatabase = result.recordset[0].PASSWORD;

      if (formData.password === passwordDatabase) {
        res.status(200).json(result.recordset[0]).send();
      }

      res.status(401).send();
    } catch (e) {
      res.status(400).send();
    }
  });
}
