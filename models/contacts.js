// Import
let mongoose = require('mongoose');

// Create model class
let contactsModel = mongoose.Schema(
    {
        name: String,
        number: String,
        email: String,
    }
);

module.exports = mongoose.model("Contact", contactsModel, "contacts");