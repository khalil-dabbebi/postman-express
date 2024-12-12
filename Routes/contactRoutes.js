const express =require('express');

const contactRoute = express.Router();
const {addNewcontact , getAllcontacts,getAllcontactsById, updatecontact, removecontact}= require ('../Controllers/contactcontrollers');
contactRoute.use(express.json());

// route update Contact

//http://localhost:5003/contact/updateContact/:id
contactRoute.put('/contact/updateContact/:id', updatecontact);


// route get contact by id
//http://localhost:5003/contact/getContact/:id
contactRoute.get('/contact/getContact/:id', getAllcontactsById);

// route get All contact
//http://localhost:5003/contact/getAll

contactRoute.get('/contact/getAll',getAllcontacts);

// route post contact
//http://localhost:5003/contact/addcontact

contactRoute.post('/contact/addcontact',addNewcontact);

// route delete Contact 
// http://localhost:5003/contact/deleteContact/:id
contactRoute.delete('/contact/deletecontact/:id', removecontact)

module.exports =contactRoute;