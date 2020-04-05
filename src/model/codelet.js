const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const codeletSchema = new Schema({
    title: {type:String, required: true},
    codeSnippet: {type:String, required: true},
    tags: [String],
    userId: {type: String, ref:'User'},
    userDisplayName: String,
    public: Boolean,
    language: String,
    source: String,
    lastAccessedAt: {type: Date, select: false},
    likeCount: Number,
    ownerVisitCount: {type:Number, select: false},
    __v: { type: Number, select: false}
},
{
  timestamps: true
});

module.exports = mongoose.model('Codelet', codeletSchema);
