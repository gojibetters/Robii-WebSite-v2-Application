import sql from 'mssql';
import config from './configDB/configs.js';

export async function registrationUser(req, res) {
  const formData = req.body;

  sql.connect(config, async (err) => {
    if (err) res.status(503).send();
    const request = new sql.Request();
    const tableExists = await request.query(
      `SELECT 1 FROM sys.Tables WHERE Name = N'USERS'`
    );

    if (!tableExists.recordset.length) {
      await request.query(
        `CREATE TABLE USERS (NAME VARCHAR(30) NOT NULL, LASTNAME VARCHAR(100) NOT NULL, EMAIL VARCHAR(100) NOT NULL, TELEFONE VARCHAR(14) NOT NULL, PASSWORD VARCHAR(100) NOT NULL)`
      );
    }

    const query = `INSERT INTO USERS (NAME, LASTNAME, EMAIL, TELEFONE, PASSWORD) VALUES ('${formData.name}','${formData.lastname}','${formData.email}','${formData.telefone}','${formData.password}')`;

    try {
      await request.query(query);
    } catch {
      res.status(400).send();
    }

    res.status(200).send();
  });
}
