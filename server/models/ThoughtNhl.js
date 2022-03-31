const { Schema, model } = require('mongoose');
const reactionNhlSchema = require('./ReactionNhl');
const dateFormat = require('../utils/dateFormat');

const thoughtNhlSchema = new Schema(
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
    reactions: [reactionNhlSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

thoughtNhlSchema.virtual('reactionNhlCount').get(function() {
  return this.reactions.length;
});

const NhlThought = model('NhlThought', thoughtNhlSchema);

module.exports = NhlThought;
