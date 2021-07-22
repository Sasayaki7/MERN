const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    name: {type: String,
    required:[true, "Author Name is required"],
    validate: {
        validator: v=> v.length > 3,
        message: 'Name must be at least 3 letters long'
    }
}   
}, {timestamps: true});

module.exports.Author = mongoose.model("Author", AuthorSchema)