const { mongoose } = require('../db/mongoose');
var { School } = require('../models/school');
// var db = mongoose.getSiblingDB('school');
// db.students.drop();
var types = ['exam', 'quiz', 'homework', 'homework'];
// 1 million students
for (var i = 6000; i < 10000; i++) {

	// take 10 classes
	for (var class_counter = 0; class_counter < 10; class_counter++) {
		var scores = [];
		// and each class has 4 grades
		for (var j = 0; j < 4; j++) {
			scores.push({ 'type': types[j], 'score': Math.random() * 100 });
		}

		// there are 500 different classes that they can take
		var class_id = Math.floor(Math.random() * 501); // get a class id between 0 and 500

		var record = { 'student_id': i, 'scores': scores, 'class_id': class_id };
		var school = new School(record);
		school.save().then((result) => {
			console.log(result);
			// res.send(result);
		})
			.catch((err) => {
				console.log('Unable to add data due to following error: Error: ', JSON.stringify(err, undefined, 2));
				// res.status(400).send(err);
			});
		// mongoose.students.insert(record);
	}

}


