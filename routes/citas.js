
const express = require('express');
const router = express.Router();
const citas = require('../services/citas');

/* GET citas. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await citas.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting citas `, err.message);
    next(err);
  }
});

/* POST citas */
router.post('/', async function(req, res, next) {
  try {
    res.json(await programmingLanguages.create(req.body));
  } catch (err) {
    console.error(`Error while creating cita`, err.message);
    next(err);
  }
});

/* PUT cita */
router.put('/:id', async function(req, res, next) {
  try {
    res.json(await citas.update(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating cita`, err.message);
    next(err);
  }
});

/* DELETE cita */
router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await citas.remove(req.params.id));
  } catch (err) {
    console.error(`Error while deleting cita`, err.message);
    next(err);
  }
});

module.exports = router;