import mongoose from 'mongoose';

let Movies = mongoose.model('movies', {

	title: {
		type: String,
		required: true,
		trim: true,
		minLength: 3
	},
	year: {
		type: Number,
		required: true,
		minLength: 4
	},
	imdb: {
		type: String,
		required: true,
		trim: true,
		minLength: 1
	},
	createdAt: {
		type: Number,
		default: new Date().getTime()
	}
});

export default Movies;