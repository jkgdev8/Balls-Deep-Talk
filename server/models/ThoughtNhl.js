const { Schema, model } = require('mongoose');
const reactionSchemaNhl = require('./ReactionNhl');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
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
    reactions: [reactionSchemaNhl]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const ThoughtNhl = model('Thought', thoughtSchema);

module.exports = ThoughtNhl;
