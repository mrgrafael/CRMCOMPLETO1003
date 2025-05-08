const express = require('express');
const router = express.Router();
const crmController = require('../controllers/crmController');

router.get('/clientes', crmController.getClientes);
router.post('/clientes', crmController.addCliente);
router.put('/clientes/:id', crmController.updateCliente);
router.delete('/clientes/:id', crmController.deleteCliente);

module.exports = router;
