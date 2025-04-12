import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    poster: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    cast: [{
        type: String,
        required: true
    }]
}, {
    timestamps: true
});

export default mongoose.model('Movie', movieSchema);