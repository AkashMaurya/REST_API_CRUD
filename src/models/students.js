const mongoose = require('mongoose');
const validator = require('validator');


// creatring the Query(Schema) 
const studentSchema = new mongoose.Schema({
    rollNo: {
        type: Number,
        required: true,
        unique: true,
        min: 8
    },
    name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: [true, "Email id is Already exists"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    Address: {
        type: String,
        required: true
    },

})

// we will create a new collection 
const RegStudentData = new mongoose.model("Student", studentSchema)


module.exports = RegStudentData