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
}, {
  timestamp: true
});


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
  votes: [votesSchema],
  date: {
    type: String, 
    default: function() {
      const date = new Date();
      const d = date.getDate();
      const m = date.getMonth()+1;
      const y = date.getFullYear();
      const recipeDate = m + '/' + d + '/'+ y;
      return recipeDate;
    } 
  } 
},  {
  timestamp: true
});

module.exports = mongoose.model('Recipe', recipeSchema);