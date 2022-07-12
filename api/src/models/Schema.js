const mongoose = require('mongoose');
const validator = require('validator');
// Declaring Schema
const employeeSchema = new mongoose.Schema({
	name: {
		type:String,
		required:true,
	},
	email: {
		type:String,
		required:true,
		unique:[true,"Email id already exist"],
		validate(value){
			if(!validator.isEmail(value)){
				throw new error('Invalid Email')
			}
		}

	},
	password:{
		type:Number,
		required:true,
		min:8,
		required:true,
	},
})

// Creating new Collection

const Employee = new mongoose.model('Employee',employeeSchema);

module.exports = Employee;