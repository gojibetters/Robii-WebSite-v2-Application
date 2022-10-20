import sql from 'mssql';
import config from './configDB/configs.js';

export async function deleteForms(req, res) {
  const formData = {
    email: req.body.email,
    duvida: req.body.duvida,
  };

  sql.connect(config, async (err) => {
    if (err) res.status(503).send();
    const request = new sql.Request();
    const tableExists = await request.query(
      `SELECT 1 FROM sys.Tables WHERE Name = N'FORMULARIOS'`
    );

    if (!tableExists.recordset.length) {
      await request.query(
        `CREATE TABLE FORMULARIOS (NOME_USUARIO VARCHAR(30) NOT NULL, DATA_NASCIMENTO DATE NOT NULL, EMAIL VARCHAR(100) NOT NULL, DUVIDA VARCHAR(MAX), ARQUIVADO BIT NOT NULL DEFAULT 0) `
      );
    }

    const query = `UPDATE FORMULARIOS SET ARQUIVADO = 1 WHERE EMAIL='${formData.email}' AND DUVIDA='${formData.duvida}'`;
    try {
      await request.query(query);

      res.status(200).send('apagado');
    } catch (e) {
      res.status(400).send();
    }
  });
}
