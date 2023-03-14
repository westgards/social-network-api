const { Schema, model } = require("mongoose");

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280, //required range[1-280chars]
      reactions: [{ type: Schema.Types.ObjectId, ref: "thought" }],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `reactionCount` that gets the length of the thought's reation field on query
thoughtSchema.virtual("reactionCount").get(function () {
  return this.thoughts.length;
});

// Initialize our Thought model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;
