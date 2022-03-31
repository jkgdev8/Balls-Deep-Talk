const { Schema, model } = require('mongoose');
const reactionMlbSchema = require('./ReactionMlb');
const dateFormat = require('../utils/dateFormat');

const thoughtMlbSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'You need to leave a thought!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionMlbSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

thoughtMlbSchema.virtual('reactionMlbCount').get(function() {
  return this.reactions.length;
});

const MlbThought = model('MlbThought', thoughtMlbSchema);

module.exports = MlbThought;
