const { Schema, model } = require('mongoose');
const reactionNflSchema = require('./ReactionNfl');
const dateFormat = require('../utils/dateFormat');

const thoughtNflSchema = new Schema(
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
    reactions: [reactionNflSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

thoughtNflSchema.virtual('reactionNflCount').get(function() {
  return this.reactions.length;
});

const NflThought = model('NflThought', thoughtNflSchema);

module.exports = NflThought;
