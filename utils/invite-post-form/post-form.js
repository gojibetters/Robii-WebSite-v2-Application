import sql from 'mssql';
import config from '../../src/model/configDB/configs.js';

export function postForm(req, res) {
  sql.connect(config, async (err) => {
    if (err) res.status(503).send();
    const request = new sql.Request();
    const tableExists = await request.query(
      `SELECT 1 FROM sys.Tables WHERE Name = N'USERS'`
    );

    if (!tableExists.recordset.length) {
      await request.query(
        `CREATE TABLE FORMULARIOS (NOME_USUARIO VARCHAR(30) NOT NULL,DATA_NASCIMENTO DATE NOT NULL,EMAIL VARCHAR(100) NOT NULL,DUVIDA VARCHAR(MAX))`
      );
    }
    const formulario = {
      email: req.body.email,
      name: req.body.name,
      message: req.body.message,
      datebirth: req.body.datebirth,
    };

    const query = `INSERT INTO FORMULARIOS (NOME_USUARIO, DATA_NASCIMENTO, EMAIL, DUVIDA) VALUES ('${formulario.name}','${formulario.datebirth}','${formulario.email}','${formulario.message}')`;
    try {
      await request.query(query);

      res.status(200).send('sucess');
    } catch (e) {
      res.status(400).send('error');
    }
  });
}
