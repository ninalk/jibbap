const mongoose = require('mongoose');

const votesSchema = mongoose.Schema({
  username: String,
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  },
  stars: { 
    type: Number, 
    min: 1, 
    max: 5
  }
});

// const ingredientSchema = mongoose.Schema({
//   quantity: Number,
//   measurement: {
//     type: String,
//     enum: ['Tbsp', 'tsp', 'Oz', 'fl. Oz', 'c', 'qt', 'pt', 'gal', 'lb']
//   },
//   product: String
// });

// const instructionSchema = mongoose.Schema({
//   stepNumber: Number,
//   stepDescription: String
// });

const recipeSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  },
  cuisine: String,
  recipeName: String,
  description: String,
  cookTime: String,
  ingredients: [String],
  instructions: [String],
  photoUrl: String,
  votes: [votesSchema]
});

module.exports = mongoose.model('Recipe', recipeSchema);