// import mongoose from 'mongoose';
const mongoose = require('mongoose');

let School = mongoose.model('school', {
	student_id: {
		type: Number
	},
	scores: {
		type: Array
	},
	class_id: {
		type: Number
	}
});

module.exports = { School };

// export default School;