import mongoose from 'mongoose'

const liftSchema = new mongoose.Schema({
    name: {
        type:String,
        trim:true,
        required:true,
    },
    sets: {
        type: Number,
    },
    setWeight: {
        type: Number,
    },
    pr: {
        type: Number,
    },
    comments: {
        type: String,
    }
})

export default mongoose.model('Lift', liftSchema)