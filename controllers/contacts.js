// Create a reference to the model
let ContactsModel = require('../models/contacts');

module.exports.contactsList = function(req, res, next) {
    ContactsModel.find( (err, contactsList) => {
        if (err) {
            console.log(err);
            return console.error(err);
        }
        else {
            console.log("return123" + contactsList);
            res.render('contacts/contacts', {
                ContactsList: contactsList
            });
        }
    })
};

module.exports.displayEditPage = function(req, res, next) {
    let id = req.params.id;

    ContactsModel.findById(id, (err, itemToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            console.log(contactsList);
            // res.render('inventory/add_edit', {
            //     item: itemToEdit
            // });
        }
    })
};

module.exports.processEditPage = function(req, res, next) {
    let id = req.params.id;

    let updatedItem = ContactsModel({
        _id: req.body.id,
        item: req.body.item,
        qty: req.body.qty,
        status: req.body.status,
        size: {
            h: req.body.size_h,
            w: req.body.size_w,
            uom: req.body.size_uom,
        },
        tags: req.body.tags.split("").map(word => word.trim())

    });

    ContactsModel.updateOne({_id: id}, updatedItem, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contacts/');
        }
    })
};