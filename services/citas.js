
const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, description, date, time, mins 
    FROM citas LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

// Create cita
async function create(citas){
  const result = await db.query(
    `INSERT INTO citas 
    (description, date, time, mins) 
    VALUES 
    (${citas.description}, ${citas.date}, ${citas.time}, ${citas.mins})`
  );

  let message = 'Error in creating cita';

  if (result.affectedRows) {
    message = 'Cita created successfully';
  }

  return {message};
}

// Update existing cita
async function update(id, citas){
  const result = await db.query(
    `UPDATE citas 
    SET description="${citas.description}", date=${citas.date}, time=${citas.time}, 
    mins=${citas.mins} 
    WHERE id=${id}` 
  );

  let message = 'Error in updating cita';

  if (result.affectedRows) {
    message = 'Cita updated successfully';
  }

  return {message};
}

// Delete existing cita
async function remove(id){
  const result = await db.query(
    `DELETE FROM citas WHERE id=${id}`
  );

  let message = 'Error in deleting cita';

  if (result.affectedRows) {
    message = 'Cita deleted successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create,
  update,
  remove
}


