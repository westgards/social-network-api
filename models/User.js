const { Schema, model } = require("mongoose");

// Schema to create Post model
const userSchema = new Schema(
  {
    username: String, //unique, required, trimmed
    email: String, //required, unique,Must match a valid email address (look into Mongoose's matching validation)
    createdAt: Date, //default current time, getter method for current timestamp
    thoughts: [{ type: Schema.Types.ObjectId, ref: "Thought" }], //arr of _id values referencing the Thought model
    friends: [{ type: Schema.Types.ObjectId, ref: "User" }], //arr of _id values referencing the User model
    // reactions: [{ type: Schema.Types.ObjectId, ref: "thought" }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that gets the length of the user's friend array field on query
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Initialize our User model
const User = model("user", userSchema);

module.exports = User;
