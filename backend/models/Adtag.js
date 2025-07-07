// models/Adtag.js

import mongoose from 'mongoose';

const AdtagSchema = new mongoose.Schema(
  {
    creatorId: {
      type: String,
      // required: true,
    },
    page: {
      type: String,
      required: true,
    },
    script_snippet: {
      type: String,
      required: true,
    },
    placement: {
      type: String,
      enum: ['head', 'body'],
      default: 'body',
    },
  },
  { timestamps: true }
);

const Adtag = mongoose.model('Adtag', AdtagSchema);

export default Adtag;
