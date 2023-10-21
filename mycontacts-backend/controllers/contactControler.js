// get all contacts
//route get/api/contacts
// access it public
const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModule')
const getContact = asyncHandler(async(req,res) =>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});
const getContacts = asyncHandler(async(req,res) =>{
    res.status(200).json({ message: `get all contact `  });
});
const createContact =asyncHandler(async (req,res) =>{
    console.log('the request body:' , req.body);
    const{name,email,phone} = req.body;
    if(!name||!email||!phone){
        res.status(400);
        throw new Error('fill all filds');
    }
    res.status(201).json({ message: `creat contact`  });
});
const updateContact = asyncHandler(async(req,res) =>{
    res.status(200).json({ message: `update contact ${req.params.id}`  });
});
const deleteContact = asyncHandler(async(req,res) =>{
    res.status(200).json({ message: `delete contact ${req.params.id}`  });
});
module.exports = {getContact ,
    createContact,
    updateContact,
    deleteContact,
    getContacts };
