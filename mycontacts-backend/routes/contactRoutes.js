const express = require('express');
const router = express.Router();
const { getContact, updateContact, createContact ,deleteContact,getContacts } = require('../controllers/contactControler');

router.route('/').get( getContact).post(createContact);
router.route('/:id').get(getContacts).put(updateContact).delete(deleteContact);


module.exports = router;
