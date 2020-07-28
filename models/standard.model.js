const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StandardSchema = new Schema(
  {
    header: { type: String, required: true },
    intro: { type: String },
    subtopics: [
      {
        subheading: { type: String },
        par: { type: String },
        list: { type: Array },
      },
      {
        subheading: { type: String },
        par: { type: String },
        list: { type: Array },
      },
      {
        subheading: { type: String },
        par: { type: String },
        list: { type: Array },
      },
      {
        subheading: { type: String },
        par: { type: String },
        list: { type: Array },
      },
      {
        subheading: { type: String },
        par: { type: String },
        list: { type: Array },
      },
      {
        subheading: { type: String },
        par: { type: String },
        list: { type: Array },
      },
      {
        subheading: { type: String },
        par: { type: String },
        list: { type: Array },
      },
    ],
  },
  { collection: 'Standard' }
);

const Standard = mongoose.model('Standard', StandardSchema);
module.exports = Standard;
