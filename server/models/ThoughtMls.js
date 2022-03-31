const { Schema, model } = require('mongoose');
const reactionMlsSchema = require('./ReactionMls');
const dateFormat = require('../utils/dateFormat');

const thoughtMlsSchema = new Schema(
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
    reactions: [reactionMlsSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

thoughtMlsSchema.virtual('reactionMlsCount').get(function() {
  return this.reactions.length;
});

const MlsThought = model('Thought', thoughtMlsSchema);

module.exports = MlsThought;
