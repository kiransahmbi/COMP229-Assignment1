var express = require('express');
var router = express.Router();

let contactsController = require('../controllers/contacts');

// Get Contacts
router.get('/', contactsController.contactsList);

// Edit Inventory
router.get('/edit/:id', contactsController.displayEditPage);
router.post('/edit/:id', contactsController.processEditPage);

module.exports = router;