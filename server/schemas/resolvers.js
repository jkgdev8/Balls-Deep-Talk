const {
  AuthenticationError
} = require('apollo-server-express');
const {
  User,
  Thought,
  MlbThought,
  MlsThought,
  NbaThought,
  NflThought,
  NhlThought
} = require('../models');
const {
  signToken
} = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({
            _id: context.user._id
          })
          .select('-__v -password')
          .populate('thoughts')
          .populate('mlbThoughts')
          .populate('mlsThoughts')
          .populate('nbaThoughts')
          .populate('nflThoughts')
          .populate('nhlThoughts')
          .populate('friends');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('thoughts')
        .populate('mlbThoughts')
        .populate('mlsThoughts')
        .populate('nbaThoughts')
        .populate('nflThoughts')
        .populate('nhlThoughts')
        .populate('friends');
    },

    user: async (parent, {
      username
    }) => {
      return User.findOne({
          username
        })
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts')
        .populate('mlbThoughts')
        .populate('nbaThoughts')
        .populate('nflThoughts')
        .populate('nhlThoughts')
        .populate('mlsThoughts')
    },

    thoughts: async (parent, {
      username
    }) => {
      const params = username ? {
        username
      } : {};
      return Thought.find(params).sort({
        createdAt: -1
      });
    },
    thought: async (parent, {
      _id
    }) => {
      return Thought.findOne({
        _id
      });
    },

    mlbThoughts: async (parent, {
      username
    }) => {
      const params = username ? {
        username
      } : {};
      return MlbThought.find(params).sort({
        createdAt: -1
      });
    },

    mlbThought: async (parent, {
      _id
    }) => {
      return MlbThought.findOne({
        _id
      });
    },

    mlsThoughts: async (parent, {
      username
    }) => {
      const params = username ? {
        username
      } : {};
      return MlsThought.find(params).sort({
        createdAt: -1
      });
    },

    mlsThought: async (parent, {
      _id
    }) => {
      return MlsThought.findOne({
        _id
      });
    },

    nbaThoughts: async (parent, {
      username
    }) => {
      const params = username ? {
        username
      } : {};
      return NbaThought.find(params).sort({
        createdAt: -1
      });
    },
    nbaThought: async (parent, {
      _id
    }) => {
      return NbaThought.findOne({
        _id
      });
    },
    nflThoughts: async (parent, {
      username
    }) => {
      const params = username ? {
        username
      } : {};
      return NflThought.find(params).sort({
        createdAt: -1
      });
    },
    nflThought: async (parent, {
      _id
    }) => {
      return NflThought.findOne({
        _id
      });
    },
    nhlThoughts: async (parent, {
      username
    }) => {
      const params = username ? {
        username
      } : {};
      return NhlThought.find(params).sort({
        createdAt: -1
      });
    },
    nhlThought: async (parent, {
      _id
    }) => {
      return NhlThought.findOne({
        _id
      });
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return {
        token,
        user
      };
    },
    login: async (parent, {
      email,
      password
    }) => {
      const user = await User.findOne({
        email
      });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return {
        token,
        user
      };
    },
    addThought: async (parent, args, context) => {
      if (context.user) {
        const thought = await Thought.create({
          ...args,
          username: context.user.username
        });

        await User.findByIdAndUpdate({
          _id: context.user._id
        }, {
          $push: {
            thoughts: thought._id
          }
        }, {
          new: true
        });

        return thought;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addMlbThought: async (parent, args, context) => {
      if (context.user) {
        const mlbThought = await MlbThought.create({
          ...args,
          username: context.user.username
        });

        await User.findByIdAndUpdate({
          _id: context.user._id
        }, {
          $push: {
            mlbThoughts: mlbThought._id
          }
        }, {
          new: true
        });

        return mlbThought;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addMlsThought: async (parent, args, context) => {
      if (context.user) {
        const mlsThought = await MlsThought.create({
          ...args,
          username: context.user.username
        });

        await User.findByIdAndUpdate({
          _id: context.user._id
        }, {
          $push: {
            mlsThoughts: mlsThought._id
          }
        }, {
          new: true
        });
        return mlsThought;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addNbaThought: async (parent, args, context) => {
      if (context.user) {
        const nbaThought = await NbaThought.create({
          ...args,
          username: context.user.username
        });

        await User.findByIdAndUpdate({
          _id: context.user._id
        }, {
          $push: {
            nbaThoughts: nbaThought._id
          }
        }, {
          new: true
        });
        return nbaThought;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addNflThought: async (parent, args, context) => {
      if (context.user) {
        const nflThought = await NflThought.create({
          ...args,
          username: context.user.username
        });

        await User.findByIdAndUpdate({
          _id: context.user._id
        }, {
          $push: {
            nflThoughts: nflThought._id
          }
        }, {
          new: true
        });
        return nflThought;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addNhlThought: async (parent, args, context) => {
      if (context.user) {
        const nhlThought = await NhlThought.create({
          ...args,
          username: context.user.username
        });

        await User.findByIdAndUpdate({
          _id: context.user._id
        }, {
          $push: {
            nhlThoughts: nhlThought._id
          }
        }, {
          new: true
        });
        return nhlThought;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addReaction: async (parent, {
      thoughtId,
      reactionBody
    }, context) => {
      if (context.user) {
        const updatedThought = await Thought.findOneAndUpdate({
          _id: thoughtId
        }, {
          $push: {
            reactions: {
              reactionBody,
              username: context.user.username
            }
          }
        }, {
          new: true,
          runValidators: true
        });

        return updatedThought;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addMlbReaction: async (parent, {
      thoughtId,
      reactionBody
    }, context) => {
      if (context.user) {
        const updatedThought = await MlbThought.findOneAndUpdate({
          _id: thoughtId
        }, {
          $push: {
            reactions: {
              reactionBody,
              username: context.user.username
            }
          }
        }, {
          new: true,
          runValidators: true
        });

        return updatedThought;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addMlsReaction: async (parent, {
      thoughtId,
      reactionBody
    }, context) => {
      if (context.user) {
        const updatedThought = await MlsThought.findOneAndUpdate({
          _id: thoughtId
        }, {
          $push: {
            reactions: {
              reactionBody,
              username: context.user.username
            }
          }
        }, {
          new: true,
          runValidators: true
        });

        return updatedThought;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addNbaReaction: async (parent, {
      thoughtId,
      reactionBody
    }, context) => {
      if (context.user) {
        const updatedThought = await NbaThought.findOneAndUpdate({
          _id: thoughtId
        }, {
          $push: {
            reactions: {
              reactionBody,
              username: context.user.username
            }
          }
        }, {
          new: true,
          runValidators: true
        });

        return updatedThought;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addNflReaction: async (parent, {
      thoughtId,
      reactionBody
    }, context) => {
      if (context.user) {
        const updatedThought = await NflThought.findOneAndUpdate({
          _id: thoughtId
        }, {
          $push: {
            reactions: {
              reactionBody,
              username: context.user.username
            }
          }
        }, {
          new: true,
          runValidators: true
        });

        return updatedThought;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addNhlReaction: async (parent, {
      thoughtId,
      reactionBody
    }, context) => {
      if (context.user) {
        const updatedThought = await NhlThought.findOneAndUpdate({
          _id: thoughtId
        }, {
          $push: {
            reactions: {
              reactionBody,
              username: context.user.username
            }
          }
        }, {
          new: true,
          runValidators: true
        });

        return updatedThought;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addFriend: async (parent, {
      friendId
    }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate({
          _id: context.user._id
        }, {
          $addToSet: {
            friends: friendId
          }
        }, {
          new: true
        }).populate('friends');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;