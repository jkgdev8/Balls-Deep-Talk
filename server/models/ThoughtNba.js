const { Schema, model } = require('mongoose');
const reactionNbaSchema = require('./ReactionNba');
const dateFormat = require('../utils/dateFormat');

const thoughtNbaSchema = new Schema(
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
    reactions: [reactionNbaSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

thoughtNbaSchema.virtual('reactionNbaCount').get(function() {
  return this.reactions.length;
});

const NbaThought = model('Thought', thoughtNbaSchema);

module.exports = NbaThought;
