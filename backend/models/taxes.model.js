const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaxesSchema = new Schema(
  {
    header: { type: String, required: true },
    intro: { type: String },
    subtopics: {
      s0: {
        subheading: { type: String },
        par: { type: String },
        list: { type: Array },
      },
      s1: {
        subheading: { type: String },
        par: { type: String },
        list: { type: Array },
      },
      s2: {
        subheading: { type: String },
        par: { type: String },
        list: { type: Array },
      },
      s3: {
        subheading: { type: String },
        par: { type: String },
        list: { type: Array },
      },
      s4: {
        subheading: { type: String },
        par: { type: String },
        list: { type: Array },
      },
      s5: {
        subheading: { type: String },
        par: { type: String },
        list: { type: Array },
      },
      s6: {
        subheading: { type: String },
        par: { type: String },
        list: { type: Array },
      },
    },
  },
  { collection: 'Taxes' }
);

const Taxes = mongoose.model('Taxes', TaxesSchema);
module.exports = Taxes;
